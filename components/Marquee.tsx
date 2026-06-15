const PHRASES = [
  "Выпуск 01",
  "Опрос открыт",
  "Редакционное исследование",
  "ИИ советует — человек выбирает",
  "Голоса участников",
  "15–23 июня",
  "VK · Telegram · Подкаст",
  "Интервью · Опрос · Эксперимент",
  "Вердикт редакции",
];

function Track({ reverse = false }: { reverse?: boolean }) {
  const items = [...PHRASES, ...PHRASES];
  return (
    <div className={`marquee ${reverse ? "marquee--reverse" : ""}`}>
      <div className="marquee__track" aria-hidden={reverse}>
        {items.map((phrase, i) => (
          <span key={`${phrase}-${i}`} className="flex items-center">
            <span className="px-5 text-sm font-semibold uppercase tracking-[0.12em] text-white/75 sm:text-base">
              {phrase}
            </span>
            <span className="text-pulse-lime">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section aria-label="Лента выпуска" className="relative">
      <div className="border-y border-white/10 bg-white/[0.02]">
        <div className="flex items-stretch">
          <div className="ticker-label">
            <span className="ticker-live" />
            <span className="hidden xs:inline">Лента выпуска</span>
            <span className="xs:hidden">Эфир</span>
          </div>
          <div className="flex min-w-0 flex-1 items-center py-3">
            <Track />
          </div>
        </div>
        <div className="border-t border-white/8 py-2.5 opacity-60">
          <Track reverse />
        </div>
      </div>
    </section>
  );
}
