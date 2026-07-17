import type { TechCategory, SkillCategory } from '../types';

export interface ITechRepository {
  getStack(): TechCategory[];
  getSkills(): SkillCategory[];
}