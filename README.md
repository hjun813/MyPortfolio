# 👨‍💻 Developer Portfolio (김현준)

React, TypeScript, Tailwind CSS로 제작한 개인 포트폴리오 웹사이트입니다.
반응형 디자인, 다크 모드, 인터랙티브한 UI를 통해 사용자에게 최적의 경험을 제공합니다.

## 🚀 배포 링크
[https://make-future.vercel.app](https://make-future.vercel.app) (예시 링크, 실제 배포 URL로 변경 필요)

## 🛠 기술 스택 (Tech Stack)

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM

## ✨ 주요 기능 (Features)

### 1. 🎨 모던하고 반응형 디자인
- PC, 태블릿, 모바일 등 다양한 디바이스에 최적화된 레이아웃
- `Framer Motion`을 활용한 부드러운 페이지 전환 및 스크롤 애니메이션

### 2. 🌙 다크 모드 지원
- 시스템 설정 감지 및 사용자 토글 기능 제공
- `localStorage`를 이용한 테마 설정 저장
- 전체 페이지 및 컴포넌트에 일관된 다크 모드 스타일 적용

### 3. 📂 프로젝트 갤러리 & 필터링
- 카테고리별(Web, App, Backend 등) 프로젝트 필터링 기능
- 프로젝트 카드 호버 시 인터랙티브 효과
- **Lightbox 기능**: 상세 페이지에서 프로젝트 이미지를 클릭하여 원본 크기로 감상 가능
- **데모 링크 관리**: 서버 만료 등으로 접근 불가능한 데모 링크는 'Server Expired'로 표시하여 사용자 경험 개선

### 4. 📝 상세한 프로젝트 소개
- 프로젝트별 문제 해결 과정(Problem & Solution), 기술 스택, 주요 기능 상세 기술
- 관련 깃허브 및 데모 링크 연결

## 📦 설치 및 실행 방법 (Installation)

이 프로젝트를 로컬에서 실행하려면 다음 단계(Node.js 필요)를 따르세요.

1. **저장소 클론 (Clone Repository)**
   ```bash
   git clone https://github.com/hjun813/MyPortfolio.git
   cd MyPortfolio
   ```

2. **의존성 설치 (Install Dependencies)**
   ```bash
   npm install
   ```

3. **개발 서버 실행 (Run Dev Server)**
   ```bash
   npm run dev
   ```
   브라우저에서 `http://localhost:5173`으로 접속하여 확인합니다.

4. **빌드 (Build)**
   ```bash
   npm run build
   ```

## 📂 프로젝트 구조 (Project Structure)

```
src/
├── assets/          # 이미지 및 정적 파일
├── components/      # 재사용 가능한 컴포넌트 (Layout, Navbar 등)
├── pages/           # 주요 페이지 (Home, About, Projects, Contact, ProjectDetail)
├── constants.tsx    # 프로젝트 데이터 및 상수 관리
├── types.ts         # TypeScript 인터페이스 정의
├── App.tsx          # 라우팅 설정
└── index.css        # Tailwind CSS 및 전역 스타일
```

## 📧 Contact

궁금한 점이나 제안이 있으시다면 언제든 연락주세요!

- **Email**: [이메일 주소 입력]
- **GitHub**: [https://github.com/hjun813](https://github.com/hjun813)
