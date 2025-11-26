import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  thumbnail: string;
  category: 'Web' | 'App' | 'Backend' | 'Side Project';
  techStack: string[];
  githubUrl: string;
  demoUrl: string;
  problem: string;
  solution: string;
  role: string;
  features: string[];
  images?: string[];
  isDemoExpired?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'DevOps' | 'Tools';
  icon?: React.ReactNode;
}