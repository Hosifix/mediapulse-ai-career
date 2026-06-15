import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Survey, Mic, Flask, Chart } from "./icons";

const STEPS = [
  {
    n: "01",
    icon: Survey,
    title: "Опросы",
    accent: "text-pulse-lime",
    ring: "ring-glow-lime",
    text: "Спрашиваем 50–100 подростков: доверили бы они ИИ выбор профессии? Собираем мнения, сомнения и неожиданные ответы.",
  },
  {
    n: "02",
    icon: Mic,
    title: "Интервью",
    accent: "text-pulse-blue",
    ring: "ring-glow-blue",
    text: "Записываем разговоры с родителем и наставником — взрослый взгляд на то, как подросток выбирает будущее.",
  },
  {
    n: "03",
    icon: Flask,
    title: "Эксперименты",
    accent: "text-pulse-violet",
    ring: "ring-glow-violet",
    text: "Передаём одну анкету четырём советчикам, сталкиваем людей и нейросеть, проверяем, кто угадывает точнее.",
  },
  {
    n: "04",
    icon: Chart,
    title: "Аналитика",
    accent: "text-pulse-magenta",
    ring: "ring-glow-magenta",
    text: "Сравниваем рекомендации, ищем совпадения и расхождения и формулируем выводы человеческим языком.",
  },
];

export default function Method() {
  return (
    <section id="method" className="relative py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          index="02 / Метод"
          eyebrow="Метод исследования"
          title={
            <>
              Как мы это <span className="text-gradient">проверяем</span>
            </>
          }
          intro="В основе проекта — собственные данные редакции: то, что мы собрали сами в опросах, интервью и экспериментах. Сначала факты, потом выводы."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.n} delay={i * 80} className="h-full">
                <article className={`card card-hover ${step.ring} group h-full`}>
                  <div className="flex items-center justify-between">
                    <span className="index-chip">
                      <Icon className={`h-6 w-6 ${step.accent}`} />
                    </span>
                    <span className="font-display text-sm font-bold text-white/25 transition-colors group-hover:text-white/50">
                      {step.n}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/65">{step.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <div className="mt-6 grid gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:grid-cols-3 sm:p-7">
            <Principle title="Сначала данные" text="Мы не пересказываем чужие статьи, а собираем собственные цифры и истории." />
            <Principle title="Сравнение, а не вывод за вас" text="Показываем разные взгляды рядом — читатель решает сам." />
            <Principle title="Прозрачный эксперимент" text="Одинаковые условия для каждого советчика, честная фиксация ответов." />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Principle({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex gap-3">
      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-pulse-lime to-pulse-blue" />
      <div>
        <h4 className="text-sm font-semibold text-white">{title}</h4>
        <p className="mt-1 text-sm leading-relaxed text-white/60">{text}</p>
      </div>
    </div>
  );
}
