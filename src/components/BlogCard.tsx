import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  const date = new Date(post.publishedAt);
  const dateLabel = date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      {post.coverImageSrc ? (
        <div className="relative aspect-[16/9] w-full bg-zinc-100">
          <Image
            src={post.coverImageSrc}
            alt={post.title}
            fill
            sizes="(min-width: 1024px) 360px, (min-width: 768px) 45vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            style={post.coverImagePosition ? { objectPosition: post.coverImagePosition } : undefined}
          />
        </div>
      ) : (
        <div className="aspect-[16/9] w-full bg-zinc-100" aria-hidden="true" />
      )}
      <div className="p-5">
        <div className="flex items-center justify-between gap-3 text-xs text-zinc-500">
          <span>{dateLabel}</span>
          <span>{post.readTimeMinutes} min read</span>
        </div>
        <div className="mt-2 line-clamp-2 text-base font-semibold text-zinc-950">
          {post.title}
        </div>
        <div className="mt-2 line-clamp-3 text-sm text-zinc-600">{post.excerpt}</div>
        {post.coverHint ? (
          <div className="mt-4 text-xs text-zinc-500">{post.coverHint}</div>
        ) : null}
      </div>
    </Link>
  );
}



