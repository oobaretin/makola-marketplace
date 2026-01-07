import { BlogCard } from "@/components/BlogCard";
import { getBlogPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog",
};

export default function BlogIndexPage() {
  const posts = getBlogPosts();

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950">Blog</h1>
        <p className="max-w-2xl text-sm leading-7 text-zinc-600">
          Tips for planning your shopping list, pantry basics, and in-store strategies.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <BlogCard key={p.slug} post={p} />
        ))}
      </div>
    </div>
  );
}





