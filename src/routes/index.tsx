import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Radio, Zap, Brain, Shield, Rocket, Bell, FileText, ListChecks,
  Layers, ArrowRight, Sparkles, Cpu, Atom, Radar, CheckCircle2,
  Workflow, Lock, Eye, KeyRound, Monitor, Smartphone, Globe, Tablet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Toaster, toast } from "sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Syncrio — Stop managing 15 tools just to stay organized." },
      { name: "description", content: "Syncrio is the connected AI workspace. CHIP turns what you say into what needs to happen. Join the early-access waitlist." },
      { property: "og:title", content: "Syncrio — The Connected AI Workspace" },
      { property: "og:description", content: "Less searching. Less switching. Less forgetting." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-cream">
      <Toaster theme="dark" position="top-center" toastOptions={{ className: "font-mono" }} />
      <BackgroundDecor />
      <NavBar />
      <Hero />
      <Problem />
      <Solution />
      <ChipDemo />
      <Differentiation />
      <Trust />
      <Qualification />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ─────────────────── Background ─────────────────── */
function BackgroundDecor() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 grid-bg opacity-50" />
      <div className="pointer-events-none fixed inset-0 scanlines opacity-40" />
      <div className="pointer-events-none fixed -top-40 left-1/2 size-[800px] -translate-x-1/2 rounded-full"
           style={{ background: "var(--gradient-radial-teal)" }} />
    </>
  );
}

/* ─────────────────── Nav ─────────────────── */
function NavBar() {
  return (
    <header className="relative z-30 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="absolute -inset-2 starburst opacity-40 orbit" />
          <div className="relative grid size-10 place-items-center rounded-full bg-ink border border-teal/40 glow-pulse">
            <Atom className="size-5 text-teal" />
          </div>
        </div>
        <div>
          <div className="font-display text-xl tracking-widest text-cream">SYNCRIO</div>
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-chrome">Atomic Workspace · 1955+</div>
        </div>
      </div>
      <div className="hidden items-center gap-6 md:flex font-mono text-xs uppercase tracking-widest text-chrome">
        <a href="#problem" className="hover:text-teal transition">Problem</a>
        <a href="#chip" className="hover:text-teal transition">CHIP</a>
        <a href="#trust" className="hover:text-teal transition">Trust</a>
        <Badge className="bg-orange text-ink border-none font-display tracking-widest">EARLY ACCESS</Badge>
      </div>
    </header>
  );
}

/* ─────────────────── Hero ─────────────────── */
function Hero() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 pt-8 pb-24 md:pt-16">
      <div className="grid items-center gap-14 lg:grid-cols-12">
        <motion.div initial="hidden" animate="show" variants={fadeUp} className="lg:col-span-7">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-teal/40 bg-ink/60 px-4 py-1.5 backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-radar opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-radar" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-cream">Transmission // Early Access Waitlist</span>
          </div>

          <h1 className="font-display text-5xl leading-[0.95] text-cream text-shadow-atomic md:text-7xl lg:text-[5.5rem]">
            STOP MANAGING <span className="text-orange">15 TOOLS</span> JUST TO STAY <span className="text-teal">ORGANIZED</span>.
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-chrome md:text-xl">
            Syncrio is a connected AI workspace where your devices, content, memory, tasks, notes, reminders,
            files, and workflows become <span className="text-cream">one environment</span> — guided by
            <span className="text-teal"> CHIP</span>, your digital counterpart.
          </p>

          <div className="mt-10">
            <WaitlistForm />
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-chrome">
              ⟡ Early access · No spam · Review &amp; permission controls built in
            </p>
          </div>
        </motion.div>

        <motion.div initial="hidden" animate="show" variants={fadeUp}
                    transition={{ delay: 0.2 }} className="lg:col-span-5">
          <ChipConsole />
        </motion.div>
      </div>
    </section>
  );
}

