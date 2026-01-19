import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DeleteAccountForm } from "./DeleteAccountForm";

export const metadata: Metadata = {
  title: "Delete Account | Tuft",
  description: "Permanently delete your Tuft account and data.",
};

export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen relative z-10 flex flex-col font-sans">
      <Navbar />
      <div className="grow pt-32 pb-20 px-4 flex justify-center items-center">
        <DeleteAccountForm />
      </div>
      <Footer />
    </main>
  );
}
