import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Item = {
  title: string;
  content: string;
  format: string;
  goal: string;
};

type Day = {
  date: string;
  title: string;
  items: Item[];
};

const DAYS: Day[] = [
  {
    date: "15.06",
    title: "Старт исследования",
    items: [
      { title: "Старт исследования", content: "Анонс проекта и главного вопроса", format: "Пост", goal: "Запуск исследования" },
      { title: "Откуда появилась идея проекта", content: "Ролик с лекции об ИИ в ШЮЖ", format: "Видео", goal: "Подводка к теме" },
      { title: "Первичный опрос", content: "Доверили бы вы ИИ выбор профессии?", format: "Опрос", goal: "Сбор первых данных" },
    ],
  },
  {
    date: "16.06",
    title: "Эксперимент",
    items: [
      { title: "Эксперимент", content: "Угадай профессию по описанию человека", format: "Пост", goal: "Вовлечение аудитории" },
      { title: "Ответ ИИ", content: "Анализ того же кейса нейросетью", format: "Карточки", goal: "Демонстрация работы ИИ" },
      { title: "Сравнение результатов", content: "Люди против ИИ", format: "Аналитический пост", goal: "Первый вывод" },
    ],
  },
  {
    date: "17.06",
    title: "Интервью с родителем",
    items: [
      { title: "Интервью с родителем", content: "Анонс интервью", format: "Пост", goal: "Подготовка аудитории" },
      { title: "Родительский взгляд", content: "Лучшие цитаты интервью", format: "Карточки", goal: "Выделение важных мыслей" },
      { title: "Полная версия", content: "Подкаст", format: "Аудио", goal: "Получение мнения родителей" },
    ],
  },
  {
    date: "18.06",
    title: "ИИ VS Родитель",
    items: [
      { title: "ИИ VS Родитель", content: "Публикация анкеты участника редакции", format: "Пост", goal: "Основа эксперимента" },
      { title: "Версия ИИ", content: "Какие профессии предложил ИИ", format: "Карточки", goal: "Проверка возможностей ИИ" },
      { title: "Версия родителя", content: "Сравнение рекомендаций", format: "Пост", goal: "Анализ различий" },
    ],
  },
  {
    date: "19.06",
    title: "Большой опрос",
    items: [
      { title: "Большой опрос", content: "Запуск формы исследования", format: "Пост", goal: "Массовый сбор данных" },
      { title: "Первые результаты", content: "Инфографика", format: "Инфографика", goal: "Аналитика" },
      { title: "Неожиданные ответы", content: "Подборка мнений участников", format: "Пост", goal: "Повышение интереса" },
    ],
  },
  {
    date: "20.06",
    title: "Интервью с наставником",
    items: [
      { title: "Интервью с наставником", content: "Анонс", format: "Пост", goal: "Представление эксперта" },
      { title: "Мнение наставника", content: "Лучшие цитаты", format: "Карточки", goal: "Экспертный взгляд" },
      { title: "Полная версия", content: "Подкаст", format: "Аудио", goal: "Углубление исследования" },
    ],
  },
  {
    date: "21.06",
    title: "Эксперимент редакции",
    items: [
      { title: "Эксперимент редакции", content: "ИИ выбирает профессии участникам", format: "Пост", goal: "Персонализация темы" },
      { title: "Реакция редакции", content: "Согласны ли участники?", format: "Видео", goal: "Повышение вовлечения" },
      { title: "Голосование", content: "Кому ИИ попал точнее всего?", format: "Опрос", goal: "Интерактив" },
    ],
  },
  {
    date: "22.06",
    title: "Аналитика проекта",
    items: [
      { title: "Аналитика проекта", content: "Итоги опросов подростков", format: "Инфографика", goal: "Подготовка финала" },
      { title: "Сравнение мнений", content: "Подростки, родители, наставник", format: "Аналитический пост", goal: "Систематизация данных" },
      { title: "Главные выводы", content: "5 выводов исследования", format: "Карточки", goal: "Подготовка итогов" },
    ],
  },
  {
    date: "23.06",
    title: "Финал",
    items: [
      { title: "Финальное исследование", content: "Большой лонгрид", format: "Статья", goal: "Главный материал проекта" },
      { title: "Финальный ролик", content: "Видео 2–3 минуты", format: "Видео", goal: "Защита проекта" },
      { title: "Вердикт редакции", content: "Ответ на главный вопрос проекта", format: "Финальный пост", goal: "Завершение проекта" },
    ],
  },
];

