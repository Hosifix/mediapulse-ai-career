import Reveal from "./Reveal";
import { ArrowRight, Signal } from "./icons";

const BADGES = [
  { label: "Школа юного журналиста", color: "bg-pulse-lime" },
  { label: "Исследование", color: "bg-pulse-blue" },
  { label: "ИИ и профессии", color: "bg-pulse-violet" },
  { label: "15–23 июня", color: "bg-pulse-magenta" },
  { label: "Подростки выбирают будущее", color: "bg-pulse-lime" },
];

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left: copy */}
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs font-medium text-white/75">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pulse-lime opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-pulse-lime" />
                </span>
                Идёт исследование · digital-media спецпроект
              </div>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-5xl md:text-6xl">
                Может ли <span className="text-gradient-lime">ИИ</span> помочь подростку{" "}
                <span className="text-gradient">выбрать профессию?</span>
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-6 max-w-xl text-lg font-medium text-white/85 sm:text-xl">
                «МедиаПульс» исследует, где заканчивается подсказка нейросети и начинается личный
                выбор человека.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[color:var(--muted)]">
                Юные журналисты проводят опросы, интервью и эксперименты, чтобы понять: может ли
                искусственный интеллект стать помощником в профориентации подростков — или он видит
                только данные, но не человека.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#content-plan" className="btn btn-primary">
                  Смотреть план
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#advisors" className="btn btn-ghost">
                  Узнать эксперимент
                </a>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <ul className="mt-10 flex flex-wrap gap-2.5">
                {BADGES.map((badge) => (
                  <li key={badge.label} className="badge">
                    <span className={`badge-dot ${badge.color}`} />
                    {badge.label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Right: signal panel */}
          <Reveal delay={160} className="relative">
            <HeroPanel />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function HeroPanel() {
  const stats = [
    { value: "9", label: "дней эфира", accent: "text-pulse-lime" },
    { value: "4", label: "советчика", accent: "text-pulse-blue" },
    { value: "100", label: "голосов опроса", accent: "text-pulse-violet" },
  ];

  return (
    <div className="relative">
      <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-pulse-violet/25 via-pulse-blue/15 to-pulse-lime/20 blur-2xl" />
      <div className="card glow-violet rounded-[2rem] p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <Signal className="h-5 w-5 text-pulse-lime" />
            Сигнал «МедиаПульс»
          </div>
          <span className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/60">
            live
          </span>
        </div>

        {/* Pulse waveform */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-ink-950/60 p-4">
          <svg viewBox="0 0 320 90" className="h-24 w-full" role="img" aria-label="Линия пульса медиапроекта">
            <defs>
              <linearGradient id="pulseLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#c4f74a" />
                <stop offset="45%" stopColor="#5b9dff" />
                <stop offset="75%" stopColor="#a98bff" />
                <stop offset="100%" stopColor="#f25fd0" />
              </linearGradient>
            </defs>
            <path
              d="M0 55 H60 l10 -30 12 48 14 -64 12 70 16 -42 H150 l12 -22 14 30 12 -10 H230 l14 26 14 -48 12 30 H320"
              fill="none"
              stroke="url(#pulseLine)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-white/70">
          Одна анкета подростка проходит через четыре взгляда на будущее. Мы фиксируем каждый
          совет и сравниваем — что общего и где проходит граница выбора.
        </p>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-center">
              <div className={`font-display text-2xl font-bold ${stat.accent}`}>{stat.value}</div>
              <div className="mt-1 text-[11px] leading-tight text-white/55">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
