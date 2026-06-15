import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
};

export default function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className={`flex items-center gap-4 ${centered ? "justify-center" : ""}`}>
        <span className="eyebrow">{eyebrow}</span>
        <span className="font-display text-xs font-semibold text-white/35">{index}</span>
      </div>
      <h2 className="section-title mt-5">{title}</h2>
      {intro ? <p className="lead mt-5">{intro}</p> : null}
    </Reveal>
  );
}
