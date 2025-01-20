import Footer from "@/components/utils/footer";
import NavHeader from "@/components/utils/header";
import { Space } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

export default function Post(props: { post: { title: string; desc: string; content: string; cover_image: string; date: string } }) {
  const { width } = useViewportSize();
  const isMobile = width < 900;

  return (
    <>
      <style jsx global>
        {`
          p img {
            max-height: 800px;
            max-width: 100%;
            display: block;
            margin: auto;
          }
        `}
      </style>
      {/*  */}
      <Head>
        <title>{props.post.title}</title>
        <meta property="og:title" content={props.post.title} />
        <meta property="og:description" content={props.post.desc} />
        <meta property="og:image" content={props.post.cover_image} />
      </Head>
      <NavHeader />
      <Space h={20} />
      <center>
        <h1 style={{ padding: isMobile ? "0px 5vw" : "0px 15vw", fontSize: isMobile ? "30px" : "50px" }}>{props.post.title}</h1>
        <Space h={10} />
        <span style={{ fontSize: "18px", color: "#666" }}>On {props.post.date}</span>
        <Space h={20} />
        <img src={props.post.cover_image} alt="cover_photo" sizes="100vw" style={{ objectFit: "cover", maxWidth: "60vw" }} />
      </center>
      <div style={{ padding: isMobile ? "1vh 10vw" : "1vh 15vw", lineHeight: "1.5", fontSize: "18px" }} dangerouslySetInnerHTML={{ __html: props.post.content }}></div>
      <center>
        <span>
          Know more about Tuft <Link href="/">here</Link>
        </span>
      </center>
      <Space h={20} />
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("blog_content"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: any) {
  const markdownWithMeta = fs.readFileSync(path.join("blog_content", slug + ".md"), "utf-8");

  const { data: frontmatter, content } = matter(markdownWithMeta);

  const result = await remark().use(html).process(content);
  const contentHtml = result.toString();

  return {
    props: {
      post: {
        ...frontmatter,
        content: contentHtml,
      },
    },
  };
}
