const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

function crc32(buf) {
  let crc = -1;
  for (let i = 0; i < buf.length; i++) {
    crc ^= buf[i];
    for (let j = 0; j < 8; j++) {
      crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
    }
  }
  return (crc ^ -1) >>> 0;
}

function makeChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, 'ascii');
  const crcBuf = Buffer.alloc(4);
  const crc = crc32(Buffer.concat([typeBuf, data]));
  crcBuf.writeUInt32BE(crc, 0);
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

function createPng(width, height, getPixel) {
  const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8;
  ihdrData[9] = 6; // RGBA
  ihdrData[10] = 0;
  ihdrData[11] = 0;
  ihdrData[12] = 0;
  const ihdr = makeChunk('IHDR', ihdrData);

  const rawRows = [];
  for (let y = 0; y < height; y++) {
    const row = Buffer.alloc(1 + width * 4);
    row[0] = 0;
    for (let x = 0; x < width; x++) {
      const px = getPixel(x, y);
      const idx = 1 + x * 4;
      row[idx] = px[0];
      row[idx + 1] = px[1];
      row[idx + 2] = px[2];
      row[idx + 3] = px[3] !== undefined ? px[3] : 255;
    }
    rawRows.push(row);
  }

  const idatData = zlib.deflateSync(Buffer.concat(rawRows));
  const idat = makeChunk('IDAT', idatData);
  const iend = makeChunk('IEND', Buffer.alloc(0));
  return Buffer.concat([sig, ihdr, idat, iend]);
}

// Generate high quality mobile screenshots (width 400, height 860 for crisp yet fast file generation)
const W = 400;
const H = 860;

function generateLogo() {
  const size = 300;
  return createPng(size, size, (x, y) => {
    const cx = size / 2;
    const cy = size / 2;
    const dx = x - cx;
    const dy = y - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);

    // Rounded app icon shape
    const rCorner = 50;
    const rx = Math.abs(x - cx);
    const ry = Math.abs(y - cy);
    const insideBox = rx <= cx - 15 && ry <= cy - 15;
    if (!insideBox) return [0, 0, 0, 0];

    // Background gradient: dark emerald #082219 to #0c3124
    let r = 8 + Math.floor((y / size) * 8);
    let g = 32 + Math.floor((y / size) * 16);
    let b = 24 + Math.floor((y / size) * 12);

    // Subtle Islamic pattern grid
    const cellX = (x % 30) - 15;
    const cellY = (y % 30) - 15;
    if (Math.abs(Math.abs(cellX) + Math.abs(cellY) - 15) < 1.2) {
      r += 10; g += 15; b += 12;
    }

    // Concentric gold accent ring
    if (Math.abs(dist - 90) < 3) {
      return [194, 155, 104, 255]; // Gold #c29b68
    }

    // Central Dome / Arch
    const domeY = cy - 20;
    if (y > domeY && y < cy + 70 && Math.abs(dx) < 60) {
      const archTop = domeY + Math.pow(dx / 60, 2) * 40;
      if (y >= archTop) {
        // Inside arch
        r = 16; g = 55; b = 42;
        // Inner gold trim
        if (Math.abs(y - archTop) < 3 || Math.abs(Math.abs(dx) - 58) < 2) {
          return [194, 155, 104, 255];
        }
      }
    }

    // Crescent moon shape
    const moonDist1 = Math.sqrt(Math.pow(x - (cx - 5), 2) + Math.pow(y - (cy - 35), 2));
    const moonDist2 = Math.sqrt(Math.pow(x - (cx + 8), 2) + Math.pow(y - (cy - 38), 2));
    if (moonDist1 < 25 && moonDist2 >= 20) {
      return [212, 173, 120, 255]; // Crescent Gold
    }

    // Star
    const starDist = Math.sqrt(Math.pow(x - (cx + 12), 2) + Math.pow(y - (cy - 35), 2));
    if (starDist < 6) {
      return [212, 173, 120, 255];
    }

    return [r, g, b, 255];
  });
}

