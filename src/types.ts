export interface ScreenshotItem {
  id: string;
  filename: string;
  src: string;
  title: string;
  category: string;
  description: string;
  altText: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight?: boolean;
}

export interface DailyStep {
  stepNumber: number;
  timeLabel: string;
  title: string;
  description: string;
  iconName: string;
}
