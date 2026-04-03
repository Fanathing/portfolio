import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { EXPERIENCE } from "../../data/portfolio";

export default function Experience() {
  const scrollSlider = (dir: "left" | "right") => {
    const el = document.getElementById("exp-slider");
    if (el) el.scrollBy({ left: dir === "left" ? -400 : 400, behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-surface-container-low overflow-hidden relative">
      <div className="absolute right-0 top-0 hangeul-watermark text-[15rem] text-surface-container opacity-40 translate-x-1/2 select-none pointer-events-none">
        경력
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-6xl md:text-8xl font-black font-headline tracking-tighter uppercase">
            EXPERIENCE
          </h2>
          <div className="hidden md:flex gap-4">
            <button
              onClick={() => scrollSlider("left")}
              className="p-4 bg-white sticker-shadow hover:bg-primary hover:text-white transition-all active:scale-95"
              aria-label="이전"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scrollSlider("right")}
              className="p-4 bg-white sticker-shadow hover:bg-primary hover:text-white transition-all active:scale-95"
              aria-label="다음"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div
          id="exp-slider"
          className="flex gap-8 overflow-x-auto pb-12 no-scrollbar snap-x snap-mandatory"
        >
          {EXPERIENCE.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="min-w-[320px] md:min-w-[400px] snap-start group"
            >
              <div className={`bg-white p-10 h-full border-l-8 ${exp.color} sticker-shadow transition-transform hover:-translate-y-2`}>
                <div className="text-sm font-black text-primary mb-2 uppercase tracking-widest">
                  {exp.date}
                </div>
                <h3 className="text-2xl font-black mb-4 leading-tight">{exp.title}</h3>
                <p className="text-on-surface-variant leading-relaxed mb-6 text-sm">{exp.desc}</p>
                <ul className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <li key={tag} className="bg-surface-container px-3 py-1 text-xs font-bold rounded">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
