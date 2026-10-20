export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Loop Dungeon Incremental",
  shortName: "Loop Dungeon",
  logoText: "L",
  tagline: "Builds, Upgrades & Dungeon Progression",
  description: "A fan-made Loop Dungeon Incremental wiki covering hero builds, upgrades, prestige, dungeon loops, and progression guides.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://loopdungeonincremental.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://loopdungeonincremental.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/4621970/Loop_Dungeon__Incremental/",
  heroVideoId: "VXvtoMk52OA", // Official Loop Dungeon - Incremental trailer by Playsect
  social: {
    discord: "https://discord.gg/KWeEwYytaD",
    youtube: "https://www.youtube.com/@Playsect_indiegame",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
