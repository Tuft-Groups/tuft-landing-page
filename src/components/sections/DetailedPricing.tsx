"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const allFeatures = [
  {
    category: "Core Platform",
    items: [
      "Unlimited Member Management",
      "Advanced Event Scheduling",
      "AI-Powered Attendance Tracking",
      "Mobile App Access (iOS & Android)",
      "Real-time Notifications",
    ],
  },
  {
    category: "Organization Tools",
    items: [
      "Custom Roles & Permissions",
      "5GB Cloud Storage",
      "Broadcast Messaging",
      "Basic Analytics Dashboard",
      "Resource Booking System",
    ],
  },
  {
    category: "Support & Security",
    items: ["Community Support", "Data Encryption", "Regular Backups", "GDPR Compliance", "SSO Integration (Coming Soon)"],
  },
];

export function DetailedPricing() {
  return (
    <section className="py-24 px-6 relative bg-slate-950">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-tuft-purple/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Everything Included
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            We believe in empowering communities without barriers. All features are available to everyone.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {allFeatures.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">{category.category}</h3>
              <ul className="space-y-4">
                {category.items.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center mt-1 shrink-0">
                      <Check className="w-3 h-3 text-emerald-500" />
                    </div>
                    <span className="text-slate-300 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Fair Usage Policy Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center max-w-2xl mx-auto p-6 rounded-2xl bg-white/5 border border-white/5"
        >
          <p className="text-slate-500 text-sm">
            * Free ofcourse under a <span className="text-slate-400 font-medium">Fair Usage Policy</span> to ensure quality service for all
            our 15k+ users. Heavy usage limits may apply to storage and broadcast messages to prevent abuse.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
