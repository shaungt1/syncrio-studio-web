import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import TiltedCard from "@/components/react-bits/TiltedCard";
import SideRays from "@/components/react-bits/SideRays";
import LightRays from "@/components/react-bits/LightRays";
import GradualBlur from "@/components/react-bits/GradualBlur";
import BlurText from "@/components/react-bits/BlurText";
import LiquidEther from "@/components/react-bits/LiquidEther";
import LaserFlow from "@/components/react-bits/LaserFlow";
import BlurSlideshow from "@/components/syncrio/BlurSlideshow";
import RetroAtom from "@/components/syncrio/RetroAtom";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import {
  ArrowRight,
  AudioLines,
  Bell,
  BrainCircuit,
  CalendarClock,
  CheckCircle2,
  CircleDashed,
  FileArchive,
  FileText,
  FolderKanban,
  Globe,
  Image as ImageIcon,
  Link2,
  Lock,
  Monitor,
  PlayCircle,
  Rocket,
  ScanText,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Tablet,
  Video,
  WandSparkles,
  Workflow,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Syncrio Waitlist — Sync Devices, Then Add CHIP" },
      {
        name: "description",
        content:
          "Syncrio syncs your devices into one connected workspace. CHIP makes that synced world intelligent. Join the early-access waitlist.",
      },
      {
        property: "og:title",
        content: "Syncrio — Sync devices first. Make them intelligent with CHIP.",
      },
      {
        property: "og:description",
        content:
          "A dark retro-futurist waitlist page for the sync workspace that connects your devices and digital resources.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const heroScenes = [
  {
    title: "Scattered device mesh",
    eyebrow: "RESOURCE SIGNALS",
    chips: ["Desktop", "Phone", "Browser", "Files", "Links", "Images"],
    note: "Signals converge into the Syncrio core.",
  },
  {
    title: "Context sync pass",
    eyebrow: "SYNC ROUTING",
    chips: ["Audio", "Video", "Notes", "Docs", "Tasks", "Research"],
    note: "Resources become available across the workspace.",
  },
  {
    title: "CHIP ready state",
    eyebrow: "INTELLIGENCE LAYER",
    chips: ["Memory", "Review", "Permissions", "Actions", "Schedule", "Ideas"],
    note: "CHIP waits for approved next actions.",
  },
] as const;

const chaosLabels = [
  "99+ Notifications",
  "Where is that file?",
  "Forgotten reminder",
  "Browser tabs",
  "Cloud folder",
  "Phone photo",
  "Desktop project",
  "Meeting note",
  "AI chat answer",
  "Video asset",
];

const workspaceNodes = [
  { icon: Monitor, label: "Desktop" },
  { icon: Smartphone, label: "Mobile" },
  { icon: Tablet, label: "Tablet" },
  { icon: Globe, label: "Browser" },
  { icon: FileArchive, label: "Files" },
  { icon: Link2, label: "Links" },
  { icon: ImageIcon, label: "Images" },
  { icon: Video, label: "Video" },
  { icon: AudioLines, label: "Audio" },
  { icon: FileText, label: "Documents" },
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-atomic-white syncrio-page-bg">
      <Toaster position="top-center" />
      <PageDecor />
      <NavBar />
      <main>
        <HeroSection />
        <ProblemSection />
        <LaserFlowSection />
        <WorkspaceSection />
        <ChipProofSection />
        <CategorySection />
        <TrustSection />
        <EarlyAccessSection />
      </main>
      <Footer />
    </div>
  );
}

function PageDecor() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 syncrio-grid opacity-30" />
      <div className="pointer-events-none fixed inset-0 syncrio-scanlines opacity-[0.18]" />
      <div className="pointer-events-none fixed inset-0 syncrio-film-grain opacity-30" />
      <div className="pointer-events-none fixed left-[68%] top-[10%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(164,13,195,0.16),transparent_62%)] blur-3xl" />
      <div className="pointer-events-none fixed left-[-8rem] top-[40%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.08),transparent_68%)] blur-3xl" />
    </>
  );
}

