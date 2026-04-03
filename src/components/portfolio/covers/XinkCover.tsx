/**
 * X-ink 프로젝트 대표 커버 컴포넌트
 *
 * public/projects/xink-cover.jpg 를 넣으면 이 컴포넌트 대신 사진이 표시됩니다.
 * 로고 원본: 체인링크 X 마크 (파란 계열) + bold "ink" 텍스트
 *
 * [아이콘 구현 방식]
 * clipPath 좌표계 이슈를 피해 모든 요소를 절대 SVG 좌표로 처리.
 * - Link2 (연한 파랑, 뒤): rotate(-45, cx, cy)
 * - 배경색 채운 직사각형: rotate(45, cx, cy) → Link2를 link1 뒤로 숨기는 효과
 * - Link1 (짙은 파랑, 앞): rotate(45, cx, cy), fill="none"
 */

// 아이콘 중심 좌표 및 치수
const CX = 500;   // 아이콘 중심 X
const CY = 338;   // 아이콘 중심 Y
const W  = 36;    // 링크 너비
const H  = 84;    // 링크 높이
const R  = 18;    // 모서리 반지름
const SW = 13;    // 스트로크 두께

// 중심 기준 rect 좌상단 좌표
const RX = CX - W / 2;  // 482
const RY = CY - H / 2;  // 296

