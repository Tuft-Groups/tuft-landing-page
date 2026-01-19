import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Tuft",
  description: "Privacy Policy outlining how we collect, use, and protect your information.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen relative z-10 flex flex-col font-sans">
      <Navbar />

      <div className="grow pt-32 pb-20 px-4 flex justify-center">
        <div className="glass-card w-full max-w-4xl rounded-3xl p-8 md:p-12 overflow-hidden bg-slate-900/40">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 gradient-text-premium inline-block">Privacy Policy</h1>

          <div className="prose prose-invert prose-lg max-w-none text-slate-300">
            <p>
              At Tuft, we are committed to protecting the privacy and security of your personal information. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when you use our Tuft application and services (referred to as
              Tuft "we", "us," or "our"). By using Tuft, you consent to the practices described in this Privacy Policy.
            </p>

            <h3>1. Information We Collect:</h3>

            <h4>1.1 Personal Information:</h4>
            <ul>
              <li>
                When you create an account, we may collect personal information such as your name, email address, and contact details.
              </li>
              <li>We may collect payment information when you make a payment for any premium services within Tuft.</li>
              <li>
                We may collect any information you provide to us when you contact our customer support or interact with us through other
                means.
              </li>
            </ul>

            <h4>1.2 Usage Information:</h4>
            <ul>
              <li>
                We collect information about your interactions with Tuft, such as your device information, IP address, log files, and
                browsing patterns.
              </li>
            </ul>

            <h3>2. How We Use Your Information:</h3>

            <h4>2.1 Provide and Improve Services:</h4>
            <ul>
              <li>We use the information to provide, personalize, and improve your experience with Tuft.</li>
              <li>We may use your email address to communicate important updates or notifications related to Tuft.</li>
            </ul>

            <h4>2.2 Analytics and Performance:</h4>
            <ul>
              <li>We use the information to analyze usage patterns, troubleshoot issues, and improve the performance of Tuft.</li>
            </ul>

            <h4>2.3 Payment Processing:</h4>
            <ul>
              <li>If you make payments for premium services, we use your payment information to process the transaction securely.</li>
            </ul>

            <h3>3. Information Sharing and Disclosure:</h3>

            <h4>3.1 Service Providers:</h4>
            <ul>
              <li>
                We may share your information with trusted third-party service providers who assist us in providing and improving Tuft.
                These providers are obligated to protect your information and only use it for the intended purposes.
              </li>
            </ul>

            <h4>3.2 Legal Compliance:</h4>
            <ul>
              <li>We may disclose your information if required by law, legal process, or governmental request.</li>
            </ul>

            <h3>4. Data Retention:</h3>
            <ul>
              <li>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless
                a longer retention period is required or permitted by law.
              </li>
            </ul>

            <h3>5. Data Security:</h3>
            <ul>
              <li>
                We implement security measures to protect your information from unauthorized access, alteration, disclosure, or destruction.
                However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
              </li>
            </ul>

            <h3>6. Childrens Privacy:</h3>
            <p>
              Tuft is not intended for use by individuals under the age of 13. We do not knowingly collect personal information from
              children. If you become aware that a child has provided us with personal information without parental consent, please contact
              us immediately.
            </p>

            <h3>7. Your Choices:</h3>
            <ul>
              <li>You can update or delete your personal information by accessing your account settings within Tuft.</li>
              <li>
                You can choose to opt-out of receiving promotional communications from us by following the instructions provided in the
                communication.
              </li>
            </ul>

            <h3>8. Changes to this Privacy Policy:</h3>
            <ul>
              <li>
                We may update this Privacy Policy from time to time. The updated version will be effective as of the date stated at the
                beginning of this policy. We encourage you to review the Privacy Policy periodically to stay informed of any changes.
              </li>
            </ul>

            <h3>9. Contact Us:</h3>
            <ul>
              <li>
                If you have any questions or concerns about this Privacy Policy or our practices, please contact us at
                neeraj.sameer@tuft.in.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
