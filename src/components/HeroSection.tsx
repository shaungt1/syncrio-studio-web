import BlurDissolveSlider, { type BlurDissolveSlide } from "@/components/BlurDissolveSlider";
import { SectionOneCTA } from "@/components/SectionOneCTA";
import LaserFlow from "@/components/react-bits/LaserFlow";

const heroSlides: BlurDissolveSlide[] = [
  {
    type: "node",
    label: "Unified command workspace",
    node: <DashboardPreview variant="command" />,
  },
  {
    type: "node",
    label: "Device resource inbox",
    node: <DashboardPreview variant="inbox" />,
  },
  {
    type: "node",
    label: "CHIP action queue",
    node: <DashboardPreview variant="chip" />,
  },
];

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative z-[60] -mt-[92px] min-h-[960px] overflow-visible bg-[#050509] pt-[118px] sm:min-h-screen sm:pt-[132px]"
      style={{ marginBottom: "clamp(16rem, 32vw, 31rem)" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_56%_18%,rgba(104,38,255,0.22),transparent_34%),radial-gradient(ellipse_at_74%_74%,rgba(34,211,238,0.10),transparent_42%),linear-gradient(180deg,#050509_0%,#08070d_58%,#030305_100%)]" />

      <div className="absolute inset-0 z-0 opacity-95 [mask-image:linear-gradient(to_bottom,#000_0%,#000_88%,transparent_100%)]">
        <LaserFlow
          color="#8D2CFF"
          horizontalBeamOffset={0.05}
          verticalBeamOffset={-0.32}
          horizontalSizing={0.42}
          verticalSizing={5.0}
          wispDensity={3.4}
          wispSpeed={15}
          wispIntensity={10.8}
          flowSpeed={0.34}
          flowStrength={0.27}
          fogIntensity={0.72}
          fogScale={0.3}
          fogFallSpeed={0.6}
          decay={2.8}
          falloffStart={1.2}
          mouseTiltStrength={0.018}
          className="opacity-95"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_30%_44%,rgba(6,7,12,0.88),rgba(6,7,12,0.40)_35%,transparent_58%)]" />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(90deg,rgba(5,5,9,0.96)_0%,rgba(5,5,9,0.74)_31%,rgba(5,5,9,0.10)_56%,rgba(5,5,9,0.70)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[12] h-[25vh] bg-[linear-gradient(to_bottom,transparent,#050509_78%)]" />

      <div className="relative z-20 mx-auto flex min-h-[calc(100vh-125px)] max-w-7xl items-start px-5 sm:px-8 lg:px-12">
        <div className="w-full max-w-[600px] pt-[clamp(1rem,3.25vh,3.5rem)]">
          <SectionOneCTA />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-[80] flex translate-y-[75%] justify-center px-5">
        <BlurDissolveSlider
          slides={heroSlides}
          interval={4200}
          transitionDuration={1500}
          blur={30}
          aspectRatio="16 / 9"
          bottomFade={false}
          fadeColor="#050509"
          fadeHeight="34%"
          frame
          halftone
          showIndicators
          className="w-full max-w-[1180px] rounded-[10px] border border-violet-400/60 bg-[#0b0811] shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_-10px_42px_rgba(141,44,255,0.48),0_0_70px_rgba(34,211,238,0.18)]"
        />
      </div>
    </section>
  );
}

