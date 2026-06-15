import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Brain, HeartHand } from "./icons";

const AI_CAN = [
  "Подсказать направления, о которых подросток не думал",
  "Задать правильные вопросы об интересах и навыках",
  "Показать варианты профессий и смежные сферы",
  "Объяснить сильные стороны на языке фактов и примеров",
];

const HUMAN_DECIDES = [
  "Что по-настоящему интересно и захватывает",
  "Какие ценности и смыслы важны именно сейчас",
  "Личные обстоятельства, мечты и характер",
  "Итоговый выбор пути — и ответственность за него",
];

export default function MainQuestion() {
  return (
    <section id="main-question" className="relative py-16 sm:py-24 lg:py-28">
      <div className="container-px">
        <SectionHeading
          index="01 / Идея"
          eyebrow="Главный вопрос"
          title={
            <>
              ИИ не должен решать судьбу подростка.{" "}
              <span className="text-gradient">Но может ли он быть помощником?</span>
            </>
          }
          intro="«МедиаПульс» проверяет, может ли искусственный интеллект подсказать подростку направления, задать вопросы и показать варианты профессий. Это не реклама ИИ, а журналистское исследование — итоговый выбор всё равно остаётся за человеком."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Reveal className="h-full">
            <article className="card card-hover ring-glow-blue h-full">
              <div className="flex items-center gap-3">
                <span className="index-chip text-pulse-blue">
                  <Brain className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">ИИ может быть помощником</h3>
                  <p className="text-sm text-white/55">Подсказка, а не приговор</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {AI_CAN.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-white/80">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pulse-blue" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={80} className="h-full">
            <article className="card card-hover ring-glow-lime h-full">
              <div className="flex items-center gap-3">
                <span className="index-chip text-pulse-lime">
                  <HeartHand className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">Решение остаётся за человеком</h3>
                  <p className="text-sm text-white/55">Выбор — это не только данные</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {HUMAN_DECIDES.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-white/80">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pulse-lime" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mt-6 flex flex-col gap-3 rounded-3xl border border-white/10 bg-gradient-to-r from-pulse-lime/10 via-transparent to-pulse-magenta/10 p-6 sm:flex-row sm:items-center sm:gap-5 sm:p-7">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/5">
              <span className="font-display text-xl font-bold text-pulse-lime">→</span>
            </div>
            <div>
              <p className="font-display text-lg font-bold text-white sm:text-xl">
                Редакция проверяет, где помогает алгоритм, а где нужен живой опыт.
              </p>
              <p className="mt-1.5 text-sm text-white/70 sm:text-base">
                ИИ может предложить маршрут — но идти по нему должен человек.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
