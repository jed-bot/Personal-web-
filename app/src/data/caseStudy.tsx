'use client';

import type { Screenshot, TechItem, Feature, Stat } from '@/core/types';
import { icons } from '@/components/shared/TechIcons';
import { SparkleIcon, BookIcon, BrainIcon, WifiIcon, CrosshairIcon, BrainSmallIcon } from '@/icons/ui';

export const screenshots: Screenshot[] = [
  { src: '/Screenshot_1.png', alt: 'Lutong Bahay - Home Screen' },
  { src: '/Screenshot_2.jpg', alt: 'Lutong Bahay - Recipe View' },
  { src: '/Screenshot_3.jpg', alt: 'Lutong Bahay - Camera Scan' },
  { src: '/Screenshot_4.jpg', alt: 'Lutong Bahay - Results' },
];

export const techBadges: TechItem[] = [
  { name: 'React Native', icon: icons.react },
  { name: 'Node.js', icon: icons.nodejs },
  { name: 'MongoDB', icon: icons.mongodb },
  { name: 'YOLO', icon: icons.yolo },
  { name: 'TensorFlow', icon: icons.tensorflow },
  { name: 'Cosine Similarity', icon: <CrosshairIcon /> },
];

export const features: Feature[] = [
  {
    title: 'Instant Recipe Recognition',
    desc: 'Point your camera at any ingredient and get recipe suggestions in real-time.',
    icon: <SparkleIcon />,
  },
  {
    title: 'Filipino Cuisine Database',
    desc: 'Hundreds of traditional and modern Filipino recipes with step-by-step instructions.',
    icon: <BookIcon />,
  },
  {
    title: 'Smart Meal Planning',
    desc: 'AI-powered meal suggestions based on available ingredients and dietary preferences.',
    icon: <BrainIcon />,
  },
  {
    title: 'Real-Time Image Processing',
    desc: 'Server-side YOLO model processes camera input and returns results in under 50ms.',
    icon: <WifiIcon />,
  },
];

export const caseStudyStats: Stat[] = [
  { num: 100, suffix: '+', label: 'Recipes' },
  { num: 92, suffix: '%', label: 'Accuracy' },
  { num: 50, suffix: 'ms', label: 'Response' },
  { num: 4.8, suffix: '', label: 'Rating' },
];

export const floatCards = [
  { icon: <CrosshairIcon />, label: 'AI Recognition', className: 'float-1' },
  { icon: <BrainSmallIcon />, label: 'Smart Matching', className: 'float-2' },
];

export const APK_URL = 'https://drive.google.com/file/d/1AIKitbd8IKUUQ9kqYOtPaoyRT2bZ3wGJ/view?usp=drive_link';
export const GITHUB_URL = 'https://github.com/jed-bot-1';