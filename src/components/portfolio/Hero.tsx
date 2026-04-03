import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import { LINKS } from "../../data/portfolio";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hangeul-watermark text-[20rem] md:text-[35rem] text-surface-container-highest opacity-20 z-0 select-none pointer-events-none">
        개발자
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* 텍스트 영역 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <div className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 font-black text-xs uppercase tracking-widest rotate-[-2deg] mb-6 sticker-shadow">
            FRONTEND DEVELOPER
          </div>

          <h1 className="font-headline text-5xl md:text-8xl font-black tracking-tight leading-tight mb-8">
            안녕하세요,<br />
            <span className="text-primary italic">프론트엔드 개발자</span><br />
            김성영입니다.
          </h1>

          <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed mb-10">
            사용자가 원하는 서비스를 만들기 위해 늘 고민하는 개발자입니다.
            프론트엔드에 강점이 있지만, 실제 프로젝트에서는 백엔드와 블록체인까지
            직접 구현하며 서비스 전체를 설계했습니다.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-primary text-on-primary px-8 py-4 font-black tracking-tight flex items-center gap-2 hover:translate-y-[-4px] hover:shadow-[0_4px_0_0_#c3f400] transition-all"
            >
              프로젝트 보기
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={LINKS.resume}
              download
              className="border-2 border-primary text-primary px-8 py-4 font-black tracking-tight hover:bg-primary/5 transition-all flex items-center gap-2"
            >
              이력서 다운로드
              <Download className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* 프로필 이미지 영역 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="lg:col-span-5 relative"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto lg:ml-auto">
            <div className="absolute inset-0 bg-secondary-container rotate-6 z-0 shadow-lg" />
            <div className="absolute inset-0 bg-primary-container -rotate-3 z-0 opacity-50" />
            <div className="relative z-10 w-full h-full border-8 border-white bg-surface-container-highest overflow-hidden sticker-shadow">
              {/* placeholder: public/profile.jpg 파일을 넣으면 사진으로 대체됩니다 */}
              <div className="absolute inset-0 flex items-center justify-center bg-surface-container-highest">
                <span className="font-headline font-black text-7xl text-primary/15 select-none tracking-tighter">KSY</span>
              </div>
              <img
                src="/profile.jpg"
                alt="김성영 프로필 사진"
                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 z-10"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rotate-12 sticker-shadow z-20">
              <div className="text-primary font-black text-2xl font-headline tracking-tighter">KIM SY.</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
