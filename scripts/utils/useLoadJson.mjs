export default async function (path, defaultValue = {}) {
  try {
    // return (await import(path, {with: {type: 'json'}})).default
    return (await import(path, {assert: {type: 'json'}})).default
  } catch (e) {
    return defaultValue
  }
}
