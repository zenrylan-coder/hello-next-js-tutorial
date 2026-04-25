import Link from "next/link";
import type { Metadata } from "next";
import { fetchPosts } from "./posts";
import { BlogCard } from "@/src/components/blog-card";

export const metadata: Metadata = {
  title: "博客文章",
  description: "Next.js 博客文章展示页面",
};

export default async function BlogPage() {
  const posts = await fetchPosts();

  return (
    <main className="min-h-screen bg-white px-6 py-24 text-black">
      <section className="mx-auto flex max-w-5xl flex-col items-center">
        <h1 className="mb-10 text-center text-3xl font-bold tracking-tight">
          博客文章
        </h1>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <Link
          href="/"
          className="mt-10 rounded-full bg-black px-8 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          返回首页
        </Link>
      </section>
    </main>
  );
}
