import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - 页面未找到",
  description: "抱歉，你访问的页面不存在或已被移除。",
};

const suggestions = [
  {
    title: "返回首页",
    description: "回到主页，重新开始浏览。",
    href: "/",
  },
  {
    title: "了解 Next.js",
    description: "看看这个项目使用的框架介绍。",
    href: "/about",
  },
  {
    title: "查看文档",
    description: "前往 Next.js 官方文档寻找答案。",
    href: "https://nextjs.org/docs",
  },
];

export default function NotFound() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col gap-12 py-24 px-8 sm:px-16 bg-white dark:bg-black">
        <header className="flex flex-col gap-6">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-7xl font-semibold tracking-tight text-black dark:text-zinc-50 sm:text-8xl">
              404
            </span>
            <span className="rounded-full border border-black/[.08] px-3 py-1 font-mono text-xs uppercase tracking-wider text-zinc-500 dark:border-white/[.145] dark:text-zinc-400">
              Not Found
            </span>
          </div>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50 sm:text-4xl">
            这里好像什么也没有。
          </h1>
          <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            你访问的页面可能已被移动、重命名或从未存在过。请检查链接是否正确，或从下方的入口继续浏览。
          </p>
        </header>

        <section className="flex flex-col gap-4">
          <h2 className="text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            你可能在找
          </h2>
          <ul className="flex flex-col divide-y divide-black/[.08] rounded-2xl border border-black/[.08] dark:divide-white/[.145] dark:border-white/[.145]">
            {suggestions.map((item) => {
              const isExternal = item.href.startsWith("http");
              const content = (
                <div className="flex items-center justify-between gap-4 p-5 transition-colors hover:bg-black/[.02] dark:hover:bg-white/[.04]">
                  <div className="flex flex-col gap-1">
                    <span className="text-base font-medium text-black dark:text-zinc-50">
                      {item.title}
                    </span>
                    <span className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      {item.description}
                    </span>
                  </div>
                  <span
                    aria-hidden
                    className="font-mono text-zinc-400 transition-transform group-hover:translate-x-0.5 dark:text-zinc-500"
                  >
                    →
                  </span>
                </div>
              );

              return (
                <li key={item.href} className="group">
                  {isExternal ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    <Link href={item.href} className="block">
                      {content}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </section>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Link
            className="flex h-12 w-full items-center justify-center rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] sm:w-auto sm:min-w-[160px]"
            href="/"
          >
            返回首页
          </Link>
          <Link
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] sm:w-auto sm:min-w-[160px]"
            href="/about"
          >
            了解项目
          </Link>
        </div>
      </main>
    </div>
  );
}
