export interface ResumeLink {
  label: string;
  subLabel: string;
  url: string;
  lang: 'zh' | 'en';
}

export interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}