function DashboardPreview({ variant }: { variant: "command" | "inbox" | "chip" }) {
  const data = {
    command: {
      title: "Command",
      subtitle: "Device mesh",
      active: "Workspace",
      metric: "15",
      metricLabel: "tools synced",
      rows: ["Desktop project indexed", "Phone photo routed", "Browser tabs captured"],
      accents: ["bg-violet-400", "bg-cyan-300", "bg-emerald-300"],
    },
    inbox: {
      title: "Inbox",
      subtitle: "Resource queue",
      active: "Inbox",
      metric: "42",
      metricLabel: "new signals",
      rows: ["Meeting note detected", "Video asset ready", "Cloud folder mirrored"],
      accents: ["bg-cyan-300", "bg-orange-300", "bg-violet-400"],
    },
    chip: {
      title: "CHIP",
      subtitle: "Review actions",
      active: "Actions",
      metric: "08",
      metricLabel: "ready checks",
      rows: ["Draft reminder", "Prepare timeline", "Summarize research"],
      accents: ["bg-emerald-300", "bg-violet-400", "bg-cyan-300"],
    },
  }[variant];

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0a0a0d] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_8%,rgba(141,44,255,0.20),transparent_36%),radial-gradient(circle_at_16%_90%,rgba(34,211,238,0.10),transparent_32%)]" />
      <div className="absolute inset-0 hud-dots opacity-35" />

      <div className="relative grid h-full grid-cols-[84px_1fr_240px] gap-px bg-white/8 text-[11px] max-md:grid-cols-[72px_1fr]">
        <aside className="bg-[#101015]/95 p-3">
          <div className="mb-4 grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/8">
            <div className="h-4 w-4 rounded-[4px] bg-[linear-gradient(135deg,#8d2cff,#22d3ee)] shadow-[0_0_18px_rgba(141,44,255,0.75)]" />
          </div>
          <div className="space-y-3 text-white/35">
            {["Hub", "Files", "Links", "Media", "Tasks"].map((item) => (
              <div
                key={item}
                className={`rounded-md px-2 py-2 font-mono uppercase tracking-[0.14em] ${
                  item === data.active ? "bg-white/10 text-cyan-200" : ""
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </aside>

        <main className="min-w-0 bg-[#111116]/92 p-4 sm:p-5">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.26em] text-cyan-200/70">
                Syncrio / {data.subtitle}
              </div>
              <div className="mt-2 font-display text-3xl leading-none text-atomic-cream sm:text-4xl">
                {data.title}
              </div>
            </div>
            <div className="hidden rounded-full border border-white/10 bg-white/6 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/60 sm:block">
              Live sync
            </div>
          </div>

          <div className="grid h-[calc(100%-72px)] grid-cols-[0.9fr_1.1fr] gap-4 max-sm:grid-cols-1">
            <div className="rounded-lg border border-white/10 bg-black/24 p-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/45">
                Signal load
              </div>
              <div className="mt-4 flex items-end gap-3">
                <div className="font-display text-6xl leading-none text-white">{data.metric}</div>
                <div className="pb-2 text-sm text-white/55">{data.metricLabel}</div>
              </div>
              <div className="mt-5 flex h-24 items-end gap-2">
                {[42, 72, 54, 88, 64, 94, 58].map((height, index) => (
                  <div
                    key={height + index}
                    className="w-full rounded-t bg-[linear-gradient(to_top,rgba(141,44,255,0.65),rgba(34,211,238,0.75))]"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {data.rows.map((row, index) => (
                <div
                  key={row}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.055] px-3 py-3"
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${data.accents[index]} shadow-[0_0_14px_currentColor]`}
                  />
                  <span className="min-w-0 flex-1 truncate text-sm text-white/78">{row}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
                    synced
                  </span>
                </div>
              ))}
              <div className="rounded-lg border border-violet-300/18 bg-[linear-gradient(135deg,rgba(141,44,255,0.16),rgba(34,211,238,0.08))] p-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-100/70">
                  Next transmission
                </div>
                <div className="mt-2 text-sm leading-6 text-white/70">
                  Keep the workspace synchronized across devices while CHIP waits for review.
                </div>
              </div>
            </div>
          </div>
        </main>

        <aside className="bg-[#0d0d12]/96 p-4 max-md:hidden">
          <div className="mb-4 flex items-center justify-between">
            <div className="font-display text-xl text-white">Review</div>
            <div className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.8)]" />
          </div>
          <div className="space-y-3">
            {["Permission", "Memory", "Routes", "Archive"].map((item, index) => (
              <div key={item} className="rounded-lg border border-white/10 bg-white/[0.045] p-3">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                  <span>{item}</span>
                  <span>{index + 1}/4</span>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/8">
                  <div
                    className="h-full rounded-full bg-[linear-gradient(90deg,#8d2cff,#22d3ee)]"
                    style={{ width: `${52 + index * 12}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
