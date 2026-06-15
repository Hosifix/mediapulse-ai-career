import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Survey, Mic, Flask, Play, Chart, Spark, Telegram, Vk } from "./icons";
import { SOCIAL, EXTERNAL_LINK_PROPS } from "@/lib/social";

const FORMATS = [
  {
    icon: Survey,
    title: "Опрос",
    accent: "text-pulse-lime",
    ring: "ring-glow-lime",
    text: "Массовые мнения подростков: доверяют ли они ИИ выбор профессии и почему.",
  },
  {
    icon: Mic,
    title: "Интервью",
    accent: "text-pulse-blue",
    ring: "ring-glow-blue",
    text: "Разговоры с родителем и наставником — взрослый взгляд на будущее подростка.",
  },
  {
    icon: Flask,
    title: "Эксперимент",
    accent: "text-pulse-violet",
    ring: "ring-glow-violet",
    text: "Люди против нейросети на одной анкете: чьи рекомендации окажутся точнее.",
  },
  {
    icon: Play,
    title: "Видео-ролик",
    accent: "text-pulse-magenta",
    ring: "ring-glow-magenta",
    text: "Лекция об ИИ, эпизоды эксперимента и финальный фильм на 2–3 минуты.",
  },
  {
    icon: Chart,
    title: "Аналитика",
    accent: "text-pulse-lime",
    ring: "ring-glow-lime",
    text: "Большое исследование: цифры опросов, сравнение мнений и итоговые выводы.",
  },
  {
    icon: Spark,
    title: "Рубрика «Вердикт ИИ»",
    accent: "text-pulse-blue",
    ring: "ring-glow-blue",
    text: "Ежедневный вопрос нейросети о профессиях с честным комментарием редакции.",
  },
];

export default function Formats() {
  return (
    <section id="formats" className="relative py-16 sm:py-24 lg:py-28">
      <div className="container-px">
        <SectionHeading
          index="07 / Форматы"
          eyebrow="Форматы проекта"
          title={
            <>
              Одно исследование — <span className="text-gradient">много форматов</span>
            </>
          }
          intro="Мы рассказываем об эксперименте так, как привыкли читать подростки: короткие видео, живые цитаты, опросы и наглядная аналитика."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FORMATS.map((format, i) => {
            const Icon = format.icon;
            return (
              <Reveal key={format.title} delay={(i % 3) * 80} className="h-full">
                <article className={`card card-hover ${format.ring} group h-full`}>
                  <span className="index-chip">
                    <Icon className={`h-6 w-6 ${format.accent}`} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-white">{format.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/65">{format.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={100}>
          <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:flex-row sm:p-7">
            <p className="text-base font-medium text-white/85">
              Каждый формат выходит ежедневно — там, где подростки на самом деле читают.
            </p>
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <a
                href={SOCIAL.vk}
                {...EXTERNAL_LINK_PROPS}
                aria-label="Сообщество «МедиаПульс» во ВКонтакте"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-white/25 hover:bg-white/10"
              >
                <Vk className="h-5 w-5 text-pulse-blue" />
                VK
              </a>
              <a
                href={SOCIAL.telegram}
                {...EXTERNAL_LINK_PROPS}
                aria-label="Канал «МедиаПульс» в Telegram"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-white/25 hover:bg-white/10"
              >
                <Telegram className="h-5 w-5 text-pulse-blue" />
                Telegram
              </a>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm font-semibold text-white">
                <Mic className="h-5 w-5 text-pulse-magenta" />
                Подкаст
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
