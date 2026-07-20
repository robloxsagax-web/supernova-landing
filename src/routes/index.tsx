import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Play,
  Check,
  Sparkles,
  Zap,
  Brain,
  Video,
  Image as ImageIcon,
  BarChart3,
  Cloud,
  Wand2,
  Mic,
  History,
  Workflow,
  Link2,
  Search,
  ShieldCheck,
  Star,
  Rocket,
  Building2,
  Store,
  Users,
  Plus,
  Minus,
} from "lucide-react";
import { SupernovaLogo } from "@/components/branding";

/* ============================================================
   Ambient background (aurora + grid + particles + spotlight)
   ============================================================ */
function Ambient() {
  const spot = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = spot.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      el.style.transform = `translate3d(${e.clientX - 300}px, ${e.clientY - 300}px, 0)`;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 aurora opacity-70" />
      <div className="absolute inset-0 grid-bg" />
      {/* stars */}
      {Array.from({ length: 60 }).map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: Math.random() * 2 + 0.5,
            height: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.6,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
      {/* cursor spotlight */}
      <div
        ref={spot}
        className="absolute h-[600px] w-[600px] rounded-full opacity-40 mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle, rgba(255,218,185,0.25) 0%, rgba(139,90,43,0.12) 35%, transparent 70%)",
        }}
      />
    </div>
  );
}

/* ============================================================
   Nav
   ============================================================ */
function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav className="glass-strong flex w-full max-w-5xl items-center justify-between rounded-full px-4 py-2 md:px-6">
        <a href="#" className="flex items-center gap-2 pl-2">
          <SupernovaLogo size={24} />
          <span className="font-display text-lg font-semibold tracking-tight">Supernova</span>
        </a>
        <div className="hidden items-center gap-7 text-sm text-white/70 md:flex">
          <a href="#workflow" className="hover:text-white transition">Workflow</a>
          <a href="#genblaze" className="hover:text-white transition">GenBlaze</a>
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </div>
        <div className="flex items-center gap-2">
          <a href="#" className="hidden text-sm text-white/70 hover:text-white sm:inline px-3">Sign in</a>
          <a href="#cta" className="btn-premium btn-premium-hover !py-2 !px-4 !text-sm">
            Start Free <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </nav>
    </header>
  );
}

/* ============================================================
   Hero
   ============================================================ */
function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 80, damping: 15 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 80, damping: 15 });

  return (
    <section
      className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-32"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-white/70"
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ffdab9] opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#ffdab9]" />
        </span>
        Supernova v2.0 — Now with GenBlaze AI
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.05 }}
        className="font-display max-w-5xl text-center text-[clamp(2.6rem,7vw,6.5rem)] font-semibold leading-[0.95] tracking-tighter text-gradient-warm"
      >
        Turn Any Product URL Into a Marketing Empire
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="mt-8 max-w-xl text-center text-base text-white/60 md:text-lg"
      >
        Supernova transforms any product into high-converting campaigns with AI-generated
        videos, images, copy and market intelligence — all in minutes.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
      >
        <a href="#cta" className="btn-premium btn-premium-hover group">
          Start Creating Free
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
        <a href="#demo" className="btn-ghost-glass hover:bg-white/[0.08]">
          <Play className="h-4 w-4" /> Watch Demo
        </a>
      </motion.div>

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/50"
      >
        {["Free Forever", "Setup in 30 Seconds", "No Credit Card"].map((t) => (
          <li key={t} className="flex items-center gap-1.5">
            <Check className="h-3.5 w-3.5 text-[#ffdab9]" /> {t}
          </li>
        ))}
      </motion.ul>

      {/* Floating dashboard mock */}
      <motion.div
        style={{ rotateX: rx, rotateY: ry, transformPerspective: 1400 }}
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative mt-20 w-full max-w-6xl"
      >
        <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-b from-[#ffdab9]/10 via-[#8b5a2b]/10 to-transparent blur-2xl" />
        <DashboardMock />
      </motion.div>
    </section>
  );
}

