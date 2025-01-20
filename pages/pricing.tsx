import { AppImages, PLAYSTORE_LINK } from "@/components/utils/constants";
import Footer from "@/components/utils/footer";
import NavHeader from "@/components/utils/header";
import styles from "@/styles/pricing.module.scss";
import { Card, Center, Grid, Group, Space, Stack, Text } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const { width } = useViewportSize();

  const isMobile = width < 900;

  return (
    <>
      <Head>
        <title>Pricing | Tuft</title>
        <meta name="description" content="Manage your communities like never before" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavHeader />
      <Space h={50} />
      <div className={styles.pricing_home_layout}>
        <Grid w={"100%"}>
          <Grid.Col lg={7} md={12}>
            <Stack spacing={10} className={styles.pricing_layout_content} justify={"center"}>
              <h2 className="heading_text">Pricing</h2>
              <h3>
                At Tuft, we believe in empowering communication without barriers. That&apos;s why all our features are
                available for everyone, at no cost. Explore endless possibilities with Tuft!
              </h3>

              <Space h={40} />
              <Group>
                <a href={PLAYSTORE_LINK}>
                  <button>Get Started</button>
                </a>
                <Group></Group>
              </Group>
            </Stack>
          </Grid.Col>
          <Grid.Col lg={5} md={12}>
            <Center>
              <Image
                src={AppImages.ILLUSTRATIONS.PRICING}
                alt="pricing"
                height={isMobile ? "350" : "450"}
                width={isMobile ? "400" : "500"}
                objectFit="cover"
                priority
              />
            </Center>
          </Grid.Col>
        </Grid>
      </div>
      <Space h={100} />
      <div className={styles.pricing_details_content}>
        <h3>Everything you need, all in one place</h3>
        <h4>Unleashing Boundless Communication and Collaboration – Absolutely Free.</h4>
        <Space h={40} />
        <Grid px={isMobile ? 20 : 100}>
          <Grid.Col lg={3} md={6} xs={12}>
            <Card withBorder shadow={"lg"} radius="md" style={{ border: "2px solid #965dbc" }}>
              <Stack>
                <Text weight={"bold"} size="xl">
                  Feed
                </Text>
                ● Unlimited Announcements <br /> ● Real-time updates
              </Stack>
            </Card>
          </Grid.Col>
          <Grid.Col lg={3} md={6} xs={12}>
            <Card withBorder shadow={"lg"} radius="md" style={{ border: "2px solid #c554b7" }}>
              <Stack>
                <Text weight={"bold"} size="xl">
                  Chat
                </Text>
                ● Instant Messaging <br />● Media Sharing
              </Stack>
            </Card>
          </Grid.Col>
          <Grid.Col lg={3} md={6} xs={12}>
            <Card withBorder shadow={"lg"} radius="md" style={{ border: "2px solid #c554b7" }}>
              <Stack>
                <Text weight={"bold"} size="xl">
                  Files
                </Text>
                ● Unlimited Storage <br /> ● Easy File Sharing <br />
              </Stack>
            </Card>
          </Grid.Col>
          <Grid.Col lg={3} md={6} xs={12}>
            <Card withBorder shadow={"lg"} radius="md" style={{ border: "2px solid #965dbc" }}>
              <Stack>
                <Text weight={"bold"} size="xl">
                  Meetings
                </Text>
                ● Endless Meetings <br /> ● High-Quality Video <br />
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>

        <Space h={40} />
      </div>

      <Footer />
    </>
  );
}
