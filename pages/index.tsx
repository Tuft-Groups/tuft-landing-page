import { AppImages, PLAYSTORE_LINK } from "@/components/utils/constants";
import Footer from "@/components/utils/footer";
import NavHeader from "@/components/utils/header";
import styles from "@/styles/home_layout.module.scss";
import { Center, Grid, Group, Space, Stack } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BrandInstagram, BrandLinkedin, BrandTwitter, Mail, Phone } from "tabler-icons-react";
import { soraFamily } from "./_app";

export default function Home(props: any) {
  const { width } = useViewportSize();

  const isMobile = width < 900;
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <div>
      <Head>
        <title>Tuft - Manage your Groups</title>
        <meta name="description" content="Manage your groups like never before" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavHeader />
      <Space h={10} />
      <div className={styles.body}>
        <div className={styles.home_layout}>
          <Grid w={"100%"}>
            <Grid.Col lg={7} md={6} sm={12}>
              <Stack className={styles.home_layout_content} justify={"center"} h={"100%"} px={isMobile ? 0 : 20}>
                <h2>
                  Manage your <br />
                  <span>Groups</span>
                  <br /> like never before
                </h2>
                <h3>
                  Say bye 👋 &nbsp; to <b style={{ color: "#229ED9" }}> Telegram</b> groups.
                  {/* <Image src="/assets/images/whatsapp.png" alt="WhatsApp" height={30} width={130} /> */}
                  <br /> Go beyond traditional messaging
                </h3>
                <Space h={20} />
                <span style={{ fontSize: "20px" }}>
                  Tuft isn&apos;t just another messaging app. It&apos;s where groups collaborate, connect, and thrive.
                  From centralized announcements to seamless in-app payments, make every conversation count. With Tuft,
                  group communication is redefined.
                  {/* <ul>
                  <li>Manage Community</li>
                  <li>Collect Payments</li>
                  <li>Organize Events & Webinars</li>
                </ul> */}
                </span>
                <Space h={10} />
                <Group>
                  <a href={PLAYSTORE_LINK}>
                    <button>Get Started</button>
                  </a>
                </Group>
              </Stack>
            </Grid.Col>
            <Grid.Col lg={5} md={6} sm={12}>
              <Center>
                <Image
                  src={AppImages.SCREENSHOTS.HOME}
                  alt="home_page"
                  height={"600"}
                  width={"320"}
                  objectFit="cover"
                  priority
                />
              </Center>
            </Grid.Col>
          </Grid>
        </div>
        <div className={styles.about_section}>
          <Grid>
            <Grid.Col lg={6} sm={12}>
              <Center>
                {hoveredIndex === 0 && (
                  <Image
                    src={AppImages.ILLUSTRATIONS.CONFIGURE}
                    alt="configure"
                    height={isMobile ? 350 : 542}
                    width={isMobile ? 350 : 542}
                  />
                  // <img src={AppImages.ILLUSTRATIONS.CONFIGURE} alt="ddd" style={{ maxHeight: "542px", maxWidth: "100%", objectFit: "contain" }} />
                )}
                {hoveredIndex === 1 && (
                  <Image
                    src={AppImages.ILLUSTRATIONS.SETUP}
                    alt="setup"
                    height={isMobile ? 350 : 542}
                    width={isMobile ? 350 : 542}
                  />
                  // <img src={AppImages.ILLUSTRATIONS.SETUP} alt="ddd" style={{ maxHeight: "542px", maxWidth: "100%", objectFit: "contain" }} />
                )}
                {hoveredIndex === 2 && (
                  <Image
                    src={AppImages.ILLUSTRATIONS.FREE_TIER}
                    alt="free_tier"
                    height={isMobile ? 350 : 542}
                    width={isMobile ? 350 : 542}
                  />
                  // <img src={AppImages.ILLUSTRATIONS.FREE_TIER} alt="ddd" style={{ maxHeight: "542px", maxWidth: "100%", objectFit: "contain" }} />
                )}
              </Center>
            </Grid.Col>
            <Grid.Col lg={6} sm={12}>
              <h3>Experience Effortless Community Management</h3>
              <Space h={40} />
              <Stack w={"100%"} spacing={20}>
                {aboutList.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={styles.about_card}
                      style={{ border: hoveredIndex === index ? "1.5px solid #C554B7" : undefined }}
                      onMouseEnter={() => {
                        setHoveredIndex(index);
                      }}
                    >
                      <div className={styles.app_icon}>
                        {/* <img src={item.icon} alt="" /> */}
                        <Image src={item.icon} alt={item.title} height={40} width={40} />
                      </div>
                      <Space w={20} />
                      <div style={{ width: "100%" }}>
                        <h4 style={{ fontSize: isMobile ? "20px" : "24px" }}>{item.title}</h4>
                        <Space h={5} />

                        <span style={{ fontSize: isMobile ? "14px" : "18px" }}>{item.desc}</span>
                      </div>
                    </div>
                  );
                })}
              </Stack>
            </Grid.Col>
          </Grid>
        </div>
        <div className={styles.features_section}>
          <h3>All the features you need</h3>
          <h4>Tuft comes with all the features you need to build a great and better community</h4>
          <Space h={40} />
          <Link href="/features">
            <h5>
              <u>View All Features</u>
            </h5>
          </Link>
          <Space h={100} />
          <div className={styles.features}>
            {featureList.map((item, index) => {
              return (
                <div key={index} className={styles.feature_card}>
                  <Stack spacing={2}>
                    <span style={{ fontSize: "30px", fontFamily: soraFamily, fontWeight: "bold" }}>{item.title}</span>
                    <span style={{ color: "#79818D" }}>{item.desc}</span>
                    <Space h={30} />
                    {/* <img src={item.screenshot} alt="" style={{ maxHeight: "500px", objectFit: "contain" }} /> */}
                    <Image src={item.screenshot} alt={item.title} height={500} width={260} />
                  </Stack>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.use_cases_section}>
          <h3>Use Cases</h3>
          <h4>No Matter what your Group is. Tuft is here to help</h4>
          <Space h={100} />
          {/* card with a background image and a opacity layer on top and white text */}
          <Group spacing={30} position="center" className={styles.use_cases}>
            <Stack>
              <div
                className={styles.card}
                style={{ backgroundImage: 'url("assets/images/school.webp")', height: "200px", width: "300px" }}
              >
                <div className={styles.overlay}>
                  <p className={styles.text}>Schools</p>
                </div>
              </div>
              <div
                className={styles.card}
                style={{ backgroundImage: 'url("assets/images/webinar.webp")', height: "400px", width: "300px" }}
              >
                <div className={styles.overlay}>
                  <p className={styles.text}>Webinars</p>
                </div>
              </div>
            </Stack>
            <Stack>
              <div
                className={styles.card}
                style={{ backgroundImage: 'url("assets/images/classrooms.webp")', height: "300px", width: "300px" }}
              >
                <div className={styles.overlay}>
                  <p className={styles.text}>Classrooms</p>
                </div>
              </div>
              <div
                className={styles.card}
                style={{ backgroundImage: 'url("assets/images/football.webp")', height: "300px", width: "300px" }}
              >
                <div className={styles.overlay}>
                  <p className={styles.text}>Events</p>
                </div>
              </div>
            </Stack>
            <Stack>
              <div
                className={styles.card}
                style={{ backgroundImage: 'url("assets/images/college.webp")', height: "200px", width: "300px" }}
              >
                <div className={styles.overlay}>
                  <p className={styles.text}>Universities</p>
                </div>
              </div>
              <div
                className={styles.card}
                style={{ backgroundImage: 'url("assets/images/student_clubs.webp")', height: "400px", width: "300px" }}
              >
                <div className={styles.overlay}>
                  <p className={styles.text}>Student Clubs</p>
                </div>
              </div>
            </Stack>
          </Group>
        </div>
        <div className={styles.contact_us_section}>
          <Grid>
            <Grid.Col lg={6} sm={12}>
              <Stack spacing={0} justify={"center"} h={"100%"} px={"5vw"}>
                <h3>Get in touch</h3>
                <span>
                  No need to wander like a stranger. <br />
                  We are here to help you. Dont hesitate to reach out to us.
                </span>
                <Space h={20} />
                <Group>
                  <Phone color="#C554B7" />
                  <span>+91 7702316894</span>
                </Group>
                <Space h={20} />

                <Group>
                  <Mail color="#C554B7" />
                  <span>neeraj.sameer@tuft.in</span>
                </Group>
                <Space h={50} />
                <span>
                  Love our Product? Follow us on
                  <br /> Social Media
                </span>
                <Space h={20} />

                <Group>
                  <a aria-label="Twitter" href="https://twitter.com/tuft_in">
                    <BrandTwitter />
                  </a>
                  <a aria-label="Instagram" href="https://www.instagram.com/tuft.in/">
                    <BrandInstagram />
                  </a>
                  <a aria-label="LinkedIn" href="https://www.linkedin.com/company/tuft-in">
                    <BrandLinkedin />
                  </a>
                </Group>
              </Stack>
            </Grid.Col>
            <Grid.Col lg={6} sm={12}>
              <Image
                src={AppImages.ILLUSTRATIONS.CONTACT_US}
                alt="contact_us"
                height={isMobile ? 350 : 480}
                width={isMobile ? 350 : 640}
              />

              {/* <img src={AppImages.ILLUSTRATIONS.CONTACT_US} alt="" width={"100%"} /> */}
            </Grid.Col>
          </Grid>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function getStaticProps() {
  return {
    props: {},
  };
}

const aboutList = [
  {
    title: "Instant Setup",
    desc: "Effortlessly sign up, create, and launch your first group in mere seconds, without any hassle.",
    icon: AppImages.ICONS.FLASH,
  },
  {
    title: "Power-packed Features",
    desc: "From Sending your first Message to hosting a Live Event, Tuft has got you covered with all the features you need.",
    icon: AppImages.ICONS.APPS,
  },
  {
    title: "Free to Use",
    desc: "Enjoy unlimited access to all features and tools at no cost, perfect for getting started.",
    icon: AppImages.ICONS.PRICE_TAG,
  },
];

const featureList = [
  {
    title: "FEED",
    desc: "Post Announcements, Files for your Members",
    screenshot: AppImages.SCREENSHOTS.FEED,
  },
  {
    title: "CHAT",
    desc: "Post Announcements, Files for your Members",
    screenshot: AppImages.SCREENSHOTS.CHAT,
  },
  {
    title: "FILES",
    desc: "Post Announcements, Files for your Members",
    screenshot: AppImages.SCREENSHOTS.FILES,
  },
  {
    title: "PAYMENTS",
    desc: "Collect payments from your members",
    screenshot: AppImages.SCREENSHOTS.PAYMENTS,
  },
  {
    title: "MEETINGS",
    desc: "Host Meetings with your members",
    screenshot: AppImages.SCREENSHOTS.MEETINGS,
  },
];
