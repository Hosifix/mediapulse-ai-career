import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Stage = {
  n: string;
  title: string;
  text: string;
  tags: string[];
  text_accent: string;
  glow: string;
};

const STAGES: Stage[] = [
  {
    n: "01",
    title: "Старт и первый опрос",
    text: "Анонс темы, идея проекта и опрос «Доверили бы вы ИИ выбор профессии?».",
    tags: ["Пост", "Видео", "Опрос"],
    text_accent: "text-pulse-lime",
    glow: "shadow-[0_0_18px_rgba(196,247,74,0.45)]",
  },
  {
    n: "02",
    title: "Эксперимент «Люди против ИИ»",
    text: "Угадываем профессию по описанию человека, тот же кейс отдаём нейросети и сравниваем ответы.",
    tags: ["Эксперимент", "Карточки", "Аналитика"],
    text_accent: "text-pulse-blue",
    glow: "shadow-[0_0_18px_rgba(116,164,236,0.45)]",
  },
  {
    n: "03",
    title: "Голоса взрослых",
    text: "Интервью с родителем и наставником: лучшие цитаты и полные версии в подкасте.",
    tags: ["Интервью", "Цитаты", "Подкаст"],
    text_accent: "text-pulse-violet",
    glow: "shadow-[0_0_18px_rgba(154,147,198,0.45)]",
  },
  {
    n: "04",
    title: "ИИ против человека",
    text: "Анкета участника редакции, рекомендации ИИ и большой опрос аудитории.",
    tags: ["Анкета", "Инфографика", "Опрос"],
    text_accent: "text-pulse-magenta",
    glow: "shadow-[0_0_18px_rgba(207,143,168,0.45)]",
  },
  {
    n: "05",
    title: "Аналитика и вердикт",
    text: "Итоги опросов, пять выводов, финальный лонгрид и ролик, вердикт редакции.",
    tags: ["Аналитика", "Лонгрид", "Вердикт"],
    text_accent: "text-pulse-lime",
    glow: "shadow-[0_0_18px_rgba(196,247,74,0.45)]",
  },
];

export default function ContentPlan() {
  return (
    <section id="content-plan" className="relative py-16 sm:py-24 lg:py-28">
      <div className="container-px">
        <SectionHeading
          index="04 / Выпуск"
          eyebrow="Как развивается выпуск"
          title={
            <>
              Пять шагов выпуска: <span className="text-gradient">от вопроса к вердикту</span>
            </>
          }
          intro="Исследование разворачивается как медиавыпуск: опрос, эксперимент, интервью, столкновение мнений и финальный вывод. Каждый шаг выходит в VK и Telegram."
        />

        <div className="relative mt-10 sm:mt-12">
          <div
            className="timeline-line absolute bottom-4 left-[23px] top-4 w-0.5 rounded-full opacity-60 sm:left-[27px]"
            aria-hidden="true"
          />

          <ol className="space-y-4">
            {STAGES.map((stage, i) => (
              <li key={stage.n}>
                <Reveal delay={(i % 3) * 70}>
                  <div className="grid grid-cols-[48px_1fr] gap-3 sm:grid-cols-[56px_1fr] sm:gap-5">
                    <div className="flex justify-center">
                      <div
                        className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-ink-900 font-display text-sm font-bold sm:h-11 sm:w-11 ${stage.text_accent} ${stage.glow}`}
                      >
                        {stage.n}
                      </div>
                    </div>

                    <article className="card card-hover !p-4 sm:!p-6">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                        <div className="min-w-0">
                          <h3 className="font-display text-base font-bold leading-snug text-white sm:text-lg">
                            {stage.title}
                          </h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-white/65">{stage.text}</p>
                        </div>
                        <div className="flex shrink-0 flex-wrap gap-1.5 sm:max-w-[180px] sm:justify-end">
                          {stage.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white/55"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
