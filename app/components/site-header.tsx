"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "首页" },
  { href: "/blog", label: "博客" },
  { href: "/about", label: "关于" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/[.06] bg-white/80 backdrop-blur dark:border-white/[.08] dark:bg-black/80">
      <nav className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-6 sm:px-8">
        <Link
          href="/"
          aria-label="返回首页"
          className="flex items-center gap-2"
        >
          <Image
            src="/next.svg"
            alt="Next.js"
            width={80}
            height={16}
            className="dark:invert"
            priority
          />
        </Link>

        <ul className="flex items-center gap-1 text-sm font-medium">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-full px-3 py-1.5 transition-colors ${
                    isActive
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
