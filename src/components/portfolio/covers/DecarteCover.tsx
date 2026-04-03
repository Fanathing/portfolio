/**
 * DE·CARTE 프로젝트 대표 커버 컴포넌트
 *
 * public/projects/decarte-cover.jpg 를 넣으면 이 컴포넌트 대신 사진이 표시됩니다.
 * 로고 원본: DE·CARTE (얇은 서체 + 토포그래피 형상)
 */
export default function DecarteCover() {
  return (
    <svg
      viewBox="0 0 1200 675"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label="DE·CARTE 프로젝트 대표 이미지"
    >
      <defs>
        {/* 도트 그리드 패턴 */}
        <pattern id="dc-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
          <circle cx="16" cy="16" r="0.9" fill="#b0bfcf" />
        </pattern>
        {/* 중앙 페이드 */}
        <radialGradient id="dc-fade" cx="50%" cy="48%" r="52%">
          <stop offset="0%" stopColor="#f0f4fa" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#f0f4fa" stopOpacity="0" />
        </radialGradient>
        {/* 가장자리 비네트 */}
        <radialGradient id="dc-vignette" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#e8eef6" stopOpacity="0" />
          <stop offset="100%" stopColor="#dce4ef" stopOpacity="0.45" />
        </radialGradient>
      </defs>

      {/* ── 배경 ─────────────────────────────────────── */}
      <rect width="1200" height="675" fill="#f3f6fb" />
      <rect width="1200" height="675" fill="url(#dc-dots)" opacity="0.75" />
      <rect width="1200" height="675" fill="url(#dc-vignette)" />

      {/* ── 토포그래피 등고선 (로고 뒤) ─────────────── */}
      {/* 원본 로고의 유기적 윤곽 형태를 SVG 곡선으로 재현 */}
      <g transform="translate(600, 315)" opacity="1">
        {[
          { d: "M-265,-78 C-222,-158,-82,-192,62,-174 C206,-156,308,-90,322,-6 C336,78,266,146,148,168 C30,190,-118,178,-224,122 C-330,66,-308,-2,-265,-78 Z", op: 0.11 },
          { d: "M-225,-60 C-186,-132,-58,-164,66,-146 C190,-128,278,-68,290,-2 C302,64,236,122,128,144 C20,166,-100,154,-196,102 C-292,50,-264,-2,-225,-60 Z", op: 0.13 },
          { d: "M-182,-42 C-148,-104,-32,-134,64,-118 C160,-102,238,-50,248,6 C258,62,196,108,100,128 C4,148,-78,136,-164,88 C-250,40,-216,10,-182,-42 Z", op: 0.16 },
          { d: "M-138,-24 C-108,-74,-10,-100,60,-86 C130,-72,196,-28,204,20 C212,68,158,100,76,116 C-6,132,-62,120,-130,78 C-198,36,-168,18,-138,-24 Z", op: 0.19 },
          { d: "M-94,-8 C-70,-48,8,-68,56,-56 C104,-44,156,-8,162,30 C168,68,120,90,54,104 C-12,118,-46,106,-96,70 C-146,34,-118,28,-94,-8 Z", op: 0.22 },
        ].map((c, i) => (
          <path
            key={i}
            d={c.d}
            fill="none"
            stroke="#5e8db8"
            strokeWidth="1.4"
            opacity={c.op}
          />
        ))}
        {/* 중심 강조점 (로고 원본의 · 위치) */}
        <circle cx="4" cy="18" r="6" fill="#6090b8" opacity="0.4" />
        <circle cx="4" cy="18" r="2.8" fill="#3d6e9e" opacity="0.6" />
      </g>

      {/* ── 좌우 수평 구조선 ─────────────────────────── */}
      <line x1="210" y1="224" x2="990" y2="224" stroke="#c0cedf" strokeWidth="0.6" opacity="0.55" />
      <line x1="210" y1="472" x2="990" y2="472" stroke="#c0cedf" strokeWidth="0.6" opacity="0.55" />

      {/* ── 좌상단 데이터 노드 ────────────────────────── */}
      <g opacity="0.28">
        <circle cx="95"  cy="112" r="4"   fill="#6090b8" />
        <circle cx="140" cy="88"  r="3"   fill="#6090b8" />
        <circle cx="72"  cy="150" r="2.5" fill="#90b0cc" />
        <circle cx="152" cy="138" r="2"   fill="#6090b8" />
        <line x1="95"  y1="112" x2="140" y2="88"  stroke="#6090b8" strokeWidth="1"   />
        <line x1="95"  y1="112" x2="72"  y2="150" stroke="#90b0cc"  strokeWidth="1"   />
        <line x1="95"  y1="112" x2="152" y2="138" stroke="#6090b8" strokeWidth="0.8" />
        <line x1="140" y1="88"  x2="152" y2="138" stroke="#6090b8" strokeWidth="0.5" />
      </g>

      {/* ── 우하단 데이터 노드 ────────────────────────── */}
      <g opacity="0.28">
        <circle cx="1105" cy="562" r="4"   fill="#6090b8" />
        <circle cx="1060" cy="586" r="3"   fill="#90b0cc" />
        <circle cx="1128" cy="524" r="2.5" fill="#6090b8" />
        <circle cx="1050" cy="535" r="2"   fill="#6090b8" />
        <line x1="1105" y1="562" x2="1060" y2="586" stroke="#90b0cc"  strokeWidth="1"   />
        <line x1="1105" y1="562" x2="1128" y2="524" stroke="#6090b8" strokeWidth="1"   />
        <line x1="1105" y1="562" x2="1050" y2="535" stroke="#6090b8" strokeWidth="0.8" />
        <line x1="1060" y1="586" x2="1050" y2="535" stroke="#6090b8" strokeWidth="0.5" />
      </g>

      {/* ── 기간 텍스트 ──────────────────────────────── */}
      <text
        x="600" y="248"
        fontFamily="'Be Vietnam Pro','Pretendard',sans-serif"
        fontWeight="400" fontSize="13" letterSpacing="5"
        fill="#94aec6" textAnchor="middle"
      >
        2026.01 — 2026.03
      </text>

      {/* ── 메인 로고 텍스트 ─────────────────────────── */}
      {/* 원본 로고: DE·CARTE, 라이트 웨이트, 넓은 자간 */}
      <text
        x="600" y="378"
        fontFamily="'Be Vietnam Pro','Pretendard','Inter',sans-serif"
        fontWeight="300" fontSize="98" letterSpacing="10"
        fill="#273444" textAnchor="middle"
      >
        DE·CARTE
      </text>

      {/* ── 서브타이틀 ───────────────────────────────── */}
      <text
        x="600" y="428"
        fontFamily="'Be Vietnam Pro','Pretendard',sans-serif"
        fontWeight="400" fontSize="17" letterSpacing="2.5"
        fill="#6882a0" textAnchor="middle"
      >
        AI 기반 지원사업 정보 플랫폼
      </text>

      {/* ── 하단 키워드 스트립 ────────────────────────── */}
      <text
        x="600" y="598"
        fontFamily="'Be Vietnam Pro',sans-serif"
        fontWeight="600" fontSize="11" letterSpacing="6"
        fill="#96b0c8" textAnchor="middle"
      >
        AI  ·  DATA  ·  BLOCKCHAIN  ·  AUTOFILL
      </text>
    </svg>
  );
}
