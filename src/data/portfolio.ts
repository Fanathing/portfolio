// ============================================================
// 포트폴리오 데이터 파일
// 텍스트/링크/기술스택/프로젝트/경력 데이터를 여기서 관리합니다.
// ============================================================

export const LINKS = {
  github: "https://github.com/Fanathing",
  velog: "https://velog.io/@mybonnie/posts",
  naverBlog: "https://blog.naver.com/mmybonnie",
  email: "mmybonnie@naver.com",
  decarte: "https://decarte.cloud",
  resume: "/resume.pdf", // TODO: public/resume.pdf 파일을 넣어주세요
};

// ============================================================
// 기술 스택
// icon:        public/icons/ 에 파일을 넣으면 로컬 이미지 사용
// cdnFallback: 로컬 파일 없을 때 자동으로 사용되는 CDN 아이콘
//              (Simple Icons CDN: https://simpleicons.org)
// TODO: public/icons/ 에 SVG 파일을 넣으면 CDN 대신 로컬 이미지가 사용됩니다
// ============================================================
export type TechItem = {
  name: string;
  icon: string | null;
  cdnFallback: string | null;
  rotate: number;
};

export const TECH_STACK: TechItem[] = [
  { name: "Next.js",     icon: "/icons/nextjs.svg",      cdnFallback: "https://cdn.simpleicons.org/nextdotjs/000000",     rotate: -3 },
  { name: "React",       icon: "/icons/react.svg",        cdnFallback: "https://cdn.simpleicons.org/react/61DAFB",         rotate: 2  },
  { name: "JavaScript",  icon: "/icons/javascript.svg",   cdnFallback: "https://cdn.simpleicons.org/javascript/F7DF1E",    rotate: -1 },
  { name: "TypeScript",  icon: "/icons/typescript.svg",   cdnFallback: "https://cdn.simpleicons.org/typescript/3178C6",    rotate: 3  },
  { name: "Node.js",     icon: "/icons/nodejs.svg",       cdnFallback: "https://cdn.simpleicons.org/nodedotjs/339933",     rotate: 4  },
  { name: "Sequelize",   icon: "/icons/sequelize.svg",    cdnFallback: "https://cdn.simpleicons.org/sequelize/52B0E7",     rotate: -2 },
  { name: "MySQL",       icon: "/icons/mysql.svg",        cdnFallback: "https://cdn.simpleicons.org/mysql/4479A1",         rotate: 1  },
  { name: "TailwindCSS", icon: "/icons/tailwind.svg",     cdnFallback: "https://cdn.simpleicons.org/tailwindcss/06B6D4",   rotate: -3 },
  { name: "AWS",         icon: "/icons/aws.svg",           cdnFallback: "https://cdn.simpleicons.org/amazonaws/FF9900",    rotate: 2  },
  { name: "Blockchain",  icon: null,                      cdnFallback: null,                                               rotate: -1 },
  { name: "notion.so",   icon: "/icons/notion.svg",       cdnFallback: "https://cdn.simpleicons.org/notion/000000",       rotate: 3  },
];

// ============================================================
// 프로젝트
// coverImage: public/projects/ 디렉터리 기준 경로
// TODO: public/projects/ 에 썸네일 이미지를 넣어주세요
// siteUrl / githubUrl / notionUrl: null이면 "준비중" 처리됩니다
// ============================================================
export type Project = {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  role: string;
  tags: string[];
  techStack: string[];
  achievement: string;
  coverImage: string;
  siteUrl: string | null;
  githubUrl: string | null;
  notionUrl: string | null;
  badge1: { text: string; style: string };
  badge2: { text: string; style: string };
  imageLeft: boolean; // true: 이미지가 왼쪽, false: 이미지가 오른쪽
};

