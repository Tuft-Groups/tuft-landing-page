import Footer from "@/components/Footer";
import Header from "@/components/Header";
import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

export default function Post(props: {
  post: { title: string; desc: string; content: string; cover_image: string; date: string };
}) {
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
      <Header isHeaderWhite={true} />
      <div className="mt-20" />
      <div className="text-center">
        <h1 className="px-[5vw] md:px-[15vw] text-[30px] md:text-[50px] font-semibold font-alexandria">
          {props.post.title}
        </h1>

        <span className="text-lg text-[#666]">On {props.post.date}</span>
        <div className="mt-20" />
        <img
          src={props.post.cover_image}
          alt="cover_photo"
          sizes="100vw"
          className="object-cover max-w-[60vw] mx-auto mb-10"
        />
      </div>
      <div
        className={`px-[12vw] md:px-[15vw] py-[1vh] leading-relaxed text-lg`}
        dangerouslySetInnerHTML={{ __html: props.post.content }}
      ></div>
      <div className="text-center">
        <span>
          Know more about Tuft <Link href="/">here</Link>
        </span>
      </div>
      <div className="mt-20" />
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