const FORMAT_STYLES: Record<string, string> = {
  "Пост": "border-pulse-blue/40 bg-pulse-blue/10 text-pulse-blue",
  "Видео": "border-pulse-magenta/40 bg-pulse-magenta/10 text-pulse-magenta",
  "Опрос": "border-pulse-lime/40 bg-pulse-lime/10 text-pulse-lime",
  "Карточки": "border-pulse-violet/40 bg-pulse-violet/10 text-pulse-violet",
  "Аналитический пост": "border-pulse-blue/40 bg-pulse-blue/10 text-pulse-blue",
  "Аудио": "border-pulse-magenta/40 bg-pulse-magenta/10 text-pulse-magenta",
  "Инфографика": "border-pulse-lime/40 bg-pulse-lime/10 text-pulse-lime",
  "Статья": "border-pulse-violet/40 bg-pulse-violet/10 text-pulse-violet",
  "Финальный пост": "border-pulse-lime/40 bg-pulse-lime/10 text-pulse-lime",
};

function formatClass(format: string) {
  return FORMAT_STYLES[format] ?? "border-white/20 bg-white/5 text-white/70";
}

const ACCENTS = [
  { text: "text-pulse-lime", glow: "shadow-[0_0_20px_rgba(196,247,74,0.55)]", ring: "ring-glow-lime" },
  { text: "text-pulse-blue", glow: "shadow-[0_0_20px_rgba(91,157,255,0.55)]", ring: "ring-glow-blue" },
  { text: "text-pulse-violet", glow: "shadow-[0_0_20px_rgba(169,139,255,0.55)]", ring: "ring-glow-violet" },
  { text: "text-pulse-magenta", glow: "shadow-[0_0_20px_rgba(242,95,208,0.55)]", ring: "ring-glow-magenta" },
];

export default function ContentPlan() {
  return (
    <section id="content-plan" className="relative py-16 sm:py-24 lg:py-28">
      <div className="container-px">
        <SectionHeading
          index="04 / План"
          eyebrow="Контент-план выпуска"
          title={
            <>
              9 дней эфира: <span className="text-gradient">от вопроса к вердикту</span>
            </>
          }
          intro="Утверждённый план публикаций в VK и Telegram с 15 по 23 июня. Каждый день — три материала: пост, видео, карточки, опрос, подкаст или аналитика."
        />

        <div className="relative mt-10 sm:mt-12">
          <div className="timeline-line absolute bottom-3 left-[23px] top-3 w-0.5 rounded-full opacity-60 sm:left-[27px]" aria-hidden="true" />

          <ol className="space-y-4 sm:space-y-5">
            {DAYS.map((day, i) => {
              const accent = ACCENTS[i % ACCENTS.length];
              return (
                <li key={day.date}>
                  <Reveal delay={(i % 3) * 70}>
                    <div className="grid grid-cols-[48px_1fr] gap-3 sm:grid-cols-[56px_1fr] sm:gap-5">
                      <div className="flex justify-center">
                        <div
                          className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-ink-900 font-display text-sm font-bold sm:h-11 sm:w-11 ${accent.text} ${accent.glow}`}
                        >
                          {i + 1}
                        </div>
                      </div>

                      <article className={`card card-hover ${accent.ring} !p-4 sm:!p-6`}>
                        <header className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                          <span className={`font-display text-xl font-extrabold ${accent.text} sm:text-2xl`}>
                            {day.date}
                          </span>
                          <span className="h-4 w-px bg-white/15" />
                          <h3 className="font-display text-base font-bold text-white sm:text-lg">{day.title}</h3>
                          <span className="ml-auto text-[10px] font-semibold uppercase tracking-wider text-white/35 sm:text-[11px]">
                            День {i + 1}/9
                          </span>
                        </header>

                        <ul className="mt-4 grid gap-2.5 sm:grid-cols-3">
                          {day.items.map((item, idx) => (
                            <li
                              key={item.title}
                              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-3.5"
                            >
                              <div className="flex items-center justify-between gap-2">
                                <span className={`fmt ${formatClass(item.format)}`}>{item.format}</span>
                                <span className="font-display text-[11px] font-bold text-white/25">
                                  {String(idx + 1).padStart(2, "0")}
                                </span>
                              </div>
                              <h4 className="mt-2.5 text-sm font-bold leading-snug text-white">{item.title}</h4>
                              <p className="mt-1 text-[13px] leading-snug text-white/65">{item.content}</p>
                              <p className="mt-2.5 flex items-start gap-1.5 text-[11px] leading-snug text-white/45">
                                <span className="font-semibold uppercase tracking-wider text-pulse-lime/70">
                                  Цель
                                </span>
                                {item.goal}
                              </p>
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
