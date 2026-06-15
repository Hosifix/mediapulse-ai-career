import { Shield, Telegram, Vk } from "./icons";
import { SOCIAL, EXTERNAL_LINK_PROPS } from "@/lib/social";

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
    <footer className="relative border-t border-white/10 pt-14 pb-9 sm:pt-16 sm:pb-10">
      <div className="container-px">
        {/* Privacy / data plashka */}
        <div className="mb-12 flex flex-col gap-3.5 rounded-3xl border border-white/10 bg-white/[0.02] p-5 sm:flex-row sm:items-start sm:gap-4 sm:p-6">
          <div className="flex items-center gap-2.5 sm:block">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-pulse-lime/30 bg-pulse-lime/10 text-pulse-lime">
              <Shield className="h-5 w-5" />
            </span>
            <span className="text-sm font-semibold text-white sm:hidden">Данные и приватность</span>
          </div>
          <div>
            <h3 className="hidden text-sm font-semibold text-white sm:block">Данные и приватность</h3>
            <p className="text-[13px] leading-relaxed text-white/55 sm:mt-1.5 sm:text-sm">
              Сайт не содержит форм для ввода ФИО, телефона, e-mail, школы, класса или других данных,
              позволяющих напрямую идентифицировать пользователя. Опросы проекта проводятся в
              обезличенном формате. Для оценки посещаемости и качества работы сайта могут
              использоваться обезличенные технические метрики Vercel Analytics и Speed Insights.
            </p>
          </div>
        </div>

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
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white/65">
              <span className="h-1.5 w-1.5 rounded-full bg-pulse-lime" />
              Материал готовят юные журналисты
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={SOCIAL.vk}
                {...EXTERNAL_LINK_PROPS}
                aria-label="Сообщество «МедиаПульс» во ВКонтакте"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-white/25"
              >
                <Vk className="h-5 w-5 text-pulse-blue" />
                VK
              </a>
              <a
                href={SOCIAL.telegram}
                {...EXTERNAL_LINK_PROPS}
                aria-label="Канал «МедиаПульс» в Telegram"
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
              <li>Редакционное исследование</li>
              <li>ИИ и выбор профессии</li>
              <li>Подростки выбирают будущее</li>
            </ul>
          </div>
        </div>

        <div className="divider-glow my-8 sm:my-9" />

        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-[13px] text-white/45 sm:text-sm">© 2026 МедиаПульс · Школа юного журналиста</p>
          <p className="max-w-md text-[13px] text-white/45 sm:text-sm">
            ИИ в проекте — это помощник и повод для обсуждения, а не источник готовых решений.
          </p>
        </div>
      </div>
    </footer>
  );
}
