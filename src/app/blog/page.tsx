import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { Metadata } from "next";
import { API_URLS } from "@/config/api_urls";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tuft Blog - Community Management Tips & Platform Updates",
  description:
    "Discover insights on community building, engagement strategies, and the latest Tuft features. Learn how to better manage your educational, creator, or local community.",
};

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

async function getBlogs(): Promise<Blog[]> {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/blogs", {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!res.ok) return [];
    const data = await res.json();

    return data.data || [];
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return [];
  }
}

export default async function BlogPage() {
  const allBlogs = await getBlogs();

  return (
    <main className="relative z-10 min-h-screen flex flex-col bg-slate-950 font-sans">
      <Navbar />

      <div className="grow pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-alexandria bg-linear-to-r from-[#FF69B4] to-[#6665C0] bg-clip-text text-transparent font-bold pb-2 tracking-tight">
              Blog
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Explore Latest Features, Case Studies and Use Cases of Tuft
            </h2>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allBlogs.map((blog) => {
              const formattedDate = new Date(blog.created_at).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              });

              return (
                <Link
                  key={blog.id}
                  href={`/blog/${blog.slug}`}
                  className="glass-card group relative flex flex-col rounded-3xl overflow-hidden tap-active h-full border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-500"
                >
                  {/* Image Section */}
                  <div className="relative h-[240px] w-full overflow-hidden">
                    {blog.cover_image_url ? (
                      <img
                        src={blog.cover_image_url}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                        <BookOpen className="w-12 h-12 text-slate-600" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 to-transparent opacity-60"></div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-tuft-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none" />

                  {/* Top-Right Arrow Indicator */}
                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 bg-white/10 p-2 rounded-2xl backdrop-blur-md border border-white/20">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>

                  <div className="relative z-10 p-6 flex-1 flex flex-col justify-between">
                    <h2 className="text-2xl font-bold text-white mb-1 leading-snug group-hover:text-tuft-pink transition-colors duration-300">
                      {blog.title}
                    </h2>

                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-sm text-slate-500 font-mono tracking-wider">{formattedDate}</span>
                      <div className="flex items-center text-sm font-semibold text-tuft-purple opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                        Read More <ArrowUpRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {allBlogs.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">No blogs published yet.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
