/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/utils/footer";
import { Space } from "@mantine/core";
import Head from "next/head";
import NavHeader from "@/components/utils/header";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Mana Andhra Vartha</title>
        <meta name="description" content="Manage your groups like never before" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavHeader />
      <body style={{ padding: "20px 2vw" }}>
        <h2 className="heading_text">Privacy Policy</h2>
        <Space h={30} />
        <p>
          At Mana Andhra Vartha, we are committed to protecting the privacy and security of your personal information.
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our
          Mana Andhra Vartha application and services (a whitelabeled version of Tuft, referred to as Mana Andhra Vartha
          "we", "us," or "our"). By using Mana Andhra Vartha, you consent to the practices described in this Privacy
          Policy.
        </p>

        <h3>1. Information We Collect:</h3>

        <h4>1.1 Personal Information:</h4>
        <ul>
          <li>
            When you create an account, we may collect personal information such as your name, email address, and
            contact details.
          </li>
          <li>
            We may collect payment information when you make a payment for any premium services within Mana Andhra
            Vartha.
          </li>
          <li>
            We may collect any information you provide to us when you contact our customer support or interact with us
            through other means.
          </li>
        </ul>

        <h4>1.2 Usage Information:</h4>
        <ul>
          <li>
            We collect information about your interactions with Mana Andhra Vartha, such as your device information, IP
            address, log files, and browsing patterns.
          </li>
        </ul>

        <h3>2. How We Use Your Information:</h3>

        <h4>2.1 Provide and Improve Services:</h4>
        <ul>
          <li>We use the information to provide, personalize, and improve your experience with Mana Andhra Vartha.</li>
          <li>
            We may use your email address to communicate important updates or notifications related to Mana Andhra
            Vartha.
          </li>
        </ul>

        <h4>2.2 Analytics and Performance:</h4>
        <ul>
          <li>
            We use the information to analyze usage patterns, troubleshoot issues, and improve the performance of Mana
            Andhra Vartha.
          </li>
        </ul>

        <h4>2.3 Payment Processing:</h4>
        <ul>
          <li>
            If you make payments for premium services, we use your payment information to process the transaction
            securely.
          </li>
        </ul>

        <h3>3. Information Sharing and Disclosure:</h3>

        <h4>3.1 Service Providers:</h4>
        <ul>
          <li>
            We may share your information with trusted third-party service providers who assist us in providing and
            improving Mana Andhra Vartha. These providers are obligated to protect your information and only use it for
            the intended purposes.
          </li>
        </ul>

        <h4>3.2 Legal Compliance:</h4>
        <ul>
          <li>We may disclose your information if required by law, legal process, or governmental request.</li>
        </ul>

        <h3>4. Data Retention:</h3>
        <ul>
          <li>
            We retain your personal information for as long as necessary to fulfill the purposes outlined in this
            Privacy Policy, unless a longer retention period is required or permitted by law.
          </li>
        </ul>

        <h3>5. Data Security:</h3>
        <ul>
          <li>
            We implement security measures to protect your information from unauthorized access, alteration, disclosure,
            or destruction. However, please be aware that no method of transmission over the internet or electronic
            storage is 100% secure.
          </li>
        </ul>

        <h3>6. Childrens Privacy:</h3>
        <p>
          Mana Andhra Vartha is not intended for use by individuals under the age of 13. We do not knowingly collect
          personal information from children. If you become aware that a child has provided us with personal information
          without parental consent, please contact us immediately.
        </p>

        <h3>7. Your Choices:</h3>
        <ul>
          <li>
            You can update or delete your personal information by accessing your account settings within Mana Andhra
            Vartha.
          </li>
          <li>
            You can choose to opt-out of receiving promotional communications from us by following the instructions
            provided in the communication.
          </li>
        </ul>

        <h3>8. Changes to this Privacy Policy:</h3>
        <ul>
          <li>
            We may update this Privacy Policy from time to time. The updated version will be effective as of the date
            stated at the beginning of this policy. We encourage you to review the Privacy Policy periodically to stay
            informed of any changes.
          </li>
        </ul>

        <h3>9. Contact Us:</h3>
        <ul>
          <li>
            If you have any questions or concerns about this Privacy Policy or our practices, please contact us at
            neeraj.sameer@Mana Andhra Vartha.in.
          </li>
        </ul>
      </body>
      <Footer />
    </>
  );
}
