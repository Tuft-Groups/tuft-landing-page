"use client";

import { useState, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function DeleteAccountForm() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleDelete = async () => {
    if (!email) return;

    try {
      setLoading(true);
      setStatus("idle");
      const res = await fetch("https://tuft-core-wq7gvvjxpa-el.a.run.app/user/delete_account_public", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  if (status === "success") {
    return (
      <div className="glass-card w-full max-w-2xl rounded-3xl p-8 md:p-12 overflow-hidden bg-slate-900/40 text-center flex flex-col items-center gap-6">
        <div className="w-20 h-20 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 border border-green-500/30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Check Your Email</h2>
          <p className="text-slate-300 leading-relaxed max-w-md mx-auto">
            We've sent a verification link to your email address. Please check your inbox (and spam folder) to permanently delete your
            account.
          </p>
        </div>
        <Button onClick={() => setStatus("idle")} className="btn-premium px-8 py-3 rounded-xl font-bold tap-active mt-4">
          Back
        </Button>
      </div>
    );
  }

  return (
    <div className="glass-card w-full max-w-2xl rounded-3xl p-8 md:p-12 overflow-hidden bg-slate-900/40">
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 gradient-text-premium inline-block">Delete Account</h1>

      <div className="flex flex-col gap-6 text-slate-300">
        <p className="leading-relaxed">
          All your account data, including messages and personal information, will be permanently deleted and cannot be recovered. Please
          confirm your email below to proceed with account deletion. You will receive an email for verification before your account is
          permanently deleted.
        </p>

        {status === "error" && (
          <div className="p-4 rounded-xl bg-red-500/20 border border-red-500/30 text-red-200 text-sm">
            Failed to request account deletion. Please try again later.
          </div>
        )}

        <div className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-medium text-slate-400 mb-1.5 block">Email Address</label>
            <Input
              placeholder="Enter your email"
              required
              className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 rounded-xl focus-visible:ring-tuft-purple focus-visible:border-tuft-purple"
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-400 mb-1.5 block">Reason (Optional)</label>
            <Textarea
              placeholder="Tell us why you're leaving..."
              className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 rounded-xl min-h-[100px] focus-visible:ring-tuft-purple focus-visible:border-tuft-purple"
            />
          </div>

          <div className="pt-2">
            <Button
              onClick={handleDelete}
              disabled={loading || !email}
              className="w-full btn-premium py-6 text-base font-bold rounded-xl tap-active"
            >
              {loading ? "Processing..." : "Delete My Account"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
