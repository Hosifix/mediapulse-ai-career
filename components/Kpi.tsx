import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Stat = {
  value: string;
  label: string;
  accent: string;
  ring: string;
  small?: boolean;
  /** Span both columns on mobile to keep the grid balanced and readable. */
  span?: boolean;
};

const STATS: Stat[] = [
  { value: "50–100", label: "участников опроса", accent: "text-pulse-lime", ring: "ring-glow-lime", span: true },
  { value: "2–3", label: "интервью: родитель и наставник", accent: "text-pulse-blue", ring: "ring-glow-blue" },
  { value: "2", label: "эксперимента редакции", accent: "text-pulse-violet", ring: "ring-glow-violet" },
  { value: "1", label: "итоговый ролик на 2–3 минуты", accent: "text-pulse-magenta", ring: "ring-glow-magenta" },
  { value: "1", label: "большое финальное исследование", accent: "text-pulse-lime", ring: "ring-glow-lime" },
  {
    value: "Ежедневно",
    label: "контент в VK и Telegram",
    accent: "text-pulse-blue",
    ring: "ring-glow-blue",
    small: true,
    span: true,
  },
];

export default function Kpi() {
  return (
    <section id="kpi" className="relative py-16 sm:py-24 lg:py-28">
      <div className="container-px">
        <SectionHeading
          index="08 / KPI"
          eyebrow="KPI проекта"
          title={
            <>
              Цели исследования <span className="text-gradient">в цифрах</span>
            </>
          }
          intro="Конкретные ориентиры выпуска: сколько данных мы собираем и что выпускаем за время проекта."
        />

        <div className="mt-10 grid grid-cols-2 gap-3.5 sm:mt-12 sm:grid-cols-3 sm:gap-4">
          {STATS.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={(i % 3) * 80}
              className={`h-full ${stat.span ? "col-span-2 sm:col-span-1" : ""}`}
            >
              <article
                className={`card card-hover ${stat.ring} flex h-full flex-col justify-between ${
                  stat.span ? "sm:flex-col" : ""
                }`}
              >
                <div
                  className={`font-display font-extrabold leading-none ${stat.accent} ${
                    stat.small ? "text-3xl" : "text-4xl sm:text-5xl"
                  }`}
                >
                  {stat.value}
                </div>
                <p className="mt-4 text-sm leading-snug text-white/65">{stat.label}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
