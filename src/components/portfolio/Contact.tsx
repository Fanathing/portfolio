import { Github } from "lucide-react";
import { LINKS } from "../../data/portfolio";

const SOCIAL_LINKS = [
  {
    href: LINKS.github,
    label: "GitHub",
    icon: <Github className="w-5 h-5" />,
  },
  {
    href: LINKS.velog,
    label: "Velog",
    icon: <span className="w-5 h-5 flex items-center justify-center font-black text-base leading-none">V</span>,
  },
  {
    href: LINKS.naverBlog,
    label: "Blog",
    icon: <span className="w-5 h-5 flex items-center justify-center font-black text-xs leading-none">N</span>,
  },
];

export default function Contact() {
  return (
    <footer
      className="w-full relative overflow-hidden min-h-[600px] flex flex-col justify-end bg-slate-100"
      id="contact"
    >
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none select-none hangeul-watermark text-[20rem] flex items-center justify-center">
        CONTACT
      </div>

      <div className="relative w-full p-8 md:p-16 flex flex-col gap-12 z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          {/* 헤드라인 */}
          <div>
            <h2 className="font-headline font-black text-6xl md:text-9xl tracking-tighter uppercase text-primary">
              Let's Talk
            </h2>
            <p className="text-xl font-bold text-on-surface-variant mt-4">
              함께 일하고 싶다면 편하게 연락해 주세요.
            </p>
          </div>

          {/* 연락처 */}
          <div className="flex flex-col gap-6 items-start md:items-end">
            <a
              href={`mailto:${LINKS.email}`}
              className="text-2xl md:text-3xl font-black text-on-surface hover:text-primary transition-colors border-b-4 border-secondary-container pb-1"
            >
              {LINKS.email}
            </a>

            {/* 소셜 링크 */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center gap-2 px-4 py-2 bg-white sticker-shadow font-black text-sm text-on-surface-variant hover:bg-primary hover:text-white transition-all hover:-translate-y-1"
                >
                  {s.icon}
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 푸터 하단 */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-surface-container-highest gap-6">
          <span className="text-on-surface-variant font-bold text-sm">
            © 2026 김성영. All Rights Reserved.
          </span>
          <div className="text-primary font-black tracking-tighter text-sm">SEOUL, KOREA</div>
        </div>
      </div>
    </footer>
  );
}
