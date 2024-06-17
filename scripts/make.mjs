import { default as useGetLocales } from "./utils/useGetLocales.mjs";
import { default as useGetMessages } from "./utils/useGetMessages.mjs";
import { default as writeFile } from "./utils/useWriteFile.mjs";

const locales = await useGetLocales();

for (let i = 0; i < locales.length; i++) {
  writeFile(
    JSON.stringify(await useGetMessages(locales[i].code)),
    `./public/${locales[i].code}.json`
  );
}

writeFile(
  JSON.stringify(locales),
  `./public/list.json`
);