function ChipConsole() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 starburst opacity-20 orbit" />
      <div className="atomic-panel relative p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-red" />
            <div className="size-3 rounded-full bg-orange" />
            <div className="size-3 rounded-full bg-radar glow-pulse" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-chrome">
            CHIP // CONSOLE v1.0
          </div>
        </div>

        <div className="rounded-lg border border-teal/30 bg-ink/80 p-4 font-mono text-sm">
          <div className="text-radar">▸ user@syncrio</div>
          <div className="mt-1 text-cream">
            CHIP, remind me to call Bob at 1 PM Thursday, save this article to research,
            and turn the meeting idea into a task list.
          </div>
          <div className="mt-3 flex items-center gap-2 text-teal">
            <span className="blink">▮</span><span className="opacity-70">processing intent…</span>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          {[
            { icon: Bell, label: "REMINDER", text: "Call Bob · Thu 1:00 PM", color: "text-orange" },
            { icon: FileText, label: "NOTE", text: "Article → Research", color: "text-teal" },
            { icon: ListChecks, label: "TASK LIST", text: "Meeting → 4 steps", color: "text-radar" },
            { icon: Layers, label: "WORKSPACE", text: "All context linked", color: "text-cream" },
          ].map((c, i) => (
            <motion.div key={c.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.15 }}
              className="rounded-md border border-chrome bg-ink/60 p-3">
              <div className="flex items-center gap-2">
                <c.icon className={`size-4 ${c.color}`} />
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-chrome">{c.label}</div>
              </div>
              <div className="mt-1.5 text-xs text-cream">{c.text}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-chrome pt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-chrome">
          <span className="flex items-center gap-1.5"><Radar className="size-3 text-teal" /> Mesh online · 4 devices</span>
          <span className="text-radar">● READY</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────── Waitlist Form ─────────────────── */
function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Enter a valid transmission address (email).");
      return;
    }
    if (!consent) {
      toast.error("We need your transmission consent to send invites.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("⟡ Transmission received. CHIP will be in touch.", { duration: 4000 });
      setEmail("");
      document.getElementById("qualify")?.scrollIntoView({ behavior: "smooth" });
    }, 900);
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-xl">
      <div className="flex flex-col gap-3 rounded-2xl border border-teal/30 bg-ink/80 p-2 backdrop-blur sm:flex-row sm:gap-2">
        <Input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your.transmission@frequency.com"
          className="h-14 border-none bg-transparent text-base text-cream placeholder:text-chrome/60 focus-visible:ring-0"
        />
        <Button
          type="submit"
          disabled={submitting}
          className="group h-14 rounded-xl bg-orange px-6 font-display text-base tracking-widest text-ink hover:bg-orange/90 glow-orange"
        >
          {submitting ? "TRANSMITTING…" : "JOIN THE WAITLIST"}
          <ArrowRight className="ml-1 size-4 transition group-hover:translate-x-1" />
        </Button>
      </div>
      <label className="mt-3 flex cursor-pointer items-center gap-2 px-1 text-xs text-chrome">
        <Checkbox checked={consent} onCheckedChange={(v) => setConsent(Boolean(v))}
                  className="border-chrome data-[state=checked]:bg-teal data-[state=checked]:border-teal data-[state=checked]:text-ink" />
        <span>Send me early-access invitations and product transmissions.</span>
      </label>
    </form>
  );
}

