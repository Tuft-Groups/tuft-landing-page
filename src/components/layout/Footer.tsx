import Link from "next/link";
import { PhoneBold, LetterBold, MapPointBold } from "solar-icon-set";
import { Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/tuft.in/", color: "bg-rose-500/10 text-rose-500" },
    { icon: Twitter, href: "https://x.com/tuft_in", color: "bg-slate-500/10 text-slate-200" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/tuft-in", color: "bg-blue-500/10 text-blue-500" },
  ];

  return (
    <footer className="relative pt-32 pb-16 overflow-hidden border-t border-white/5 bg-[#050214]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-24">
          {/* Brand & Socials */}
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://tuft.in/assets/images/short_logo.png" alt="Tuft Logo" className="w-12 h-12 object-contain rounded-sm" />
              <span className="text-4xl font-black tracking-tighter text-white">Tuft</span>
            </div>

            <p className="text-slate-400 text-base leading-relaxed max-w-xs">
              Empowering individuals and teams with privacy-first tools to reclaim their digital freedom and boost productivity.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 tap-active ${social.color}`}
                >
                  <social.icon size={22} className="stroke-[1.5px]" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">Product</h4>
            <ul className="space-y-5">
              {[
                { name: "Features", href: "/features" },
                { name: "Pricing", href: "/#pricing" },
                { name: "Blog", href: "/blog" },
                { name: "Web App", href: "https://app.tuft.in" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-500 hover:text-white transition-all text-sm font-semibold tap-active inline-block hover:translate-x-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">Support & Contact</h4>
            <ul className="space-y-5">
              <li>
                <a
                  href="mailto:support@tuft.in"
                  className="group flex items-center gap-4 text-slate-500 hover:text-white transition-all tap-active"
                >
                  <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-white/10 transition-all">
                    <LetterBold size={20} />
                  </div>
                  <span className="text-sm font-semibold">contact@tuft.in</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919611611400"
                  className="group flex items-center gap-4 text-slate-500 hover:text-white transition-all tap-active"
                >
                  <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-white/10 transition-all">
                    <PhoneBold size={20} />
                  </div>
                  <span className="text-sm font-semibold">+91 7702316894</span>
                </a>
              </li>
              <li className="flex items-start gap-4 text-slate-500">
                <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400">
                  <MapPointBold size={20} />
                </div>
                <span className="text-sm font-semibold leading-relaxed">
                  Visakhapatnam,
                  <br />
                  Andhra Pradesh, India
                </span>
              </li>
            </ul>
          </div>

          {/* Downloads */}
          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">Get the App</h4>
            <div className="flex gap-5">
              <Link href="https://apps.apple.com/jp/app/tuft-groups/id6461823307">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="App Store"
                  className="h-10 w-auto brightness-110"
                />
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=com.tuft.app">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Play Store"
                  className="h-10 w-auto brightness-110"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap items-center justify-center gap-8 font-bold text-slate-600">
            <span className="text-slate-500">© {currentYear} Tuft Groups Corp.</span>
            <Link href="/privacy_policy" className="hover:text-white transition-colors tap-active">
              Privacy Policy
            </Link>
            <Link href="/terms_and_conditions" className="hover:text-white transition-colors tap-active">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