export const PROJECTS: Project[] = [
  {
    id: "decarte",
    title: "DE·CARTE",
    subtitle: "외부 공공데이터 기반 AI 활용 맞춤형 지원사업 정보 플랫폼",
    period: "2026.01 - 2026.03",
    role: "프론트엔드, 백엔드, 스마트 컨트랙트 개발 및 기획·설계·UI/UX 전반 담당",
    tags: ["Next.js", "MySQL", "AWS", "TypeScript", "Blockchain", "AI"],
    techStack: ["Next.js", "TypeScript", "Sequelize", "MySQL", "AWS", "TailwindCSS", "Blockchain", "Node.js"],
    achievement:
      "AI 기반 공고 요약 및 HWPX 서류 자동기입 기능을 구현하여 신청 과정의 반복 작업을 줄였습니다. 블록체인 기반 신청 이력 앵커링 시스템을 설계하여 데이터 위변조를 방지했습니다.",
    coverImage: "/projects/decarte-cover.jpg", // TODO: 실제 이미지 파일 넣기
    siteUrl: "https://decarte.cloud",
    githubUrl: null, // TODO: 실제 GitHub 리포지터리 URL 넣기
    notionUrl: null,
    badge1: { text: "개인 프로젝트", style: "bg-secondary-container text-on-secondary-container rotate-[-3deg]" },
    badge2: { text: "AI & Blockchain", style: "bg-primary text-on-primary rotate-[2deg]" },
    imageLeft: true,
  },
  {
    id: "xink",
    title: "X-ink (씽크)",
    subtitle: "몇 개로도 고정되지 않는 모든 형태의 일과 사람을 연결하는 플랫폼",
    period: "2025.12 - 2025.12",
    role: "백엔드(Node.js, Express, Sequelize) 담당",
    tags: ["React", "Node.js", "Express", "MySQL", "JWT"],
    techStack: ["React", "JavaScript", "Node.js", "MySQL", "AWS", "notion.so"],
    achievement:
      "구직자와 기업 간 채용 과정을 연결하는 웹 플랫폼을 개발했습니다. 공고 조회·지원·지원자 관리를 통합 구현하고, JWT 기반 인증과 사용자 권한 분리, 파일 업로드 기능을 적용했습니다.",
    coverImage: "/projects/xink-cover.jpg", // TODO: 실제 이미지 파일 넣기
    siteUrl: null,
    githubUrl: null, // TODO: 실제 GitHub 리포지터리 URL 넣기
    notionUrl: null,
    badge1: { text: "팀 프로젝트", style: "bg-secondary-container text-on-secondary-container rotate-[-3deg]" },
    badge2: { text: "Web Platform", style: "bg-primary text-on-primary rotate-[2deg]" },
    imageLeft: false,
  },
];

// ============================================================
// 경력 / 교육
// ============================================================
export type ExperienceItem = {
  date: string;
  title: string;
  desc: string;
  tags: string[];
  color: string;
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    date: "2025.08 - 2026.03",
    title: "차세대 블록체인 1기 풀스택 웹개발자 과정",
    desc: "Next.js(App Router) 기반 SSR 프론트엔드, Node.js/Sequelize REST API, MySQL 스키마 설계, AWS 인프라 구성, 공공 데이터 API 연동, Git 협업 환경 구축을 학습하고 실습했습니다.",
    tags: ["교육", "풀스택", "블록체인"],
    color: "border-primary",
  },
  {
    date: "2022.09 - 2023.05",
    title: "넥스트딜리버리",
    desc: "도심 내 배송 운영 및 주문 처리 업무를 수행했습니다.",
    tags: ["비개발", "운영"],
    color: "border-secondary-container",
  },
  {
    date: "2022.02 - 2022.08",
    title: "(주)케이에스한국고용정보",
    desc: "쿠팡 CS 업무, 고객 문의 대응 및 서비스 이슈 해결 업무를 수행하였습니다.",
    tags: ["비개발", "CS"],
    color: "border-on-surface-variant",
  },
  {
    date: "2020.10 - 2022.01",
    title: "넥스트딜리버리",
    desc: "도심 내 배송 운영 및 주문 처리 업무를 수행했습니다.",
    tags: ["비개발", "운영"],
    color: "border-on-surface-variant",
  },
  {
    date: "2016.03 - 2020.08",
    title: "한국건드릴",
    desc: "조립부, 가공부, 톱사업부 업무를 담당했습니다.",
    tags: ["비개발", "생산"],
    color: "border-slate-400",
  },
];

// ============================================================
// 개발 철학 키워드
// ============================================================
export const PHILOSOPHY_TAGS = [
  { text: "사용자 중심",   style: "bg-primary text-white rotate-[3deg]" },
  { text: "끝까지 구현",   style: "border-2 border-secondary-container text-secondary-container rotate-[-2deg]" },
  { text: "프론트엔드 강점", style: "bg-secondary-container text-on-secondary-container rotate-[4deg]" },
  { text: "풀스택 경험",   style: "border-2 border-white text-white rotate-[-1deg]" },
  { text: "블록체인 활용", style: "bg-surface-container-highest/20 text-white rotate-[-3deg]" },
];
