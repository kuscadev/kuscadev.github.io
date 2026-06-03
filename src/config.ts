/**
 * Zahit - Site Configuration
 * ----------------------------------------
 * Temayı kişiselleştirmek için bu dosyayı düzenleyin.
 * Edit this file to personalize your site.
 */

export const SITE_CONFIG = {
  /** Sitenin başlığı / Site title */
  title: "kuscadev",

  /** Sitenin açıklaması / Site description */
  description: "İş/Sistem Analizi, GRC, Linux hakkında yazıyorum.",

  /** Sitenin adresi / Site URL */
  url: "https://ogzk.tr",
};

export const AUTHOR = {
  /** Adınız / Your name */
  name: "Oğuzhan Kuşca",

  /** Rolünüz / Your role */
  role: {
    tr: "YBS | Linux",
    en: "MIS | Linux",
  },

  /** Kısa biyografiniz / Your short bio */
  bio: {
    tr: "Sistemleri anlamak, süreçleri iyileştirmek ve öğrendiklerimi paylaşmak için yazıyorum.",
    en: "Writing to understand systems, improve processes and share what I learn.",
  },

  /** Profil fotoğrafı yolu / Profile picture path (/src/assets klasöründen / from /src/assets folder) */
  avatar: "/profile.jpg",
};

export const SOCIALS = [
  {
    label: "Mail",
    href: "mailto:kuscadev@outlook.com",
    icon: "mdi:email",
  },
  {
    label: "GitHub",
    href: "https://github.com/kuscadev",
    icon: "mdi:github",
  },
  {
    label: "X",
    href: "https://x.com/kuscadev",
    icon: "mdi:twitter",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/oguzhankusca",
    icon: "mdi:linkedin",
  },
  {
    label: "Mastodon",
    href: "https://mastodon.social/@kuscadev",
    icon: "mdi:mastodon",
  },
  {
    label: "Medium",
    href: "https://medium.com/@kuscadev",
    icon: "mdi:medium",
  },
  {
    label: "RSS",
    href: "/rss.xml",
    icon: "mdi:rss",
  },
];
