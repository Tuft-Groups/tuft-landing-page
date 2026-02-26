import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

import { Metadata } from "next";
import { notFound } from "next/navigation";

export const runtime = "edge";

interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  cover_image: string | null;
  cover_image_url: string | null;
  created_at: string;
  is_published: boolean;
}

async function getPost(slug: string): Promise<Blog | null> {
  try {
    const res = await fetch("http://localhost:8080/blogs/slug/" + slug, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;
    const data = await res.json();
    return data.data || null;
  } catch (error) {
    console.error("Failed to fetch blog post:", error);
    return null;
  }
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const { slug } = params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.content.replace(/<[^>]*>/g, "").substring(0, 160),
    openGraph: {
      title: post.title,
      description: post.content.replace(/<[^>]*>/g, "").substring(0, 160),
      images: post.cover_image_url ? [post.cover_image_url] : [],
      type: "article",
    },
    metadataBase: new URL("https://tuft.in"),
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.content.replace(/<[^>]*>/g, "").substring(0, 160),
      images: post.cover_image_url ? [post.cover_image_url] : [],
    },
  };
}

export default async function Post(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const { slug } = params;
  const post = await getPost(slug);

  if (!post) notFound();

  const formattedDate = new Date(post.created_at).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="min-h-screen bg-slate-950 font-sans selection:bg-tuft-purple/30">
      <Navbar />

      <article className="pt-40 pb-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white font-alexandria tracking-tight leading-tight">{post.title}</h1>
            <div className="flex items-center justify-center gap-4 text-slate-500 font-mono text-sm">
              <span>Published on {formattedDate}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
              <span>5 min read</span>
            </div>
          </div>

          {/* Cover Image */}
          {post.cover_image_url && (
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img src={post.cover_image_url} alt={post.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 to-transparent" />
            </div>
          )}

          {/* Content */}

          <div
            className="tiptap-editor prose prose-slate dark:prose-invert max-w-none text-lg leading-relaxed text-slate-300
                prose-headings:text-white prose-headings:font-black prose-headings: py-4
                prose-p:text-slate-400 prose-p:leading-relaxed
                prose-strong:text-white
                prose-blockquote:border-l-tuft-purple prose-blockquote:bg-white/5 prose-blockquote:rounded-r-2xl prose-blockquote:py-2 prose-blockquote:px-6
                prose-img:rounded-3xl prose-img:shadow-2xl
                prose-code:text-tuft-pink prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md
                prose-table:border prose-table:border-white/10
                prose-th:bg-white/5 prose-th:text-white prose-th:px-4 prose-th:py-4
                prose-td:border-white/5 prose-td:px-4 prose-td:py-3"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      <Footer />
    </main>
  );
}
