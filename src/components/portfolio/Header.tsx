import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#projects", label: "프로젝트" },
  { href: "#about",    label: "소개" },
  { href: "#contact",  label: "연락처" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const close = () => setMobileOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center px-6 py-4 w-full max-w-screen-2xl mx-auto">
        <a
          href="#"
          className="text-xl font-black tracking-[-0.05em] text-slate-900 font-headline hover:text-primary transition-colors"
        >
          KIM SEONG YOUNG
        </a>

        {/* 데스크톱 메뉴 */}
        <div className="hidden md:flex items-center gap-8 font-headline font-bold tracking-tighter text-sm uppercase">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors hover:scale-105 inline-block"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* 모바일 햄버거 버튼 */}
        <button
          className="md:hidden p-2 hover:bg-slate-100 rounded-md transition-colors"
          aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* 모바일 드롭다운 */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-surface-container px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className="font-headline font-black text-lg uppercase text-on-surface-variant hover:text-primary transition-colors py-2 border-b border-surface-container last:border-0"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
