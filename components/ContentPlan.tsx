import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Day = {
  date: string;
  title: string;
  items: string[];
};

const DAYS: Day[] = [
  {
    date: "15.06",
    title: "Старт исследования",
    items: [
      "Анонс проекта и главного вопроса",
      "Ролик с лекции об ИИ в Школе юного журналиста",
      "Опрос «Доверили бы вы ИИ выбор профессии?»",
    ],
  },
  {
    date: "16.06",
    title: "Первый эксперимент",
    items: [
      "«Угадай профессию по описанию человека»",
      "Анализ того же кейса нейросетью",
      "«Люди против ИИ»",
    ],
  },
  {
    date: "17.06",
    title: "Родительский взгляд",
    items: ["Анонс интервью с родителем", "Лучшие цитаты интервью", "Полная версия разговора"],
  },
  {
    date: "18.06",
    title: "ИИ VS Родитель",
    items: [
      "Публикация анкеты участника редакции",
      "Какие профессии предложил ИИ",
      "Сравнение рекомендаций ИИ и родителя",
    ],
  },
  {
    date: "19.06",
    title: "Большой опрос",
    items: ["Запуск формы исследования", "Первые результаты", "Неожиданные ответы участников"],
  },
  {
    date: "20.06",
    title: "Наставник отвечает",
    items: ["Анонс интервью с наставником", "Лучшие цитаты наставника", "Полная версия разговора"],
  },
  {
    date: "21.06",
    title: "Эксперимент редакции",
    items: [
      "ИИ выбирает профессии участникам редакции",
      "Реакция участников",
      "Голосование «Кому ИИ попал точнее всего?»",
    ],
  },
  {
    date: "22.06",
    title: "Аналитика",
    items: [
      "Итоги опросов подростков",
      "Сравнение мнений подростков, родителей и наставника",
      "5 выводов исследования",
    ],
  },
  {
    date: "23.06",
    title: "Финал",
    items: ["Большое финальное исследование", "Финальный ролик 2–3 минуты", "Вердикт редакции"],
  },
];

const ACCENTS = [
  { text: "text-pulse-lime", dot: "bg-pulse-lime", glow: "shadow-[0_0_20px_rgba(196,247,74,0.55)]", ring: "ring-glow-lime" },
  { text: "text-pulse-blue", dot: "bg-pulse-blue", glow: "shadow-[0_0_20px_rgba(91,157,255,0.55)]", ring: "ring-glow-blue" },
  { text: "text-pulse-violet", dot: "bg-pulse-violet", glow: "shadow-[0_0_20px_rgba(169,139,255,0.55)]", ring: "ring-glow-violet" },
  { text: "text-pulse-magenta", dot: "bg-pulse-magenta", glow: "shadow-[0_0_20px_rgba(242,95,208,0.55)]", ring: "ring-glow-magenta" },
];

export default function ContentPlan() {
  return (
    <section id="content-plan" className="relative py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          index="04 / План"
          eyebrow="Контент-план"
          title={
            <>
              9 дней исследования: <span className="text-gradient">от вопроса к вердикту</span>
            </>
          }
          intro="Ежедневный эфир в VK и Telegram с 15 по 23 июня. Каждый день — новый шаг эксперимента: опрос, интервью, столкновение мнений и аналитика."
        />

        <div className="relative mt-12">
          <div className="timeline-line absolute bottom-3 left-[27px] top-3 w-0.5 rounded-full opacity-60" aria-hidden="true" />

          <ol className="space-y-5">
            {DAYS.map((day, i) => {
              const accent = ACCENTS[i % ACCENTS.length];
              return (
                <li key={day.date}>
                  <Reveal delay={(i % 3) * 70}>
                    <div className="grid grid-cols-[56px_1fr] gap-3 sm:gap-5">
                      <div className="flex justify-center">
                        <div
                          className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-ink-900 font-display text-sm font-bold ${accent.text} ${accent.glow}`}
                        >
                          {i + 1}
                        </div>
                      </div>

                      <article className={`card card-hover ${accent.ring}`}>
                        <header className="flex flex-wrap items-center gap-x-4 gap-y-2">
                          <span className={`font-display text-lg font-bold ${accent.text}`}>{day.date}</span>
                          <span className="h-4 w-px bg-white/15" />
                          <h3 className="font-display text-lg font-bold text-white">{day.title}</h3>
                        </header>
                        <ul className="mt-4 grid gap-2.5 sm:grid-cols-3">
                          {day.items.map((item) => (
                            <li
                              key={item}
                              className="flex gap-2.5 rounded-2xl border border-white/8 bg-white/[0.02] p-3 text-sm leading-snug text-white/75"
                            >
                              <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${accent.dot}`} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </article>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
