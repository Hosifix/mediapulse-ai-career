import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export function ArrowRight(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function Spark(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="M12 8a4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0-4-4 4 4 0 0 0 4-4Z" />
    </svg>
  );
}

export function Brain(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M9.5 4.5a2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 0-1.5 4.3A2.5 2.5 0 0 0 6.5 16a2.5 2.5 0 0 0 3 2.5V4.5Z" />
      <path d="M14.5 4.5A2.5 2.5 0 0 1 17 7a2.5 2.5 0 0 1 1.5 4.3A2.5 2.5 0 0 1 17.5 16a2.5 2.5 0 0 1-3 2.5V4.5Z" />
      <path d="M12 4v15" />
    </svg>
  );
}

export function HeartHand(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 13h3l3 4 6-2 4-3" />
      <path d="M9.5 8.5a2 2 0 0 1 2.5-1 2 2 0 0 1 2.5 1c.8 1.2-.5 3-2.5 4-2-1-3.3-2.8-2.5-4Z" />
    </svg>
  );
}

export function Compass(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </svg>
  );
}

export function GradCap(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m12 4 9 4-9 4-9-4 9-4Z" />
      <path d="M6 9.5V14c0 1.4 2.7 3 6 3s6-1.6 6-3V9.5" />
      <path d="M21 8v5" />
    </svg>
  );
}

export function Survey(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 8h6M9 12h6M9 16h3" />
    </svg>
  );
}

export function Mic(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M6 11a6 6 0 0 0 12 0M12 17v4" />
    </svg>
  );
}

export function Flask(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M9 3h6M10 3v6l-4.5 8a2 2 0 0 0 1.8 3h9.4a2 2 0 0 0 1.8-3L14 9V3" />
      <path d="M7.5 15h9" />
    </svg>
  );
}

export function Play(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Chart(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 4v16h16" />
      <path d="M8 15l3-4 3 2 4-6" />
    </svg>
  );
}

export function Signal(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 12h2l2-6 3 12 2.5-8L18 12h1" />
    </svg>
  );
}

export function Quote(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M7 7H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v-2a4 4 0 0 0-2-3.4M17 7h-2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v-2a4 4 0 0 0-2-3.4" />
    </svg>
  );
}

export function Telegram(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m21 4-2.5 15.5a1 1 0 0 1-1.5.7L11 16l-3 2.5V14l9-8-11 6-4-1.3a1 1 0 0 1 0-1.9L21 4Z" />
    </svg>
  );
}

export function Vk(props: IconProps) {
  return (
    <svg {...base(props)} viewBox="0 0 24 24">
      <path d="M4 7c.4 4.6 3 8.5 7.2 8.5h.6V12c0-1 .3-1.3.7-1.3.5 0 1 .4 1.8 1.5.9 1.3 1.2 2.3 2.5 2.3H21c-.7-1.8-2.2-2.9-2.9-3.5-.4-.4-.5-.6 0-1.2.6-.8 2-2.6 2.3-3.8h-2.6c-.5 0-.7.2-1 .9-.5 1.3-1.5 2.9-2 2.9-.3 0-.4-.3-.4-.9V7h-3.2c-.4 0-.6.3-.6.6 0 .6.9.7 1 2.3v1.4c0 .7-.1.8-.4.8-.7 0-2-1.7-2.8-4.2C5.5 7.2 5.3 7 4.8 7H4Z" />
    </svg>
  );
}
