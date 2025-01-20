import { AppImages, PLAYSTORE_LINK } from "@/components/utils/constants";
import Footer from "@/components/utils/footer";
import NavHeader from "@/components/utils/header";
import styles from "@/styles/features.module.scss";
import { Center, Grid, Group, Space, Stack } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const { width } = useViewportSize();
  const isMobile = width < 900;

  return (
    <>
      <Head>
        <title>Features | Tuft</title>
        <meta name="description" content="Manage your communities like never before" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavHeader />
      <Space h={50} />
      <div className={styles.features_home_layout}>
        <Grid w={"100%"}>
          <Grid.Col lg={7} md={12}>
            <Stack spacing={10} px={isMobile ? 0 : 20} className={styles.features_layout_content} justify={"center"}>
              <h2 className="heading_text">Features</h2>
              <h3>
                Elevate group chats with announcements, storage, meetings, payments, analytics, and more. Redefine
                collaboration and organization in one platform.
              </h3>

              <Space h={40} />
              <Group>
                <a href={PLAYSTORE_LINK}>
                  <button>Get Started</button>
                </a>
              </Group>
            </Stack>
          </Grid.Col>
          <Grid.Col lg={5} md={12}>
            <Center mt={isMobile ? 50 : 0}>
              <Image
                src={AppImages.SCREENSHOTS.FEATURES}
                alt="features"
                height={isMobile ? "350" : "450"}
                width={isMobile ? "400" : "500"}
                objectFit="cover"
                priority
              />
            </Center>
          </Grid.Col>
        </Grid>
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
        image={AppImages.SCREENSHOTS.FEED}
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
        image={AppImages.SCREENSHOTS.CHAT}
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
        image={AppImages.SCREENSHOTS.FILES}
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
        image={AppImages.SCREENSHOTS.MEETINGS}
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
        image={AppImages.SCREENSHOTS.PAYMENTS}
      />

      <div className={styles.book_demo_section}>
        <Stack spacing={0} h={"100%"} justify={"center"} align={"center"} p={isMobile ? 40 : 100}>
          <h1 style={{ fontSize: isMobile ? "35px" : undefined }} className="heading_text">
            Want to know more?
          </h1>
          <span>
            Schedule a live demonstration to discover how you can effectively utilize these features for your community.
          </span>
          <Space h={40} />
          <Group>
            <button onClick={() => window.open("https://calendly.com/neerajsameerallu00/tuft-groups-demo")}>
              Book a demo
            </button>
          </Group>
        </Stack>
      </div>

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
    <div className={styles.feature_card}>
      <Grid style={{ flexDirection: reverse ? "row-reverse" : undefined }} w={"100%"}>
        <Grid.Col lg={7} md={12}>
          <Stack className={styles.features_layout_content} justify={"center"}>
            <h2 className="heading_text">{title}</h2>
            <h3>{description}</h3>
            <ul className={styles.custom_list}>
              {points.map((x: any, i) => {
                return <li key={i}>{x}</li>;
              })}
            </ul>
          </Stack>
        </Grid.Col>
        <Grid.Col lg={5} md={12}>
          <Center>
            <Image src={image} alt={title} height={"500"} width={"250"} objectFit="cover" priority />
            {/* <img src={image} height={"500px"} /> */}
          </Center>
        </Grid.Col>
      </Grid>
    </div>
  );
}
