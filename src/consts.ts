import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "女孩们的GODOT时间",
  DESCRIPTION: "Welcome to Astro Sphere, a portfolio and blog for designers and developers.",
  AUTHOR: "GGT游戏学园",
}

// Activities Page
export const ACTIVITIES: Page = {
  TITLE: "Activities",
  DESCRIPTION: "组织的游戏开发实践活动。",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "撰写的各种文章。",
}

// Practices Page
export const PRACTICES: Page = {
  TITLE: "Practices",
  DESCRIPTION: "游戏实践活动的成果。",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search 搜索",
  DESCRIPTION: "按照关键字搜索文章和实践。",
}

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Activities",
    HREF: "/activities",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
  {
    TEXT: "Practices",
    HREF: "/practices",
  },
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Discord 伺服器",
    ICON: "discord",
    TEXT: "女孩们的GODOT时间",
    HREF: "https://discord.gg/juHnGWgQNW",
  },
  {
    NAME: "微信群",
    ICON: "wechat",
    TEXT: "有二维码的飞书文档",
    HREF: "https://r1x3axx41x.feishu.cn/docx/JOejdjgsRokJwTxjiHhcwrWknOf",
  }
]
