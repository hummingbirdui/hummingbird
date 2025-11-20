let etag: string | null = null;
let cache: any = null;

export async function getRepoData() {
  const headers: any = {};

  if (etag) headers['If-None-Match'] = etag;

  const res = await fetch('https://api.github.com/repos/hummingbirdui/hummingbird', {
    headers,
  });

  if (res.status === 304) {
    return cache;
  }

  etag = res.headers.get('ETag');
  cache = await res.json();
  return cache;
}
