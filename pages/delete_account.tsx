/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/utils/footer";
import { Button, Space, Stack, Text, TextInput, Textarea } from "@mantine/core";
import Head from "next/head";
import NavHeader from "@/components/utils/header";
import axios from "axios";
import { useState } from "react";

export default function DeleteAccount() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <>
      <Head>
        <title>Delete Account | Tuft</title>
        <meta name="description" content="Manage your groups like never before" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavHeader />
      <body style={{ padding: "20px 2vw" }}>
        <h2 className="heading_text">Delete Account</h2>
        <Space h={30} />
        <div className="container"></div>
        <Stack>
          <h2>Delete Account</h2>
          <Text>
            All your account data, including messages and personal information, will be permanently deleted and cannot be recovered. Please confirm your email below to proceed with
            account deletion. You will receive an email for verification before your account is permanently deleted.
          </Text>

          <TextInput label="Email" placeholder="Enter your email" required />
          <TextInput onChange={(event) => setEmail(event.currentTarget.value)} label="Confirm Email" placeholder="Confirm your email" required />
          <Textarea label="Feedback (optional)" placeholder="Tell us why you're leaving..." />
          <Button
            loading={loading}
            onClick={async () => {
              setLoading(true);
              await axios.post("https://tuft-core-wq7gvvjxpa-el.a.run.app/user/delete_account_public", {
                email,
              });
              setLoading(false);
              alert("An email has been sent to your email address for verification. Please check your inbox and spam folder.");
            }}>
            Delete My Account
          </Button>
        </Stack>
      </body>
      <Footer />
    </>
  );
}
