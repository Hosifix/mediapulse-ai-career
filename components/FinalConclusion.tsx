import Reveal from "./Reveal";
import { ArrowRight } from "./icons";

export default function FinalConclusion() {
  return (
    <section id="final" className="relative py-20 sm:py-28">
      <div className="container-px">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 p-8 sm:p-14">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-pulse-violet/15 via-pulse-blue/10 to-pulse-lime/15" />
            <div className="absolute -left-20 -top-20 -z-10 h-72 w-72 rounded-full bg-pulse-magenta/20 blur-3xl" />
            <div className="absolute -bottom-24 -right-16 -z-10 h-72 w-72 rounded-full bg-pulse-lime/20 blur-3xl" />

            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow justify-center">Финальный вывод</span>
              <h2 className="mt-6 font-display text-3xl font-extrabold leading-[1.07] tracking-tight text-white sm:text-5xl">
                Не выбор вместо человека, <span className="text-gradient">а повод подумать</span>
              </h2>
              <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                «МедиаПульс» исследует роль искусственного интеллекта в выборе профессии подростками.
                В основе проекта — собственные данные редакции, интервью, опросы и эксперименты. Мы
                проверяем, может ли ИИ быть полезным советчиком, но оставляем главный принцип: будущее
                подростка не должно решаться алгоритмом. ИИ может предложить маршрут, но идти по нему
                должен человек.
              </p>

              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <a href="#content-plan" className="btn btn-primary">
                  Смотреть план исследования
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#advisors" className="btn btn-ghost">
                  Вернуться к эксперименту
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
