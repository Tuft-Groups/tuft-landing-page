import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { AppImages, AppLinks } from "@/lib/constants";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Features | Tuft</title>
        <meta name="description" content="Manage your communities like never before" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header isHeaderWhite={true} />

      <div className="flex justify-between px-[70px] py-10 md:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full gap-4">
          <div className="lg:col-span-7 md:col-span-12">
            <div className="flex flex-col justify-center px-0 md:px-20 h-full">
              <h2 className="text-4xl md:text-[50px] gradient-text font-alexandria font-bold">Features</h2>
              <h3 className="text-2xl md:text-[25px] font-medium my-4">
                Elevate group chats with announcements, storage, meetings, payments, analytics, and more. Redefine
                collaboration and organization in one platform.
              </h3>

              <a href={AppLinks.playstore_link}>
                <Button>Get Started</Button>
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 md:col-span-12">
            <div className="flex justify-center mt-[50px] lg:mt-0">
              <Image
                src={AppImages.screenshots.features}
                alt="features"
                height={350}
                width={400}
                className="md:h-[450px] md:w-[500px] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <FeatureCard
        title="FEED"
        description=" Stay connected and informed with Tuft's Feed feature. Admins can share important messages and updates, while members can engage through likes
        and comments. The threaded format keeps discussions organized and lively."
        points={[
          "Announcing important updates",
          "Facilitating community-wide discussions",
          "Sharing news and announcements",
          "Fostering engagement and interaction",
        ]}
        image={AppImages.screenshots.feed}
      />
      <FeatureCard
        title="CHAT"
        description="Communicate seamlessly with Tuft's Chat feature. Members can message each other, share ideas, and collaborate in real-time. The ability to react to messages ensures quick feedback and effortless expression of thoughts."
        points={[
          "Real-time collaboration",
          "Idea sharing and brainstorming",
          "Networking and connecting with members",
          "Efficient communication within the community",
        ]}
        image={AppImages.screenshots.chat}
        reverse
      />
      <FeatureCard
        title="FILES"
        description="Keep your resources organized and easily accessible using Tuft's Files feature. Group Admins can create folders and upload files, ensuring members have access to important documents and materials whenever they need them."
        points={[
          "Sharing educational resources",
          "Distributing important documents",
          "Centralizing files for easy access",
          "Keeping materials organized and up-to-date",
        ]}
        image={AppImages.screenshots.files}
      />
      <FeatureCard
        title="MEETINGS"
        description="Streamline your group interactions with Tuft's advanced meeting features. Whether it's a casual chat among friends or a large public event, Tuft ensures high-quality audio, video, and screen sharing capabilities."
        points={[
          "Hosting team collaborations or brainstorming sessions.",
          "Organizing public seminars or presentations.",
          "Coordinating family reunions or casual hangouts.",
          "Managing attendees, sending reminders, and recording sessions.",
        ]}
        image={AppImages.screenshots.meetings}
        reverse
      />
      <FeatureCard
        title="PAYMENTS"
        description="Collect payments seamlessly with Tuft's integrated payment functionality. Admins can create payment options for membership fees, event tickets, or other offerings, making transactions easy and secure for members."
        points={[
          "Collecting membership fees",
          "Selling event tickets or merchandise",
          "Monetizing premium content or services",
          "Tracking payment status and revenue",
        ]}
        image={AppImages.screenshots.payments}
      />

      <Footer />
    </>
  );
}

function FeatureCard({
  title,
  description,
  points,
  image,
  reverse = false,
}: {
  title: string;
  description: string;
  points: string[];
  image: string;
  reverse?: boolean;
}) {
  return (
    <div className="p-16 bg-white">
      <div className={`w-full flex ${reverse ? "flex-row-reverse" : "flex-row"} flex-wrap`}>
        <div className="w-full lg:w-7/12 md:w-full gap-8">
          <div className="flex flex-col justify-center h-full gap-6 px-0 md:px-8">
            <h2 className="text-4xl md:text-4xl font-bold gradient-text">{title}</h2>
            <h3 className="text-lg md:text-xl font-semibold">{description}</h3>
            <ul className="list-none list-inside space-y-3 text-lg md:text-xl font-semibold">
              {points.map((x: any, i) => {
                return (
                  <li
                    key={i}
                    className="pl-[30px] font-sora  bg-[url('/assets/icons/right_arrow.svg')] bg-no-repeat bg-left bg-[length:30px_30px]"
                  >
                    {x}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-5/12 md:w-full">
          <div className="flex justify-center items-center md:mt-0 mt-8">
            <Image src={image} alt={title} height={600} width={307} objectFit="cover" priority />
          </div>
        </div>
      </div>
    </div>
  );
}
