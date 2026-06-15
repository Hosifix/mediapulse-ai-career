import Reveal from "./Reveal";
import { ArrowRight, Signal } from "./icons";

const FORMATS = ["Опрос", "Интервью", "Эксперимент", "Вывод"];

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-[1.04fr_1fr] lg:gap-14">
          {/* Left: copy */}
          <div>
            <Reveal>
              <div className="kicker">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pulse-lime opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-pulse-lime" />
                </span>
                Выпуск 01 · Редакционное исследование
              </div>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="mt-6 font-display text-[2rem] font-extrabold leading-[1.06] tracking-tight text-white xs:text-4xl sm:text-5xl md:text-[3.5rem]">
                Может ли <span className="text-gradient-lime">ИИ</span> помочь подростку{" "}
                <span className="text-gradient">выбрать профессию?</span>
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-6 max-w-xl text-base font-medium text-white/85 sm:text-xl">
                «МедиаПульс» исследует, где заканчивается подсказка нейросети и начинается личный
                выбор человека.
              </p>
            </Reveal>

            {/* Slim editorial pull-line */}
            <Reveal delay={170}>
              <div className="mt-6 flex items-stretch gap-3.5">
                <span className="w-1 shrink-0 rounded-full bg-pulse-lime/80" />
                <p className="text-lg font-semibold text-white sm:text-xl">
                  ИИ советует — человек выбирает.
                </p>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-8 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
                <a href="#advisors" className="btn btn-primary w-full justify-center xs:w-auto">
                  Узнать эксперимент
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#content-plan" className="btn btn-ghost w-full justify-center xs:w-auto">
                  Как развивается выпуск
                </a>
              </div>
            </Reveal>

            <Reveal delay={270}>
              <div className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
                {FORMATS.map((format, i) => (
                  <span key={format} className="flex items-center gap-3">
                    {i > 0 ? <span className="text-pulse-lime/55">/</span> : null}
                    {format}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: wide editorial board */}
          <Reveal delay={140} className="relative">
            <EditorialBoard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const ADVISORS = [
  { name: "ИИ", role: "анализирует анкету", dot: "bg-pulse-lime" },
  { name: "Родитель", role: "знает дольше всех", dot: "bg-pulse-blue" },
  { name: "Наставник", role: "видит способности", dot: "bg-pulse-violet" },
  { name: "Студент", role: "ближе к выбору", dot: "bg-pulse-magenta" },
];

function EditorialBoard() {
  return (
    <div className="relative">
      {/* depth layer (desktop only, kept inside the gutter) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 hidden rounded-[2rem] border border-white/[0.07] bg-white/[0.012] lg:block lg:translate-x-4 lg:translate-y-5"
      />

      <div className="card rounded-[1.75rem] p-5 sm:rounded-[2rem] sm:p-7">
        {/* board header */}
        <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-pulse-lime">
            <Signal className="h-4 w-4" />
            Редакционный эксперимент
          </div>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-white/55">
            <span className="h-1.5 w-1.5 rounded-full bg-pulse-lime tick-pulse" />
            идёт
          </span>
        </div>

        <h2 className="mt-5 font-display text-xl font-bold leading-snug text-white sm:text-2xl">
          Один подросток —<br className="hidden xs:block" /> четыре советчика
        </h2>
        <p className="mt-2.5 text-sm leading-relaxed text-white/60">
          Одна анкета уходит к четырём советчикам. Редакция сравнивает не «кто прав», а какой совет
          полезнее.
        </p>

        {/* advisors board */}
        <div className="mt-5 grid grid-cols-2 gap-2.5">
          {ADVISORS.map((advisor) => (
            <div
              key={advisor.name}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-3 transition-colors hover:border-white/20"
            >
              <div className="flex items-center gap-2">
                <span className={`h-2 w-2 shrink-0 rounded-full ${advisor.dot}`} />
                <span className="text-sm font-bold text-white">{advisor.name}</span>
              </div>
              <p className="mt-1 text-xs leading-snug text-white/55">{advisor.role}</p>
            </div>
          ))}
        </div>

        {/* pulse motif */}
        <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
          <svg viewBox="0 0 320 44" className="h-8 w-full" role="img" aria-label="Пульс выпуска">
            <defs>
              <linearGradient id="pulseLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#c4f74a" />
                <stop offset="100%" stopColor="#74a4ec" />
              </linearGradient>
            </defs>
            <path
              d="M0 26 H66 l8 -16 9 30 11 -34 9 38 12 -24 H170 l9 -14 10 20 9 -8 H250 l10 16 9 -22 9 18 H320"
              fill="none"
              stroke="url(#pulseLine)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* footer meta */}
        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-[13px] font-semibold text-white/70">
          <span>1 кейс</span>
          <span className="text-white/25">·</span>
          <span>4 советчика</span>
          <span className="text-white/25">·</span>
          <span>сравнение взглядов</span>
        </div>
      </div>

      {/* floating editorial credit (desktop) */}
      <div className="absolute -bottom-4 -left-5 hidden items-center gap-2 rounded-full border border-white/12 bg-ink-900/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-white/70 shadow-xl backdrop-blur lg:flex">
        <span className="h-1.5 w-1.5 rounded-full bg-pulse-lime" />
        Материал готовят юные журналисты
      </div>
    </div>
  );
}
