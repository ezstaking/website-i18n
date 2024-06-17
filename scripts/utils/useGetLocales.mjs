import {default as useLoadJson} from "./useLoadJson.mjs";

export default async function () {
  return useLoadJson('./../../languages/supported.json', [])
}
