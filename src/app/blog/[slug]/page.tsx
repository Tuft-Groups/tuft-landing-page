import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Helper function to get post data
function getPost(slug: string) {
  const markdownWithMeta = fs.readFileSync(path.join(process.cwd(), "blog_content", slug + ".md"), "utf-8");
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    ...frontmatter,
    content,
    title: frontmatter.title || "",
    desc: frontmatter.desc || "",
    cover_image: frontmatter.cover_image || "",
    date: frontmatter.date || "",
  };
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "blog_content"));
  return files.map((filename) => ({
    slug: filename.replace(".md", ""),
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const { slug } = params;
  const post = getPost(slug);

  return {
    title: post.title,
    description: post.desc,
    openGraph: {
      title: post.title,
      description: post.desc,
      images: [post.cover_image],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.desc,
      images: [post.cover_image],
    },
  };
}

export default async function Post(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const { slug } = params;
  const post = getPost(slug);

  return (
    <>
      <style>
        {`
          #content {
            color: #cbd5e1;
          }
          
          #content p {
            font-size: 1.125rem;
            line-height: 1.8;
            margin-bottom: 1.5rem;
            color: #cbd5e1;
          }

          #content h1 {
            font-size: 2.25rem;
            line-height: 1.2;
            font-weight: 700;
            margin-top: 2.5rem;
            margin-bottom: 1.5rem;
            color: #ffffff;
          }

          #content h2 {
            font-size: 1.875rem;
            line-height: 1.3;
            font-weight: 600;
            margin-top: 2rem;
            margin-bottom: 1rem;
            color: #f8fafc;
          }
          
          #content h3 {
            font-size: 1.5rem;
            line-height: 1.4;
            font-weight: 600;
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
            color: #f8fafc;
          }

          #content h4 {
            font-size: 1.25rem;
            line-height: 1.5;
            font-weight: 600;
            margin-top: 1.5rem;
            margin-bottom: 0.5rem;
            color: #f8fafc;
          }

          #content blockquote {
            border-left: 4px solid #475569;
            padding-left: 1rem;
            font-style: italic;
            color: #94a3b8;
            margin: 1.5rem 0;
          }
          
          #content strong {
            font-weight: 600;
            color: #ffffff;
          }
          
          #content a {
            color: #c084fc;
            text-decoration: underline;
            text-underline-offset: 2px;
          }
          
          #content a:hover {
            color: #d8b4fe;
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
            max-width: 100%;
          }

          #content .table-container {
            max-width: 85vw;
            overflow-x: scroll;
            margin: 1.5rem 0;
          }

          #content th, #content td {
            border: 1px solid #334155;
            padding: 12px;
            text-align: left;
            color: #cbd5e1;
          }

          #content th {
            background-color: rgba(255, 255, 255, 0.05);
            font-weight: bold;
            color: #f8fafc;
          }

          #content tr:nth-child(even) {
            background-color: rgba(255, 255, 255, 0.02);
          }

          #content tr:hover {
            background-color: rgba(255, 255, 255, 0.05);
          }
        `}
      </style>
      <Navbar />

      <main className="flex flex-col items-center max-w-[90vw] md:max-w-[60vw] mx-auto my-12 mt-40">
        <h1 className="text-[30px] md:text-[50px] font-semibold font-alexandria text-center ">{post.title}</h1>
        <span className="text-lg text-[#666] mb-10">On {post.date}</span>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={post.cover_image} alt="cover_photo" className="object-cover mx-auto mb-10" />
        <div id="content" className={`py-[1vh] `}>
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
              table: ({ node, ...props }) => (
                <div className="table-container">
                  <table {...props} />
                </div>
              ),
            }}
          >
            {post.content}
          </Markdown>
        </div>
      </main>

      <Footer />
    </>
  );
}
