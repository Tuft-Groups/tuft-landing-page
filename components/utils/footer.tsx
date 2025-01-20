import { Grid, Group, Space, Stack, Text } from "@mantine/core";
import styles from "@/styles/home_layout.module.scss";
import { Phone, Mail, BrandTwitter, BrandInstagram, BrandLinkedin } from "tabler-icons-react";
import { AppImages, PLAYSTORE_LINK } from "./constants";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Grid>
        <Grid.Col lg={3} span={12}>
          <Image src={AppImages.LONG_LOGO} height={40} width={90} alt="tuft_logo" />
          <Space h={10} />
          <span>
            Manage your Communities <br /> like never before
          </span>
          <Space h={20} />
          <a href={PLAYSTORE_LINK}>
            <Image src={AppImages.PLAYSTORE_DOWNLOAD} alt="playstore" width={120} height={50} />
          </a>
        </Grid.Col>
        <Grid.Col lg={3} span={6}>
          <Stack spacing={10}>
            <Text weight={"bold"}>Quick Links</Text>
            <Space h={5} />

            <Link href="/">Home</Link>
            <Link href="/features">Features</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/blog">Blog</Link>
          </Stack>
        </Grid.Col>
        <Grid.Col lg={3} span={6}>
          <Stack spacing={10}>
            <Text weight={"bold"}>Browse</Text>
            <Space h={5} />
            <Link href="/privacy_policy">Privacy Policy</Link>
            <Link href="/terms_and_conditions">Terms & Conditions</Link>
          </Stack>
        </Grid.Col>
        <Grid.Col lg={3} span={12}>
          <Stack spacing={10}>
            <Text weight={"bold"}>Contact Us</Text>
            <Group>
              <Phone color="#C554B7" />
              <span>+91 7702316894</span>
            </Group>
            <Group>
              <Mail color="#C554B7" />
              <span>neeraj.sameer@tuft.in</span>
            </Group>
            <Space h={10} />
            <Text weight={"bold"}>Follow us on</Text>
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
      </Grid>
      <Space h={50} />
      <div style={{ textAlign: "center" }}>Copyright © 2023 Tuft. All rights reserved.</div>
    </div>
  );
}