function NavBar() {
  return (
    <header className="relative z-30 px-4 pt-5 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-border/80 bg-[oklch(0.145_0.012_289_/_0.72)] px-4 py-3 backdrop-blur-xl nav-glow sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[oklch(0.178_0.016_290.359_/_0.84)]">
            <ThreeLoopAtom className="h-6 w-6 text-signal-cyan" />
            <div className="absolute inset-0 rounded-full soft-pulse" />
          </div>
          <div>
            <div className="font-display text-xl leading-none text-atomic-cream">SYNCRIO</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-atomic-muted">
              Digital Twin Operating System
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 font-mono text-[11px] uppercase tracking-[0.28em] text-atomic-muted lg:flex">
          <a href="#problem" className="transition hover:text-atomic-white">
            Problem
          </a>
          <a href="#laser-flow" className="transition hover:text-atomic-white">
            Flow
          </a>
          <a href="#workspace" className="transition hover:text-atomic-white">
            Workspace
          </a>
          <a href="#chip-proof" className="transition hover:text-atomic-white">
            CHIP
          </a>
          <a href="#trust" className="transition hover:text-atomic-white">
            Trust
          </a>
        </nav>

        <Button asChild className="syncrio-cta rounded-full px-5 font-mono text-xs uppercase tracking-[0.22em]">
          <a href="#early-access">Join Waitlist</a>
        </Button>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="top" className="relative z-10 px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pb-28 lg:pt-16">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[minmax(0,1.02fr)_minmax(440px,0.98fr)]">
        <motion.div initial="hidden" animate="visible" variants={sectionReveal} className="relative">
          <div className="absolute -left-3 top-4 h-16 w-16 rounded-full starburst-purple opacity-40 blur-[0.5px]" />
          <Badge className="syncrio-badge relative mb-6 rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.28em] shadow-none">
            <span className="mr-2 inline-flex h-2 w-2 rounded-full bg-[oklch(0.797_0.134_211.53)]" />
            Atomic age AI for the overloaded human
          </Badge>

          <h1 className="max-w-3xl font-display text-[clamp(3rem,8vw,6.9rem)] leading-[0.92] text-atomic-cream text-shadow-syncrio">
            STOP MANAGING <span className="syncrio-gradient-text">15 TOOLS</span>
            <br />
            JUST TO STAY <span className="syncrio-gradient-text">ORGANIZED</span>.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-atomic-muted sm:text-xl">
            Syncrio syncs your devices into one connected workspace, so your files, links, text,
            media, and digital resources can move with you across the systems you already use.
          </p>
          <p className="mt-4 max-w-xl text-base font-medium text-atomic-white/88 sm:text-lg">
            Add CHIP, and that synced workspace becomes intelligent.
          </p>

          <div className="mt-10 max-w-2xl">
            <HeroForm />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 font-mono text-[11px] uppercase tracking-[0.24em] text-atomic-muted">
            <span>Early access</span>
            <span className="h-px w-6 bg-border" />
            <span>No spam</span>
            <span className="h-px w-6 bg-border" />
            <span>Review &amp; permission controls built in</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40, y: 14 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          className="relative"
        >
          <HeroReactor />
        </motion.div>
      </div>
    </section>
  );
}

function HeroForm() {
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
      toast.success("Transmission received. You’re on the waitlist.");
      document.getElementById("early-access")?.scrollIntoView({ behavior: "smooth" });
    }, 900);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="syncrio-glass-card rounded-[24px] p-2 sm:flex sm:items-center sm:gap-2">
        <Input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="your.transmission@frequency.com"
          className="syncrio-input h-14 rounded-[18px] border-none bg-transparent px-5 text-base shadow-none focus-visible:ring-0"
        />
        <Button
          type="submit"
          disabled={submitting}
          className="syncrio-cta mt-2 h-14 w-full rounded-[18px] px-6 font-mono text-xs uppercase tracking-[0.24em] sm:mt-0 sm:w-auto"
        >
          {submitting ? "Transmitting…" : "Join the waitlist"}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <label className="flex items-start gap-3 pl-1 text-sm text-atomic-muted">
        <Checkbox
          checked={consent}
          onCheckedChange={(checked) => setConsent(Boolean(checked))}
          className="mt-0.5 border-border data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
        />
        <span>Send me early-access invitations and product transmissions.</span>
      </label>
    </form>
  );
}

