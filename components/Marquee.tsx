const PHRASES = [
  "МЕДИАПУЛЬС",
  "ИИ И ПРОФЕССИИ",
  "ШКОЛА ЮНОГО ЖУРНАЛИСТА",
  "ИССЛЕДОВАНИЕ",
  "15–23 ИЮНЯ",
  "ПОДРОСТКИ ВЫБИРАЮТ БУДУЩЕЕ",
  "ОПРОСЫ · ИНТЕРВЬЮ · ЭКСПЕРИМЕНТЫ",
  "ВЫБОР ОСТАЁТСЯ ЗА ЧЕЛОВЕКОМ",
];

function Row({ reverse = false }: { reverse?: boolean }) {
  const items = [...PHRASES, ...PHRASES];
  return (
    <div className={`marquee ${reverse ? "marquee--reverse" : ""}`}>
      <div className="marquee__track" aria-hidden={reverse}>
        {items.map((phrase, i) => (
          <span key={`${phrase}-${i}`} className="flex items-center">
            <span className="px-6 font-display text-2xl font-semibold tracking-tight text-white/80 sm:text-3xl">
              {phrase}
            </span>
            <span className="text-2xl text-pulse-lime sm:text-3xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section aria-label="Ключевые темы проекта" className="relative py-8">
      <div className="border-y border-white/10 bg-white/[0.02] py-5">
        <Row />
        <div className="mt-3 opacity-70">
          <Row reverse />
        </div>
      </div>
    </section>
  );
}
