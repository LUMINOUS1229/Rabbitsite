import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold text-deep-sea heading-glow">关于 About</h1>
      <div className="flex items-center gap-4">
        <Image
          src="/profile.jpg"
          alt="Profile avatar"
          width={96}
          height={96}
          className="rounded-full object-cover avatar-glow"
          priority
        />
        <div>
          <p className="text-neutral-gray">
            我是修修 Xiuqi Li，兼具计算机与设计背景，关注以人为本的交互体验与跨媒介创作。
          </p>
        </div>
      </div>
    </section>
  );
}