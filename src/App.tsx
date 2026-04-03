/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ArrowRight, 
  Download, 
  ExternalLink, 
  Github, 
  Mail, 
  Menu, 
  Code2, 
  FileText,
  Instagram,
  Linkedin,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useRef, useState, useEffect } from "react";

const STICKER_ANIMATION = {
  initial: { opacity: 0, y: 20, rotate: -5 },
  whileInView: { opacity: 1, y: 0, rotate: 0 },
  viewport: { once: true },
  transition: { type: "spring", stiffness: 100 }
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-secondary-container selection:text-on-secondary-container">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-md shadow-sm">
        <div className="flex justify-between items-center px-6 py-4 w-full max-w-screen-2xl mx-auto">
          <div className="text-xl font-black tracking-[-0.05em] text-slate-900 font-headline">
            KIM SEONG YOUNG
          </div>
          <div className="hidden md:flex items-center gap-8 font-headline font-bold tracking-tighter text-sm uppercase">
            <a href="#projects" className="text-primary border-b-2 border-secondary-container pb-1 transition-all hover:scale-105">프로젝트</a>
            <a href="#about" className="text-on-surface-variant hover:text-on-surface transition-colors">소개</a>
            <a href="#contact" className="text-on-surface-variant hover:text-on-surface transition-colors">연락처</a>
          </div>
          <button className="md:hidden p-2 hover:bg-slate-100 rounded-md">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hangeul-watermark text-[20rem] md:text-[35rem] text-surface-container-highest opacity-20 z-0">
          개발자
        </div>
        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 font-black text-xs uppercase tracking-widest rotate-[-2deg] mb-6 sticker-shadow">
              FULL-STACK DEVELOPER
            </div>
            <h1 className="font-headline text-5xl md:text-8xl font-black tracking-tight leading-tight mb-8">
              안녕하세요,<br />
              <span className="text-primary italic">풀스택 개발자</span><br />
              김성영입니다.
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed mb-10">
              디벨로켓에서 프론트엔드와 백엔드를 넘나들며 견고한 서비스를 구축해왔습니다. 사용자의 불편함을 기술로 해결하는 과정에 몰입합니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="bg-primary text-on-primary px-8 py-4 font-black tracking-tight flex items-center gap-2 hover:translate-y-[-4px] hover:shadow-[0_4px_0_0_#c3f400] transition-all"
              >
                프로젝트 보기
                <ArrowRight className="w-5 h-5" />
              </a>
              <button className="border-2 border-primary text-primary px-8 py-4 font-black tracking-tight hover:bg-primary/5 transition-all flex items-center gap-2">
                이력서 다운로드
                <Download className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto lg:ml-auto">
              <div className="absolute inset-0 bg-secondary-container rotate-6 z-0 shadow-lg"></div>
              <div className="absolute inset-0 bg-primary-container -rotate-3 z-0 opacity-50"></div>
              <div className="relative z-10 w-full h-full border-8 border-white bg-surface-container-highest overflow-hidden sticker-shadow">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8RmRzG_cGZYPaJK-ia__4fJhVghLbAH2VxTed3WQfloXhCslGmH0Etb0Q7XCF-nCWUKQ_avrKnR_5eGmIcnHB6lCU3axGF1R8JANKd7cZtmphzl2DtA9NjxTPGSFwILj_L51BJCH9F08vxtj9fClIClw0a6JwLev61x08TdpHq-Ab1uvgGNypGYxu8lLpnswM-pQsZFfs8ITIZGZGMKD9XIQ-QoRXYj3moubyFB9vxNVybqfRVCHDBTnUHG2BVvsn_cPuC_0mn9s" 
                  alt="Kim Seong Young"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rotate-12 sticker-shadow z-20">
                <div className="text-primary font-black text-2xl font-headline tracking-tighter">KIM SY.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Toolkit Section */}
      <section className="py-24 bg-surface" id="about">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-6xl md:text-8xl font-black font-headline tracking-tighter uppercase mb-4">Toolkit</h2>
              <p className="text-on-surface-variant font-medium text-lg">성장을 돕는 핵심 기술 스택</p>
            </div>
            <div className="h-1 w-32 bg-primary"></div>
          </div>
          <div className="flex flex-wrap gap-6 justify-center">
            {[
              { name: "Next.js", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9wdmhGfY8YqNvSELIGaK7__lFEq45J3sCWwN72wVoy0tWkzg6jbFp8fO541WudQB9-YJDEcbr-6ZhEHkpa5iopwVQBcpON_OgCdYMrAfg4zAy53eD4x8kZEDtznSWpOJbL4FE0tqTtJCl3jCg3tnZZvYMbBQVQgSWwRHlQ3cnUTxAcKWqz5_lAkRMs4wogGIZXJGGMzeNC4z_7CG9LoOk0B-jarTRxiEVSTooRK0SABIY3AA1Fp1rtKAHrdE7_QWmC4aNonJT1Aw", rotate: -3 },
              { name: "React", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7I9o2joBDDXZucIpT-l2V9DPC7Os8Xp77ZWGDPJJ12nSy_b2zJd3XEAtb8J02exsd1ZKfdJVqKE62fBfglG3gP_KKx0c3AJQRnnRVthcySCh2kdKh1TYdFXW6WgxJd_nj4crikz2U0IPbyEWHcFBb7tiiO12xxYw575GpOoFhJXr4VcSMSsskviKllM9vzKJ_eSX8CPtdmZYk8KgL95f4RyJdkN3K9YMOeAVEVgzP4ttIC0woyEuziiPbr1nzVKSnZkwY1myNJfQ", rotate: 2 },
              { name: "TypeScript", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfzmstMofAlocifz3_hsXj5KQUJpH4F7QQFLSboBJjKJ1c2IV40sHIHJFuUgTn4nkvDkCUK3Bx6HVZuA9ctHlMKbBxdzK7OYTkrLfJuM32wh7tcrFOUBtmbdPLiUbM0orsYZxQmANBH4-XFO5fo4r5jeoY-AV1ywX9kk2m_z_A4qzSyOaqqtx951F2LmdVPPYBFBlRyI42h4McBW5eiu9Jrb0d9T6Ip5TMpsQ0-RtBsgDlqSLzsRPJaDL0wF_68Wa9I1Izrv738mk", rotate: -1 },
              { name: "Node.js", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1O7tagTgcF_LwbHLVqpYO3H1yeonq5dU-1nl-DIv5uW3nBzVgOkSGzOkhfqCHSkIX-9vQ-iwZ_sbf_STOPdKThY-2i8rCmM2n3zT-irpuSAfAXIASvSNppdhULKph2dJJ7E5iX44qw7nUD_9zex8pmg6DEi6lBsOF7RWsktoLqGe-9xihGOFXqK72zDkv_HMCrTR6SWfBg2mC3Jcg74mozYP5Rpnk1n_5PiFK6uHhZI8RRPtJb00VZcBXr_chFAnaZU4REdPTE2U", rotate: 4 },
              { name: "NestJS", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdQzwzQsdhhekNNFa37r23dwy1insyzQv1l0yUYzfvlkXhh42t4rQTXep5hkaIoGWHh_MDY4TWth1F5eTZ_X5FmoSKRGWrbsODN1GbCWB3hOLTz4tayHR_TR9dfpT2fw9rBeJEX2TZjWRhk4N4onW4gjXb3inQ6KPgGAbuUfcn5HjhgLH8Os_gMplsTHSZk-hCYkhEoUvnX5kTuag9mIJHve_diJtKXOOmeXjy9FfOwnNZP5iuA1PTowEn_otxOUYD6kOwMGHOiFM", rotate: -2 },
              { name: "Tailwind", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnYBz__DevViXS2GWizhNYfcWoAcXyVI-fhKHqztJeUAoDyDGnlxvwYomrOpJlMy_xjzqCry4eivADzedgrDQC6dAxyXPWGgL2FuwcSKCIjQK7NTFh34b31Lsdppq4-PxjhkF_z8eTbuvAbF6lPaad2HUuFk4tUaM9rKM_HCiwEux7dAJIGk9FxbucM-OzmHSnDJ_c19PdG4ulIU5gQdUCzGJpyT6vsKjDOKOw7zPtcQ1vYOZUfEFYHXou7SqIBFKmXM9JaqiegiU", rotate: 1 },
              { name: "AWS", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlY5OT_I8lt9ruChh5mtOv0oOXV7diL9-Ryg1TlqFP5MrInInw27NSq_rgXsmJ3WiD9LAzWmTjcYZnEsZ-HHUGl1_l-ReZP3s1eUwCNmvqMJ_NRw-4ljFE02nNMNmKeP8_XZCPyg7SxOo8j8rJnbNeMBReYvzElZqCcJQfylPPDfhKqTiSy-QCgJKkrCvBG01M-l4KM-1wGQ6CUT2QLwnTngZZKYxcZTxCR6Mih23u_wOd0--LrGFLeXzdhfOc1paQcFHvmFzKhnY", rotate: -4 },
              { name: "PostgreSQL", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjgWlA-qHgmMKgM2kFcQfIneP6hZLwxqwBN1JqBwl8c8AJ3RDxfezbOR-WnOpKtqEGCviBAPSG8qu4_TfxcKEv4Sq0sJOmtf4jl_F4OsT9pR7xUaETfp08YI7hDfZbLJmLRT3Hgb70i_KtF3kpRh3Ls8Y9MJ1rSLroe05ZsI1hygC2_pC2GTyoRGWXHONi4w_kY_w1BMEyu7fUl0ZuPtP3pcLZJYSETzVJJcak4U5Wwyw1BN8LimIz4_deNZ_bnNFGGcTUStkLFj0", rotate: 3 },
            ].map((tech, idx) => (
              <motion.div
                key={tech.name}
                {...STICKER_ANIMATION}
                transition={{ delay: idx * 0.1 }}
                style={{ rotate: tech.rotate }}
                className="bg-white p-6 sticker-shadow hover:rotate-0 hover:scale-110 transition-all duration-300 flex flex-col items-center gap-3 w-40 cursor-default"
              >
                <img src={tech.icon} alt={tech.name} className="w-12 h-12 object-contain" referrerPolicy="no-referrer" />
                <span className="font-black text-sm uppercase">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-surface-container-low overflow-hidden relative">
        <div className="absolute right-0 top-0 hangeul-watermark text-[15rem] text-surface-container opacity-40 translate-x-1/2">
          경력
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-6xl md:text-8xl font-black font-headline tracking-tighter uppercase">EXPERIENCE</h2>
            <div className="hidden md:flex gap-4">
              <button 
                onClick={() => {
                  const el = document.getElementById('exp-slider');
                  if (el) el.scrollBy({ left: -400, behavior: 'smooth' });
                }}
                className="p-4 bg-white sticker-shadow hover:bg-primary hover:text-white transition-all active:scale-95"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={() => {
                  const el = document.getElementById('exp-slider');
                  if (el) el.scrollBy({ left: 400, behavior: 'smooth' });
                }}
                className="p-4 bg-white sticker-shadow hover:bg-primary hover:text-white transition-all active:scale-95"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div 
            id="exp-slider"
            className="flex gap-8 overflow-x-auto pb-12 no-scrollbar snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[
              { date: "2022.09 - 2023.05", title: "넥스트딜리버리", desc: "배달대행업체, 도심 내 배송 운영 및 주문 처리 업무를 수행했습니다.", tags: ["비개발", "운영"], color: "border-primary" },
              { date: "2022.02 - 2022.08", title: "(주)케이에스한국고용정보", desc: "쿠팡 CS 업무, 독산팀/상담사, 고객 문의 대응 및 서비스 이슈 해결 업무를 수행하였습니다.", tags: ["비개발", "CS"], color: "border-secondary-container" },
              { date: "2020.10 - 2022.01", title: "넥스트딜리버리", desc: "배달대행업체, 도심 내 배송 운영 및 주문 처리 업무를 수행했습니다.", tags: ["비개발", "운영"], color: "border-on-surface-variant" },
              { date: "2016.03 - 2020.08", title: "한국건드릴", desc: "조립부, 가공부, 톱사업부 업무를 담당했습니다.", tags: ["비개발", "생산"], color: "border-slate-400" },
            ].map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="min-w-[320px] md:min-w-[400px] snap-start group"
              >
                <div className={`bg-white p-10 h-full border-l-8 ${exp.color} sticker-shadow transition-transform hover:-translate-y-2`}>
                  <div className="text-sm font-black text-primary mb-2 uppercase tracking-widest">{exp.date}</div>
                  <h3 className="text-3xl font-black mb-4">{exp.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed mb-6">{exp.desc}</p>
                  <ul className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <li key={tag} className="bg-surface-container px-3 py-1 text-xs font-bold rounded">{tag}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-white" id="projects">
        <div className="container mx-auto px-6">
          <h2 className="text-6xl md:text-9xl font-black font-headline tracking-tighter uppercase mb-20 text-right">Selected<br />Works</h2>
          
          <div className="space-y-32">
            {/* Project 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-7 relative group"
              >
                <div className="absolute -inset-4 bg-primary/10 -rotate-2 z-0"></div>
                <div className="relative z-10 aspect-video overflow-hidden sticker-shadow bg-surface-container">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCklZefZeCmf0uKSE2khxgtZWy2IXmXy2rEXZaWxScFa56FEjeVOfcfYW04_aZPRQUZVXyPd5-muxLWikxp623L9t41nkMuTzTk55soohNAhkwEcqaCEZTTvbSueGYWc0sRNx-u82SCWuwtcEvjRCM-xXwJtcocGFi2fB-io3a_Ffj6jxkbj0jmAN3WrwXvx5p_O2kQJFauo8HOIRg0MlwrXg8H4n41o1mwcX0MD0vp-MPGtUiMUV1VUzPzjspmkibJ0g1eB-j-8a8" 
                    alt="DE:CARTE" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-5 flex flex-col gap-6"
              >
                <div className="flex flex-wrap gap-2">
                  <span className="bg-secondary-container text-on-secondary-container px-3 py-1 font-black text-xs uppercase tracking-widest rotate-[-3deg]">Personal</span>
                  <span className="bg-primary text-on-primary px-3 py-1 font-black text-xs uppercase tracking-widest rotate-[2deg]">AI & Blockchain</span>
                </div>
                <h3 className="text-6xl font-black font-headline tracking-tighter italic">DE:CARTE</h3>
                <div className="space-y-4">
                  <p className="text-xl font-bold text-primary">외부 공공데이터 기반 AI 활용 맞춤형 지원사업 정보 플랫폼</p>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    <strong className="text-on-surface">Role:</strong> 프론트엔드, 백엔드, 스마트 컨트랙트 개발 뿐 아니라 기획, 설계, UI/UX까지 전반적인 역할을 수행
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["Next.js", "MySQL", "AWS", "TypeScript", "Blockchain", "AI"].map(t => (
                      <span key={t} className="text-[10px] bg-surface-container px-2 py-1 font-bold uppercase">{t}</span>
                    ))}
                  </div>
                  <p className="text-sm text-on-surface-variant leading-relaxed pt-2 border-t border-surface-container-highest">
                    <strong className="block mb-1 text-on-surface">Key Achievement:</strong>
                    AI 기반 공고 요약 및 HWPX 서류 자동기입 기능을 구현하여 사용자 편의성을 향상시켰습니다. 블록체인 기반 신청 이력 앵커링 시스템을 설계하여 데이터 위변조 방지 및 신뢰성을 확보하였습니다.
                  </p>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="bg-on-background text-white px-6 py-3 font-black text-sm uppercase flex items-center gap-2 hover:bg-primary transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    VISIT SITE
                  </a>
                  <a href="#" className="bg-surface-container px-6 py-3 font-black text-sm uppercase flex items-center gap-2 hover:bg-surface-container-highest transition-colors">
                    <Github className="w-4 h-4" />
                    GITHUB
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Project 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-5 order-2 lg:order-1 flex flex-col gap-6"
              >
                <div className="flex flex-wrap gap-2 justify-end lg:justify-start">
                  <span className="bg-secondary-container text-on-secondary-container px-3 py-1 font-black text-xs uppercase tracking-widest rotate-[-3deg]">Team Project</span>
                  <span className="bg-primary text-on-primary px-3 py-1 font-black text-xs uppercase tracking-widest rotate-[2deg]">Web Platform</span>
                </div>
                <h3 className="text-6xl font-black font-headline tracking-tighter text-right lg:text-left">X-ink (씽크)</h3>
                <div className="space-y-4 text-right lg:text-left">
                  <p className="text-xl font-bold text-secondary">몇 개로도 고정되지 않는 모든 형태의 일과 사람을 연결하는 웹 플랫폼</p>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    <strong className="text-on-surface">Role:</strong> 백엔드(Node.js, Express, Sequelize)를 담당하여 구축
                  </p>
                  <div className="flex flex-wrap gap-2 justify-end lg:justify-start mt-2">
                    {["React", "Node.js", "Express", "MySQL", "JWT"].map(t => (
                      <span key={t} className="text-[10px] bg-surface-container px-2 py-1 font-bold uppercase">{t}</span>
                    ))}
                  </div>
                  <p className="text-sm text-on-surface-variant leading-relaxed pt-2 border-t border-surface-container-highest">
                    <strong className="block mb-1 text-on-surface">Key Achievement:</strong>
                    구직자와 기업 간 채용 과정을 효율적으로 연결하기 위한 웹 플랫폼을 개발하였으며, 공고 조회, 지원, 지원자 관리까지 이어지는 전체 채용 프로세스를 하나의 시스템으로 통합하였습니다.
                  </p>
                </div>
                <div className="flex gap-4 justify-end lg:justify-start">
                  <button className="bg-on-background text-white px-6 py-3 font-black text-sm uppercase flex items-center gap-2 hover:bg-primary transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    VIEW PROJECT
                  </button>
                  <button className="bg-surface-container px-6 py-3 font-black text-sm uppercase flex items-center gap-2 hover:bg-surface-container-highest transition-colors">
                    <FileText className="w-4 h-4" />
                    NOTION
                  </button>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-7 order-1 lg:order-2 relative group"
              >
                <div className="absolute -inset-4 bg-secondary-container/10 rotate-2 z-0"></div>
                <div className="relative z-10 aspect-video overflow-hidden sticker-shadow bg-surface-container">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj9JEOzxQgumkGhJGtvX2LneVkNZto61cwSQfCnuKYg9v3HMYVztOUi6pU_7-UNuLZcI1NUG7w_ul4W2XFHXYZfArcabN6Y9PvTs3RUaNIuCH7LxJzscsgRIWQStlQDS5UmNTjlVsuX-2qc5Y7t_txMX8EqbUKY8ZaIvFocH40r5pGh4k3x9k87qViwVEJ7sJ-8tw_HcdyXeyMUQOy0GaMHRt254Ew0uGKG0GIvchbHGvDOzWmbO7TgCMO7TfIlJHVvTFNPHAMJLk" 
                    alt="X-ink" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Philosophy Section */}
      <section className="py-32 bg-on-background text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 hangeul-watermark text-[25rem] text-surface-container-highest opacity-5 -translate-x-1/2">
          김성영
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-8xl font-black font-headline tracking-tighter mb-12 uppercase leading-[0.9]">
              I AM A <br />
              <span className="text-secondary-container kinetic-text">PROBLEM SOLVER</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-xl">
              <div className="space-y-6">
                <p className="leading-relaxed">
                  "코드 한 줄보다 중요한 것은 문제를 정의하는 방식입니다." <br />
                  저는 단순히 기능을 구현하는 개발자를 넘어, 비즈니스의 가치를 창출하고 사용자의 진정한 니즈를 찾아내는 <strong>Product Thinker</strong>를 지향합니다.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 content-start">
                {[
                  { text: "Growth Mindset", style: "border-2 border-secondary-container text-secondary-container rotate-[-2deg]" },
                  { text: "User First", style: "bg-primary text-white rotate-[3deg]" },
                  { text: "Reliability", style: "border-2 border-white text-white rotate-[-1deg]" },
                  { text: "성장하는 즐거움", style: "bg-secondary-container text-on-secondary-container rotate-[4deg]" },
                  { text: "Clean Code", style: "bg-surface-container-highest/20 text-white rotate-[-3deg]" },
                ].map((tag, idx) => (
                  <div key={idx} className={`${tag.style} px-4 py-2 font-black text-sm uppercase`}>
                    {tag.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="w-full relative overflow-hidden min-h-[600px] flex flex-col justify-end bg-slate-100" id="contact">
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none select-none hangeul-watermark text-[20rem] flex items-center justify-center">
          CONTACT
        </div>
        <div className="relative w-full p-8 md:p-16 flex flex-col gap-12 z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div>
              <h2 className="font-headline font-black text-6xl md:text-9xl tracking-tighter uppercase text-primary">
                Let's Talk
              </h2>
              <p className="text-2xl font-bold text-on-surface-variant mt-4">새로운 도전을 함께할 파트너를 기다립니다.</p>
            </div>
            <div className="flex flex-col gap-4 items-start md:items-end">
              <a 
                href="mailto:sy.kim.dev@gmail.com" 
                className="text-2xl md:text-4xl font-black text-on-surface hover:text-primary transition-colors border-b-4 border-secondary-container"
              >
                sy.kim.dev@gmail.com
              </a>
              <div className="flex gap-6 mt-4">
                <a href="#" className="text-on-surface-variant font-bold hover:rotate-3 hover:scale-110 hover:bg-secondary-container hover:text-on-secondary-container transition-all p-2"><Github className="w-6 h-6" /></a>
                <a href="#" className="text-on-surface-variant font-bold hover:rotate-3 hover:scale-110 hover:bg-secondary-container hover:text-on-secondary-container transition-all p-2"><Linkedin className="w-6 h-6" /></a>
                <a href="#" className="text-on-surface-variant font-bold hover:rotate-3 hover:scale-110 hover:bg-secondary-container hover:text-on-secondary-container transition-all p-2"><Instagram className="w-6 h-6" /></a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-surface-container-highest gap-6">
            <span className="text-on-surface-variant font-bold">© 2024 KIM SEONG YOUNG. All Rights Reserved.</span>
            <div className="text-primary font-black tracking-tighter">SEOUL, KOREA</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
