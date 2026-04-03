import type { ComponentType } from "react";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { PROJECTS, type Project } from "../../data/portfolio";
import DecarteCover from "./covers/DecarteCover";
import XinkCover from "./covers/XinkCover";

// 프로젝트 ID → SVG 커버 컴포넌트 매핑
// public/projects/{id}-cover.jpg 파일이 있으면 자동으로 사진이 우선 표시됩니다
const COVER_MAP: Record<string, ComponentType> = {
  decarte: DecarteCover,
  xink: XinkCover,
};

function ProjectCard({ project }: { project: Project }) {
  const imageBlock = (
    <motion.div
      initial={{ opacity: 0, x: project.imageLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`${project.imageLeft ? "lg:col-span-7" : "lg:col-span-7 order-1 lg:order-2"} relative group`}
    >
      <div className={`absolute -inset-4 ${project.imageLeft ? "bg-primary/10 -rotate-2" : "bg-secondary-container/10 rotate-2"} z-0`} />
      <div className="relative z-10 aspect-video overflow-hidden sticker-shadow">
        {/* SVG 커버 컴포넌트 (기본 레이어) */}
        {(() => {
          const Cover = COVER_MAP[project.id];
          return Cover ? (
            <div className="absolute inset-0">
              <Cover />
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-surface-container">
              <span className="font-headline font-black text-4xl text-primary/15 select-none tracking-tighter">
                {project.title}
              </span>
            </div>
          );
        })()}
        {/* 실제 이미지 파일이 있으면 SVG 커버 위를 덮어씁니다 */}
        <img
          src={project.coverImage}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-10"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
    </motion.div>
  );

  const infoBlock = (
    <motion.div
      initial={{ opacity: 0, x: project.imageLeft ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`${project.imageLeft ? "lg:col-span-5" : "lg:col-span-5 order-2 lg:order-1"} flex flex-col gap-6`}
    >
      <div className={`flex flex-wrap gap-2 ${!project.imageLeft ? "justify-end lg:justify-start" : ""}`}>
        <span className={`px-3 py-1 font-black text-xs uppercase tracking-widest ${project.badge1.style}`}>
          {project.badge1.text}
        </span>
        <span className={`px-3 py-1 font-black text-xs uppercase tracking-widest ${project.badge2.style}`}>
          {project.badge2.text}
        </span>
      </div>

      <h3 className={`text-5xl font-black font-headline tracking-tighter ${project.imageLeft ? "italic" : `text-right lg:text-left`}`}>
        {project.title}
      </h3>

      <div className={`space-y-4 ${!project.imageLeft ? "text-right lg:text-left" : ""}`}>
        <p className="text-lg font-bold text-primary leading-snug">{project.subtitle}</p>

        <p className="text-xs text-on-surface-variant font-medium uppercase tracking-widest">
          {project.period}
        </p>

        <p className="text-sm text-on-surface-variant leading-relaxed">
          <strong className="text-on-surface">Role: </strong>
          {project.role}
        </p>

        <div className={`flex flex-wrap gap-2 mt-2 ${!project.imageLeft ? "justify-end lg:justify-start" : ""}`}>
          {project.tags.map((t) => (
            <span key={t} className="text-[10px] bg-surface-container px-2 py-1 font-bold uppercase">
              {t}
            </span>
          ))}
        </div>

        <p className="text-sm text-on-surface-variant leading-relaxed pt-2 border-t border-surface-container-highest">
          <strong className="block mb-1 text-on-surface">주요 성과:</strong>
          {project.achievement}
        </p>
      </div>

      <div className={`flex gap-4 ${!project.imageLeft ? "justify-end lg:justify-start" : ""}`}>
        {project.siteUrl ? (
          <a
            href={project.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-on-background text-white px-6 py-3 font-black text-sm uppercase flex items-center gap-2 hover:bg-primary transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            VISIT SITE
          </a>
        ) : (
          <span className="bg-surface-container-highest/50 text-on-surface-variant/60 px-6 py-3 font-black text-sm uppercase flex items-center gap-2 cursor-not-allowed opacity-60">
            <ExternalLink className="w-4 h-4" />
            준비중
          </span>
        )}

        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface-container px-6 py-3 font-black text-sm uppercase flex items-center gap-2 hover:bg-surface-container-highest transition-colors"
          >
            <Github className="w-4 h-4" />
            GITHUB
          </a>
        ) : (
          <span className="bg-surface-container/50 text-on-surface-variant/60 px-6 py-3 font-black text-sm uppercase flex items-center gap-2 cursor-not-allowed opacity-60">
            <Github className="w-4 h-4" />
            준비중
          </span>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {project.imageLeft ? (
        <>
          {imageBlock}
          {infoBlock}
        </>
      ) : (
        <>
          {infoBlock}
          {imageBlock}
        </>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section className="py-24 bg-white" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-6xl md:text-9xl font-black font-headline tracking-tighter uppercase mb-20 text-right">
          Selected<br />Works
        </h2>

        <div className="space-y-32">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
