import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowUpRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tuft Blog - Community Management Tips & Platform Updates",
  description:
    "Discover insights on community building, engagement strategies, and the latest Tuft features. Learn how to better manage your educational, creator, or local community.",
};

const blogs = [
  {
    title: "Introducing Feed: Where Group Updates are never lost",
    date: "1st Aug, 2023",
    cover_photo: "https://pub-3a63e4a193254663a7631829c69adb4a.r2.dev/blog_images/introducing_feed/introducing_feed.png",
    link: "/introducing_feed",
  },
  {
    title: "Introducing Chat: The Heartbeat of Tuft's Group Communication",
    date: "1st Aug, 2023",
    cover_photo: "https://pub-3a63e4a193254663a7631829c69adb4a.r2.dev/blog_images/introducing_chat/introducing_chat.png",
    link: "/introducing_chat",
  },
  {
    title: "Introducing Files. Where Every Document Finds Its Place",
    date: "1st Aug, 2023",
    cover_photo: "https://pub-3a63e4a193254663a7631829c69adb4a.r2.dev/blog_images/introducing_files/introducing_files_cover_image.png",
    link: "/introducing_files",
  },
  {
    title: "Introducing Meetings: Unlimit Your Community Connections",
    date: "1st Aug, 2023",
    cover_photo: "https://pub-3a63e4a193254663a7631829c69adb4a.r2.dev/blog_images/introducing_meetings/introducing_meetings.png",
    link: "/introducing_meetings",
  },
  {
    title: "UPSC Study Group Management: How Tuft Transforms the Experience",
    date: "1st Aug, 2023",
    cover_photo: "assets/blog_images/upsc-study-group/cover_photo.png",
    link: "/upsc-study-group",
  },
  {
    title: "Google Drive Alternative: Tuft Folder Link",
    date: "13th Jun, 2025",
    cover_photo: "assets/blog_images/google-drive-alternative/cover_photo.png",
    link: "/google-drive-alternative",
  },
  // {
  //   title: "Level up your coaching academy with Tuft.",
  //   date: "15th Aug, 2023",
  //   cover_photo: "assets/blog_images/levelup_your_coaching_academy_with_tuft/cover_photo.png",
  //   link: "/levelup_your_coaching_academy_with_tuft",
  // },
  // {
  //   title: "Embracing the Future: The Importance of Tech-Enabled Clubs",
  //   date: "15th Aug, 2023",
  //   cover_photo: "assets/blog_images/importance_of_tech_enabled_clubs/cover_photo.png",
  //   link: "/importance_of_tech_enabled_clubs",
  // },
  // {
  //   title: "How to Effectively Manage your Community?",
  //   date: "11th Aug, 2023",
  //   cover_photo: "assets/blog_images/how_to_effectively_manage_your_community/cover_photo.png",
  //   link: "/how_to_effectively_manage_your_community",
  // },
  // {
  //   title: "How is Tuft better than WhatsApp Groups?",
  //   date: "07th Aug, 2023",
  //   cover_photo: "assets/blog_images/tuft_vs_whatsapp/cover_photo.png",
  //   link: "/tuft_vs_whatsapp",
  // },
  // {
  //   title: "Manage your Tuition Centre like never before",
  //   date: "1st Aug, 2023",
  //   cover_photo: "assets/blog_images/manage_your_tuition_centre/cover_photo.jpg",
  //   link: "/manage_tuition_centre_like_never_before",
  // },
];

export default function BlogPage() {
  return (
    <main className="relative z-10 min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-alexandria bg-gradient-to-r from-[#FF69B4] to-[#6665C0] bg-clip-text text-transparent font-bold pb-2">
              Blog
            </h1>
            <h2 className="text-2xl font-medium mt-4 text-white/80">Explore Latest Features, Case Studies and Use Cases of Tuft</h2>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => {
              // Ensure local assets start with /
              const imageSrc =
                blog.cover_photo.startsWith("http") || blog.cover_photo.startsWith("/") ? blog.cover_photo : `/${blog.cover_photo}`;

              return (
                <a
                  key={index}
                  href={"/blog" + blog.link}
                  className="glass-card group relative flex flex-col rounded-[10px] overflow-hidden tap-active h-full"
                >
                  {/* Image Section */}
                  <div className="relative h-[240px] w-full overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imageSrc}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050214] to-transparent opacity-60"></div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-tuft-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none" />

                  {/* Decoration */}
                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 bg-white/10 p-2 rounded-full backdrop-blur-md">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>

                  <div className="relative z-10 p-[15px] flex-1 flex flex-col justify-between">
                    <h2 className="text-[20px] font-semibold text-white mb-[5px] leading-snug group-hover:text-tuft-pink transition-colors duration-300">
                      {blog.title}
                    </h2>
                    <span className="text-[15px] text-[#a9a9a9] font-mono tracking-wider">{blog.date}</span>

                    <div className="mt-4 flex items-center text-sm font-medium text-tuft-purple opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      Read Article <ArrowUpRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