function HeroReactor() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const scene = heroScenes[sceneIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSceneIndex((current) => (current + 1) % heroScenes.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto max-w-[620px] lg:mr-0">
      <div className="pointer-events-none absolute -left-12 -top-10 h-24 w-24 rounded-full starburst-purple opacity-30" />
      <div className="pointer-events-none absolute right-4 top-[15%] h-16 w-16 rounded-full border border-white/10 bg-[radial-gradient(circle,rgba(34,211,238,0.18),transparent_70%)] blur-md" />
      <SideRays
        className="absolute inset-y-[6%] -right-[6%] left-[16%] rounded-[30px]"
        speed={2.3}
        rayColor1="#5E0CAE"
        rayColor2="#96C8FF"
        intensity={1}
        spread={1.2}
        origin="top-right"
        opacity={0.34}
      />
      <TiltedCard className="relative" glareClassName="opacity-100">
        <div className="syncrio-glass-card relative min-h-[460px] rounded-[28px] p-6 sm:p-7">
          <div className="pointer-events-none absolute inset-0 rounded-[28px] syncrio-scanlines opacity-[0.12]" />
          <div className="pointer-events-none absolute inset-0 rounded-[28px] syncrio-film-grain opacity-40" />

          <div className="relative flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.3em] text-atomic-muted">
            <span>Tool Chaos Reactor</span>
            <span>Syncrio Sync Core</span>
          </div>

          <div className="relative mt-6 h-[360px] overflow-hidden rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(7,7,10,0.72),rgba(17,16,24,0.96))]">
            <div className="absolute inset-0 hud-dots opacity-30" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(164,13,195,0.16),transparent_28%),radial-gradient(circle_at_50%_50%,rgba(47,107,255,0.08),transparent_46%)]" />

            <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8">
              <div className="orbit-spin absolute inset-0">
                <div className="absolute left-1/2 top-[-8px] h-4 w-4 -translate-x-1/2 rounded-full border border-primary/60 bg-[oklch(0.529_0.249_319.033_/_0.16)] shadow-[0_0_22px_rgba(164,13,195,0.4)]" />
              </div>
              <div className="orbit-spin absolute inset-[26px] [animation-direction:reverse]">
                <div className="absolute left-1/2 top-[-7px] h-3.5 w-3.5 -translate-x-1/2 rounded-full border border-accent/60 bg-[oklch(0.797_0.134_211.53_/_0.18)] shadow-[0_0_22px_rgba(34,211,238,0.3)]" />
              </div>
              <div className="orbit-spin absolute inset-[52px]">
                <div className="absolute left-1/2 top-[-6px] h-3 w-3 -translate-x-1/2 rounded-full border border-[oklch(0.909_0.206_136.427_/_0.55)] bg-[oklch(0.909_0.206_136.427_/_0.18)]" />
              </div>
            </div>

            <div className="core-glow soft-pulse absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/10 bg-[radial-gradient(circle,rgba(248,244,234,0.16)_0%,rgba(164,13,195,0.22)_38%,rgba(47,107,255,0.16)_74%,rgba(10,10,16,0.94)_100%)] text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
              <span className="font-display text-[2rem] leading-none text-atomic-white">SYNCRIO</span>
              <span className="mt-1 font-mono text-[11px] uppercase tracking-[0.28em] text-atomic-muted">
                Sync Core
              </span>
              <span className="mt-2 font-mono text-[10px] uppercase tracking-[0.26em] text-signal-cyan">
                Device mesh online
              </span>
            </div>

            <AnimatedChipOrbit chips={scene.chips} />
            <SceneCaption title={scene.title} eyebrow={scene.eyebrow} note={scene.note} />
            <HeroSignalLines />
          </div>

          <div className="relative mt-4 flex items-center justify-between rounded-[18px] border border-white/8 bg-[rgba(8,8,14,0.72)] px-4 py-3 font-mono text-[11px] uppercase tracking-[0.24em] text-atomic-muted">
            <span>4 Devices · Resources available everywhere</span>
            <Badge className="rounded-full border border-[oklch(0.909_0.206_136.427_/_0.28)] bg-[oklch(0.909_0.206_136.427_/_0.12)] font-mono text-[10px] uppercase tracking-[0.24em] text-[oklch(0.909_0.206_136.427)] shadow-none">
              CHIP ready
            </Badge>
          </div>
        </div>
      </TiltedCard>
    </div>
  );
}

