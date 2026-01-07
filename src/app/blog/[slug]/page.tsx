import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/blog";

export function generateStaticParams() {
  return getBlogPosts().map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const date = new Date(post.publishedAt);
  const dateLabel = date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mx-auto w-full max-w-3xl space-y-10">
      <div className="space-y-3">
        <Link className="text-sm font-medium text-amber-700 hover:text-amber-800" href="/blog">
          ← Back to blog
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
          {post.title}
        </h1>
        <div className="flex items-center gap-3 text-xs text-zinc-500">
          <span>{dateLabel}</span>
          <span>•</span>
          <span>{post.readTimeMinutes} min read</span>
        </div>
      </div>

      {post.coverImageSrc ? (
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-zinc-100">
          <Image
            src={post.coverImageSrc}
            alt={post.title}
            fill
            priority
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
            style={post.coverImagePosition ? { objectPosition: post.coverImagePosition } : undefined}
          />
        </div>
      ) : (
        <div className="aspect-[16/9] w-full rounded-2xl bg-zinc-100" aria-hidden="true" />
      )}

      <article className="space-y-5 text-sm leading-7 text-zinc-700">
        {post.content.map((block, idx) => {
          if (block.type === "h2")
            return (
              <h2 key={idx} className="pt-2 text-xl font-semibold text-zinc-950">
                {block.text}
              </h2>
            );
          if (block.type === "p") return <p key={idx}>{block.text}</p>;
          if (block.type === "ul")
            return (
              <ul key={idx} className="list-disc space-y-2 pl-5">
                {block.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            );
          return null;
        })}
      </article>
    </div>
  );
}


