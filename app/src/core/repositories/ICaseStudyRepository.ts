import type { Screenshot, TechItem, Feature, Stat } from '../types';

export interface ICaseStudyRepository {
  getScreenshots(): Screenshot[];
  getTechBadges(): TechItem[];
  getFeatures(): Feature[];
  getStats(): Stat[];
  getFloatCards(): { icon: React.ReactNode; label: string; className: string }[];
  getApkUrl(): string;
  getGithubUrl(): string;
}