function AnimatedChipOrbit({ chips }: { chips: readonly string[] }) {
  const placements = useMemo(
    () => [
      "left-[12%] top-[18%]",
      "right-[10%] top-[17%]",
      "left-[6%] top-[44%]",
      "right-[6%] top-[44%]",
      "left-[20%] bottom-[14%]",
      "right-[18%] bottom-[13%]",
    ],
    [],
  );

  return (
    <div className="absolute inset-0">
      {chips.map((chip, index) => (
        <motion.div
          key={chip}
          initial={{ opacity: 0, scale: 0.82, filter: "blur(12px)" }}
          animate={{
            opacity: 1,
            scale: [0.98, 1.02, 0.98],
            y: [0, index % 2 === 0 ? -8 : 8, 0],
            filter: ["blur(0px)", "blur(0px)", "blur(0px)"],
          }}
          transition={{ duration: 6 + index * 0.25, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute ${placements[index]} rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(23,19,32,0.94),rgba(11,10,16,0.94))] px-3 py-2 text-[11px] font-mono uppercase tracking-[0.22em] text-atomic-white shadow-[0_10px_26px_-18px_rgba(164,13,195,0.7)] backdrop-blur-xl`}
        >
          {chip}
        </motion.div>
      ))}
    </div>
  );
}

function HeroSignalLines() {
  const lines = [
    "left-[24%] top-[34%] w-[28%] rotate-[14deg]",
    "right-[24%] top-[34%] w-[28%] -rotate-[14deg]",
    "left-[20%] top-[52%] w-[24%] -rotate-[8deg]",
    "right-[20%] top-[52%] w-[24%] rotate-[8deg]",
    "left-[29%] bottom-[24%] w-[18%] rotate-[24deg]",
    "right-[28%] bottom-[24%] w-[18%] -rotate-[24deg]",
  ];

  return (
    <div className="absolute inset-0">
      {lines.map((line) => (
        <motion.div
          key={line}
          className={`absolute h-px ${line} signal-line origin-left opacity-80`}
          animate={{ opacity: [0.35, 0.92, 0.35], scaleX: [0.94, 1.03, 0.94] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function SceneCaption({
  eyebrow,
  title,
  note,
}: {
  eyebrow: string;
  title: string;
  note: string;
}) {
  return (
    <motion.div
      key={title}
      initial={{ opacity: 0, y: 12, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="absolute bottom-4 left-4 right-4 rounded-[18px] border border-[oklch(0.797_0.134_211.53_/_0.18)] bg-[rgba(8,8,14,0.74)] px-4 py-3"
    >
      <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-signal-cyan">{eyebrow}</div>
      <div className="mt-1 font-display text-lg text-atomic-cream">{title}</div>
      <div className="mt-1 text-sm text-atomic-muted">{note}</div>
    </motion.div>
  );
}

function ProblemSection() {
  return (
    <Section
      id="problem"
      eyebrow="Section 01 · Problem"
      title="YOUR DIGITAL LIFE IS EVERYWHERE."
      accent="YOUR ATTENTION IS PAYING FOR IT."
    >
      <p className="mx-auto max-w-4xl text-center text-lg leading-8 text-atomic-muted sm:text-xl">
        Your files are on one device. Your links are buried in browser tabs. Your notes live in
        another app. Your media is scattered across folders, drives, chats, and downloads. The real
        problem is not that you need another tool. The real problem is that you have become the
        integration layer between all of them.
      </p>

      <div className="relative mx-auto mt-14 max-w-6xl overflow-hidden rounded-[30px] syncrio-glass-card px-6 py-8 sm:px-10 sm:py-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(164,13,195,0.10),transparent_32%)]" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {chaosLabels.map((label, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.05, duration: 0.55 }}
              animate={{ y: [0, index % 2 === 0 ? -3 : 4, 0], rotate: [0, index % 3 === 0 ? 1.2 : -1, 0] }}
              className="rounded-[18px] border border-white/8 bg-[linear-gradient(180deg,rgba(23,19,32,0.9),rgba(9,9,12,0.96))] px-4 py-4 text-left shadow-[0_18px_40px_-28px_rgba(34,211,238,0.5)]"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-atomic-muted">
                  noisy signal
                </span>
                <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.909_0.206_136.427_/_0.75)]" />
              </div>
              <div className="font-display text-xl leading-none text-atomic-white">{label}</div>
            </motion.div>
          ))}
        </div>
        <GradualBlur className="h-40" colorA="rgba(94,12,174,0.24)" colorB="rgba(34,211,238,0.08)" />
      </div>
    </Section>
  );
}

function LaserFlowSection() {
  return (
    <Section
      id="laser-flow"
      eyebrow="Section 02 · Sync Flow"
      title="FROM SCATTERED SIGNALS"
      accent="TO ONE SYNCED WORKSPACE."
    >
      <p className="mx-auto max-w-4xl text-center text-lg leading-8 text-atomic-muted sm:text-xl">
        Syncrio pulls your device resources into one accessible layer. Once your text, links,
        files, media, and device context can move together, CHIP can help understand, route,
        recommend, and automate what happens next.
      </p>

      <div className="relative mx-auto mt-14 min-h-[640px] max-w-6xl overflow-hidden rounded-[34px] border border-white/8 bg-[linear-gradient(180deg,rgba(5,5,8,0.96),rgba(9,9,11,0.98))] p-6 sm:p-8">
        <LaserFlow className="opacity-90" color="#5E0CAE" glowColor="#A40DC3" edgeColor="#22D3EE" />
        <div className="absolute inset-0 syncrio-scanlines opacity-[0.1]" />

        <div className="relative z-10 flex h-full flex-col justify-between gap-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Badge className="syncrio-badge rounded-full px-4 py-2 font-mono text-[10px] uppercase tracking-[0.28em] shadow-none">
              Laser flow explainer
            </Badge>
            <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-atomic-muted">
              scattered resources → synced workspace → CHIP layer
            </div>
          </div>

          <div className="mx-auto grid w-full max-w-5xl items-end gap-8 lg:grid-cols-[0.84fr_1.16fr]">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.24em] text-signal-cyan">
                <Sparkles className="h-3.5 w-3.5" />
                Beam logic online
              </div>
              <h3 className="font-display text-4xl leading-[0.94] text-atomic-white sm:text-5xl">
                Syncrio gathers the fragments first.
              </h3>
              <p className="max-w-xl text-base leading-7 text-atomic-muted sm:text-lg">
                The sync layer gives every approved device resource a shared place to move, so CHIP
                can work inside connected context instead of isolated windows.
              </p>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <button type="button" className="relative rounded-[28px] syncrio-glass-card p-5 text-left transition-transform duration-300 hover:-translate-y-1 sm:p-6">
                  <div className="absolute inset-0 rounded-[28px] syncrio-scanlines opacity-[0.12]" />
                  <div className="relative rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,8,14,0.92),rgba(4,4,8,0.98))] p-6">
                    <div className="mb-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-atomic-muted">
                      <span>Retro transmission demo</span>
                      <PlayCircle className="h-4 w-4 text-signal-cyan" />
                    </div>
                    <div className="relative min-h-[240px] overflow-hidden rounded-[20px] border border-white/8 bg-[radial-gradient(circle_at_50%_40%,rgba(164,13,195,0.22),transparent_34%),linear-gradient(180deg,rgba(9,9,12,0.92),rgba(7,7,10,0.98))]">
                      <div className="absolute inset-0 syncrio-scanlines opacity-[0.18]" />
                      <div className="absolute inset-x-[20%] top-[48%] h-px signal-line" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                        <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.26em] text-atomic-muted">
                          Coming soon
                        </div>
                        <h4 className="mt-5 font-display text-3xl text-atomic-cream">See Syncrio in motion.</h4>
                        <p className="mt-3 max-w-md text-sm leading-7 text-atomic-muted sm:text-base">
                          Coming soon: see Syncrio sync devices, resources, and CHIP actions in one
                          flow.
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl rounded-[28px] border-white/10 bg-[linear-gradient(180deg,rgba(10,10,14,0.96),rgba(5,5,8,0.98))] p-0 text-atomic-white">
                <DialogHeader className="border-b border-white/8 px-6 py-5">
                  <DialogTitle className="font-display text-3xl text-atomic-cream">Retro Transmission Demo</DialogTitle>
                  <DialogDescription className="text-base leading-7 text-atomic-muted">
                    This cinematic placeholder will become the WandaVision-style explainer showing Syncrio syncing devices, resources, and CHIP review-aware actions.
                  </DialogDescription>
                </DialogHeader>
                <div className="p-6">
                  <div className="rounded-[24px] border border-white/10 bg-[radial-gradient(circle_at_50%_35%,rgba(164,13,195,0.18),transparent_32%),linear-gradient(180deg,rgba(9,9,12,0.92),rgba(7,7,10,0.98))] p-8 text-center syncrio-scanlines">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5">
                      <PlayCircle className="h-7 w-7 text-signal-cyan" />
                    </div>
                    <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.28em] text-atomic-muted">Transmission placeholder</p>
                    <p className="mt-4 text-base leading-8 text-atomic-muted">
                      The future video slot is reserved here so the flow section already has the right framing, chrome treatment, and interactive affordance.
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </Section>
  );
}

function WorkspaceSection() {
  return (
    <Section
      id="workspace"
      eyebrow="Section 03 · Device Mesh"
      title="ONE SYNCED WORKSPACE"
      accent="FOR THE DEVICES YOU ALREADY USE."
    >
      <p className="mx-auto max-w-4xl text-center text-lg leading-8 text-atomic-muted sm:text-xl">
        Syncrio connects your devices so the digital resources you create, save, capture, and move
        every day can become available across your own system. Text, links, files, images, video,
        audio, documents, and app context stop living as isolated fragments and start moving through
        one synced workspace.
      </p>

      <div className="relative mx-auto mt-14 max-w-6xl overflow-hidden rounded-[34px] syncrio-glass-card px-6 py-10 sm:px-10 sm:py-12">
        <LightRays className="opacity-45" raysColor="#96C8FF" raysOrigin="top-center" />
        <div className="relative grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <WorkspaceMesh />
          <div className="space-y-5">
            <Badge className="syncrio-badge rounded-full px-4 py-2 font-mono text-[10px] uppercase tracking-[0.28em] shadow-none">
              device resource layer
            </Badge>
            <h3 className="font-display text-4xl leading-[0.96] text-atomic-white sm:text-5xl">
              Syncrio syncs your devices.
              <br />
              <span className="syncrio-gradient-text">CHIP makes that synced world intelligent.</span>
            </h3>
            <p className="text-base leading-8 text-atomic-muted sm:text-lg">
              Start with resource movement, continuity, and access. Then let CHIP recommend next
              steps, routes, reminders, and approved actions inside that connected layer.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function WorkspaceMesh() {
  const positions = [
    "left-[4%] top-[6%]",
    "left-[28%] top-[0%]",
    "right-[20%] top-[8%]",
    "right-[0%] top-[28%]",
    "right-[2%] bottom-[10%]",
    "right-[24%] bottom-[0%]",
    "left-[30%] bottom-[2%]",
    "left-[4%] bottom-[14%]",
    "left-[0%] top-[34%]",
    "left-[16%] top-[22%]",
  ];

  return (
    <div className="relative mx-auto h-[440px] w-full max-w-[560px]">
      <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/12 bg-[radial-gradient(circle,rgba(164,13,195,0.22)_0%,rgba(47,107,255,0.12)_44%,rgba(7,7,10,0.96)_76%)] core-glow">
        <div className="absolute inset-5 rounded-full border border-white/8" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <ThreeLoopAtom className="mb-3 h-8 w-8 text-signal-cyan" />
          <span className="font-display text-[2rem] leading-none text-atomic-white">SYNCRIO</span>
          <span className="mt-1 font-mono text-[11px] uppercase tracking-[0.28em] text-atomic-muted">
            Workspace
          </span>
        </div>
      </div>

      {workspaceNodes.map((node, index) => {
        const Icon = node.icon;
        return (
          <motion.div
            key={node.label}
            initial={{ opacity: 0, scale: 0.78, y: 14 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.55, delay: index * 0.06 }}
            className={`absolute ${positions[index]} flex w-[122px] flex-col items-center rounded-[18px] border border-white/8 bg-[linear-gradient(180deg,rgba(23,19,32,0.92),rgba(8,8,14,0.96))] px-3 py-3 text-center shadow-[0_18px_40px_-30px_rgba(164,13,195,0.7)]`}
          >
            <Icon className="mb-2 h-5 w-5 text-signal-cyan" />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-atomic-white">
              {node.label}
            </span>
          </motion.div>
        );
      })}

      {[
        "left-[18%] top-[20%] w-[32%] rotate-[18deg]",
        "left-[34%] top-[14%] w-[20%] rotate-[4deg]",
        "right-[22%] top-[22%] w-[24%] -rotate-[8deg]",
        "right-[14%] top-[38%] w-[18%] -rotate-[20deg]",
        "right-[22%] bottom-[22%] w-[18%] rotate-[14deg]",
        "left-[28%] bottom-[14%] w-[18%] -rotate-[18deg]",
        "left-[10%] bottom-[24%] w-[22%] rotate-[6deg]",
        "left-[8%] top-[38%] w-[20%] rotate-[-12deg]",
      ].map((line) => (
        <motion.div
          key={line}
          className={`absolute h-px ${line} signal-line`}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 0.9 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
    </div>
  );
}

function ChipProofSection() {
  const outputs = [
    {
      icon: CalendarClock,
      title: "Reminder",
      body: "Call Bob · Thu 1:00 PM",
    },
    {
      icon: FileText,
      title: "Research Note",
      body: "Article → Research",
    },
    {
      icon: Workflow,
      title: "Task List",
      body: "Meeting → 4 steps",
    },
    {
      icon: Link2,
      title: "Workspace Link",
      body: "Context connected",
    },
  ];

  return (
    <Section
      id="chip-proof"
      eyebrow="Section 04 · CHIP Proof"
      title="SAY IT ONCE."
      accent="CHIP TURNS IT INTO WHAT NEEDS TO HAPPEN."
    >
      <p className="mx-auto max-w-4xl text-center text-lg leading-8 text-atomic-muted sm:text-xl">
        Once Syncrio gives your devices and resources a shared workspace, CHIP can help interpret
        what you mean and route the next action.
      </p>

      <div className="mx-auto mt-14 max-w-6xl overflow-hidden rounded-[34px] syncrio-glass-card p-6 sm:p-8 lg:p-10">
        <Tabs defaultValue="command" className="w-full">
          <TabsList className="mx-auto grid w-full max-w-[420px] grid-cols-2 rounded-full border border-white/10 bg-[rgba(8,8,14,0.8)] p-1">
            <TabsTrigger value="command" className="rounded-full font-mono text-[10px] uppercase tracking-[0.24em] data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Command
            </TabsTrigger>
            <TabsTrigger value="outputs" className="rounded-full font-mono text-[10px] uppercase tracking-[0.24em] data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Outputs
            </TabsTrigger>
          </TabsList>
          <TabsContent value="command" className="mt-8">
            <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
              <div className="rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(10,10,14,0.92),rgba(5,5,8,0.98))] p-6">
                <div className="mb-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-atomic-muted">
                  <span>CHIP command console</span>
                  <span>review-aware routing</span>
                </div>
                <div className="rounded-[20px] border border-[oklch(0.797_0.134_211.53_/_0.18)] bg-[rgba(8,8,14,0.82)] p-5 syncrio-scanlines">
                  <BlurText
                    text="CHIP, remind me to call Bob at 1 PM Thursday, save this article to research, and turn the meeting idea into a task list."
                    className="font-serif text-2xl leading-[1.45] text-atomic-white sm:text-[2rem]"
                  />
                </div>
                <div className="mt-5 font-mono text-[10px] uppercase tracking-[0.26em] text-atomic-muted">
                  CHIP operates with review and permission
                </div>
              </div>

              <div className="rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(10,10,14,0.92),rgba(5,5,8,0.98))] p-6">
                <div className="mb-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-atomic-muted">
                  <span>Intent routing</span>
                  <span>visible next steps</span>
                </div>
                <div className="space-y-4">
                  {[
                    "Interpret the request inside shared context.",
                    "Route outputs into the synced workspace.",
                    "Keep review and permission in the loop.",
                  ].map((step) => (
                    <div key={step} className="rounded-[18px] border border-white/8 bg-white/5 px-4 py-4 text-sm leading-7 text-atomic-muted">
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="outputs" className="mt-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {outputs.map((output, index) => {
                const Icon = output.icon;
                return (
                  <motion.div
                    key={output.title}
                    initial={{ opacity: 0, y: 20, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.55, delay: 0.18 + index * 0.1 }}
                  >
                    <Card className="syncrio-panel h-full rounded-[24px] border-none p-5">
                      <div className="relative z-10 flex h-full flex-col">
                        <div className="mb-4 flex items-center justify-between">
                          <div className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-white/10 bg-white/5">
                            <Icon className="h-5 w-5 text-signal-cyan" />
                          </div>
                          <CheckCircle2 className="h-5 w-5 text-signal-green" />
                        </div>
                        <div className="font-display text-2xl text-atomic-white">{output.title}</div>
                        <div className="mt-2 text-sm leading-7 text-atomic-muted">{output.body}</div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Section>
  );
}

function CategorySection() {
  const cards = [
    {
      icon: ScanText,
      title: "Notes Apps",
      body: "Store information in one place.",
      contrast:
        "Syncrio makes information available across your device mesh.",
    },
    {
      icon: FolderKanban,
      title: "Cloud Drives",
      body: "Store files in folders.",
      contrast:
        "Syncrio focuses on access, movement, and connected resource flow across your devices.",
    },
    {
      icon: BrainCircuit,
      title: "AI Chatbots",
      body: "Give answers in a chat window.",
      contrast: "CHIP can turn intent into actions inside the Syncrio workspace.",
    },
    {
      icon: WandSparkles,
      title: "Automation Tools",
      body: "Require manual setup and wiring.",
      contrast:
        "CHIP can recommend automations from your habits and repeated workflows.",
    },
  ];

  return (
    <Section
      eyebrow="Section 05 · Different Category"
      title="NOT ANOTHER APP."
      accent="THE SYNC LAYER BETWEEN YOUR DIGITAL LIFE."
    >
      <p className="mx-auto max-w-4xl text-center text-lg leading-8 text-atomic-muted sm:text-xl">
        Most tools handle one slice of the problem. One app stores notes. Another holds files.
        Another manages tasks. Another answers questions. Syncrio changes the category by syncing
        the resources across your devices first, then letting CHIP operate inside that connected
        layer.
      </p>

      <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <Card className="syncrio-glass-card h-full rounded-[24px] border-none p-5 transition-transform duration-300 hover:-translate-y-1">
                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[14px] border border-white/10 bg-white/5">
                    <Icon className="h-5 w-5 text-signal-cyan" />
                  </div>
                  <div className="font-display text-2xl text-atomic-white">{card.title}</div>
                  <div className="mt-3 text-sm leading-7 text-atomic-muted">{card.body}</div>
                  <Separator className="my-4 bg-white/10" />
                  <div className="text-sm leading-7 text-atomic-white/92">{card.contrast}</div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

function TrustSection() {
  const cards = [
    {
      icon: ShieldCheck,
      title: "Permission First",
      body: "CHIP asks before sensitive actions such as sending, publishing, purchasing, submitting forms, or controlling connected tools.",
    },
    {
      icon: CheckCircle2,
      title: "Review Before Commit",
      body: "Tasks, reminders, notes, workflows, and generated actions stay visible before they become permanent.",
    },
    {
      icon: Lock,
      title: "Sensitive Access Controlled",
      body: "Credentials, sessions, files, accounts, and device access are treated as protected resources.",
    },
    {
      icon: CircleDashed,
      title: "Built Around Ownership",
      body: "Your devices, identity, behavior patterns, and approved memory should remain under your control.",
    },
  ];

  return (
    <Section
      id="trust"
      eyebrow="Section 06 · Trust"
      title="POWERFUL ENOUGH TO ACT."
      accent="CONTROLLED ENOUGH TO TRUST."
    >
      <p className="mx-auto max-w-4xl text-center text-lg leading-8 text-atomic-muted sm:text-xl">
        Syncrio and CHIP are designed around user control. Device access, connected tools, memory,
        automation, and sensitive actions must be permissioned, visible, and reviewable.
      </p>

      <div className="relative mx-auto mt-14 max-w-6xl overflow-hidden rounded-[34px] syncrio-glass-card p-6 sm:p-8 lg:p-10">
        <LiquidEther className="opacity-55" />
        <div className="relative grid gap-5 md:grid-cols-2">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.32 }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
              >
                <Card className="syncrio-panel h-full rounded-[24px] border-none p-5">
                  <div className="relative z-10 flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] border border-white/10 bg-white/5">
                      <Icon className="h-5 w-5 text-signal-cyan" />
                    </div>
                    <div>
                      <div className="font-display text-2xl text-atomic-white">{card.title}</div>
                      <div className="mt-2 text-sm leading-7 text-atomic-muted">{card.body}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

function EarlyAccessSection() {
  const [interview, setInterview] = useState(false);

  function submitProfile(event: React.FormEvent) {
    event.preventDefault();
    toast.success("Profile synced. You’re in the early-access queue.");
  }

  return (
    <Section
      id="early-access"
      eyebrow="Section 07 · Early Access"
      title="HELP SHAPE THE FIRST"
      accent="SYNCRIO RELEASE."
    >
      <p className="mx-auto max-w-4xl text-center text-lg leading-8 text-atomic-muted sm:text-xl">
        Early access will open in waves. Tell us how you work so we can invite the right users
        first and understand which device workflows matter most.
      </p>

      <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.88fr]">
        <form onSubmit={submitProfile} className="syncrio-glass-card rounded-[30px] p-6 sm:p-8">
          <div className="grid gap-5">
            <Field label="Persona">
              <Select>
                <SelectTrigger className="syncrio-input h-12 rounded-[16px] border-none">
                  <SelectValue placeholder="Choose your role" />
                </SelectTrigger>
                <SelectContent className="border-border bg-[oklch(0.145_0.012_289_/_0.98)] text-atomic-white backdrop-blur-xl">
                  {[
                    "Founder / Executive",
                    "Engineer / Developer",
                    "Creator / Marketer",
                    "Student / Researcher",
                    "Operations / Admin",
                    "Doctor / Specialist",
                    "Consultant / Professional Services",
                    "Power User",
                    "Personal Productivity User",
                    "Other",
                  ].map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <Field label="Primary use case">
              <Select>
                <SelectTrigger className="syncrio-input h-12 rounded-[16px] border-none">
                  <SelectValue placeholder="Choose what matters most" />
                </SelectTrigger>
                <SelectContent className="border-border bg-[oklch(0.145_0.012_289_/_0.98)] text-atomic-white backdrop-blur-xl">
                  {[
                    "Syncing files and resources across devices",
                    "Saving and accessing links, notes, and documents",
                    "Managing media: images, video, and audio",
                    "Tasks, reminders, and schedules",
                    "AI assistance with CHIP",
                    "Workflow automation",
                    "All of the above",
                  ].map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <Field label="What should CHIP help with first?">
              <Textarea
                rows={4}
                placeholder="Describe the device flow, resource type, or workflow that frustrates you most."
                className="syncrio-input min-h-32 rounded-[18px] border-none"
              />
            </Field>

            <label className="rounded-[20px] border border-white/8 bg-white/5 p-4 text-sm leading-7 text-atomic-muted">
              <div className="flex items-start gap-3">
                <Checkbox
                  checked={interview}
                  onCheckedChange={(checked) => setInterview(Boolean(checked))}
                  className="mt-1 border-border data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                />
                <span>
                  I’m open to a short early-user interview to help shape the product.
                  <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.24em] text-atomic-muted">
                    Interview participants get prioritized access.
                  </span>
                </span>
              </div>
            </label>

            <Button type="submit" className="syncrio-cta h-13 rounded-[18px] font-mono text-xs uppercase tracking-[0.24em]">
              Transmit profile
              <Rocket className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>

        <div className="space-y-8">
          <FaqPanel />
          <FinalCtaCard />
        </div>
      </div>
    </Section>
  );
}

function FaqPanel() {
  const faqs = [
    {
      question: "When does early access open?",
      answer:
        "Early access will open in waves as the product becomes ready for different user groups.",
    },
    {
      question: "Is Syncrio just another AI chatbot?",
      answer:
        "No. Syncrio is the sync workspace. CHIP is the AI operator inside it. The foundation is device and resource synchronization.",
    },
    {
      question: "What types of resources does Syncrio handle?",
      answer:
        "Text, links, files, images, video, audio, documents, notes, and other digital resources that move across your devices.",
    },
    {
      question: "Does CHIP replace my calendar, notes app, or cloud drive?",
      answer:
        "No. CHIP does not replace everything you use. CHIP helps operate inside the connected Syncrio layer and can connect to outside tools with permission.",
    },
    {
      question: "What about credentials and sensitive data?",
      answer:
        "Sensitive access must be permissioned, reviewable, and controlled. CHIP should not freely use accounts, sessions, purchases, or private device access without user approval.",
    },
  ];

  return (
    <div className="syncrio-glass-card rounded-[30px] p-6 sm:p-8">
      <div className="font-display text-4xl text-atomic-white">FREQUENCIES &amp; ANSWERS</div>
      <Accordion type="single" collapsible className="mt-6">
        {faqs.map((faq, index) => (
          <AccordionItem key={faq.question} value={`faq-${index}`} className="border-white/10">
            <AccordionTrigger className="text-left font-display text-[1.45rem] text-atomic-white hover:text-atomic-white/90">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base leading-8 text-atomic-muted">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

function FinalCtaCard() {
  return (
    <div className="relative overflow-hidden rounded-[30px] syncrio-glass-card p-8 text-center sm:p-10">
      <GradualBlur className="bottom-[-1rem] h-36" colorA="rgba(164,13,195,0.26)" colorB="rgba(34,211,238,0.12)" />
      <div className="relative z-10">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.24em] text-atomic-muted neon-flicker">
          <ThreeLoopAtom className="h-4 w-4 text-signal-cyan" />
          Syncrio signal live
        </div>
        <h3 className="font-display text-4xl leading-[0.94] text-atomic-cream sm:text-5xl">
          LESS SEARCHING.
          <br />
          LESS SWITCHING.
          <br />
          LESS FORGETTING.
        </h3>
        <p className="mx-auto mt-5 max-w-lg text-base leading-8 text-atomic-muted sm:text-lg">
          Join the early-access list and help shape the workspace that syncs your devices,
          connects your resources, and gives CHIP a place to help.
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild className="syncrio-cta rounded-full px-6 font-mono text-xs uppercase tracking-[0.24em]">
            <a href="#top">
              Join the waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/8 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <ThreeLoopAtom className="h-5 w-5 text-signal-cyan" />
          <span className="font-display text-xl text-atomic-cream">SYNCRIO</span>
          <Separator orientation="vertical" className="h-4 bg-white/10" />
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-atomic-muted">
            Sync platform first · CHIP inside
          </span>
        </div>
        <div className="flex items-center gap-5 font-mono text-[10px] uppercase tracking-[0.24em] text-atomic-muted">
          <a href="#trust" className="transition hover:text-atomic-white">
            Trust
          </a>
          <a href="#early-access" className="transition hover:text-atomic-white">
            Early access
          </a>
          <a href="#top" className="transition hover:text-atomic-white">
            Top
          </a>
        </div>
      </div>
    </footer>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.28em] text-atomic-muted">
        {label}
      </label>
      {children}
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  accent,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative z-10 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.32em] text-signal-cyan">
            {eyebrow}
          </div>
          <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,5.4rem)] leading-[0.94] text-atomic-cream text-shadow-syncrio">
            {title}
            <br />
            <span className="syncrio-gradient-text">{accent}</span>
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function ThreeLoopAtom({ className }: { className?: string }) {
  return (
    <div className={`relative ${className ?? ""}`}>
      <span className="block h-full w-full opacity-0" />
      <span className="absolute inset-0 rounded-full border border-current opacity-90" />
      <span className="absolute inset-0 rounded-full border border-current opacity-70 [transform:rotate(58deg)_scaleX(1.18)]" />
      <span className="absolute inset-0 rounded-full border border-current opacity-65 [transform:rotate(-58deg)_scaleX(1.18)]" />
      <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current shadow-[0_0_14px_currentColor]" />
    </div>
  );
}
