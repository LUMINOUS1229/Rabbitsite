# 下一步改什么（维护任务清单）

本清单帮助你继续完善与发布网站。

## 环境与配置
- 替换 Plausible 的 `data-domain` 为你的域名（见 `src/app/layout.tsx`）。
- 在 `.env` 增加 `NEXT_PUBLIC_SITE_URL=https://你的域名`（用于 sitemap / RSS）。

## 内容与信息架构
- 在 `src/app/work/[slug]/page.tsx` 中替换占位为真实内容或改用 MDX 数据源。
- 在 `src/app/writing/page.tsx` 中填充三篇摘要与全文链接。
- 主页 `src/app/page.tsx` 的四个入口卡片可替换摘要与链接。

## 表单与分析
- 在 `src/app/contact/page.tsx` 将 Formspree `yourFormId` 替换为你的表单 ID。
- 验证 Plausible 是否正确采集（部署到 Vercel 后查看仪表板）。

## 多语言（i18n）
- 采用路径式 i18n：将 `src/app` 迁移为 `src/app/[lang]` 路由组，并使用 `next-intl` 管理文案。
- 初期可仅支持 `zh` 与 `en` 两种语言。

## 视觉与组件
- 按 DESIGN.md 继续丰富组件：卡片、按钮、图标、Skeleton、标签等。
- 自托管思源黑体（或继续使用 Noto Sans SC 作为替代）。

## SEO 与分享
- 为各页面添加 `generateMetadata`，配置 `title` 与 `description`。
- 替换 OG 图生成模板中的文案与风格（`app/opengraph-image.tsx`）。

## 部署上线
- 在 Vercel 选择 `rabbitsite` 项目目录并创建项目，一键部署。
- 绑定自定义域名，开启自动部署（连接 GitHub 仓库）。

## 可访问性
- 检查对比度与键盘导航，完善跳转链接与 ARIA。

## 内容数据（可选进阶）
- 如果坚持使用 Contentlayer：需降级 Next 到 v13 以兼容 `next-contentlayer`，或改用替代方案（如 MDX + `@next/mdx` 或 Velite）。