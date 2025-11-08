export default function WritingPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold font-serif bg-clip-text text-transparent bg-gradient-to-r from-white via-[#c0d4ff] to-white">Writing & Drawing</h1>
      <p className="text-neutral-gray">从公众号「Cos兔」抽3篇做摘要占位。</p>
      <ul className="space-y-3">
        {[
          { title: "文章一：AIGC 与创作流程", summary: "讨论生成式工具如何改变创作工作流。" },
          { title: "文章二：教育游戏的动机设计", summary: "探索如何通过动机与反馈提升学习体验。" },
          { title: "文章三：UI·UX 的呼吸感与节奏", summary: "从视觉节奏与交互反馈谈设计语言。" },
        ].map((post, i) => (
          <li key={i} className="rounded-lg p-4 shadow-[var(--shadow-card)] glass-card hover-glow">
            <h2 className="text-lg font-medium text-deep-sea">{post.title}</h2>
            <p className="text-neutral-gray">{post.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}