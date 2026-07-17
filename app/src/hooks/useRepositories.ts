'use client';

import { getContainer } from '@/core/container';

export function useRepositories() {
  const container = getContainer();
  return container;
}

export function useProfileRepository() {
  return getContainer().profileRepository;
}

export function useTechRepository() {
  return getContainer().techRepository;
}

export function useCaseStudyRepository() {
  return getContainer().caseStudyRepository;
}