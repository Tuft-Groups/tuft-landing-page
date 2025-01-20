import Footer from "@/components/utils/footer";
import NavHeader from "@/components/utils/header";
import styles from "@/styles/blog.module.scss";
import { Grid, Space } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import Head from "next/head";
import { useState } from "react";

export default function Blog() {
  const { width } = useViewportSize();

  const isMobile = width < 900;
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <>
      <Head>
        <title>Blog | Tuft</title>
        <meta name="description" content="Manage your communities like never before" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavHeader />
      <Space h={20} />
      <div className={styles.blog_layout}>
        <div className={styles.blog_layout_content}>
          <h2 className="heading_text">Blog</h2>
          <h3>Explore Latest Features, Case Studies and Use Cases of Tuft</h3>
          <Space h={50} />
          <Grid>
            {blogs.map((blog, index) => (
              <Grid.Col key={index} lg={4} md={12}>
                <a href={"/blog/" + blog.link}>
                  <div className={styles.blog_card}>
                    <img src={blog.cover_photo} style={{ objectFit: "cover" }} />
                    <div>
                      <h2>{blog.title}</h2>
                      <span>{blog.date}</span>
                    </div>
                  </div>
                </a>
              </Grid.Col>
            ))}
          </Grid>
        </div>
      </div>
      <Footer />
    </>
  );
}

const blogs = [
  {
    title: "Level up your coaching academy with Tuft.",
    date: "15th Aug, 2023",
    cover_photo: "assets/blog_images/levelup_your_coaching_academy_with_tuft/cover_photo.png",
    link: "/levelup_your_coaching_academy_with_tuft",
  },
  {
    title: "Embracing the Future: The Importance of Tech-Enabled Clubs",
    date: "15th Aug, 2023",
    cover_photo: "assets/blog_images/importance_of_tech_enabled_clubs/cover_photo.png",
    link: "/importance_of_tech_enabled_clubs",
  },
  {
    title: "How to Effectively Manage your Community?",
    date: "11th Aug, 2023",
    cover_photo: "assets/blog_images/how_to_effectively_manage_your_community/cover_photo.png",
    link: "/how_to_effectively_manage_your_community",
  },
  {
    title: "How is Tuft better than WhatsApp Groups?",
    date: "07th Aug, 2023",
    cover_photo: "assets/blog_images/tuft_vs_whatsapp/cover_photo.png",
    link: "/tuft_vs_whatsapp",
  },
  {
    title: "Manage your Tuition Centre like never before",
    date: "1st Aug, 2023",
    cover_photo: "assets/blog_images/manage_your_tuition_centre/cover_photo.jpg",
    link: "/manage_tuition_centre_like_never_before",
  },
  {
    title: "Introducing Feed: Where Announcements Shine",
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
    title: "Introducing Meetings: How Tuft Revolutionizes Group Communication",
    date: "1st Aug, 2023",
    cover_photo: "https://pub-3a63e4a193254663a7631829c69adb4a.r2.dev/blog_images/introducing_meetings/introducing_meetings.png",
    link: "/introducing_meetings",
  },

  // {
  //   title: "Manage your Tuition Centre like never before",
  //   date: "28th June, 2000",
  //   cover_photo: "assets/blog_images/manage_your_tuition_centre/cover_photo.jpg",
  //   link: "/blog/manage_tuition_centre_like_never_before",
  // },
];
