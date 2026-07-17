import type { SocialLink, ContactChannel, Stat, NavLink } from '../types';

export interface IProfileRepository {
  getSocials(): SocialLink[];
  getChannels(): ContactChannel[];
  getStats(): Stat[];
  getNavLinks(): NavLink[];
  getEmail(): string;
}