import { Project, Experience, Skill } from './types';
import { Code2, Server, Globe, Smartphone, Layout, Database, Cloud, Terminal } from 'lucide-react';
import waveflowImg from './assets/waveflow_main.png';
import waveflow1 from './assets/waveflow_1.png';
import waveflow2 from './assets/waveflow_2.png';
import waveflow3 from './assets/waveflow_3.png';
import carrionImg from './assets/carrion_main.png';
import carrion1 from './assets/carrion_1.png';
import carrion2 from './assets/carrion_2.png';
import carrion3 from './assets/carrion_3.png';
import carrion4 from './assets/carrion_4.png';
import carrion5 from './assets/carrion_5.png';
import makeFutureImg from './assets/makeFuture_main.png';
import makeFuture2 from './assets/makeFuture_2.png';
import makeFuture3 from './assets/makeFuture_3.png';
import makeFuture4 from './assets/makeFuture_4.png';
import makeFuture5 from './assets/makeFuture_5.png';
import React from 'react';

export const HERO_INFO = {
  name: "김현준",
  title: "Full Stack 개발자",
  tagline: "어떤 문제도 포기하지 않고 나만의 방법으로 해결해 나가는 개발자",
  description: "포기하지 않는 끈기로 해답을 찾아내는 풀스택 개발자.",
};

export const SKILLS: Skill[] = [
  { name: 'Java', category: 'Backend', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" width="24" height="24" /> },
  { name: 'TypeScript', category: 'Frontend', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" width="24" height="24" /> },
  { name: 'Python', category: 'Backend', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" width="24" height="24" /> },
  { name: 'C', category: 'Backend', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" width="24" height="24" /> },
  { name: 'C++', category: 'Backend', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" width="24" height="24" /> },
  { name: 'Dart', category: 'Frontend', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" alt="Dart" width="24" height="24" /> },
];

export const SKILLS2: Skill[] = [
  { name: 'React', category: 'Frontend', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="24" height="24" /> },
  { name: 'Spring Boot', category: 'Backend', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot" width="24" height="24" /> },
  { name: 'Flutter', category: 'Frontend', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" width="24" height="24" /> },
  { name: 'MySQL', category: 'Backend', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" width="24" height="24" /> },
  { name: 'AWS', category: 'DevOps', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" width="24" height="24" /> },
  { name: 'Vue.js', category: 'Frontend', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" width="24" height="24" /> },
];

export const TOOLS: Skill[] = [
  { name: 'Slack', category: 'Tools', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" alt="Slack" width="24" height="24" /> },
  { name: 'VS Code', category: 'Tools', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" width="24" height="24" /> },
  { name: 'Gemini', category: 'Tools', icon: <img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" alt="Gemini" width="24" height="24" /> },
  { name: 'ChatGPT', category: 'Tools', icon: <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" alt="ChatGPT" width="24" height="24" /> },
  { name: 'Docker', category: 'DevOps', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" width="24" height="24" /> },
];


export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'NHN Pebble 플랫폼 팀 인턴',
    company: 'NHN',
    period: '2025.08 - 2025.08',
    description: 'Pebble 플랫폼 팀 체험형 인턴, 백오피스 신규 기능 개발',
  },
  {
    id: '2',
    role: '크래프톤 정글 부트캠프',
    company: 'KRAFTON JUNGLE',
    period: '2025.03 - 2025.07',
    description: '개발자 부트캠프 : 알고리즘, 운영체제, 네트워크 교육 및 프로젝트 수행',
  },
  {
    id: '3',
    role: '대학교 졸업',
    company: '중앙대학교',
    period: '2025.02',
    description: '중앙대학교 소프트웨어학과 졸업',
  },
  {
    id: '4',
    role: '병역',
    company: '대한민국 육군',
    period: '2021.01 - 2022.07',
    description: '대한민국 육군 병장 만기 전역, 공병대대 통신병',
  },
  {
    id: '5',
    role: '대학교 입학',
    company: '중앙대학교',
    period: '2019.03',
    description: '중앙대학교 소프트웨어학과 19학번 입학',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'waveflow',
    title: 'WaveFlow',
    description: '음악 제작자들을 위한 협업 및 버전 관리 플랫폼',
    fullDescription: '음악 제작자들을 위한 협업 및 버전 관리 플랫폼',
    thumbnail: waveflowImg,
    category: 'Web',
    techStack: ['React', 'Nest.js', 'TypeScript', 'PostgreSQL', 'AWS'],
    githubUrl: 'https://github.com/Team-Honey-Badgers',
    demoUrl: 'https://vercel.com',
    problem: '음악 제작자들은 아직도 협업을 위해 카카오톡과 텔레그램을 사용하고 있습니다. 이 때문에 버전 관리나 파일 공유가 쉽지 않았습니다.',
    solution: 'WaveFlow은 음악 제작자들을 위한 협업 및 버전 관리 플랫폼으로, 음악 제작자들이 쉽게 파일을 공유하고 버전을 관리할 수 있도록 했습니다.',
    role: '팀장',
    features: ['JWT 인증', 'AWS S3 파일 저장', 'Stem 파일 업로드 및 버전 관리', '자유로운 협업 및 피드백 공간'],
    images: [waveflow1, waveflow2, waveflow3],
    isDemoExpired: true
  },
  {
    id: 'carrion',
    title: 'Carrion',
    description: '운전 중 안전하게 사용가능한 음성 채팅 어플리케이션',
    fullDescription: '운전 중 안전하게 사용가능한 음성 채팅 어플리케이션',
    thumbnail: carrionImg,
    category: 'App',
    techStack: ['Flutter', 'SpringBoot', 'MySQL', 'AWS'],
    githubUrl: 'https://github.com/CAUCarryONYS/CarryON',
    demoUrl: 'https://expo.dev',
    problem: '운전자들의 부주의로 인한 사고가 끊이지 않아 그 원인 중 하나인 핸드폰 사용을 제한하기 위한 음성 채팅 어플리케이션을 제작하였습니다.',
    solution: '운전 중 안전하고 사용이 간편한 음성 채팅 어플리케이션을 제작하였습니다.',
    role: 'Frontend Developer',
    features: ['TTS', 'STT', '운전 모드', '채팅 기능', '실시간 음성 텍스트화'],
    images: [carrion1, carrion2, carrion3, carrion4, carrion5],
    isDemoExpired: true
  },

  {
    id: 'makefuture',
    title: 'MakeFuture',
    description: '취업 준비생을 위한 취업 정보 공유 플랫폼',
    fullDescription: '취업 준비생을 위한 취업 정보 공유 플랫폼',
    thumbnail: makeFutureImg,
    category: 'Side Project',
    techStack: ['Vue.js', 'SpringBoot', 'MySQL', 'AWS'],
    githubUrl: 'https://github.com/hjun813/makeFuture',
    demoUrl: 'https://make-future.vercel.app',
    problem: '취업 준비를 하면서 겪었던 문제를 해결하고자 했습니다. 먼저 내가 원하는 취업 공고를 스크랩 하여 모아 보고 싶었고, 계속해서 취업 시장에 뛰어 들수 있는 원동력이 필요했습니다.',
    solution: 'MakeFuture은 취업 준비생을 위한 취업 정보 공유 플랫폼으로, 다음과 같은 기능을 제공합니다. 취업공고 스크랩, 취업공고 모아보기, 나의 할일, 나의 기록',
    role: 'Fullstack Developer',
    features: ['취업공고 스크랩', '취업공고 모아보기', '나의 할일', '나의 기록'],
    images: [makeFutureImg, makeFuture2, makeFuture3, makeFuture4, makeFuture5]
  },
];