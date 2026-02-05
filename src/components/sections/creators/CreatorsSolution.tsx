"use client";

import { motion } from "framer-motion";
import { MessageCircle, CreditCard, Calendar, ShieldCheck } from "lucide-react";

const solutions = [
  {
    icon: <MessageCircle className="w-6 h-6 text-indigo-400" />,
    title: "Real Conversations",
    description: "Move beyond comments. Host organized discussions in channels you control.",
    gradient: "from-indigo-500/10 to-blue-500/5",
  },
  {
    icon: <CreditCard className="w-6 h-6 text-emerald-400" />,
    title: "Direct Monetization",
    description: "Sell memberships, events, or digital products directly. No algorithm tax.",
    gradient: "from-emerald-500/10 to-green-500/5",
  },
  {
    icon: <Calendar className="w-6 h-6 text-rose-400" />,
    title: "Exclusive Events",
    description: "Host subscriber-only webinars, meetups, or live sessions seamlessly.",
    gradient: "from-rose-500/10 to-pink-500/5",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-amber-400" />,
    title: "Your Data",
    description: "You own the member list. You own the emails. No platform lock-in.",
    gradient: "from-amber-500/10 to-yellow-500/5",
  },
];

export function CreatorsSolution() {
  return (
    <section className="py-32 px-6 relative bg-[#070707] min-h-[50vh]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter shimmer-text">
              Build a <span className="bg-clip-text text-transparent bg-gradient-to-r from-tuft-purple to-tuft-pink">Sanctuary</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Tuft gives you the tools to deepen relationships and sustainability monetize your influence.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`p-8 rounded-3xl border border-white/5 bg-gradient-to-br ${item.gradient} hover:border-white/10 transition-colors group`}
            >
              <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-100">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
