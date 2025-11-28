# 37-COLLABORATION-WEB-TICKETBAY

### DIVE SOPT

### 🎫 모바일 웹 1조 티켓베이 🎫

<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/938f18a9-f5ad-4d41-97f0-72de2029c8cc" />

<img width="3081" height="1748" alt="Image" src="https://github.com/user-attachments/assets/ce1fca33-7e76-4fbf-b142-aceacf2c3466" />

<img width="1024" height="1024" alt="image" src="https://github.com/user-attachments/assets/d7ef380a-b795-48d0-9662-f6417c9f7f27" />

<br/>

### 👥 OUR TEAM

| <img src="https://avatars.githubusercontent.com/u/113702672?v=4" width="200" alt="프로필사진"> | <img src="https://avatars.githubusercontent.com/u/108409327?v=4" width="200" alt="프로필사진"> | <img src="https://avatars.githubusercontent.com/u/151108886?v=4" width="200" alt="프로필사진"> | <img src="https://avatars.githubusercontent.com/u/108279922?v=4" width="200" alt="프로필사진"> |
| :--------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------: |
|                          <div align = "center"><b>🤴 장정훈</b></div>                          |                           <div align = "center"><b>정유진</b></div>                            |                           <div align = "center"><b>민경빈</b></div>                            |                           <div align = "center"><b>박소현</b></div>                            |
|                         [@jeonghoon11](https://github.com/jeonghoon11)                         |                         [@hello-yujin](https://github.com/hello-yujin)                         |                         [@gyeongbibin](https://github.com/gyeongbibin)                         |                           [@Sohyunnnn](https://github.com/Sohyunnnn)                           |

<br/>
<br/>

## 티켓베이 클라이언트팀 기술 스택

| 카테고리                    | 기술 스택                                                                                                                         |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **UI Library**              | ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=for-the-badge)                                |
| **Server State Management** | ![TanStack Query](https://img.shields.io/badge/TanStack%20Query-FF4154?logo=reactquery&logoColor=white&style=for-the-badge)       |
| **Language**                | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge)                 |
| **Build Tool**              | ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge)                                   |
| **Styling**                 | ![Vanilla Extract](https://img.shields.io/badge/Vanilla%20Extract-FF69B4?logo=vanillaextract&logoColor=white&style=for-the-badge) |
| **Package Manager**         | ![Pnpm](https://img.shields.io/badge/Pnpm-F69220?logo=pnpm&logoColor=white&style=for-the-badge)                                   |
| **CI/CD**                   | ![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white&style=for-the-badge)                             |

<br/>

<h3>폴더 구조</h3>

```
|-- 📁 node_modules
|-- 📁 public                          # 정적 파일 (이미지, 아이콘 등)
|-- 📁 src
      |-- 📁 app                       # 애플리케이션 진입점 및 최상위 설정
      |      |-App.tsx
      |      |-main.tsx
      |-- 📁 assets                    # 정적 리소스 (아이콘, SVG 등)
      |      |--📁icons
      |      |--📁svg
      |-- 📁 entities                  # 비즈니스 엔티티 (도메인별 데이터 모델 및 UI)
      |      |--📁ticket               # 티켓 엔티티
      |            |--📁api            # 티켓 관련 API 함수
      |            |--📁queries        # React Query 쿼리 및 키 정의
      |            |--📁types          # 티켓 관련 타입 정의
      |            |--📁ui             # 티켓 관련 UI 컴포넌트
      |-- 📁 pages                     # 페이지 컴포넌트 (라우트별 최상위 컴포넌트)
      |      |--📁home                 # 홈 페이지
      |      |--📁select-ticket        # 티켓 선택 페이지
      |      |     |-select-ticket.tsx # 티켓 선택 페이지 컴포넌트
      |      |--📁ticket-detail        # 티켓 상세 페이지
      |-- 📁 shared                    # 공유 리소스 (프로젝트 전역에서 사용)
      |      |--📁apis                 # API 인스턴스 설정 (axios 등)
      |      |--📁components
      |      |--📁config               # 애플리케이션 설정 파일
      |      |--📁constants
      |      |--📁hooks
      |      |--📁layouts              # 레이아웃 컴포넌트
      |      |--📁query                # React Query 설정 (클라이언트, 프로바이더)
      |      |--📁router
      |      |--📁styles
      |      |--📁types
      |      |--📁utils
      |-- 📁 types
      |-- 📁 widgets                   # 복합 UI 컴포넌트 (페이지별 위젯)
      |      |--📁home                 # 홈 페이지 위젯
      |      |--📁select-ticket        # 티켓 선택 페이지 위젯
      |      |     |--📁components
      |      |     |--📁configs
      |      |     |--📁constants
      |      |     |--📁hooks
      |      |     |--📁types
      |      |     |--📁utils
      |      |--📁ticket-detail        # 티켓 상세 페이지 위젯
|-- .eslintrc.json
|-- .prettierrc
|-- eslint.config.js
|-- package.json
|-- pnpm-lock.yaml
|-- README.md
|-- tsconfig.json
|-- tsconfig.app.json
|-- tsconfig.node.json
|-- vercel.json                        # Vercel 배포 설정
|-- vite.config.ts
```

## TicketBay Convention

## 📭 Git Convention

### Git Flow

- **main branch**  
  `main` 브랜치는 언제나 배포 가능한 안정된 상태만 관리합니다.

- **develop branch**  
  `develop` 브랜치는 통합 브랜치로, 모든 기능 개발이 이곳을 기반으로 진행됩니다.  
  평소에는 `develop`에서 기능별 `Feature branch`를 분기하고, 개발이 완료된 후 다시 `develop`으로 병합합니다.  
  `develop` 브랜치는 항상 안정적인 상태를 유지하며, 배포 가능한 상태가 되면 `main` 브랜치로 병합하여 CI/CD를 통해 배포를 진행합니다.

- **Feature branch**
  `develop` 브랜치에서 분기하여 기능별 개발을 진행하고, 완료 후 다시 `develop` 브랜치로 병합합니다.

<h3>Commit Convention</h3>

```
feat : 새로운 기능 추가
fix : 버그 수정
chore : 빌드 업무, 패키지 매니저, 라이브러리, dependencies 설정
docs : 문서 수정 - ex) [README.md](http://readme.md/)
style : 기능 수정 없는 코드 스타일 변경
refactor : 코드 리팩터링
test : 테스트 코드, 리펙토링 테스트 코드 추가
ci : ci 설정 파일 수정
init: 초기 세팅
code review: 코드 리뷰 반영
```

## 📦 뷰 & 공통 컴포넌트 역할 분배

| 구분                                 | 담당자 |
| ------------------------------------ | ------ |
| **티켓 선택 페이지**                 | 장정훈 |
| 카테고리 아이콘                      | 장정훈 |
| Navigation                           | 장정훈 |
| **티켓 상세 페이지**                 | 정유진 |
| 버튼                                 | 정유진 |
| Tabbar                               | 정유진 |
| **홈 페이지 (상단 헤더, 공지 영역)** | 민경빈 |
| 플로팅 버튼                          | 민경빈 |
| 사이드바                             | 민경빈 |
| **홈 페이지 ( 컨텐츠 영역 )**        | 박소현 |
| Tab 컴포넌트                         | 박소현 |
| Footer                               | 박소현 |

---

## 🔧 API 역할 분배

| 기능            | 담당자 |
| --------------- | ------ |
| 최근 본 티켓    | 박소현 |
| 베스트 인기티켓 | 민경빈 |
| 티켓 목록 조회  | 장정훈 |
| 티켓 상세 조회  | 정유진 |
