import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { trackPageVisit } from "@/utils/track-page-visit";
import Head from "next/head";

export const runtime = "experimental-edge";

export async function getServerSideProps(context: any) {
  const { req } = context;
  await trackPageVisit(req);
  return { props: {} };
}

export default function Blog() {
  return (
    <>
      <Head>
        <title>Tuft Blog - Community Management Tips & Platform Updates</title>
        <meta
          name="description"
          content="Discover insights on community building, engagement strategies, and the latest Tuft features. Learn how to better manage your educational, creator, or local community."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className="mt-5 p-[2vw]">
        <div className="px-[4vw]">
          <h1 className="text-5xl font-alexandria bg-gradient-to-r from-[#FF69B4] to-[#6665C0] bg-clip-text text-transparent font-bold">
            Blog
          </h1>
          <h2 className="text-2xl font-medium mt-4">Explore Latest Features, Case Studies and Use Cases of Tuft</h2>
          <div className="h-[50px]"></div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <div key={index} className="w-full h-full">
                <a href={"/blog" + blog.link} className="h-full block">
                  <div className="border-2 border-[#dad8d8] rounded-[10px] text-left h-full flex flex-col">
                    <img src={blog.cover_photo} className="w-full h-[240px] object-cover rounded-t-[10px]" />
                    <div className="p-[15px] flex-1 flex flex-col justify-between">
                      <h2 className="text-[20px] font-semibold mb-[5px] text-black">{blog.title}</h2>
                      <span className="text-[15px] text-[#a9a9a9]">{blog.date}</span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const blogs = [
  {
    title: "Introducing Feed: Where Group Updates are never lost",
    date: "1st Aug, 2023",
    cover_photo:
      "https://pub-3a63e4a193254663a7631829c69adb4a.r2.dev/blog_images/introducing_feed/introducing_feed.png",
    link: "/introducing_feed",
  },
  {
    title: "Introducing Chat: The Heartbeat of Tuft's Group Communication",
    date: "1st Aug, 2023",
    cover_photo:
      "https://pub-3a63e4a193254663a7631829c69adb4a.r2.dev/blog_images/introducing_chat/introducing_chat.png",
    link: "/introducing_chat",
  },
  {
    title: "Introducing Files. Where Every Document Finds Its Place",
    date: "1st Aug, 2023",
    cover_photo:
      "https://pub-3a63e4a193254663a7631829c69adb4a.r2.dev/blog_images/introducing_files/introducing_files_cover_image.png",
    link: "/introducing_files",
  },
  {
    title: "Introducing Meetings: Unlimit Your Community Connections",
    date: "1st Aug, 2023",
    cover_photo:
      "https://pub-3a63e4a193254663a7631829c69adb4a.r2.dev/blog_images/introducing_meetings/introducing_meetings.png",
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
