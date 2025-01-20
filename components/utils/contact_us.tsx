import { Button, Card, Grid, Group, Input, Space, Stack, Text, Textarea } from "@mantine/core";
import { useSetState } from "@mantine/hooks";
import axios from "axios";
import { useState } from "react";
import { BrandInstagram, BrandLinkedin, BrandWhatsapp, Mail } from "tabler-icons-react";
import { AppImages } from "./constants";

export function ContactUsSection() {
  const [form, setForm] = useSetState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  return (
    <section style={{ padding: "0px  5vw", margin: "20px 0px" }}>
      <Card
        style={{ background: "linear-gradient(102.67deg, rgba(160, 186, 250, 0.42) 1.38%, #DEC6F7 99.06%)" }}
        radius="lg"
        p={30}
      >
        <Text weight={"bolder"} size={30}>
          Contact Us
        </Text>
        <Text>Feel free to reach us at any time. We will try to get back as soon as possible.</Text>
        <Space h={20} />
        <Grid>
          <Grid.Col lg={8} sm={12}>
            <Stack>
              <Input onChange={(e: any) => setForm({ name: e.target.value })} placeholder="Name" />
              <Input onChange={(e: any) => setForm({ email: e.target.value })} placeholder="Email" />
              <Textarea onChange={(e) => setForm({ message: e.target.value })} placeholder="Message" minRows={3} />
              {sent && <Text>Message Sent. We will contact you as soon as possible</Text>}
              <Group position="right">
                <Button
                  color="primary"
                  size="md"
                  onClick={async () => {
                    await axios.post("https://tuft.in/api/contact_us", form);
                    setSent(true);
                    setForm({ name: "", email: "", message: "" });
                  }}
                >
                  Send
                </Button>
              </Group>
              <Group mt={20}>
                <Text>Connect us on</Text>
                <Group
                  spacing={3}
                  style={{ cursor: "pointer" }}
                  onClick={() => window.open("https://www.linkedin.com/company/tuft-in")}
                >
                  <BrandLinkedin />
                  <Text>LinkedIn</Text>
                </Group>
                <Group
                  spacing={3}
                  style={{ cursor: "pointer" }}
                  onClick={() => window.open("https://wa.me/+917702316894")}
                >
                  <BrandWhatsapp />
                  <Text>Whatsapp</Text>
                </Group>
                <Group
                  spacing={3}
                  style={{ cursor: "pointer" }}
                  onClick={() => window.open("https://www.instagram.com/tuft.in/")}
                >
                  <BrandInstagram />
                  <Text>Instagram</Text>
                </Group>
                <Group
                  spacing={3}
                  style={{ cursor: "pointer" }}
                  onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=neeraj.sameer@tuft.in")}
                >
                  <Mail />
                  <Text>Gmail</Text>
                </Group>
              </Group>
            </Stack>
          </Grid.Col>
          <Grid.Col lg={4} sm={12}>
            <img src={AppImages.CONTACT_US} width={"100%"} />
          </Grid.Col>
        </Grid>
      </Card>
    </section>
  );
}
