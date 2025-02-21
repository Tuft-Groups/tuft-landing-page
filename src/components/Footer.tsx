import { Phone, Mail, BrandTwitter, BrandInstagram, BrandLinkedin } from "tabler-icons-react";
import { AppImages, AppLinks } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#f5f7fa] text-gray-600 py-10 px-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="col-span-1">
          <Image src={AppImages.long_logo} height={40} width={90} alt="tuft_logo" />
          <div className="h-2.5" />
          <span>
            Manage your Communities <br /> like never before
          </span>
          <div className="h-5" />
          <a href={AppLinks.playstore_link}>
            <Image src={AppImages.playstore_download} alt="playstore" width={120} height={50} />
          </a>
        </div>

        <div className="col-span-1 sm:col-span-1">
          <div className="space-y-2.5">
            <p className="font-bold">Quick Links</p>
            <div className="h-1.5" />
            <div className="flex flex-col space-y-2.5">
              <Link href="/">Home</Link>
              <Link href="/features">Features</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/blog">Blog</Link>
            </div>
          </div>
        </div>

        <div className="col-span-1 sm:col-span-1">
          <div className="space-y-2.5">
            <p className="font-bold">Browse</p>
            <div className="h-1.5" />
            <div className="flex flex-col space-y-2.5">
              <Link href="/privacy_policy">Privacy Policy</Link>
              <Link href="/terms_and_conditions">Terms & Conditions</Link>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="space-y-2.5">
            <p className="font-bold">Contact Us</p>
            <div className="flex items-center gap-2">
              <Phone color="#C554B7" />
              <span>+91 7702316894</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail color="#C554B7" />
              <span>neeraj.sameer@tuft.in</span>
            </div>
            <div className="h-2.5" />
            <p className="font-bold">Follow us on</p>
            <div className="flex items-center gap-2">
              <a aria-label="Twitter" href="https://twitter.com/tuft_in">
                <BrandTwitter />
              </a>
              <a aria-label="Instagram" href="https://www.instagram.com/tuft.in/">
                <BrandInstagram />
              </a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/company/tuft-in">
                <BrandLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-12" />
      <div className="text-center">Copyright © 2023 Tuft. All rights reserved.</div>
    </footer>
  );
}