function DashboardMock() {
  return (
    <div className="glass-strong relative rounded-2xl p-3 md:p-4 glow-orange animate-float-slow">
      {/* window chrome */}
      <div className="flex items-center gap-2 pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <div className="glass mx-auto flex items-center gap-2 rounded-full px-3 py-1 text-[11px] text-white/50">
          <Link2 className="h-3 w-3" /> supernova.ai / campaign / atlas-shoes
        </div>
      </div>

      <div className="grid grid-cols-12 gap-3">
        {/* sidebar */}
        <div className="col-span-3 hidden rounded-xl bg-black/40 p-3 md:block">
          <div className="mb-4 flex items-center gap-2 text-xs text-white/60">
            <Sparkles className="h-3.5 w-3.5 text-[#ffdab9]" /> Workspace
          </div>
          {[
            { i: Rocket, t: "Campaigns", a: true },
            { i: Video, t: "Video Studio" },
            { i: ImageIcon, t: "AI Images" },
            { i: BarChart3, t: "Analytics" },
            { i: Cloud, t: "B2 Storage" },
            { i: History, t: "History" },
          ].map(({ i: Icon, t, a }) => (
            <div
              key={t}
              className={`mb-1 flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs ${
                a ? "bg-white/5 text-white" : "text-white/50"
              }`}
            >
              <Icon className="h-3.5 w-3.5" /> {t}
            </div>
          ))}
        </div>

        {/* main */}
        <div className="col-span-12 md:col-span-9">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <div className="text-xs text-white/40">Campaign</div>
              <div className="font-display text-lg">Atlas Running Shoes · Spring Launch</div>
            </div>
            <div className="glass flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] text-white/70">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ffdab9]" />
              Generating
            </div>
          </div>

          <div className="grid grid-cols-6 gap-3">
            {/* video preview */}
            <div className="col-span-6 md:col-span-4 relative overflow-hidden rounded-xl bg-gradient-to-br from-[#5c3317]/40 to-black p-4 ring-1 ring-white/5">
              <div className="mb-3 flex items-center justify-between text-[11px] text-white/50">
                <span>Hero Video · 12s</span>
                <span>1080 × 1920</span>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-lg bg-black">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,218,185,0.35),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(139,90,43,0.5),transparent_60%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="glass flex h-12 w-12 items-center justify-center rounded-full">
                    <Play className="h-4 w-4 text-[#ffdab9]" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 right-2 h-1 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-2/5 bg-gradient-to-r from-[#ffdab9] to-[#8b5a2b]" />
                </div>
              </div>
              <div className="mt-3 flex gap-1.5">
                {["Cinematic", "Product", "UGC", "Voiceover"].map((t) => (
                  <span key={t} className="glass rounded-md px-2 py-0.5 text-[10px] text-white/60">{t}</span>
                ))}
              </div>
            </div>

            {/* analytics */}
            <div className="col-span-3 md:col-span-2 rounded-xl bg-black/40 p-3 ring-1 ring-white/5">
              <div className="text-[11px] text-white/50">Predicted CTR</div>
              <div className="font-display mt-1 text-2xl">4.82%</div>
              <MiniChart />
              <div className="mt-2 text-[10px] text-emerald-300/80">↑ 38% vs baseline</div>
            </div>

            {/* copy */}
            <div className="col-span-6 md:col-span-3 rounded-xl bg-black/40 p-3 ring-1 ring-white/5">
              <div className="mb-2 flex items-center gap-1.5 text-[11px] text-white/50">
                <Wand2 className="h-3 w-3" /> AI Copy · Variant 03
              </div>
              <div className="text-xs leading-relaxed text-white/80">
                "Run further. Feel lighter. <span className="text-[#ffdab9]">Atlas</span> — engineered
                for the pavement, tuned for the podium."
              </div>
              <div className="mt-2 flex gap-1">
                {[1, 2, 3, 4].map((i) => (
                  <span key={i} className={`h-1 flex-1 rounded-full ${i <= 3 ? "bg-[#ffdab9]" : "bg-white/10"}`} />
                ))}
              </div>
            </div>

            {/* market intel */}
            <div className="col-span-6 md:col-span-3 rounded-xl bg-black/40 p-3 ring-1 ring-white/5">
              <div className="mb-2 flex items-center gap-1.5 text-[11px] text-white/50">
                <Brain className="h-3 w-3" /> Market Intelligence
              </div>
              <div className="space-y-1.5">
                {[
                  ["Audience Fit", 92],
                  ["Trend Alignment", 78],
                  ["Competitor Gap", 64],
                ].map(([label, v]) => (
                  <div key={label as string}>
                    <div className="flex justify-between text-[10px] text-white/50">
                      <span>{label}</span>
                      <span>{v}</span>
                    </div>
                    <div className="mt-0.5 h-1 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full bg-gradient-to-r from-[#8b5a2b] to-[#ffdab9]"
                        style={{ width: `${v}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* floating cards */}
      <FloatingCard className="-left-6 -top-6 hidden md:block" delay={0}>
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-[#ffdab9]" />
          <div>
            <div className="text-[11px] text-white/50">Rendered in</div>
            <div className="font-display text-sm">42s</div>
          </div>
        </div>
      </FloatingCard>

      <FloatingCard className="-right-8 top-16 hidden md:block" delay={0.6}>
        <div className="flex items-center gap-2">
          <Cloud className="h-4 w-4 text-[#ffdab9]" />
          <div>
            <div className="text-[11px] text-white/50">Stored on B2</div>
            <div className="font-display text-sm">148 assets</div>
          </div>
        </div>
      </FloatingCard>

      <FloatingCard className="-right-4 -bottom-6 hidden md:block" delay={1.2}>
        <div className="flex items-center gap-2">
          <Star className="h-4 w-4 text-[#ffdab9]" fill="currentColor" />
          <div className="text-[11px] text-white/70">
            "Feels like <span className="text-[#ffdab9]">2030</span>."
          </div>
        </div>
      </FloatingCard>
    </div>
  );
}

function FloatingCard({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 + delay, duration: 0.8 }}
      className={`glass-strong absolute rounded-xl px-3 py-2 shadow-2xl animate-float-slow ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </motion.div>
  );
}

function MiniChart() {
  const pts = [12, 18, 14, 22, 20, 28, 26, 34, 32, 42];
  const max = Math.max(...pts);
  const path = pts
    .map((v, i) => `${(i / (pts.length - 1)) * 100},${40 - (v / max) * 36}`)
    .join(" ");
  return (
    <svg viewBox="0 0 100 40" className="mt-2 h-10 w-full">
      <defs>
        <linearGradient id="mc" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffdab9" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#8b5a2b" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline fill="none" stroke="#ffdab9" strokeWidth="1.2" points={path} />
      <polygon fill="url(#mc)" points={`0,40 ${path} 100,40`} />
    </svg>
  );
}

/* ============================================================
   Section shell
   ============================================================ */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/60">
      <span className="h-1 w-1 rounded-full bg-[#ffdab9]" />
      {children}
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-gradient-warm md:text-6xl">
      {children}
    </h2>
  );
}

/* ============================================================
   Trusted by
   ============================================================ */
function Trusted() {
  const logos = ["Aperture", "Vantage", "Nebula", "Kairos", "Meridian", "Halcyon", "Northwind", "Foundry"];
  const stats = [
    ["12M+", "Assets rendered"],
    ["94k", "Campaigns shipped"],
    ["4.9★", "Creator rating"],
    ["48s", "Avg. render time"],
  ];
  return (
    <section className="relative z-10 border-y border-white/[0.06] bg-black/30 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-white/40">
          Trusted by 40,000+ creators, agencies & founders
        </p>
        <div className="mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max animate-marquee gap-16">
            {[...logos, ...logos].map((l, i) => (
              <span key={i} className="font-display text-2xl font-medium tracking-tight text-white/40">
                {l}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map(([v, l]) => (
            <div key={l} className="glass rounded-2xl p-5 text-center">
              <div className="font-display text-3xl text-gradient-warm">{v}</div>
              <div className="mt-1 text-xs text-white/50">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Problem — split before / after
   ============================================================ */
function Problem() {
  return (
    <section className="relative z-10 px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <SectionLabel>The Problem</SectionLabel>
          <SectionHeading>Marketing was built for a slower world.</SectionHeading>
          <p className="mt-6 max-w-xl text-white/50">
            Agencies bill for months. Design queues stretch for weeks. Every AI tool lives on
            its own island. Supernova collapses it all into a single, fluent workflow.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {/* Before */}
          <div className="glass relative overflow-hidden rounded-2xl p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.04] to-transparent" />
            <div className="relative">
              <div className="mb-4 text-xs uppercase tracking-widest text-white/40">Before</div>
              <div className="font-display text-2xl text-white/80">Traditional Marketing</div>
              <ul className="mt-6 space-y-3 text-sm text-white/50">
                {["6-week campaign cycles", "$15k+ agency retainers", "Design bottlenecks", "Disconnected tools", "Guesswork targeting"].map(
                  (t) => (
                    <li key={t} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-white/30" /> {t}
                    </li>
                  ),
                )}
              </ul>
              <div className="mt-6 flex items-center gap-2 text-xs text-white/40">
                <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/5">
                  <div className="h-full w-[15%] bg-white/20" />
                </div>
                Week 6 · 15% shipped
              </div>
            </div>
          </div>

          {/* After */}
          <div className="glass relative overflow-hidden rounded-2xl p-8 glow-orange">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ffdab9]/10 via-transparent to-[#8b5a2b]/10" />
            <div className="relative">
              <div className="mb-4 text-xs uppercase tracking-widest text-[#ffdab9]/70">After · Supernova</div>
              <div className="font-display text-2xl text-gradient-warm">One prompt. Full campaign.</div>
              <ul className="mt-6 space-y-3 text-sm text-white/80">
                {["Ship in minutes, not weeks", "$0 to start, seat-based scale", "Infinite creative variants", "Unified AI workspace", "Predictive market intel"].map(
                  (t) => (
                    <li key={t} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#ffdab9]" /> {t}
                    </li>
                  ),
                )}
              </ul>
              <div className="mt-6 flex items-center gap-2 text-xs text-white/60">
                <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/5">
                  <div className="h-full w-full bg-gradient-to-r from-[#8b5a2b] to-[#ffdab9]" />
                </div>
                42s · 100% shipped
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Workflow pipeline
   ============================================================ */
function WorkflowSection() {
  const steps = [
    { i: Link2, t: "URL", d: "Paste any product URL" },
    { i: Search, t: "Research", d: "Deep market crawl" },
    { i: Sparkles, t: "GenBlaze", d: "Reasoning engine" },
    { i: Brain, t: "Intelligence", d: "Audience mapping" },
    { i: ImageIcon, t: "Images", d: "On-brand visuals" },
    { i: Video, t: "Video", d: "Cinematic renders" },
    { i: Cloud, t: "B2 Storage", d: "Auto-organized" },
    { i: Rocket, t: "Publish", d: "Ship everywhere" },
  ];

  return (
    <section id="workflow" className="relative z-10 px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <SectionLabel>The AI Workflow</SectionLabel>
          <SectionHeading>From URL to launched campaign, in one continuous flow.</SectionHeading>
        </div>

        <div className="relative mt-20">
          {/* connecting line */}
          <div className="absolute left-6 right-6 top-8 hidden h-px md:block">
            <div className="h-full w-full bg-gradient-to-r from-transparent via-[#8b5a2b] to-transparent" />
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-8">
            {steps.map(({ i: Icon, t, d }, idx) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.06, duration: 0.6 }}
                className="group relative flex flex-col items-center text-center"
              >
                <div className="glass-strong relative flex h-16 w-16 items-center justify-center rounded-2xl transition-transform group-hover:-translate-y-1">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ffdab9]/10 to-transparent opacity-0 transition group-hover:opacity-100" />
                  <Icon className="h-6 w-6 text-[#ffdab9]" />
                </div>
                <div className="mt-4 font-display text-sm">{t}</div>
                <div className="mt-1 text-[11px] text-white/40">{d}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   GenBlaze
   ============================================================ */
function GenBlaze() {
  return (
    <section id="genblaze" className="relative z-10 px-6 py-32">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2 md:items-center">
        <div>
          <SectionLabel>Meet GenBlaze</SectionLabel>
          <SectionHeading>The reasoning engine behind every campaign.</SectionHeading>
          <p className="mt-6 max-w-md text-white/60">
            GenBlaze routes across best-in-class models, drafts research, plans strategy,
            regenerates on failure, and delivers scripts, copy and creative direction with
            senior-strategist intuition.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {[
              ["Script Generation", Wand2],
              ["Deep Research", Search],
              ["Strategy Planning", Brain],
              ["Multi-Model Routing", Workflow],
              ["Auto-Retry Logic", ShieldCheck],
              ["Reasoning Chains", Sparkles],
            ].map(([t, Icon]: any) => (
              <div key={t} className="glass flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm">
                <Icon className="h-4 w-4 text-[#ffdab9]" /> {t}
              </div>
            ))}
          </div>
        </div>

        <NeuralNet />
      </div>
    </section>
  );
}

function NeuralNet() {
  const layers = [4, 6, 6, 3];
  const width = 400;
  const height = 360;
  const nodes = layers.flatMap((count, li) =>
    Array.from({ length: count }, (_, ni) => ({
      x: 40 + (li * (width - 80)) / (layers.length - 1),
      y: 40 + (ni * (height - 80)) / Math.max(1, count - 1),
      li,
      ni,
    })),
  );
  const edges: { x1: number; y1: number; x2: number; y2: number; k: string }[] = [];
  for (let li = 0; li < layers.length - 1; li++) {
    const a = nodes.filter((n) => n.li === li);
    const b = nodes.filter((n) => n.li === li + 1);
    a.forEach((na) =>
      b.forEach((nb) => edges.push({ x1: na.x, y1: na.y, x2: nb.x, y2: nb.y, k: `${na.li}-${na.ni}-${nb.ni}` })),
    );
  }

  return (
    <div className="glass-strong relative overflow-hidden rounded-2xl p-6 glow-orange">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-white/60">
          <Brain className="h-4 w-4 text-[#ffdab9]" /> GenBlaze · live
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-white/50">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ffdab9]" />
          routing 3 models
        </div>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="h-72 w-full">
        {edges.map((e, i) => (
          <line
            key={e.k}
            x1={e.x1}
            y1={e.y1}
            x2={e.x2}
            y2={e.y2}
            stroke="rgba(255,218,185,0.15)"
            strokeWidth="0.6"
          >
            <animate
              attributeName="stroke"
              values="rgba(255,218,185,0.06);rgba(255,218,185,0.35);rgba(255,218,185,0.06)"
              dur={`${2 + (i % 5) * 0.3}s`}
              repeatCount="indefinite"
            />
          </line>
        ))}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="10" fill="rgba(255,218,185,0.06)" />
            <circle cx={n.x} cy={n.y} r="4" fill="#ffdab9">
              <animate
                attributeName="opacity"
                values="0.3;1;0.3"
                dur={`${2 + (i % 4) * 0.4}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}
      </svg>

      <div className="mt-3 space-y-1.5">
        {[
          ["Claude · reasoning", 96],
          ["GPT · copy", 88],
          ["Flux · imagery", 72],
        ].map(([t, v]) => (
          <div key={t as string} className="flex items-center gap-2 text-[11px] text-white/60">
            <span className="w-28">{t}</span>
            <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${v}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="h-full bg-gradient-to-r from-[#8b5a2b] to-[#ffdab9]"
              />
            </div>
            <span className="w-6 text-right">{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   B2 Storage
   ============================================================ */
function Storage() {
  return (
    <section className="relative z-10 px-6 py-32">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2 md:items-center">
        <div className="relative order-2 md:order-1">
          <div className="glass-strong relative rounded-2xl p-6">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm">
                <Cloud className="h-4 w-4 text-[#ffdab9]" /> Backblaze B2
              </div>
              <div className="text-[11px] text-white/40">148 assets · 2.4 GB</div>
            </div>

            {/* flowing pipe */}
            <div className="relative h-24 overflow-hidden rounded-xl bg-black/40">
              <svg viewBox="0 0 400 96" className="h-full w-full">
                <defs>
                  <linearGradient id="flow" x1="0" x2="1">
                    <stop offset="0%" stopColor="#ffdab9" stopOpacity="0" />
                    <stop offset="50%" stopColor="#ffdab9" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#8b5a2b" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M 20 48 Q 200 -20 380 48" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <path d="M 20 48 Q 200 -20 380 48" fill="none" stroke="url(#flow)" strokeWidth="2" strokeDasharray="8 200">
                  <animate attributeName="stroke-dashoffset" from="0" to="-208" dur="3s" repeatCount="indefinite" />
                </path>
                <path d="M 20 48 Q 200 116 380 48" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <path d="M 20 48 Q 200 116 380 48" fill="none" stroke="url(#flow)" strokeWidth="2" strokeDasharray="8 200">
                  <animate attributeName="stroke-dashoffset" from="0" to="-208" dur="4s" repeatCount="indefinite" />
                </path>
              </svg>
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[11px] text-white/50">Campaign</div>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-[#ffdab9]">B2 Cloud</div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                ["campaign.zip", "48 MB"],
                ["v3.hero.mp4", "12 MB"],
                ["copy.json", "8 KB"],
                ["assets/", "1.2 GB"],
                ["voice.wav", "4 MB"],
                ["report.pdf", "620 KB"],
              ].map(([f, s]) => (
                <div key={f} className="glass rounded-lg px-2 py-2 text-[10px]">
                  <div className="text-white/80">{f}</div>
                  <div className="text-white/40">{s}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between rounded-xl bg-black/40 px-3 py-2 text-[11px] text-white/50">
              <span>Version history · 12 restore points</span>
              <span className="text-[#ffdab9]">Instant retrieval</span>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <SectionLabel>Backblaze B2</SectionLabel>
          <SectionHeading>Every asset, versioned, exportable, forever.</SectionHeading>
          <p className="mt-6 max-w-md text-white/60">
            Campaigns flow into secure cloud storage automatically. Rewind any variant, export
            the whole campaign as a ZIP, or plug into your existing pipeline — all with
            millisecond retrieval.
          </p>
          <div className="mt-8 space-y-3">
            {[
              ["ZIP exports", "One-click hand-off to clients & teams"],
              ["Version history", "Rewind any asset to any moment"],
              ["Smart organization", "Auto-tagged by campaign, brand, aspect ratio"],
              ["Instant retrieval", "Global edge, sub-100ms restore"],
            ].map(([t, d]) => (
              <div key={t} className="flex items-start gap-3">
                <div className="glass mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md">
                  <Check className="h-3.5 w-3.5 text-[#ffdab9]" />
                </div>
                <div>
                  <div className="text-sm">{t}</div>
                  <div className="text-xs text-white/50">{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Interactive dashboard showcase (keynote)
   ============================================================ */
function Keynote() {
  const [hot, setHot] = useState<string | null>(null);
  const spots = [
    { id: "chart", t: "Live analytics", top: "12%", left: "10%" },
    { id: "video", t: "Cinematic renders", top: "35%", left: "60%" },
    { id: "copy", t: "AI copy variants", top: "70%", left: "18%" },
    { id: "intel", t: "Market intelligence", top: "68%", left: "72%" },
  ];
  return (
    <section id="demo" className="relative z-10 px-6 py-32">
      <div className="mx-auto max-w-6xl text-center">
        <SectionLabel>The Product</SectionLabel>
        <SectionHeading>An operating system for your entire marketing motion.</SectionHeading>
      </div>
      <div className="mx-auto mt-16 max-w-6xl">
        <div className="relative">
          <div className="absolute -inset-10 rounded-[2rem] bg-gradient-to-b from-[#ffdab9]/10 to-transparent blur-2xl" />
          <div className="relative glass-strong rounded-2xl p-3 glow-orange">
            <DashboardMock />
            {spots.map((s) => (
              <button
                key={s.id}
                onMouseEnter={() => setHot(s.id)}
                onMouseLeave={() => setHot(null)}
                className="absolute z-10"
                style={{ top: s.top, left: s.left }}
              >
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ffdab9] opacity-60" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-[#ffdab9] ring-2 ring-[#5c3317]" />
                </span>
                <AnimatePresence>
                  {hot === s.id && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: -8 }}
                      exit={{ opacity: 0 }}
                      className="glass-strong absolute left-1/2 top-4 -translate-x-1/2 whitespace-nowrap rounded-full px-2.5 py-1 text-[11px]"
                    >
                      {s.t}
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Bento features
   ============================================================ */
function Features() {
  const items = [
    { i: Wand2, t: "AI Copy", d: "10+ voice profiles, tuned per channel", cls: "md:col-span-2 md:row-span-2" },
    { i: Brain, t: "Market Intelligence", d: "Live competitor + trend signal", cls: "md:col-span-2" },
    { i: Video, t: "Video Studio", d: "Cinematic renders, all ratios", cls: "md:col-span-2 md:row-span-2" },
    { i: ImageIcon, t: "AI Images", d: "On-brand, on-palette, always", cls: "" },
    { i: Mic, t: "Voiceovers", d: "42 languages, native accents", cls: "" },
    { i: History, t: "Campaign History", d: "Every asset, forever, versioned", cls: "" },
    { i: BarChart3, t: "Analytics", d: "Predictive performance signals", cls: "" },
    { i: Cloud, t: "Cloud Storage", d: "Backblaze B2 native", cls: "" },
    { i: Workflow, t: "Automation", d: "Trigger anything, anywhere", cls: "md:col-span-2" },
  ];
  return (
    <section id="features" className="relative z-10 px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <SectionLabel>Everything, in one canvas</SectionLabel>
          <SectionHeading>A complete creative stack, quietly powerful.</SectionHeading>
        </div>
        <div className="mt-16 grid auto-rows-[180px] grid-cols-1 gap-4 md:grid-cols-4">
          {items.map(({ i: Icon, t, d, cls }, idx) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.03 }}
              onMouseMove={(e) => {
                const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
                (e.currentTarget as HTMLElement).style.setProperty("--mx", `${e.clientX - r.left}px`);
                (e.currentTarget as HTMLElement).style.setProperty("--my", `${e.clientY - r.top}px`);
              }}
              className={`glass group relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1 ${cls}`}
              style={{
                backgroundImage:
                  "radial-gradient(500px circle at var(--mx,50%) var(--my,50%), rgba(255,218,185,0.08), transparent 40%)",
              }}
            >
              <Icon className="h-5 w-5 text-[#ffdab9]" />
              <div className="mt-3 font-display text-xl">{t}</div>
              <div className="mt-1 max-w-xs text-sm text-white/50">{d}</div>
              <div className="absolute inset-x-6 bottom-4 h-px bg-gradient-to-r from-transparent via-[#8b5a2b]/40 to-transparent opacity-0 transition group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Who uses
   ============================================================ */
function WhoUses() {
  const cards = [
    { i: Building2, t: "Agencies", d: "Ship client work 40× faster" },
    { i: Store, t: "Shopify", d: "Auto-launch product campaigns" },
    { i: Rocket, t: "Amazon Sellers", d: "A+ content in minutes" },
    { i: Star, t: "Influencers", d: "Own your brand voice at scale" },
    { i: Sparkles, t: "Creators", d: "From idea to render, instantly" },
    { i: Zap, t: "Startups", d: "Launch a brand before your seed round" },
    { i: Users, t: "Founders", d: "Marketing team in a browser tab" },
    { i: Workflow, t: "Studios", d: "Plug into your existing pipeline" },
  ];
  return (
    <section className="relative z-10 px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <SectionLabel>Who uses Supernova</SectionLabel>
          <SectionHeading>Built for anyone who ships.</SectionHeading>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {cards.map(({ i: Icon, t, d }, idx) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className="glass mb-4 flex h-10 w-10 items-center justify-center rounded-xl transition group-hover:scale-110">
                <Icon className="h-4 w-4 text-[#ffdab9]" />
              </div>
              <div className="font-display text-lg">{t}</div>
              <div className="mt-1 text-sm text-white/50">{d}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Pricing
   ============================================================ */
function Pricing() {
  const tiers = [
    {
      name: "Free",
      price: "0",
      period: "forever",
      features: ["3 campaigns / mo", "720p video renders", "Basic analytics", "Community support"],
      cta: "Start Free",
      highlight: false,
    },
    {
      name: "Pro",
      price: "49",
      period: "per month",
      features: ["Unlimited campaigns", "4K cinematic video", "Full market intelligence", "B2 cloud storage", "Priority GenBlaze", "Voice cloning"],
      cta: "Go Pro",
      highlight: true,
    },
    {
      name: "Studio",
      price: "199",
      period: "per month",
      features: ["Everything in Pro", "Team seats & roles", "White-label exports", "API + webhooks", "Dedicated success"],
      cta: "Contact Sales",
      highlight: false,
    },
  ];
  return (
    <section id="pricing" className="relative z-10 px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <SectionLabel>Pricing</SectionLabel>
          <SectionHeading>Simple, honest, ready to scale.</SectionHeading>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl p-8 ${
                t.highlight ? "glass-strong glow-orange" : "glass"
              }`}
            >
              {t.highlight && (
                <>
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-[#ffdab9]/10 via-transparent to-[#8b5a2b]/10" />
                  <div className="pointer-events-none absolute -inset-px rounded-2xl">
                    <div className="absolute inset-0 rounded-2xl [mask:linear-gradient(#000,transparent)] animate-shimmer-slow" />
                  </div>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#5c3317] to-[#8b5a2b] px-3 py-1 text-[10px] uppercase tracking-widest text-[#ffdab9] ring-1 ring-[#ffdab9]/40">
                    Most popular
                  </div>
                </>
              )}
              <div className="relative">
                <div className="font-display text-2xl">{t.name}</div>
                <div className="mt-4 flex items-end gap-1">
                  <span className="font-display text-5xl">${t.price}</span>
                  <span className="pb-2 text-sm text-white/50">/ {t.period}</span>
                </div>
                <ul className="mt-6 space-y-2.5 text-sm">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-white/70">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#ffdab9]" /> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className={`mt-8 flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm transition ${
                    t.highlight
                      ? "btn-premium btn-premium-hover"
                      : "border border-white/10 bg-white/[0.02] text-white hover:bg-white/[0.06]"
                  }`}
                >
                  {t.cta} <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FAQ
   ============================================================ */
function Faq() {
  const qs = [
    ["Do I need any design or marketing experience?", "Not at all. Paste a product URL — Supernova handles research, strategy, copy, imagery and video from there."],
    ["What models power GenBlaze?", "GenBlaze routes intelligently across Claude, GPT, Flux, and specialised in-house models, picking the best for each subtask."],
    ["Where do my assets live?", "Every campaign is versioned and stored in your Backblaze B2 workspace. Export as ZIP, restore any version, or sync via API."],
    ["Can I use my own brand voice?", "Yes. Upload guidelines, sample copy or an existing site — Supernova learns your tone and applies it across every asset."],
    ["Is there a free plan?", "Forever. No credit card. Real renders, real intelligence — try Supernova end-to-end before you pay a cent."],
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative z-10 px-6 py-32">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col items-center text-center">
          <SectionLabel>FAQ</SectionLabel>
          <SectionHeading>Answers, before you ask.</SectionHeading>
        </div>
        <div className="mt-14 space-y-3">
          {qs.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={q} className="glass overflow-hidden rounded-2xl">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-display text-base md:text-lg">{q}</span>
                  <span className="glass flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                    {isOpen ? <Minus className="h-4 w-4 text-[#ffdab9]" /> : <Plus className="h-4 w-4 text-[#ffdab9]" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-sm leading-relaxed text-white/60">{a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Final CTA
   ============================================================ */
function FinalCTA() {
  return (
    <section id="cta" className="relative z-10 overflow-hidden px-6 py-40">
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 80 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-[#ffdab9] animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: Math.random() * 2 + 0.6,
              height: Math.random() * 2 + 0.6,
              opacity: Math.random() * 0.7,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
        <div className="absolute inset-x-0 top-1/2 h-96 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(139,90,43,0.35),transparent_60%)]" />
      </div>
      <div className="relative mx-auto max-w-4xl text-center">
        <h2 className="font-display text-[clamp(2.4rem,6vw,5.5rem)] font-semibold leading-[1] tracking-tighter text-gradient-warm">
          Start building campaigns that look like million-dollar ads.
        </h2>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#" className="btn-premium btn-premium-hover">
            Start Free <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#" className="btn-ghost-glass hover:bg-white/[0.08]">Book Demo</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] px-6 py-10 text-xs text-white/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <SupernovaLogo size={16} />
          <span className="font-display text-sm text-white/70">Supernova</span>
          <span>· The AI Marketing Agent</span>
        </div>
        <div className="flex gap-5">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Contact</a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   Route
   ============================================================ */
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-[#09090b] text-white">
      <Ambient />
      <Nav />
      <main className="relative">
        <Hero />
        <Trusted />
        <Problem />
        <WorkflowSection />
        <GenBlaze />
        <Storage />
        <Keynote />
        <Features />
        <WhoUses />
        <Pricing />
        <Faq />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
