import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于 Next.js",
  description: "了解 Next.js —— 用于生产环境的 React 框架。",
};

const features = [
  {
    title: "App Router",
    description:
      "基于 React Server Components 的全新路由系统，支持嵌套布局、流式渲染与服务器端数据获取。",
  },
  {
    title: "服务端渲染 (SSR) 与静态生成 (SSG)",
    description:
      "在同一个项目中混合使用 SSR、SSG、ISR 和客户端渲染，按页面粒度选择最合适的渲染策略。",
  },
  {
    title: "文件系统路由",
    description:
      "在 app/ 目录下新建文件夹即可创建路由，无需手动配置，约定优于配置。",
  },
  {
    title: "内置优化",
    description:
      "图片、字体、脚本、CSS 自动优化；代码分割、预取、缓存全部开箱即用。",
  },
  {
    title: "API Routes 与 Server Actions",
    description:
      "在同一个代码库内编写后端逻辑，无需单独搭建 Node.js 服务即可处理表单、数据库与认证。",
  },
  {
    title: "无缝部署",
    description:
      "由 Vercel 团队打造，一键部署到全球边缘网络，也可在任何 Node.js 环境中自托管。",
  },
];

const timeline = [
  { year: "2016", event: "Next.js 1.0 发布，首次提出 SSR React 框架的理念。" },
  { year: "2020", event: "Next.js 9.5 引入增量静态再生 (ISR)。" },
  { year: "2022", event: "Next.js 13 推出 App Router 与 React Server Components。" },
  { year: "2024+", event: "Turbopack、Partial Prerendering 等持续演进中。" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col gap-16 py-24 px-8 sm:px-16 bg-white dark:bg-black">
        <header className="flex flex-col gap-6">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={120}
            height={24}
            priority
          />
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
            什么是 Next.js？
          </h1>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Next.js 是由{" "}
            <a
              href="https://vercel.com"
              className="font-medium text-zinc-950 underline-offset-4 hover:underline dark:text-zinc-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel
            </a>{" "}
            维护的开源 React 框架，用于构建高性能的全栈 Web
            应用。它把渲染、路由、数据获取、打包优化等能力整合在一起，让开发者专注于产品本身。
          </p>
        </header>

        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
            核心特性
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="flex flex-col gap-2 rounded-2xl border border-black/[.08] p-5 transition-colors hover:bg-black/[.02] dark:border-white/[.145] dark:hover:bg-white/[.04]"
              >
                <h3 className="text-base font-medium text-black dark:text-zinc-50">
                  {feature.title}
                </h3>
                <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
            发展历程
          </h2>
          <ol className="flex flex-col gap-4 border-l border-black/[.08] pl-6 dark:border-white/[.145]">
            {timeline.map((item) => (
              <li key={item.year} className="flex flex-col gap-1">
                <span className="font-mono text-sm text-zinc-500 dark:text-zinc-400">
                  {item.year}
                </span>
                <span className="text-base text-black dark:text-zinc-50">
                  {item.event}
                </span>
              </li>
            ))}
          </ol>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
            适合谁？
          </h2>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
            从个人博客、营销站点，到电商、SaaS、企业级仪表盘，Next.js
            都能胜任。它对 SEO 友好、首屏速度快，并提供了从原型到生产所需的全部基础设施。
          </p>
        </section>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] sm:w-auto sm:min-w-[180px]"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            阅读官方文档
          </a>
          <Link
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] sm:w-auto sm:min-w-[180px]"
            href="/"
          >
            返回首页
          </Link>
        </div>
      </main>
    </div>
  );
}
