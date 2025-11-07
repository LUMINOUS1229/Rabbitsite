import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function GET() {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const items = [
    {
      title: "AIGC 与创作流程",
      link: `${site}/writing`,
      description: "讨论生成式工具如何改变创作工作流。",
      pubDate: new Date().toUTCString(),
    },
    {
      title: "教育游戏的动机设计",
      link: `${site}/writing`,
      description: "探索如何通过动机与反馈提升学习体验。",
      pubDate: new Date().toUTCString(),
    },
    {
      title: "UI·UX 的呼吸感与节奏",
      link: `${site}/writing`,
      description: "从视觉节奏与交互反馈谈设计语言。",
      pubDate: new Date().toUTCString(),
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>修修 Xiuqi Li — Writing</title>
      <link>${site}</link>
      <description>文集 RSS</description>
      ${items
        .map(
          (item) => `
        <item>
          <title><![CDATA[${item.title}]]></title>
          <link>${item.link}</link>
          <description><![CDATA[${item.description}]]></description>
          <pubDate>${item.pubDate}</pubDate>
        </item>`
        )
        .join("")}
    </channel>
  </rss>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}