import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Stat = {
  value: string;
  unit?: string;
  label: string;
  accent: string;
  ring: string;
  small?: boolean;
};

const STATS: Stat[] = [
  { value: "50–100", label: "участников опроса", accent: "text-pulse-lime", ring: "ring-glow-lime" },
  { value: "2–3", label: "интервью с родителем и наставником", accent: "text-pulse-blue", ring: "ring-glow-blue" },
  { value: "2", label: "эксперимента редакции", accent: "text-pulse-violet", ring: "ring-glow-violet" },
  { value: "1", label: "итоговый ролик на 2–3 минуты", accent: "text-pulse-magenta", ring: "ring-glow-magenta" },
  { value: "1", label: "большое финальное исследование", accent: "text-pulse-lime", ring: "ring-glow-lime" },
  {
    value: "Ежедневно",
    label: "контент в VK и Telegram, 15–23 июня",
    accent: "text-pulse-blue",
    ring: "ring-glow-blue",
    small: true,
  },
];

export default function Kpi() {
  return (
    <section id="kpi" className="relative py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          index="08 / KPI"
          eyebrow="KPI проекта"
          title={
            <>
              Цели исследования <span className="text-gradient">в цифрах</span>
            </>
          }
          intro="Конкретные ориентиры проекта: сколько данных мы собираем и что выпускаем за девять дней эфира."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={(i % 3) * 80} className="h-full">
              <article className={`card card-hover ${stat.ring} flex h-full flex-col justify-between`}>
                <div
                  className={`font-display font-extrabold leading-none ${stat.accent} ${
                    stat.small ? "text-2xl sm:text-3xl" : "text-4xl sm:text-5xl"
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
