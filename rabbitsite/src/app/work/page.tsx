export default function WorkPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold text-deep-sea">作品 Work</h1>
      <p className="text-neutral-gray">精选与全部项目的集合。</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            slug: "dongshan-handicraft-museum",
            title: "东山岛手工活态馆（展陈视觉）",
            summary: "地方文化与手工艺的展陈视觉设计。",
          },
          {
            slug: "flowering-meditation-app",
            title: "Meditation App：Flowering（UI/UX）",
            summary: "冥想应用的交互与界面设计。",
          },
          {
            slug: "aigc-dynamic-poster",
            title: "AIGC 动态海报（方法+教程）",
            summary: "生成式内容驱动的动态海报方法论。",
          },
          {
            slug: "ai-podcast-journey-to-the-west",
            title: "AI播客《西游电台》（ListenHub/Coze/NotebookLM）",
            summary: "播客制作流程与 AI 工具链整合。",
          },
        ].map((item) => (
          <a
            key={item.slug}
            href={`/work/${item.slug}`}
            className="block rounded-lg p-6 shadow-[var(--shadow-card)] glass-card hover-glow"
          >
            <h2 className="text-lg font-medium text-deep-sea">{item.title}</h2>
            <p className="text-neutral-gray">{item.summary}</p>
          </a>
        ))}
      </div>
    </section>
  );
}