import { Button } from "@/components/ui/button";
import { NO_AVATAR_IMAGE } from "@/utils/constants";
import axios from "axios";
import Head from "next/head";
import ReactMarkdown from "react-markdown";

export const runtime = "experimental-edge";

export async function getServerSideProps({ params }: { params: { id: string } }) {
  const group = await axios.get(`https://tuft-core-wq7gvvjxpa-el.a.run.app/groups/${params.id}/preview`);

  return {
    props: { group: group.data.data },
  };
}

export default function GroupPreview({ group }: { group: any }) {
  if (!group) return <div>Group not found</div>;

  return (
    <>
      <Head>
        <title>{group.name}</title>
        <meta name="description" content={group.short_description} />
        <link rel="icon" href={group.avatar} />

        <meta property="og:title" content={group.name} />
        <meta property="og:description" content={group.short_description} />
        <meta property="og:image" content={group.avatar} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={group.name} />
        <meta name="twitter:description" content={group.short_description} />
        <meta name="twitter:image" content={group.avatar} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="flex flex-col max-w-[400px] m-auto h-[100dvh]">
        <div className="flex flex-col gap-4 h-full p-6">
          <div className="relative mb-10">
            {group.cover_image_url ? (
              <img src={group.cover_image_url} alt="Group cover" className="w-full h-48 object-cover rounded-lg" />
            ) : (
              <div className="w-full h-16"></div>
            )}
            <div className="absolute -bottom-6 left-0">
              <img
                src={group.avatar || NO_AVATAR_IMAGE}
                alt="Group logo"
                className="size-20 rounded-full border-2 border-primary"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 grow">
            <h1 className="text-2xl font-bold">{group.name}</h1>
            <ReactMarkdown>{group.description || group.short_description}</ReactMarkdown>
          </div>
          <div className="flex flex-col gap-2">
            <Button
              className="w-full"
              onClick={() => {
                window.location.href = "https://app.tuft.in/group/" + group.id;
              }}
            >
              Join Group {group.amount ? `for ₹${group.amount}` : ""}
            </Button>
            <div className="flex items-center justify-center gap-2">
              <span className="text-muted-foreground text-xs">Powered by</span>
              <img src="/assets/images/long_logo.webp" alt="Tuft" width={30} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
