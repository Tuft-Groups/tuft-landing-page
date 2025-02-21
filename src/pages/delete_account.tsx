/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/Footer";
import Head from "next/head";
import Header from "@/components/Header";
import axios from "axios";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
      <Header isHeaderWhite={true} />
      <main className="px-[4vw] py-10 max-w-3xl mx-auto grow">
        <h2 className="gradient-text text-2xl md:text-4xl font-bold">Delete Account</h2>

        <div className="flex flex-col gap-4">
          <p>
            All your account data, including messages and personal information, will be permanently deleted and cannot
            be recovered. Please confirm your email below to proceed with account deletion. You will receive an email
            for verification before your account is permanently deleted.
          </p>

          <Input placeholder="Enter your email" required />
          <Input onChange={(event) => setEmail(event.currentTarget.value)} placeholder="Confirm your email" required />
          <Textarea placeholder="Tell us why you're leaving..." />
          <Button
            onClick={async () => {
              setLoading(true);
              await axios.post("https://tuft-core-wq7gvvjxpa-el.a.run.app/user/delete_account_public", {
                email,
              });
              setLoading(false);
              alert(
                "An email has been sent to your email address for verification. Please check your inbox and spam folder."
              );
            }}
          >
            Delete My Account
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
