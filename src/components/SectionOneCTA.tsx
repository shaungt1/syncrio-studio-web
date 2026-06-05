import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function SectionOneCTA() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Enter a valid transmission address.");
      return;
    }
    if (!consent) {
      toast.error("Enable consent so we can send early-access transmissions.");
      return;
    }
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setEmail("");
      toast.success("Transmission received. You're on the waitlist.");
      document.getElementById("early-access")?.scrollIntoView({ behavior: "smooth" });
    }, 900);
  }

  return (
    <motion.div initial="hidden" animate="visible" variants={sectionReveal}>
      <Badge className="syncrio-badge relative mb-5 rounded-full px-4 py-2 font-mono text-[10px] uppercase tracking-[0.24em] shadow-none sm:mb-6 sm:text-[11px] sm:tracking-[0.28em]">
        <span className="mr-2 inline-flex h-2 w-2 rounded-full bg-[oklch(0.797_0.134_211.53)]" />
        Atomic age AI for the overloaded human
      </Badge>

      <h1 className="font-display text-[2.85rem] leading-[0.9] text-atomic-cream text-shadow-syncrio sm:text-[3.5rem]">
        STOP MANAGING <span className="syncrio-gradient-text">15 TOOLS</span>
        <br />
        JUST TO STAY <span className="syncrio-gradient-text">ORGANIZED</span>.
      </h1>

      <p className="mt-5 text-base leading-relaxed text-atomic-muted sm:mt-6">
        Syncrio syncs your devices into one connected workspace, so your files, links, text,
        media, and digital resources can move with you across the systems you already use.
      </p>

      <form onSubmit={onSubmit} className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your.transmission@frequency.com"
          disabled={submitting}
          className="syncrio-input h-12 min-w-0 flex-1 rounded-full border-none bg-[rgba(255,255,255,0.08)] text-base text-atomic-white placeholder:text-atomic-muted/60 focus-visible:ring-2 focus-visible:ring-primary/60"
        />
        <Button
          type="submit"
          disabled={submitting}
          className="syncrio-cta h-12 rounded-full px-6 font-mono text-xs uppercase tracking-[0.22em]"
        >
          {submitting ? "Sending..." : "Join the waitlist"}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </form>

      <label className="mt-4 flex cursor-pointer items-start gap-3">
        <Checkbox
          checked={consent}
          onCheckedChange={(checked) => setConsent(checked === true)}
          className="mt-0.5 border-white/20 data-[state=checked]:border-signal-cyan data-[state=checked]:bg-signal-cyan"
        />
        <span className="text-sm leading-normal text-atomic-muted">
          Send me early-access invitations and product transmissions.
        </span>
      </label>

      <div className="mt-6 hidden flex-wrap items-center gap-4 font-mono text-[10px] uppercase tracking-[0.24em] text-atomic-muted sm:flex">
        <span>Early access</span>
        <span className="h-px w-6 bg-border" />
        <span>No spam</span>
        <span className="h-px w-6 bg-border" />
        <span>Review &amp; permission controls built in</span>
      </div>
    </motion.div>
  );
}
