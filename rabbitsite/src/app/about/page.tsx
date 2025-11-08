"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0, 0, 0.58, 1] },
    },
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden">

      <main className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <motion.header
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative grid grid-cols-[auto,1fr] items-start gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 lg:p-12 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
        >
          {/* 头像月亮黄光（左侧，像正在说话） */}
          <div className="moon">
            <Image
              src="/profile.jpg"
              alt="Profile avatar"
              width={84}
              height={84}
              className="rounded-full object-cover moon-glow"
              priority
            />
          </div>
          <div className="space-y-3">
            <div className="text-xs tracking-[0.2em] uppercase font-semibold text-[#c0d4ff]">Design for Sharing</div>
            <h1 className="text-[clamp(2rem,6vw,3rem)] leading-tight font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-[#c0d4ff] to-white">
              让美流动，让知识有呼吸。
            </h1>
            <p className="text-white/70">Design that circulates beauty and lets knowledge breathe.</p>

            <blockquote className="mt-2 rounded-xl border-l-4 border-[#c0d4ff] bg-white/5 p-4">
              <p className="m-0 text-white">“我想把知识与美学真实分享出去，让更多人受益。”</p>
              <p className="m-0 italic text-white/80">I want to share knowledge and aesthetics authentically, so that more people can feel and create beauty.</p>
            </blockquote>
          </div>
        </motion.header>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
        >
          <h2 className="text-[#ffdca8] text-lg font-semibold">💡 The Power of Design｜设计的力量</h2>
          <div className="mt-3 grid gap-2">
            <div className="font-medium text-white">设计，不只是形式。它是让人看见、理解、感受、再创造的力量。</div>
            <div className="text-white/75">Design is not just about form — it is the power to see, to understand, to feel, and to create again.</div>
          </div>
          <div className="mt-3 grid gap-2">
            <div className="font-medium text-white">我相信：让更多人都能拥有感受与创造美的能力，才是设计存在的意义。</div>
            <div className="text-white/75">I believe that empowering more people to perceive and create beauty is the true meaning of design.</div>
          </div>
          <div className="mt-3 grid gap-2">
            <div className="font-medium text-white">当知识和美学能够自由分享，世界会因此更柔软，也更自由。</div>
            <div className="text-white/75">When knowledge and aesthetics can be shared freely, the world becomes softer — and freer.</div>
          </div>
        </motion.section>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
        >
          <h2 className="text-[#ffdca8] text-lg font-semibold">🌱 My Belief｜我的信念</h2>
          <div className="mt-3 grid gap-2">
            <div className="font-medium text-white">知识不应该在固步自封的小圈子里流转。真正的价值在于降低门槛，让创造成为每个人的权利。</div>
            <div className="text-white/75">Knowledge should not circulate only within closed circles. True value lies in lowering barriers — making creativity a right that belongs to everyone.</div>
          </div>
          <div className="mt-3 grid gap-2">
            <div className="font-medium text-white">当学习与分享的路径被打开，爱与自由才会真正流动起来。</div>
            <div className="text-white/75">When the paths of learning and sharing are opened, love and freedom begin to flow.</div>
          </div>
        </motion.section>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-6 rounded-2xl border border-dashed border-white/15 bg-white/5 p-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
        >
          <div className="text-white font-semibold">✨ Design for Sharing = Design for Freedom</div>
          <div className="mt-3 text-white/85">To share is to grow. To teach is to love. To create is to connect.</div>
          <div className="text-white/80">分享即成长｜教学即爱｜创造即连接</div>
        </motion.section>
      </main>
    </div>
  );
}