function generatePhoneScreen(screenType, title) {
  return createPng(W, H, (x, y) => {
    // Phone UI layout
    // 1. Status bar (0 to 36)
    if (y < 36) {
      return [10, 26, 20, 255];
    }
    // 2. App bar (36 to 90)
    if (y >= 36 && y < 90) {
      // Bottom divider
      if (y === 89) return [28, 70, 54, 255];
      // Subtle header bg
      return [14, 38, 29, 255];
    }

    // 3. Bottom nav bar (H - 70 to H)
    if (y >= H - 70) {
      if (y === H - 70) return [28, 70, 54, 255];
      // Highlight active nav item
      const itemWidth = W / 5;
      let activeIndex = 0; // 0=Home, 1=Quran, 2=Azkar, 3=Qibla, 4=More
      if (screenType === 'home' || screenType === 'prayer') activeIndex = 0;
      else if (screenType === 'quran' || screenType === 'quran-reader') activeIndex = 1;
      else if (screenType === 'azkar') activeIndex = 2;
      else if (screenType === 'qibla') activeIndex = 3;
      else if (screenType === 'more') activeIndex = 4;
      else if (screenType === 'tasbeeh' || screenType === 'zakat') activeIndex = 0;

      const itemX = activeIndex * itemWidth;
      if (x >= itemX + 15 && x <= itemX + itemWidth - 15 && y >= H - 55 && y <= H - 25) {
        return [194, 155, 104, 220]; // Gold pill for active item
      }
      return [11, 28, 22, 255];
    }

    // Main content area
    // Subtle background
    let r = 11;
    let g = 28;
    let b = 22;

    // Islamic diamond background pattern (very subtle)
    const gx = (x % 40) - 20;
    const gy = (y % 40) - 20;
    if (Math.abs(Math.abs(gx) + Math.abs(gy) - 20) < 1) {
      r += 4; g += 8; b += 6;
    }

    // Screen specific layouts
    if (screenType === 'home') {
      // Hero next prayer card (y: 110 to 260)
      if (y >= 110 && y <= 260 && x >= 24 && x <= W - 24) {
        const isBorder = (y === 110 || y === 260 || x === 24 || x === W - 24);
        if (isBorder) return [194, 155, 104, 180];
        // Gradient inside prayer card
        const cardProg = (y - 110) / 150;
        return [22 + Math.floor(cardProg * 10), 65 + Math.floor(cardProg * 15), 50 + Math.floor(cardProg * 12), 255];
      }
      // Prayer times rows (y: 280 to 580)
      for (let i = 0; i < 5; i++) {
        const rowY = 285 + i * 58;
        if (y >= rowY && y <= rowY + 48 && x >= 24 && x <= W - 24) {
          if (i === 2) {
            // Next prayer highlighted
            return [28, 75, 58, 255];
          }
          return [16, 42, 33, 255];
        }
      }
      // Quick tools row (y: 600 to 690)
      if (y >= 600 && y <= 690) {
        const colW = (W - 48 - 36) / 4;
        for (let j = 0; j < 4; j++) {
          const colX = 24 + j * (colW + 12);
          if (x >= colX && x <= colX + colW) {
            return [20, 52, 41, 255];
          }
        }
      }
    } else if (screenType === 'quran') {
      // Search box (y: 105 to 145)
      if (y >= 105 && y <= 145 && x >= 24 && x <= W - 24) {
        return [18, 46, 36, 255];
      }
      // Surah list items (y: 160 to 760)
      for (let i = 0; i < 7; i++) {
        const itemY = 160 + i * 78;
        if (y >= itemY && y <= itemY + 68 && x >= 24 && x <= W - 24) {
          // Surah number circle
          const circX = W - 58;
          const circY = itemY + 34;
          const dCirc = Math.sqrt(Math.pow(x - circX, 2) + Math.pow(y - circY, 2));
          if (dCirc <= 18) {
            return [194, 155, 104, 255];
          }
          return [16, 44, 34, 255];
        }
      }
    } else if (screenType === 'quran-reader') {
      // Quran page frame
      if (y >= 110 && y <= 760 && x >= 20 && x <= W - 20) {
        // Decorative border
        if (y === 110 || y === 760 || x === 20 || x === W - 20) return [194, 155, 104, 200];
        if (y === 113 || y === 757 || x === 23 || x === W - 23) return [194, 155, 104, 120];

        // Surah header banner
        if (y >= 125 && y <= 175 && x >= 35 && x <= W - 35) {
          return [24, 68, 52, 255];
        }
        // Bismillah frame
        if (y >= 190 && y <= 230 && x >= 60 && x <= W - 60) {
          return [20, 55, 43, 255];
        }
        // Reading lines
        for (let l = 0; l < 11; l++) {
          const lineY = 260 + l * 42;
          if (y >= lineY && y <= lineY + 6 && x >= 40 && x <= W - 40) {
            return [230, 222, 208, 140];
          }
        }
        return [13, 34, 27, 255];
      }
    } else if (screenType === 'azkar') {
      // Category pills (y: 105 to 145)
      for (let c = 0; c < 3; c++) {
        const pillX = 24 + c * 115;
        if (y >= 105 && y <= 145 && x >= pillX && x <= pillX + 105) {
          if (c === 0) return [194, 155, 104, 255];
          return [18, 48, 38, 255];
        }
      }
      // Azkar cards
      for (let i = 0; i < 4; i++) {
        const zCardY = 165 + i * 135;
        if (y >= zCardY && y <= zCardY + 120 && x >= 24 && x <= W - 24) {
          // Counter button in bottom-left of card
          if (y >= zCardY + 70 && y <= zCardY + 110 && x >= 36 && x <= 110) {
            return [194, 155, 104, 255]; // Gold count button
          }
          return [18, 46, 36, 255];
        }
      }
    } else if (screenType === 'qibla') {
      // Compass Dial
      const ccx = W / 2;
      const ccy = 380;
      const cdist = Math.sqrt(Math.pow(x - ccx, 2) + Math.pow(y - ccy, 2));

      // Outer compass ring
      if (Math.abs(cdist - 140) < 4) return [194, 155, 104, 255];
      if (Math.abs(cdist - 120) < 2) return [35, 90, 70, 255];

      // Needle (pointing towards Kaaba angle ~35 degrees)
      const rad = (35 * Math.PI) / 180;
      const nx = ccx + Math.sin(rad) * (cdist - 20);
      const ny = ccy - Math.cos(rad) * (cdist - 20);
      if (cdist < 110) {
        const dot = (x - ccx) * Math.sin(rad) - (y - ccy) * Math.cos(rad);
        if (dot > 0 && Math.abs((x - ccx) * Math.cos(rad) + (y - ccy) * Math.sin(rad)) < 8) {
          return [212, 173, 120, 255]; // Gold needle
        }
      }

      // Compass Center Hub
      if (cdist < 14) return [194, 155, 104, 255];

      // Degree badge below
      if (y >= 560 && y <= 620 && x >= W / 2 - 80 && x <= W / 2 + 80) {
        return [22, 58, 45, 255];
      }
    } else if (screenType === 'tasbeeh') {
      // Big circular counter
      const tcx = W / 2;
      const tcy = 340;
      const tdist = Math.sqrt(Math.pow(x - tcx, 2) + Math.pow(y - tcy, 2));

      // Bead progress track
      if (Math.abs(tdist - 125) < 8) return [25, 66, 52, 255];
      if (Math.abs(tdist - 125) < 4) return [194, 155, 104, 200];

      // Center count plate
      if (tdist < 95) return [16, 44, 34, 255];

      // Dhikr selector card (y: 500 to 570)
      if (y >= 500 && y <= 570 && x >= 30 && x <= W - 30) {
        return [20, 52, 41, 255];
      }

      // Large interactive count button (y: 600 to 680)
      if (y >= 600 && y <= 680 && x >= 60 && x <= W - 60) {
        return [194, 155, 104, 255]; // Gold tap button
      }
    } else if (screenType === 'zakat') {
      // Nisab alert banner (y: 110 to 180)
      if (y >= 110 && y <= 180 && x >= 24 && x <= W - 24) {
        return [25, 68, 54, 255];
      }
      // Input rows (Gold, Silver, Cash, Debts)
      for (let k = 0; k < 4; k++) {
        const inpY = 205 + k * 72;
        if (y >= inpY && y <= inpY + 56 && x >= 24 && x <= W - 24) {
          return [16, 44, 34, 255];
        }
      }
      // Total Zakat output box (y: 530 to 640)
      if (y >= 530 && y <= 640 && x >= 24 && x <= W - 24) {
        return [20, 55, 43, 255];
      }
    } else if (screenType === 'prayer') {
      // Monthly calendar or prayer list
      for (let p = 0; p < 6; p++) {
        const pY = 120 + p * 80;
        if (y >= pY && y <= pY + 65 && x >= 24 && x <= W - 24) {
          // Switch toggle
          if (x >= 40 && x <= 85 && y >= pY + 18 && y <= pY + 47) {
            return [194, 155, 104, 255];
          }
          return [18, 48, 37, 255];
        }
      }
    } else if (screenType === 'more') {
      // Replicate the actual uploaded more screen
      // Top header "الإعدادات"
      // Prayer offsets cards
      for (let m = 0; m < 4; m++) {
        const mY = 110 + m * 55;
        if (y >= mY && y <= mY + 44 && x >= 24 && x <= W - 24) {
          return [18, 46, 36, 255];
        }
      }
      // Section header "المظهر والعرض"
      // Dark mode toggle card (y: 370 to 440)
      if (y >= 370 && y <= 440 && x >= 24 && x <= W - 24) {
        return [20, 50, 40, 255];
      }
      // Theme selection card (y: 460 to 520)
      if (y >= 460 && y <= 520 && x >= 24 && x <= W - 24) {
        return [20, 50, 40, 255];
      }
      // Time format (24 / 12) (y: 540 to 610)
      if (y >= 540 && y <= 610 && x >= 24 && x <= W - 24) {
        return [20, 50, 40, 255];
      }
    }

    return [r, g, b, 255];
  });
}

console.log('Generating logo.png...');
fs.writeFileSync('public/logo.png', generateLogo());

const screens = [
  { name: 'home', title: 'الرئيسية' },
  { name: 'quran', title: 'فهرس القرآن الكريم' },
  { name: 'quran-reader', title: 'المصحف الشريف' },
  { name: 'azkar', title: 'الأذكار اليومية' },
  { name: 'qibla', title: 'اتجاه القبلة' },
  { name: 'more', title: 'الإعدادات والمزيد' },
  { name: 'zakat', title: 'حاسبة الزكاة' },
  { name: 'tasbeeh', title: 'التسبيح الإلكتروني' },
  { name: 'prayer', title: 'مواقيت الصلاة' },
];

for (const s of screens) {
  console.log(`Generating ${s.name}.png...`);
  const buf = generatePhoneScreen(s.name, s.title);
  fs.writeFileSync(`public/screenshots/${s.name}.png`, buf);
}

console.log('All assets generated successfully!');
