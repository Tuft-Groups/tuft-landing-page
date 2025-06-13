import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { trackPageVisit } from "@/utils/track-page-visit";
import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import path from "path";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const runtime = "experimental-edge";

export async function getServerSideProps(context: any) {
  const { params, req } = context;
  const { slug } = params;

  // Track page visit
  await trackPageVisit(req);

  const markdownWithMeta = fs.readFileSync(path.join("blog_content", slug + ".md"), "utf-8");

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      post: {
        ...frontmatter,
        content: content,
      },
    },
  };
}

export default function Post(props: {
  post: { title: string; desc: string; content: string; cover_image: string; date: string };
}) {
  return (
    <>
      <style>
        {`
          #content * {
              font-size: 20px;
          }

          #content h1, #content h2, #content h3, #content h4, #content h5, #content h6 {
            margin: 0.65rem 0;
            font-size: revert;
          }
          
          #content img {
            margin: 2.5rem 0;
          }

          #content ul {
            list-style-type: disc;
            margin: 1rem 0;
            padding-left: 2rem;
          }

          #content ol {
            list-style-type: decimal;
            margin: 1rem 0;
            padding-left: 2rem;
          }

          #content li {
            margin: 0.5rem 0;
          }

          #content table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.5rem 0;
          }

          #content th, #content td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
          }

          #content th {
            background-color: #f5f5f5;
            font-weight: bold;
          }

          #content tr:nth-child(even) {
            background-color: #f9f9f9;
          }

          #content tr:hover {
            background-color: #f5f5f5;
          }
        `}
      </style>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.desc} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={props.post.title} />
        <meta property="og:description" content={props.post.desc} />
        <meta property="og:image" content={props.post.cover_image} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={props.post.title} />
        <meta property="twitter:description" content={props.post.desc} />
        <meta property="twitter:image" content={props.post.cover_image} />
      </Head>
      <Header isHeaderWhite={true} />

      <main className="flex flex-col items-center max-w-[90vw] md:max-w-[60vw] mx-auto my-12">
        <h1 className="text-[30px] md:text-[50px] font-semibold font-alexandria text-center ">{props.post.title}</h1>
        <span className="text-lg text-[#666] mb-10">On {props.post.date}</span>

        <img src={props.post.cover_image} alt="cover_photo" sizes="100vw" className="object-cover mx-auto mb-10" />
        <div id="content" className={`py-[1vh] `}>
          <Markdown remarkPlugins={[remarkGfm]}>{props.post.content}</Markdown>
        </div>
      </main>

      <Footer />
    </>
  );
}
