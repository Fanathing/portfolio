import { PHILOSOPHY_TAGS } from "../../data/portfolio";

export default function Philosophy() {
  return (
    <section className="py-32 bg-on-background text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 hangeul-watermark text-[25rem] text-surface-container-highest opacity-5 -translate-x-1/2 select-none pointer-events-none">
        김성영
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <h2 className="text-5xl md:text-8xl font-black font-headline tracking-tighter mb-12 uppercase leading-[0.9]">
            개발 <br />
            <span className="text-secondary-container kinetic-text">철학</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-xl">
            <div className="space-y-6">
              <p className="leading-relaxed text-lg">
                구현이 어려워 보이는 기능도 우회 가능한 방식을 찾아 끝까지 결과로 만드는 것을 중요하게 생각합니다.
              </p>
              <p className="leading-relaxed text-lg">
                사용자가 실제로 쓰는 서비스를 만드는 것이 목표입니다. 기능을 넘어 사용자 경험과 서비스 완성도를 함께 고민합니다.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 content-start">
              {PHILOSOPHY_TAGS.map((tag, idx) => (
                <div
                  key={idx}
                  className={`${tag.style} px-4 py-2 font-black text-sm`}
                >
                  {tag.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
