/**
 * Официальные каналы проекта «МедиаПульс».
 * Единый источник правды для всех кликабельных ссылок на сообщества.
 */
export const SOCIAL = {
  vk: "https://vk.com/club239521376",
  telegram: "https://t.me/mediapulsNC",
} as const;

/** Атрибуты для безопасного открытия внешних ссылок в новой вкладке. */
export const EXTERNAL_LINK_PROPS = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
