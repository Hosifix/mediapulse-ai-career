import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Spark } from "./icons";

const QUESTIONS = [
  "Какие профессии исчезнут?",
  "Какие профессии появятся?",
  "Может ли ИИ заменить журналиста?",
  "Какие навыки нужны в будущем?",
  "Как подростку не потеряться среди профессий?",
  "Что ИИ советует, а что должен решить человек?",
];

export default function AiVerdict() {
  return (
    <section id="ai-verdict" className="relative py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          index="05 / Рубрика"
          eyebrow="Вердикт ИИ"
          title={
            <>
              Один вопрос нейросети — <span className="text-gradient">и честный комментарий редакции</span>
            </>
          }
          intro="Ежедневная рубрика, где редакция задаёт нейросети один вопрос о будущем профессий, а потом разбирает ответ человеческим языком: где он полезен, а где спорный."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {QUESTIONS.map((question, i) => (
            <Reveal key={question} delay={(i % 3) * 80} className="h-full">
              <article className="card card-hover ring-glow-violet group flex h-full flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-pulse-violet">
                      <Spark className="h-3.5 w-3.5" />
                      Вопрос дня
                    </span>
                    <span className="font-display text-sm font-bold text-white/20 transition-colors group-hover:text-white/45">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold leading-snug text-white">{question}</h3>
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm text-white/55">
                  <span className="h-px flex-1 bg-white/10" />
                  <span className="shrink-0">Редакция комментирует</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-6 flex items-start gap-4 rounded-3xl border border-pulse-magenta/30 bg-pulse-magenta/[0.08] p-6 sm:items-center sm:p-7">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-pulse-magenta/15 font-display text-xl font-bold text-pulse-magenta">
              !
            </span>
            <p className="text-base font-medium text-white/90 sm:text-lg">
              Важно: это не «истина от ИИ», а повод для обсуждения.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
