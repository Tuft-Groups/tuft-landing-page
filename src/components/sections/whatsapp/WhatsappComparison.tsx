"use client";

import { motion } from "framer-motion";
import {
  ShieldWarningBold,
  ShieldCheckBold,
  ChatRoundLineBold,
  ChatSquareBold,
  DatabaseBold,
  CloudStorageBold,
  VideoFrameBold,
  StopCircleBold,
  CardBold,
  WalletBold,
  ChartBold,
  GraphBold,
} from "solar-icon-set";

const comparisons = [
  {
    feature: "Privacy & Safety",
    whatsapp: "Personal phone numbers are public to everyone.",
    whatsappIcon: ShieldWarningBold,
    tuft: "Phone numbers hidden by default. Total privacy.",
    tuftIcon: ShieldCheckBold,
  },
  {
    feature: "Signal vs. Noise",
    whatsapp: "One stream. Urgent updates get lost instantly.",
    whatsappIcon: ChatSquareBold,
    tuft: "Admin-only Feed, plus threaded chats for deep dives.",
    tuftIcon: ChatRoundLineBold,
  },
  {
    feature: "File Storage",
    whatsapp: "Downloads to phones, causing 'Storage Full' errors.",
    whatsappIcon: DatabaseBold,
    tuft: "Unlimited cloud folders. Share HD media safely.",
    tuftIcon: CloudStorageBold,
  },
  {
    feature: "Hosting Calls",
    whatsapp: "Juggling external links with 40-min limits.",
    whatsappIcon: StopCircleBold,
    tuft: "Built-in HD video calls with no time limits.",
    tuftIcon: VideoFrameBold,
  },
  {
    feature: "Monetization",
    whatsapp: "Manual nightmare of chasing payment screenshots.",
    whatsappIcon: WalletBold,
    tuft: "Automated Joining Workflow with custom Entry Fees.",
    tuftIcon: CardBold,
  },
  {
    feature: "Engagement",
    whatsapp: "Relying on thumbs-up emojis to track attendance.",
    whatsappIcon: ChartBold,
    tuft: "Built-in Polls, Quizzes, Forms, and Attendance.",
    tuftIcon: GraphBold,
  },
];

export function WhatsappComparison() {
  return (
    <section className="py-24 md:py-40 px-6 relative bg-linear-to-b from-black via-[#040a07] to-[#070707] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-[#25D366] opacity-[0.03] blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-red-600 opacity-[0.02] blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter text-white drop-shadow-lg">
              The Breakdown: <br />
              <span className="text-red-500/80 italic pr-2">Chaos</span>
              <span className="text-slate-500">vs. </span>
              <span className="bg-clip-text text-transparent bg-linear-to-r from-emerald-400 to-teal-400">Clarity</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
              Why making the switch to Tuft is the easiest upgrade you’ll make this year.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full relative glass-card p-2 md:p-8 rounded-[2rem] md:rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5"
        >
          <div className="overflow-x-auto pb-4 custom-scrollbar">
            <table className="w-full text-left min-w-[700px] border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-6 px-4 md:px-6 w-1/4"></th>
                  <th className="py-6 px-4 md:px-6 w-[37%] bg-red-500/5 rounded-t-3xl border-x border-t border-red-500/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500">
                        <StopCircleBold size={20} />
                      </div>
                      <span className="text-lg font-bold text-red-400 tracking-tight">WhatsApp</span>
                    </div>
                  </th>
                  <th className="w-[3%]"></th> {/* Spacer */}
                  <th className="py-6 px-4 md:px-6 w-[37%] bg-emerald-500/10 rounded-t-3xl border-x border-t border-emerald-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-tr from-emerald-500/10 to-transparent pointer-events-none"></div>
                    <div className="flex items-center gap-3 relative z-10">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                        <ShieldCheckBold size={20} />
                      </div>
                      <span className="text-lg font-bold text-emerald-400 tracking-tight drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">
                        Tuft
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((item, idx) => (
                  <tr key={idx} className="group border-b border-white/5 last:border-0 hover:bg-white/2 transition-colors">
                    <td className="py-6 px-4 md:px-6 align-top">
                      <span className="text-sm md:text-base font-bold text-slate-200 tracking-wide">{item.feature}</span>
                    </td>
                    <td className="py-6 px-4 md:px-6 align-top bg-red-500/5 border-x border-red-500/10 group-last:rounded-b-3xl group-last:border-b transition-colors">
                      <div className="flex gap-4">
                        <item.whatsappIcon size={20} className="text-red-500/80 shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base text-slate-400 leading-relaxed font-light">{item.whatsapp}</span>
                      </div>
                    </td>
                    <td className="w-[3%]"></td> {/* Spacer */}
                    <td className="py-6 px-4 md:px-6 align-top bg-emerald-500/10 border-x border-emerald-500/20 group-last:rounded-b-3xl group-last:border-b relative overflow-hidden transition-colors group-hover:bg-emerald-500/20">
                      <div className="flex gap-4 relative z-10">
                        <item.tuftIcon size={20} className="text-emerald-400 shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(16,185,129,0.6)]" />
                        <span className="text-sm md:text-base text-white leading-relaxed font-medium drop-shadow-sm">{item.tuft}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
