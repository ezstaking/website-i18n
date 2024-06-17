import {default as useLoadJson} from "./useLoadJson.mjs";
import {default as useGetLocales} from "./useGetLocales.mjs";

export default async function (locale) {
  const locales = (await useGetLocales()).map(locale => (locale.code));

  if (!locales.includes(locale)) {
    throw Error("Wrong locale: " + locale)
  }

  return {
    layouts: await useLoadJson(`./../../languages/${locale}/layouts/layout.json`),
    components: {
      protocol_latest: await useLoadJson(`./../../languages/${locale}/components/protocol-latest.json`),
      need_help_delegating: await useLoadJson(`./../../languages/${locale}/components/need-help-delegating.json`),
    },
    pages: {
      blog: await useLoadJson(`./../../languages/${locale}/pages/blog.json`),
      guides: await useLoadJson(`./../../languages/${locale}/pages/guides.json`),
      news: await useLoadJson(`./../../languages/${locale}/pages/news.json`),
      protocols: await useLoadJson(`./../../languages/${locale}/pages/protocols.json`),
      protocol: await useLoadJson(`./../../languages/${locale}/pages/protocol.json`),
      about: await useLoadJson(`./../../languages/${locale}/pages/about.json`),
      brand_kit: await useLoadJson(`./../../languages/${locale}/pages/brand-kit.json`),
      contact: await useLoadJson(`./../../languages/${locale}/pages/contact.json`),
      faq: await useLoadJson(`./../../languages/${locale}/pages/faq.json`),
      home: await useLoadJson(`./../../languages/${locale}/pages/home.json`),
      privacy: await useLoadJson(`./../../languages/${locale}/pages/privacy.json`),
      rewards: await useLoadJson(`./../../languages/${locale}/pages/rewards.json`),
      tools: await useLoadJson(`./../../languages/${locale}/pages/tools.json`),
      tos: await useLoadJson(`./../../languages/${locale}/pages/tos.json`),
      chain_services: await useLoadJson(`./../../languages/${locale}/pages/chain-services.json`)
    }
  }
}
