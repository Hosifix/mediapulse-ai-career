import { Telegram, Vk } from "./icons";

const NAV = [
  { label: "Главный вопрос", href: "#main-question" },
  { label: "Метод", href: "#method" },
  { label: "Четыре советчика", href: "#advisors" },
  { label: "Контент-план", href: "#content-plan" },
  { label: "Вердикт ИИ", href: "#ai-verdict" },
  { label: "Форматы", href: "#formats" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 pt-16 pb-10">
      <div className="container-px">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#hero" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-pulse-lime to-pulse-blue">
                <span className="h-2 w-2 rounded-full bg-ink-950" />
              </span>
              <span className="font-display text-lg font-bold tracking-tight text-white">
                Медиа<span className="text-pulse-lime">Пульс</span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              Digital-media спецпроект Школы юного журналиста. Исследуем, может ли искусственный
              интеллект помочь подростку выбрать профессию — и где проходит граница личного выбора.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#hero"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-white/25"
              >
                <Vk className="h-5 w-5 text-pulse-blue" />
                VK
              </a>
              <a
                href="#hero"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-white/25"
              >
                <Telegram className="h-5 w-5 text-pulse-blue" />
                Telegram
              </a>
            </div>
          </div>

          <nav>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Разделы</h3>
            <ul className="mt-5 space-y-3">
              {NAV.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/65 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">О проекте</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/65">
              <li>Школа юного журналиста</li>
              <li>Исследование · 15–23 июня</li>
              <li>ИИ и выбор профессии</li>
              <li>Подростки выбирают будущее</li>
            </ul>
          </div>
        </div>

        <div className="divider-glow my-9" />

        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-sm text-white/45">© 2026 МедиаПульс · Школа юного журналиста</p>
          <p className="max-w-md text-sm text-white/45">
            ИИ в проекте — это помощник и повод для обсуждения, а не источник готовых решений.
          </p>
        </div>
      </div>
    </footer>
  );
}
