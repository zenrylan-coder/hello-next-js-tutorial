import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPost, posts, type ContentBlock } from "../posts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "文章未找到" };
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const currentIndex = posts.findIndex((p) => p.slug === post.slug);
  const prev = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const next =
    currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <main className="min-h-screen bg-white px-6 py-24 text-black">
      <article className="mx-auto flex max-w-3xl flex-col">
        <Link
          href="/blog"
          className="mb-12 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-black"
        >
          ← 返回博客列表
        </Link>

        <header className="mb-12 border-b border-black/10 pb-12">
          <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-gray-500">
            <span>{post.type === "next" ? "Next.js" : "Article"}</span>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {post.title}
          </h1>
          <p className="mb-8 text-lg leading-8 text-gray-600">
            {post.description}
          </p>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-xs font-semibold text-white">
              {post.author.slice(0, 1).toUpperCase()}
            </span>
            <span className="font-medium text-black">{post.author}</span>
            <span>·</span>
            <time dateTime={post.date}>{post.date}</time>
          </div>
        </header>

        <div className="flex flex-col gap-6">
          {post.content.map((block, idx) => (
            <Block key={idx} block={block} />
          ))}
        </div>

        <nav className="mt-20 grid gap-4 border-t border-black/10 pt-10 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/blog/${prev.slug}`}
              className="group flex flex-col gap-1 rounded-sm border border-black/20 p-5 transition hover:border-black"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
                ← 上一篇
              </span>
              <span className="text-base font-semibold group-hover:underline">
                {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/blog/${next.slug}`}
              className="group flex flex-col gap-1 rounded-sm border border-black/20 p-5 text-right transition hover:border-black sm:items-end"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
                下一篇 →
              </span>
              <span className="text-base font-semibold group-hover:underline">
                {next.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
        </nav>

        <Link
          href="/"
          className="mt-12 self-center rounded-full bg-black px-8 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          返回首页
        </Link>
      </article>
    </main>
  );
}

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-6 text-2xl font-bold tracking-tight">{block.text}</h2>
      );
    case "p":
      return (
        <p className="text-base leading-8 text-gray-700">{block.text}</p>
      );
    case "list":
      return (
        <ul className="flex list-disc flex-col gap-2 pl-6 text-base leading-8 text-gray-700 marker:text-black">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="border-l-2 border-black pl-5 text-base italic leading-8 text-gray-600">
          {block.text}
        </blockquote>
      );
    case "code":
      return (
        <pre className="overflow-x-auto rounded-sm border border-black/10 bg-zinc-50 p-5 font-mono text-sm leading-7 text-black">
          {block.lang && (
            <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-gray-500">
              {block.lang}
            </span>
          )}
          <code>{block.text}</code>
        </pre>
      );
    default:
      return null;
  }
}
