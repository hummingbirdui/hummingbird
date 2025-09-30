let cache: any = null;
let lastFetch = 0;

export async function getRepoData() {
  const now = Date.now();
  if (!cache || now - lastFetch > 60 * 60 * 1000) {
    const res = await fetch("https://api.github.com/repos/hummingbirdui/hummingbird");
    cache = await res.json();
    lastFetch = now;
  }
  return cache;
}
