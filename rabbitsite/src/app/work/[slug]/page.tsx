import { notFound } from "next/navigation";

const works = {
  "dongshan-handicraft-museum": {
    title: "东山岛手工活态馆（展陈视觉）",
    body:
      "以海盐白与深海蓝为基调，结合地方纹理与手工元素，构建叙事性的展陈视觉系统。",
  },
  "flowering-meditation-app": {
    title: "Meditation App：Flowering（UI/UX）",
    body:
      "以留白与轻动效传达平静，强调呼吸练习流程的清晰与反馈。",
  },
  "aigc-dynamic-poster": {
    title: "AIGC 动态海报（方法+教程）",
    body:
      "以生成式工具（如 Stable Diffusion / Runway）构建动态视觉，附详细教学与流程。",
  },
  "ai-podcast-journey-to-the-west": {
    title: "AI播客《西游电台》（ListenHub/Coze/NotebookLM）",
    body:
      "从选题到分发的端到端流程，工具链协作与脚本化生产。",
  },
} as const;

export default function WorkDetail({ params }: { params: { slug: string } }) {
  const work = works[params.slug as keyof typeof works];
  if (!work) return notFound();
  return (
    <article className="space-y-4 glass-card rounded-lg p-6">
      <h1 className="text-3xl font-bold font-serif bg-clip-text text-transparent bg-gradient-to-r from-white via-[#c0d4ff] to-white heading-glow">{work.title}</h1>
      <p className="text-neutral-gray">{work.body}</p>
    </article>
  );
}