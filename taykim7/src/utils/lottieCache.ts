const lottieCache = new Map<string, any>();

export async function loadLottie(src: string) {
  if (lottieCache.has(src)) {
    return lottieCache.get(src);
  }
  const json = await import(`../assets/lotties/${src}`);
  lottieCache.set(src, json.default);
  return json.default;
}