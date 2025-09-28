// import type { APIRoute } from 'astro';

// export const prerender = false;

// const MB_BASE = 'https://api.mailbluster.com/api';

// function isValidEmail(email: string) {
//   if (typeof email !== 'string') return false;
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
// }

// export const POST: APIRoute = async ({ request }) => {
//   try {
//     console.log('hello');
//     const contentType = request.headers.get('content-type') || '';
//     const isForm =
//       contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data');
//     const body = isForm ? await request.formData() : await request.json().catch(() => ({}));

//     const email = isForm ? body.get('email') : body?.email;

//     if (!isValidEmail(email)) {
//       return new Response(JSON.stringify({ ok: false, error: 'Invalid email.' }), { status: 400 });
//     }

//     const honeypot = isForm ? body.get('website') : body?.website;
//     if (honeypot) {
//       return new Response(JSON.stringify({ ok: true }), { status: 200 });
//     }

//     const resp = await fetch(`${MB_BASE}/leads`, {
//       method: 'POST',
//       headers: {
//         Authorization: '9889a807-bd61-4234-95fe-1936e33d961a',
//         'Content-Type': 'application/json',
//         'Cache-Control': 'no-cache',
//       },
//       body: JSON.stringify({
//         email: (email as string).trim(),
//         subscribed: true,
//       }),
//     });

//     const data = await resp.json();

//     if (!resp.ok) {
//       const message = typeof data?.message === 'string' ? data.message : 'Subscription failed';
//       return new Response(JSON.stringify({ ok: false, error: message, details: data }), { status: resp.status });
//     }

//     return new Response(JSON.stringify({ ok: true, lead: data }), { status: 200 });
//   } catch (err: any) {
//     return new Response(JSON.stringify({ ok: false, error: err?.message || 'Server error' }), { status: 500 });
//   }
// };

// export const OPTIONS: APIRoute = async () =>
//   new Response(null, {
//     status: 204,
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Methods': 'POST, OPTIONS',
//       'Access-Control-Allow-Headers': 'Content-Type',
//     },
//   });
