import { ProfileRepository } from './repositories/ProfileRepository';
import { TechRepository } from './repositories/TechRepository';
import { CaseStudyRepository } from './repositories/CaseStudyRepository';
import type { IProfileRepository, ITechRepository, ICaseStudyRepository } from './repositories';

export interface Container {
  profileRepository: IProfileRepository;
  techRepository: ITechRepository;
  caseStudyRepository: ICaseStudyRepository;
}

let container: Container | null = null;

export function createContainer(): Container {
  return {
    profileRepository: new ProfileRepository(),
    techRepository: new TechRepository(),
    caseStudyRepository: new CaseStudyRepository(),
  };
}

export function getContainer(): Container {
  if (!container) {
    container = createContainer();
  }
  return container;
}

export function setContainer(newContainer: Container): void {
  container = newContainer;
}