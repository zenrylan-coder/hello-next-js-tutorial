import Link from "next/link";
import type { Post } from "@/app/blog/posts";

type BlogCardProps = {
  post: Post;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="relative flex min-h-[250px] flex-col justify-between overflow-hidden rounded-sm border border-black/30 bg-white p-8 transition hover:border-black">
      {post.type === "next" && (
        <div className="pointer-events-none absolute left-6 top-4 select-none text-[150px] font-black leading-none tracking-[-0.12em] text-black">
          NEXT
        </div>
      )}

      <div className="relative z-10 mt-auto">
        <h2 className="mb-3 text-xl font-bold">{post.title}</h2>
        <p className="mb-8 max-w-md text-sm leading-6 text-gray-500">
          {post.description}
        </p>

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">{post.date}</span>
          <Link
            href={`/blog/${post.slug}`}
            className="font-medium text-blue-600 hover:text-blue-800"
          >
            阅读更多 →
          </Link>
        </div>
      </div>
    </article>
  );
}
