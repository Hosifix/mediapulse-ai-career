import Reveal from "./Reveal";
import { ArrowRight, Signal } from "./icons";

const BADGES = [
  { label: "Школа юного журналиста", color: "bg-pulse-lime" },
  { label: "Исследование", color: "bg-pulse-blue" },
  { label: "ИИ и профессии", color: "bg-pulse-violet" },
  { label: "15–23 июня", color: "bg-pulse-magenta" },
  { label: "Подростки выбирают будущее", color: "bg-pulse-lime" },
];

const FORMATS = ["Опрос", "Интервью", "Эксперимент", "Вердикт редакции"];

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-14 sm:pt-36 sm:pb-24">
      <div className="container-px">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* Left: copy */}
          <div>
            <Reveal>
              <div className="kicker">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pulse-lime opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-pulse-lime" />
                </span>
                Выпуск 01 · исследование юных журналистов
              </div>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="mt-5 font-display text-[1.9rem] font-extrabold leading-[1.08] tracking-tight text-white xs:text-4xl sm:text-5xl md:text-6xl">
                Может ли <span className="text-gradient-lime">ИИ</span> помочь подростку{" "}
                <span className="text-gradient">выбрать профессию?</span>
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-5 max-w-xl text-base font-medium text-white/85 sm:text-xl">
                «МедиаПульс» исследует, где заканчивается подсказка нейросети и начинается личный
                выбор человека.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[color:var(--muted)] sm:text-base">
                Юные журналисты проводят опросы, интервью и эксперименты, чтобы понять: может ли
                искусственный интеллект стать помощником в профориентации подростков — или он видит
                только данные, но не человека.
              </p>
            </Reveal>

            {/* Editorial topic line */}
            <Reveal delay={200}>
              <div className="mt-6 flex items-center gap-3 rounded-2xl border border-pulse-lime/25 bg-pulse-lime/[0.06] px-4 py-3">
                <span className="shrink-0 rounded-full border border-pulse-lime/30 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-pulse-lime">
                  Пульс темы
                </span>
                <span className="text-sm font-semibold text-white sm:text-base">
                  ИИ советует — человек выбирает
                </span>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-7 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
                <a href="#content-plan" className="btn btn-primary w-full justify-center xs:w-auto">
                  Смотреть план
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#advisors" className="btn btn-ghost w-full justify-center xs:w-auto">
                  Узнать эксперимент
                </a>
              </div>
            </Reveal>

            <Reveal delay={290}>
              <ul className="mt-8 flex flex-wrap gap-2">
                {BADGES.map((badge) => (
                  <li key={badge.label} className="badge">
                    <span className={`badge-dot ${badge.color}`} />
                    {badge.label}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={330}>
              <div className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45">
                {FORMATS.map((format, i) => (
                  <span key={format} className="flex items-center gap-2.5">
                    {i > 0 ? <span className="text-pulse-lime/50">/</span> : null}
                    {format}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: editorial pulse panel */}
          <Reveal delay={160} className="relative">
            <HeroPanel />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const ADVISORS = [
  { label: "ИИ", dot: "bg-pulse-blue" },
  { label: "Родитель", dot: "bg-pulse-lime" },
  { label: "Наставник", dot: "bg-pulse-violet" },
  { label: "Студент", dot: "bg-pulse-magenta" },
];

function HeroPanel() {
  return (
    <div className="relative">
      <div className="absolute -inset-3 -z-10 rounded-[2.5rem] bg-gradient-to-br from-pulse-violet/25 via-pulse-blue/15 to-pulse-lime/20 blur-2xl sm:-inset-4" />
      <div className="card glow-violet rounded-[1.75rem] p-5 sm:rounded-[2rem] sm:p-7">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-sm font-bold text-white">
            <Signal className="h-5 w-5 text-pulse-lime" />
            Пульс выпуска
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-pulse-lime/30 bg-pulse-lime/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-pulse-lime">
            <span className="h-1.5 w-1.5 rounded-full bg-pulse-lime tick-pulse" />
            Опрос открыт
          </span>
        </div>

        {/* Pulse waveform */}
        <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-ink-950/60 p-3.5 sm:p-4">
          <svg viewBox="0 0 320 80" className="h-16 w-full sm:h-20" role="img" aria-label="Линия пульса выпуска">
            <defs>
              <linearGradient id="pulseLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#c4f74a" />
                <stop offset="45%" stopColor="#5b9dff" />
                <stop offset="75%" stopColor="#a98bff" />
                <stop offset="100%" stopColor="#f25fd0" />
              </linearGradient>
            </defs>
            <path
              d="M0 48 H58 l9 -26 11 42 13 -56 11 62 14 -38 H146 l11 -20 12 28 11 -10 H226 l12 24 13 -42 11 28 H320"
              fill="none"
              stroke="url(#pulseLine)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h2 className="mt-5 font-display text-lg font-bold leading-snug text-white sm:text-xl">
          Один подросток — четыре советчика
        </h2>

        <div className="mt-3 grid grid-cols-2 gap-2">
          {ADVISORS.map((advisor) => (
            <div
              key={advisor.label}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm font-medium text-white/85"
            >
              <span className={`h-2 w-2 shrink-0 rounded-full ${advisor.dot}`} />
              {advisor.label}
            </div>
          ))}
        </div>

        <p className="mt-4 text-sm leading-relaxed text-white/65">
          Редакция сравнит не «кто прав», а какой совет полезнее.
        </p>

        <div className="mt-5 border-t border-white/10 pt-4 text-center text-[13px] font-semibold text-white/75">
          1 анкета <span className="text-white/30">·</span> 4 советчика{" "}
          <span className="text-white/30">·</span> 100 голосов опроса
        </div>
      </div>
    </div>
  );
}
