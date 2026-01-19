import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import ReactMarkdown from "react-markdown";
import { NO_AVATAR_IMAGE } from "@/lib/constants";
import { notFound } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Define the interface for the group data
interface Group {
  id: string;
  name: string;
  description: string;
  short_description: string;
  avatar: string;
  cover_image_url: string;
  amount?: number;
}

interface Props {
  params: Promise<{
    id: string;
  }>;
}

// Data fetching function
async function getGroup(id: string): Promise<Group | null> {
  try {
    const res = await fetch(`https://tuft-core-wq7gvvjxpa-el.a.run.app/groups/${id}/preview`, {
      next: { revalidate: 0 },
    });

    if (!res.ok) return null;

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Failed to fetch group:", error);
    return null;
  }
}

// Generate Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const group = await getGroup(id);

  if (!group) {
    return {
      title: "Group Not Found",
    };
  }

  return {
    title: group.name,
    description: group.short_description,
    openGraph: {
      title: group.name,
      description: group.short_description,
      images: [group.avatar || NO_AVATAR_IMAGE],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: group.name,
      description: group.short_description,
      images: [group.avatar || NO_AVATAR_IMAGE],
    },
  };
}

// Component
export default async function GroupPage({ params }: Props) {
  const { id } = await params;
  const group = await getGroup(id);

  if (!group) {
    return (
      <main className="min-h-screen relative z-10 flex flex-col font-sans">
        <div className="grow flex items-center justify-center p-4">
          <div className="glass-card max-w-md w-full p-8 rounded-3xl flex flex-col items-center text-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 border border-white/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-50"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4" />
                <path d="M12 16h.01" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white mb-2">Group Not Found</h1>
              <p className="text-slate-400">The group you are looking for doesn&apos;t exist or the link might be broken.</p>
            </div>
            <Link href="/" className="btn-premium px-8 py-3 rounded-xl font-bold tap-active text-black hover:text-black">
              Return Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen relative z-10 flex flex-col font-sans">
      <div className="grow pt-32 pb-20 px-4 flex items-center justify-center">
        <div className="glass-card w-full max-w-[480px] rounded-3xl overflow-hidden p-1">
          <div className="bg-slate-900/40 rounded-[20px] overflow-hidden">
            {/* Header Image */}
            <div className="relative h-48 w-full bg-slate-800">
              {group.cover_image_url ? (
                <img src={group.cover_image_url} alt="Group cover" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-linear-to-br from-tuft-purple/20 to-tuft-pink/20" />
              )}

              {/* Avatar */}
              <div className="absolute -bottom-10 left-8">
                <div className="p-1.5 rounded-2xl bg-tuft-dark glass-card inline-block">
                  <img src={group.avatar || NO_AVATAR_IMAGE} alt="Group logo" className="size-20 rounded-xl object-cover bg-slate-800" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="pt-14 px-8 pb-8 flex flex-col gap-6">
              <div>
                <h1 className="text-2xl font-bold text-white mb-2">{group.name}</h1>
                <div>
                  <ReactMarkdown>{group.description || group.short_description}</ReactMarkdown>
                </div>
              </div>

              <a
                href={`https://app.tuft.in/group/${group.id}`}
                className="btn-premium w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 tap-active text-center"
              >
                Join Group {group.amount ? ` • ₹${group.amount}` : ""}
              </a>

              <div className="flex items-center justify-center gap-2 opacity-60">
                <span className="text-slate-500 text-xs">Powered by</span>
                <img
                  src="https://media.tuft.in/long_logo.webp"
                  alt="Tuft"
                  width={30}
                  className="grayscale hover:grayscale-0 transition-all opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
