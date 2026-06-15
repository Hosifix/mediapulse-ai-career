import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Quote } from "./icons";

const VOICES = [
  {
    text: "Сначала было страшно, что алгоритм решит за меня. Потом поняла: он просто открывает двери, а выбирать — мне.",
    author: "Участница редакции",
    role: "15 лет",
    dot: "bg-pulse-blue",
  },
  {
    text: "Я боялась, что нейросеть посоветует «модное». А она задала вопросы, на которые мы с сыном раньше не отвечали.",
    author: "Родитель",
    role: "интервью 17.06",
    dot: "bg-pulse-lime",
  },
  {
    text: "ИИ хорошо видит навыки. Но мотивацию и характер он не чувствует — это заметно только в деле.",
    author: "Наставник",
    role: "интервью 20.06",
    dot: "bg-pulse-violet",
  },
];

export default function OpinionOfDay() {
  return (
    <section id="opinion" className="relative py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          index="06 / Голоса"
          eyebrow="Мнение дня"
          title={
            <>
              Что об этом думают <span className="text-gradient">живые люди</span>
            </>
          }
          intro="Каждый день мы публикуем одно мнение участника исследования. Это голоса подростков, родителей и наставников — то, что не помещается в таблицу с данными."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="h-full">
            <figure className="card glow-lime relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] p-7 sm:p-9">
              <div className="absolute -right-6 -top-6 opacity-10">
                <Quote className="h-40 w-40 text-pulse-lime" />
              </div>
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1.5 text-xs font-semibold text-pulse-lime">
                  Мнение дня
                </span>
                <blockquote className="mt-6 font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
                  «ИИ показал мне профессии, о которых я даже не слышала. Но захотеть стать кем-то из
                  них я должна сама.»
                </blockquote>
              </div>
              <figcaption className="relative mt-8 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-pulse-lime to-pulse-blue font-display text-base font-bold text-ink-950">
                  М
                </span>
                <div>
                  <div className="text-sm font-semibold text-white">Участница редакции «МедиаПульс»</div>
                  <div className="text-sm text-white/55">16 лет · эксперимент 21.06</div>
                </div>
              </figcaption>
            </figure>
          </Reveal>

          <div className="grid gap-5">
            {VOICES.map((voice, i) => (
              <Reveal key={voice.author} delay={i * 80} className="h-full">
                <figure className="card card-hover h-full">
                  <blockquote className="text-[15px] leading-relaxed text-white/85">
                    «{voice.text}»
                  </blockquote>
                  <figcaption className="mt-4 flex items-center gap-2.5">
                    <span className={`h-2 w-2 rounded-full ${voice.dot}`} />
                    <span className="text-sm font-semibold text-white">{voice.author}</span>
                    <span className="text-sm text-white/45">· {voice.role}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
