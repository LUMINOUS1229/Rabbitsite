import type { NextRequest } from "next/server";

export const dynamic = "force-static";

export function GET(req: NextRequest) {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const content = `User-agent: *
Allow: /
Sitemap: ${site}/sitemap.xml`;
  return new Response(content, {
    headers: { "Content-Type": "text/plain" },
  });
}