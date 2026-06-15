"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "./icons";

const NAV_LINKS = [
  { label: "Вопрос", href: "#main-question" },
  { label: "Метод", href: "#method" },
  { label: "Советчики", href: "#advisors" },
  { label: "План", href: "#content-plan" },
  { label: "Вердикт", href: "#ai-verdict" },
  { label: "Форматы", href: "#formats" },
  { label: "KPI", href: "#kpi" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Masthead strip — editorial issue line */}
      <div
        className={`overflow-hidden border-b border-white/10 bg-ink-950/70 backdrop-blur-md transition-all duration-300 ${
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        }`}
        aria-hidden={scrolled}
      >
        <div className="container-px flex h-9 items-center justify-between text-[10px] font-semibold uppercase tracking-[0.14em] text-white/55 xs:text-[11px]">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 text-pulse-lime">
              <span className="h-1.5 w-1.5 rounded-full bg-pulse-lime tick-pulse" />
              Выпуск 01
            </span>
            <span className="hidden h-3 w-px bg-white/15 sm:block" />
            <span className="hidden sm:inline">Редакционное исследование</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span>15–23 июня</span>
            <span className="hidden h-3 w-px bg-white/15 sm:block" />
            <span className="hidden text-white/45 sm:inline">VK · Telegram · Подкаст</span>
          </div>
        </div>
      </div>

      {/* Nav bar */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-ink-950/75 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container-px flex h-14 items-center justify-between gap-4 sm:h-16">
          <a href="#hero" className="group flex items-center gap-2.5" aria-label="МедиаПульс — на главную">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-pulse-lime to-pulse-blue">
              <span className="h-2 w-2 rounded-full bg-ink-950 tick-pulse" />
            </span>
            <span className="font-display text-base font-bold tracking-tight text-white sm:text-lg">
              Медиа<span className="text-pulse-lime">Пульс</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a href="#content-plan" className="btn btn-primary px-5 py-2.5">
              Смотреть план
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 lg:hidden"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded bg-white transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-5 rounded bg-white transition-all duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded bg-white transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-ink-950/80 backdrop-blur-md transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <nav
          className={`absolute inset-x-3 top-[4.5rem] origin-top rounded-3xl border border-white/10 bg-ink-900/95 p-4 shadow-2xl transition-all duration-300 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="mb-2 flex items-center gap-2 px-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-pulse-lime">
            <span className="h-1.5 w-1.5 rounded-full bg-pulse-lime" />
            Выпуск 01 · 15–23 июня
          </div>
          <div className="grid gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-base text-white/80 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
                <ArrowRight className="h-4 w-4 text-white/30" />
              </a>
            ))}
          </div>
          <a
            href="#content-plan"
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-3 w-full"
          >
            Смотреть план
            <ArrowRight className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