/* ─────────────────── Problem ─────────────────── */
function Problem() {
  const cards = [
    { icon: Layers, title: "Scattered Tools", body: "Your work lives across too many apps, tabs, devices, and folders." },
    { icon: Brain, title: "Lost Context", body: "The idea, file, reminder, and note rarely stay connected after the moment passes." },
    { icon: Zap, title: "Manual Follow-Through", body: "AI can answer, but you still copy, paste, save, schedule, organize, and rebuild it." },
  ];
  return (
    <Section id="problem" eyebrow="Section 02 · Diagnostic" title="YOUR DIGITAL LIFE IS EVERYWHERE." accent="YOUR ATTENTION IS PAYING THE PRICE.">
      <p className="mx-auto max-w-3xl text-center text-lg text-chrome">
        Every day, people jump between AI chats, calendars, notes, cloud drives, browser tabs, downloads,
        saved links, screenshots, task lists, and reminders. The problem isn't that we lack tools — it's that
        every tool becomes another place to search, another habit to remember, another system to maintain.
      </p>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {cards.map((c, i) => (
          <motion.div key={c.title}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <Card className="atomic-panel border-none p-6 text-cream">
              <div className="mb-4 inline-grid size-12 place-items-center rounded-full border border-orange/40 bg-ink">
                <c.icon className="size-5 text-orange" />
              </div>
              <h3 className="font-display text-xl tracking-wider text-cream">{c.title}</h3>
              <p className="mt-2 text-sm text-chrome">{c.body}</p>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-teal/30 bg-ink/60 p-6 text-center">
        <p className="font-serif text-2xl italic text-cream">
          The answer isn't another app to manage. It's a workspace that manages the apps around you.
        </p>
      </div>
    </Section>
  );
}

/* ─────────────────── Solution ─────────────────── */
function Solution() {
  return (
    <Section eyebrow="Section 03 · The Workspace" title="ONE WORKSPACE" accent="FOR THE WAY YOUR LIFE ACTUALLY WORKS.">
      <p className="mx-auto max-w-3xl text-center text-lg text-chrome">
        Syncrio brings your digital world into one connected environment. Devices, saved content, notes, tasks,
        reminders, files, media, and workflows are no longer separate islands. They become part of the same
        workspace — so CHIP can understand what you're trying to do and help you turn intent into action.
      </p>

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {[
          { icon: Cpu, title: "Connected Workspace", body: "A central environment for notes, files, tasks, media, saved links, prompts, reminders, and generated work." },
          { icon: Radio, title: "Cross-Device Awareness", body: "Designed around the reality that people move between desktop, browser, mobile, and extension surfaces." },
          { icon: Sparkles, title: "Persistent Work Objects", body: "Useful output shouldn't die inside a chat. It should be saved, reopened, edited, reused, or turned into a workflow." },
        ].map((b) => (
          <Card key={b.title} className="atomic-panel border-none p-6">
            <b.icon className="size-7 text-teal" />
            <h3 className="mt-4 font-display text-xl tracking-wider text-cream">{b.title}</h3>
            <p className="mt-2 text-sm text-chrome">{b.body}</p>
          </Card>
        ))}
      </div>

      <div className="mt-14 flex flex-wrap items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-chrome">
        <DeviceTag icon={Monitor} label="Desktop" />
        <DeviceTag icon={Smartphone} label="Mobile" />
        <DeviceTag icon={Tablet} label="Tablet" />
        <DeviceTag icon={Globe} label="Browser Extension" />
        <DeviceTag icon={Radio} label="Smart Devices" />
      </div>
    </Section>
  );
}

function DeviceTag({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-chrome bg-ink/60 px-4 py-2">
      <Icon className="size-3.5 text-teal" /> {label}
    </span>
  );
}

/* ─────────────────── CHIP Demo ─────────────────── */
function ChipDemo() {
  return (
    <Section id="chip" eyebrow="Section 04 · Proof" title="SAY IT ONCE." accent="CHIP TURNS IT INTO WHAT NEEDS TO HAPPEN.">
      <div className="mx-auto max-w-5xl">
        <Tabs defaultValue="say" className="w-full">
          <TabsList className="mx-auto grid w-full max-w-md grid-cols-2 bg-ink border border-chrome">
            <TabsTrigger value="say" className="font-mono uppercase tracking-widest data-[state=active]:bg-teal data-[state=active]:text-ink">You Say</TabsTrigger>
            <TabsTrigger value="do" className="font-mono uppercase tracking-widest data-[state=active]:bg-teal data-[state=active]:text-ink">CHIP Does</TabsTrigger>
          </TabsList>

          <TabsContent value="say" className="mt-8">
            <div className="atomic-panel p-8">
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-chrome">⟡ Voice Transmission</div>
              <p className="mt-3 font-serif text-2xl italic text-cream md:text-3xl">
                "CHIP, remind me to call Bob at 1 PM this Thursday, save this article to my research notes,
                and turn the meeting idea we discussed into a task list."
              </p>
            </div>
          </TabsContent>

          <TabsContent value="do" className="mt-8">
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { icon: Bell, label: "REMINDER", title: "Call Bob", meta: "Thursday · 1:00 PM" },
                { icon: FileText, label: "RESEARCH NOTE", title: "Article saved", meta: "→ Research / Active" },
                { icon: ListChecks, label: "TASK LIST", title: "Meeting → next steps", meta: "4 actionable items" },
                { icon: Layers, label: "WORKSPACE ITEM", title: "All context connected", meta: "In Syncrio" },
              ].map((c) => (
                <Card key={c.label} className="atomic-panel border-none p-5">
                  <div className="flex items-start gap-4">
                    <div className="grid size-12 place-items-center rounded-xl bg-teal/15 border border-teal/30">
                      <c.icon className="size-5 text-teal" />
                    </div>
                    <div className="flex-1">
                      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-chrome">{c.label}</div>
                      <div className="mt-1 font-display text-lg text-cream">{c.title}</div>
                      <div className="mt-0.5 text-sm text-chrome">{c.meta}</div>
                    </div>
                    <CheckCircle2 className="size-5 text-radar" />
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Section>
  );
}

/* ─────────────────── Differentiation ─────────────────── */
function Differentiation() {
  const rows = [
    { name: "Siri / Alexa", they: "Voice commands → device actions", us: "Voice intent → saved workspace objects across all devices" },
    { name: "ChatGPT", they: "Conversational answer that dies in the chat", us: "Persistent work objects: notes, tasks, reminders, artifacts" },
    { name: "Google Calendar", they: "Static event grid", us: "Schedules connected to projects, notes, and follow-through" },
    { name: "Notion / Notes apps", they: "Manual organization by the user", us: "CHIP organizes, links, and routes work automatically" },
  ];
  return (
    <Section eyebrow="Section 05 · Different Category" title="NOT ANOTHER ASSISTANT." accent="A WORKSPACE THAT MANAGES THE TOOLS.">
      <div className="atomic-panel mx-auto max-w-5xl overflow-hidden">
        <div className="grid grid-cols-3 border-b border-chrome bg-ink/60 px-6 py-4 font-mono text-[11px] uppercase tracking-[0.25em] text-chrome">
          <div>Tool</div>
          <div>What They Do</div>
          <div className="text-teal">What Syncrio Does</div>
        </div>
        {rows.map((r, i) => (
          <div key={r.name} className={`grid grid-cols-3 gap-4 px-6 py-5 text-sm ${i % 2 ? "bg-ink/30" : ""}`}>
            <div className="font-display tracking-wider text-cream">{r.name}</div>
            <div className="text-chrome">{r.they}</div>
            <div className="text-cream">{r.us}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ─────────────────── Trust ─────────────────── */
function Trust() {
  const cards = [
    { icon: KeyRound, title: "Permission First", body: "CHIP asks before sensitive actions — account access, publishing, sending, purchasing, submitting." },
    { icon: Eye, title: "Review Before Commit", body: "Tasks, reminders, notes, workflows, and artifacts are visible before they become permanent." },
    { icon: Lock, title: "Sensitive Access Controlled", body: "Credentials, sessions, and device access are never freely operated without consent." },
    { icon: Shield, title: "Built for Ownership", body: "Your identity, memory, and approved patterns are treated as your sensitive resources — not casual data." },
  ];
  return (
    <Section id="trust" eyebrow="Section 06 · Safeguards" title="POWERFUL ENOUGH TO ACT." accent="CONTROLLED ENOUGH TO TRUST.">
      <p className="mx-auto max-w-3xl text-center text-lg text-chrome">
        CHIP should feel helpful, not invasive. It acts with permission, keeps sensitive access controlled,
        and lets you review what it creates before it becomes part of the workspace.
      </p>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {cards.map((c) => (
          <Card key={c.title} className="atomic-panel border-none p-6">
            <div className="flex items-start gap-4">
              <div className="grid size-12 place-items-center rounded-xl bg-radar/15 border border-radar/40">
                <c.icon className="size-5 text-radar" />
              </div>
              <div>
                <h3 className="font-display text-xl tracking-wider text-cream">{c.title}</h3>
                <p className="mt-1.5 text-sm text-chrome">{c.body}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* ─────────────────── Qualification ─────────────────── */
function Qualification() {
  const [pain, setPain] = useState([3]);
  const [interview, setInterview] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    toast.success("⟡ Profile synced. You're in the priority queue.");
  }

  return (
    <Section id="qualify" eyebrow="Section 07 · Calibration" title="HELP US SHAPE" accent="THE FIRST RELEASE.">
      <p className="mx-auto max-w-3xl text-center text-lg text-chrome">
        We're opening early access in waves. Tell us how you'd use Syncrio so we can invite the right testers first.
      </p>

      <form onSubmit={submit} className="atomic-panel mx-auto mt-12 max-w-3xl space-y-6 p-8">
        <Field label="WHAT BEST DESCRIBES YOU?">
          <Select>
            <SelectTrigger className="atomic-input"><SelectValue placeholder="Select your role" /></SelectTrigger>
            <SelectContent className="bg-ink border-chrome text-cream">
              {["Founder / Executive","Engineer / Developer","Creator / Marketer","Student / Researcher","Operations / Admin","Personal Productivity","Other"].map(o =>
                <SelectItem key={o} value={o}>{o}</SelectItem>)}
            </SelectContent>
          </Select>
        </Field>

        <Field label="WHAT DO YOU WANT CHIP TO HELP WITH FIRST?">
          <Select>
            <SelectTrigger className="atomic-input"><SelectValue placeholder="Pick a primary use case" /></SelectTrigger>
            <SelectContent className="bg-ink border-chrome text-cream">
              {["Tasks & reminders","Notes & research","Files & media","Workflows & automations","Cross-device workspace","AI-generated artifacts","All of the above"].map(o =>
                <SelectItem key={o} value={o}>{o}</SelectItem>)}
            </SelectContent>
          </Select>
        </Field>

        <Field label="WHICH PLATFORM MATTERS MOST?">
          <Select>
            <SelectTrigger className="atomic-input"><SelectValue placeholder="Choose a surface" /></SelectTrigger>
            <SelectContent className="bg-ink border-chrome text-cream">
              {["Web app","Desktop app","Mobile app","Browser extension","All devices"].map(o =>
                <SelectItem key={o} value={o}>{o}</SelectItem>)}
            </SelectContent>
          </Select>
        </Field>

        <Field label={`PAIN LEVEL OF YOUR CURRENT FRAGMENTATION · ${pain[0]} / 5`}>
          <Slider min={1} max={5} step={1} value={pain} onValueChange={setPain} className="py-2" />
          <div className="mt-1 flex justify-between font-mono text-[10px] uppercase tracking-widest text-chrome">
            <span>Manageable</span><span>Critical</span>
          </div>
        </Field>

        <Field label="ANYTHING YOU WANT CHIP TO HANDLE FIRST?">
          <Textarea rows={3} placeholder="The thing that drives you nuts every day…" className="atomic-input" />
        </Field>

        <label className="flex items-start gap-3 rounded-lg border border-chrome bg-ink/60 p-4">
          <Checkbox checked={interview} onCheckedChange={(v) => setInterview(Boolean(v))}
                    className="mt-0.5 border-chrome data-[state=checked]:bg-radar data-[state=checked]:border-radar data-[state=checked]:text-ink" />
          <span className="text-sm text-cream">
            I'm open to a short early-user interview to help shape the product.
            <span className="block text-xs text-chrome">Interview participants get prioritized access.</span>
          </span>
        </label>

        <Button type="submit" className="w-full h-14 rounded-xl bg-teal text-ink font-display text-base tracking-widest hover:bg-teal/90 glow-teal">
          TRANSMIT PROFILE
          <Rocket className="ml-2 size-4" />
        </Button>
      </form>

      <FAQ />
    </Section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.3em] text-chrome">{label}</label>
      {children}
    </div>
  );
}

function FAQ() {
  return (
    <div className="mx-auto mt-20 max-w-3xl">
      <h3 className="text-center font-display text-3xl tracking-wider text-cream">FREQUENCIES &amp; ANSWERS</h3>
      <Accordion type="single" collapsible className="mt-6">
        {[
          { q: "When does early access open?", a: "We're inviting testers in waves through the year. Higher-pain, interview-friendly applicants get earlier invites." },
          { q: "Is Syncrio just another AI chatbot?", a: "No. CHIP is the interface — Syncrio is the workspace it operates inside. The output isn't a reply, it's a saved object: a task, a note, a reminder, a workflow." },
          { q: "What about my data and credentials?", a: "Sensitive access (sessions, credentials, device control) is never operated freely. CHIP works with explicit, reviewable permissions." },
          { q: "Does this replace my calendar / notes app?", a: "Not necessarily. Syncrio is the layer above them — connecting tools, files, devices, and tasks into one workspace." },
        ].map((f, i) => (
          <AccordionItem key={i} value={`f${i}`} className="border-chrome">
            <AccordionTrigger className="text-left font-display tracking-wider text-cream hover:text-teal">{f.q}</AccordionTrigger>
            <AccordionContent className="text-chrome">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

/* ─────────────────── Final CTA ─────────────────── */
function FinalCTA() {
  return (
    <section className="relative z-10 px-6 py-32">
      <div className="relative mx-auto max-w-5xl">
        <div className="absolute inset-0 -z-10 opacity-30" style={{ background: "var(--gradient-sunburst)" }} />
        <div className="atomic-panel p-12 text-center md:p-16">
          <Sparkles className="mx-auto size-8 text-orange" />
          <h2 className="mt-6 font-display text-5xl leading-[0.95] text-cream text-shadow-atomic md:text-7xl">
            LESS SEARCHING.<br />
            LESS SWITCHING.<br />
            <span className="text-teal">LESS FORGETTING.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-chrome">
            Syncrio and CHIP are built for people whose digital lives have outgrown disconnected tools.
            Join the early-access list and help shape the workspace that turns scattered tools into one connected digital life.
          </p>
          <div className="mt-10 flex justify-center">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── Footer ─────────────────── */
function Footer() {
  return (
    <footer className="relative z-10 border-t border-chrome bg-ink/60 px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-3">
          <Atom className="size-5 text-teal" />
          <div className="font-display tracking-widest text-cream">SYNCRIO</div>
          <Separator orientation="vertical" className="h-4 bg-chrome" />
          <span className="font-mono text-xs uppercase tracking-widest text-chrome">© 1955 — Tomorrow</span>
        </div>
        <div className="flex gap-6 font-mono text-xs uppercase tracking-widest text-chrome">
          <a href="#" className="hover:text-teal">Privacy</a>
          <a href="#" className="hover:text-teal">Terms</a>
          <a href="#" className="hover:text-teal">Contact</a>
          <a href="#" className="hover:text-teal">Unsubscribe</a>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────── Section Shell ─────────────────── */
function Section({ id, eyebrow, title, accent, children }: { id?: string; eyebrow: string; title: string; accent: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative z-10 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-teal">
            <span className="inline-block h-px w-8 bg-teal" />{eyebrow}<span className="inline-block h-px w-8 bg-teal" />
          </div>
          <h2 className="mt-4 font-display text-4xl leading-[0.95] text-cream md:text-6xl">
            {title}<br /><span className="text-orange">{accent}</span>
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
