import Reveal from "./Reveal";
import { Brain, HeartHand, Compass, GradCap } from "./icons";

const ADVISORS = [
  {
    n: "01",
    name: "ИИ",
    icon: Brain,
    accent: "text-pulse-blue",
    dot: "bg-pulse-blue",
    ring: "ring-glow-blue",
    strength: "Анализирует интересы, навыки и ответы анкеты — быстро и без оценок.",
    risk: "Может дать слишком общие или модные рекомендации.",
  },
  {
    n: "02",
    name: "Родитель",
    icon: HeartHand,
    accent: "text-pulse-lime",
    dot: "bg-pulse-lime",
    ring: "ring-glow-lime",
    strength: "Знает подростка дольше всех и видит его вне учёбы.",
    risk: "Может опираться на ожидания и страхи.",
  },
  {
    n: "03",
    name: "Наставник",
    icon: Compass,
    accent: "text-pulse-violet",
    dot: "bg-pulse-violet",
    ring: "ring-glow-violet",
    strength: "Видит способности в деятельности и реальных проектах.",
    risk: "Может оценивать через призму конкретной среды.",
  },
  {
    n: "04",
    name: "Студент",
    icon: GradCap,
    accent: "text-pulse-magenta",
    dot: "bg-pulse-magenta",
    ring: "ring-glow-magenta",
    strength: "Ближе всех к реальному выбору профессии и поступлению.",
    risk: "Может судить по собственному опыту.",
  },
];

export default function Advisors() {
  return (
    <section id="advisors" className="relative py-20 sm:py-28">
      <div className="container-px">
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-4">
            <span className="eyebrow">Главный эксперимент</span>
            <span className="font-display text-xs font-semibold text-white/35">03 / Эксперимент</span>
          </div>
          <h2 className="section-title mt-5">
            Один подросток — <span className="text-gradient">четыре советчика</span>
          </h2>
          <p className="lead mt-5">
            Одна анкета. Один подросток. Четыре взгляда на будущее. Мы передаём одинаковое описание
            участника редакции четырём «советчикам» и сравниваем, какие профессии они предложат.
          </p>
        </Reveal>

        {/* Flow strip */}
        <Reveal delay={80}>
          <div className="mt-10 flex flex-wrap items-center gap-3 rounded-3xl border border-white/10 bg-white/[0.02] p-5 text-sm font-medium text-white/75">
            <span className="rounded-full bg-white/5 px-4 py-2">📋 Одна анкета</span>
            <span className="text-white/30">→</span>
            <span className="rounded-full bg-white/5 px-4 py-2">4 советчика</span>
            <span className="text-white/30">→</span>
            <span className="rounded-full bg-white/5 px-4 py-2">Сравнение профессий</span>
            <span className="text-white/30">→</span>
            <span className="rounded-full bg-gradient-to-r from-pulse-lime/20 to-pulse-blue/20 px-4 py-2 text-white">
              Где проходит граница выбора?
            </span>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ADVISORS.map((advisor, i) => {
            const Icon = advisor.icon;
            return (
              <Reveal key={advisor.name} delay={i * 80} className="h-full">
                <article className={`card card-hover ${advisor.ring} group flex h-full flex-col`}>
                  <div className="flex items-center justify-between">
                    <span className="index-chip">
                      <Icon className={`h-6 w-6 ${advisor.accent}`} />
                    </span>
                    <span className="font-display text-sm font-bold text-white/25 transition-colors group-hover:text-white/50">
                      {advisor.n}
                    </span>
                  </div>

                  <h3 className="mt-5 flex items-center gap-2 font-display text-xl font-bold text-white">
                    <span className={`h-2 w-2 rounded-full ${advisor.dot}`} />
                    {advisor.name}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/70">{advisor.strength}</p>

                  <div className="mt-5 rounded-2xl border border-white/10 bg-ink-950/50 p-3.5">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-pulse-magenta/90">
                      Риск
                    </div>
                    <p className="mt-1 text-sm leading-snug text-white/65">{advisor.risk}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
