"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [reveal, setReveal] = useState(false);
  return (
    <section className="space-y-8">
      {/* 顶部：导航下方的居中月亮头像 */}
      <div className="flex justify-center">
        <div
          className="moon cursor-pointer"
          role="button"
          tabIndex={0}
          aria-controls="intro"
          aria-expanded={reveal}
          onMouseEnter={() => setReveal(true)}
          onClick={() => setReveal(true)}
          onFocus={() => setReveal(true)}
        >
          <Image
            src="/profile.jpg"
            alt="Profile avatar"
            width={120}
            height={120}
            className="rounded-full object-cover avatar-glow moon-glow"
            priority
          />
        </div>
      </div>
      {/* 文字介绍：悬停/点击头像后淡入显示，整体居中 */}
      <div
        id="intro"
        className={`space-y-4 transition-all duration-1000 ease-out mx-auto max-w-3xl text-center ${reveal ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 pointer-events-none'}`}
        style={{ transitionDelay: reveal ? '120ms' : '0ms' }}
      >
        <h1 className="text-4xl font-bold font-serif bg-clip-text text-transparent bg-gradient-to-r from-white via-[#c0d4ff] to-white">修修 | 梦境实验室 Dream Lab</h1>
        <p className="text-neutral-gray leading-relaxed">
          你好！我是修修，艺术设计与计算机背景的设计师与研究员，关注以人为本的交互体验与跨媒介创作，希望为世界创造更多美好的事物。
        </p>
        <p className="text-neutral-gray/80 text-sm leading-relaxed">
          Hello! I'm Xiuqi Li (Xiuxiu), a designer and researcher with a background in art, design, and computing. My work focuses on human-centered interaction and cross-media creation, with a commitment to bringing more beauty and meaning into the world.
        </p>
      </div>

      {/* 四个框：头像展开后淡入出现，位于头像与简介下方 */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1200 ease-out ${reveal ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1 pointer-events-none'}`}
        style={{ transitionDelay: reveal ? '320ms' : '0ms' }}
      >
        <a href="/work" className="block rounded-lg p-6 shadow-[var(--shadow-card)] glass-card hover-glow">
          <h2 className="text-xl font-medium text-deep-sea">Work 作品精选</h2>
          <p className="text-neutral-gray">东山岛手工活态馆、Meditation App: Flowering、AIGC 动态海报、AI播客《西游电台》</p>
        </a>
        <a href="/research" className="block rounded-lg p-6 shadow-[var(--shadow-card)] glass-card hover-glow">
          <h2 className="text-xl font-medium text-deep-sea">Research 研究</h2>
          <p className="text-neutral-gray">教育游戏与用户体验设计，跨学科方法论。</p>
        </a>
        <a href="/writing" className="block rounded-lg p-6 shadow-[var(--shadow-card)] glass-card hover-glow">
          <h2 className="text-xl font-medium text-deep-sea">Writing & Drawing</h2>
          <p className="text-neutral-gray">从公众号「Cos兔」精选的3篇摘要占位。</p>
        </a>
        <a href="/contact" className="block rounded-lg p-6 shadow-[var(--shadow-card)] glass-card hover-glow">
          <h2 className="text-xl font-medium text-deep-sea">Contact 联系合作</h2>
          <p className="text-neutral-gray">欢迎学术与商业合作，通过表单与我联系。</p>
        </a>
      </div>
    </section>
  );
}