export default function XinkCover() {
  return (
    <svg
      viewBox="0 0 1200 675"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label="X-ink 프로젝트 대표 이미지"
    >
      <defs>
        <linearGradient id="xi-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#edf2ff" />
          <stop offset="50%"  stopColor="#f2f6ff" />
          <stop offset="100%" stopColor="#eef4ff" />
        </linearGradient>
        <radialGradient id="xi-glow" cx="43%" cy="50%" r="32%">
          <stop offset="0%"   stopColor="#c7d8ff" stopOpacity="0.30" />
          <stop offset="100%" stopColor="#edf2ff" stopOpacity="0"    />
        </radialGradient>
      </defs>

      {/* ── 배경 ──────────────────────────────────────── */}
      <rect width="1200" height="675" fill="url(#xi-bg)" />
      <rect width="1200" height="675" fill="url(#xi-glow)" />

      {/* ── 배경 수평 가이드선 ───────────────────────── */}
      {[135, 270, 405, 540].map((y) => (
        <line
          key={y}
          x1="0" y1={y} x2="1200" y2={y}
          stroke="#b8ccee" strokeWidth="0.45" opacity="0.35"
        />
      ))}

      {/* ── 좌측 노드 클러스터 (구직자) ──────────────── */}
      <g opacity="0.20" fill="#2563eb" stroke="#2563eb">
        <circle cx="128" cy="238" r="5"   />
        <circle cx="170" cy="196" r="3.5" />
        <circle cx="92"  cy="284" r="3"   />
        <circle cx="185" cy="312" r="2.5" />
        <circle cx="144" cy="344" r="4"   />
        <circle cx="62"  cy="330" r="2"   />
        <line x1="128" y1="238" x2="170" y2="196" strokeWidth="0.9" />
        <line x1="128" y1="238" x2="92"  y2="284" strokeWidth="0.9" />
        <line x1="128" y1="238" x2="144" y2="344" strokeWidth="0.9" />
        <line x1="170" y1="196" x2="185" y2="312" strokeWidth="0.7" />
        <line x1="92"  y1="284" x2="185" y2="312" strokeWidth="0.7" />
        <line x1="92"  y1="284" x2="62"  y2="330" strokeWidth="0.6" />
      </g>

      {/* ── 우측 노드 클러스터 (기업) ─────────────────── */}
      <g opacity="0.20" fill="#2563eb" stroke="#2563eb">
        <circle cx="1072" cy="308" r="5"   />
        <circle cx="1032" cy="262" r="3.5" />
        <circle cx="1108" cy="352" r="3"   />
        <circle cx="1018" cy="382" r="2.5" />
        <circle cx="1058" cy="432" r="4"   />
        <circle cx="1138" cy="278" r="2"   />
        <line x1="1072" y1="308" x2="1032" y2="262" strokeWidth="0.9" />
        <line x1="1072" y1="308" x2="1108" y2="352" strokeWidth="0.9" />
        <line x1="1072" y1="308" x2="1058" y2="432" strokeWidth="0.9" />
        <line x1="1032" y1="262" x2="1018" y2="382" strokeWidth="0.7" />
        <line x1="1108" y1="352" x2="1018" y2="382" strokeWidth="0.7" />
        <line x1="1032" y1="262" x2="1138" y2="278" strokeWidth="0.6" />
      </g>

      {/* ── 연결 흐름선 ───────────────────────────────── */}
      <path d="M 220,282 C 380,205 820,205 980,282"
        fill="none" stroke="#3b6fdb" strokeWidth="1"   opacity="0.07" strokeDasharray="7,10" />
      <path d="M 220,338 C 390,275 810,275 980,338"
        fill="none" stroke="#3b6fdb" strokeWidth="1.5" opacity="0.09" strokeDasharray="7,10" />
      <path d="M 220,395 C 380,462 820,462 980,395"
        fill="none" stroke="#3b6fdb" strokeWidth="1"   opacity="0.07" strokeDasharray="7,10" />

      {/* ── UI 카드 조각 (좌하단) ─────────────────────── */}
      <g opacity="0.38">
        <rect x="50" y="440" width="124" height="76" rx="7"
          fill="white" stroke="#a8c0e8" strokeWidth="1" />
        <rect x="65" y="455" width="28" height="28" rx="4" fill="#d4e2f8" />
        <line x1="104" y1="462" x2="162" y2="462" stroke="#c0d2ea" strokeWidth="1.2" />
        <line x1="104" y1="472" x2="155" y2="472" stroke="#c8d8ee" strokeWidth="1"   />
        <line x1="65"  y1="494" x2="162" y2="494" stroke="#d4e4f4" strokeWidth="0.8" />
      </g>

      {/* ── UI 카드 조각 (우상단) ─────────────────────── */}
      <g opacity="0.38">
        <rect x="1028" y="152" width="124" height="76" rx="7"
          fill="white" stroke="#a8c0e8" strokeWidth="1" />
        <rect x="1043" y="167" width="28" height="28" rx="4" fill="#d4e2f8" />
        <line x1="1082" y1="174" x2="1140" y2="174" stroke="#c0d2ea" strokeWidth="1.2" />
        <line x1="1082" y1="184" x2="1133" y2="184" stroke="#c8d8ee" strokeWidth="1"   />
        <line x1="1043" y1="206" x2="1140" y2="206" stroke="#d4e4f4" strokeWidth="0.8" />
      </g>

      {/* ════════════════════════════════════════════════
          X-ink 로고마크
          모든 요소를 절대 SVG 좌표 + 명시적 rotation center로 처리.
          (중첩 transform / clipPath 좌표계 이슈 방지)
         ════════════════════════════════════════════════ */}

      {/* 1) Link2 - 연한 파랑, rotate(-45°), 뒤 레이어 */}
      <rect
        x={RX} y={RY} width={W} height={H} rx={R}
        fill="none"
        stroke="#5b9cf6"
        strokeWidth={SW}
        transform={`rotate(-45, ${CX}, ${CY})`}
      />

      {/* 2) 배경색 채운 직사각형 - Link1과 동일 위치/형태
             배경 그라디언트 근사값 #f0f5ff 로 채워
             Link2 가 Link1 뒤로 사라지는 효과를 만든다 */}
      <rect
        x={RX} y={RY} width={W} height={H} rx={R}
        fill="#f0f5ff"
        stroke="#f0f5ff"
        strokeWidth={SW + 2}
        transform={`rotate(45, ${CX}, ${CY})`}
      />

      {/* 3) Link1 - 짙은 파랑, rotate(45°), 앞 레이어 */}
      <rect
        x={RX} y={RY} width={W} height={H} rx={R}
        fill="none"
        stroke="#1a56db"
        strokeWidth={SW}
        transform={`rotate(45, ${CX}, ${CY})`}
      />

      {/* ── "ink" 텍스트 ──────────────────────────────── */}
      {/* 원본 로고: 로고마크 오른쪽에 bold 다크 "ink" */}
      <text
        x="590" y={CY}
        fontFamily="'Be Vietnam Pro','Pretendard','Inter',sans-serif"
        fontWeight="800"
        fontSize="96"
        fill="#1a2a42"
        textAnchor="start"
        dominantBaseline="middle"
      >
        ink
      </text>

      {/* ── 구분선 + 서브타이틀 ───────────────────────── */}
      <line x1="450" y1="416" x2="840" y2="416"
        stroke="#b8ceea" strokeWidth="0.8" opacity="0.85" />
      <text
        x="645" y="450"
        fontFamily="'Be Vietnam Pro','Pretendard',sans-serif"
        fontWeight="400" fontSize="16" letterSpacing="3"
        fill="#5a7299" textAnchor="middle"
      >
        일과 사람을 연결하는 채용 플랫폼
      </text>

      {/* ── 기간 텍스트 ───────────────────────────────── */}
      <text
        x="645" y="252"
        fontFamily="'Be Vietnam Pro',sans-serif"
        fontWeight="400" fontSize="12" letterSpacing="4"
        fill="#96b0cc" textAnchor="middle"
      >
        2025.12
      </text>
    </svg>
  );
}
