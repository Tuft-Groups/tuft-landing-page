/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/utils/footer";
import { Space } from "@mantine/core";
import Head from "next/head";
import NavHeader from "@/components/utils/header";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Terms and Conditions | Tuft</title>
        <meta name="description" content="Manage your groups like never before" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavHeader />
      <body style={{ padding: "20px 2vw" }}>
        <h2 className="heading_text">Terms and Conditions</h2>
        <Space h={30} />
        <p>
          Please read these Terms and Conditions carefully before using Tuft, the community management app provided by
          Tuft ("Tuft," "we," "us," or "our"). By accessing or using Tuft, you agree to be bound by these Terms and
          Conditions. If you do not agree with any part of these Terms and Conditions, do not use Tuft.
        </p>

        <h3>1. Use of Tuft:</h3>

        <p>
          Tuft is provided for your personal, non-commercial use. You may not use Tuft for any unauthorized or illegal
          purpose. You agree to comply with all applicable laws and regulations while using Tuft.
        </p>

        <h3>2. Intellectual Property:</h3>

        <p>
          All intellectual property rights in Tuft, including but not limited to the software, logos, trademarks, and
          content, are owned by or licensed to Tuft. You agree not to modify, distribute, reproduce, or create
          derivative works based on Tuft without our prior written consent.
        </p>

        <h3>3. User Content:</h3>

        <p>
          By using Tuft, you may submit or upload content, such as messages, files, or images ("User Content"). You
          retain ownership of your User Content. However, by submitting or uploading your User Content to Tuft, you
          grant Tuft a non-exclusive, worldwide, royalty-free license to use, display, and distribute your User Content
          for the purpose of providing and improving the Tuft platform. Additionally, Tuft reserves the right to delete
          any User Content if it receives reports from users or if the content is determined to violate our policies or
          any applicable laws.
        </p>

        <h3>4. Privacy:</h3>

        <p>
          Your use of Tuft is subject to our Privacy Policy. Please review the Privacy Policy to understand how we
          collect, use, and protect your information.
        </p>

        <h3>5. Limitation of Liability:</h3>

        <p>
          Tuft is provided on an "as is" and "as available" basis, without any warranties or representations. We shall
          not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in
          connection with your use of Tuft.
        </p>

        <h3>6. Termination:</h3>

        <p>
          We may terminate or suspend your access to Tuft at any time without notice or liability for any reason,
          including if you violate these Terms and Conditions.
        </p>

        <h3>7. Governing Law:</h3>

        <p>
          These Terms and Conditions are governed by and construed in accordance with the laws of [Insert jurisdiction].
          Any dispute arising out of or in connection with these Terms and Conditions shall be subject to the exclusive
          jurisdiction of the courts in [Insert jurisdiction].
        </p>

        <h3>8. Changes to these Terms and Conditions:</h3>

        <p>
          We reserve the right to update or modify these Terms and Conditions at any time. The updated version will be
          effective as of the date stated at the beginning of this document. We encourage you to review these Terms and
          Conditions periodically.
        </p>

        <p>
          If you have any questions or concerns about these Terms and Conditions, please contact us at [Insert contact
          email or other relevant contact information].
        </p>
      </body>
      <Footer />
    </>
  );
}
