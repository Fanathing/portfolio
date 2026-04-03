import { motion } from "motion/react";
import { Code2 } from "lucide-react";
import { TECH_STACK } from "../../data/portfolio";

const STICKER_ANIMATION = {
  initial: { opacity: 0, y: 20, rotate: -5 },
  whileInView: { opacity: 1, y: 0, rotate: 0 },
  viewport: { once: true },
  transition: { type: "spring", stiffness: 100 },
};

export default function Toolkit() {
  return (
    <section className="py-24 bg-surface" id="about">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-6xl md:text-8xl font-black font-headline tracking-tighter uppercase mb-4">
              Toolkit
            </h2>
            <p className="text-on-surface-variant font-medium text-lg">핵심 기술 스택</p>
          </div>
          <div className="h-1 w-32 bg-primary" />
        </div>

        <div className="flex flex-wrap gap-6 justify-center">
          {TECH_STACK.map((tech, idx) => (
            <motion.div
              key={tech.name}
              {...STICKER_ANIMATION}
              transition={{ delay: idx * 0.07 }}
              style={{ rotate: tech.rotate }}
              className="bg-white p-6 sticker-shadow hover:rotate-0 hover:scale-110 transition-all duration-300 flex flex-col items-center gap-3 w-40 cursor-default"
            >
              {tech.icon ? (
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-12 h-12 object-contain"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    if (tech.cdnFallback && img.src !== tech.cdnFallback) {
                      img.src = tech.cdnFallback;
                    } else {
                      img.style.display = "none";
                      img.nextElementSibling?.removeAttribute("style");
                    }
                  }}
                />
              ) : null}
              {/* Code2 아이콘: icon이 없거나 모두 로드 실패 시 표시 */}
              <div
                className="w-12 h-12 flex items-center justify-center bg-surface-container rounded"
                style={tech.icon ? { display: "none" } : undefined}
              >
                <Code2 className="w-7 h-7 text-primary" />
              </div>
              <span className="font-black text-sm uppercase">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
