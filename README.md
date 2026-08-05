# Niruttara Organics

Marketing website for **Niruttara Organics** — a catalogue-only site. Visitors browse products and place orders via WhatsApp (no checkout on the site).

## Stack

- Vite + React + TypeScript
- Sass

## Develop

```bash
cd web
npm install
npm run dev
```

## Build

```bash
cd web
npm run build
npm run preview
```

## Configure

Edit `web/src/data.ts`:

- `WHATSAPP_NUMBER` — business WhatsApp number with country code (no `+` or spaces)
- `INSTAGRAM_URL` — Instagram profile
- `products` — product catalogue copy and images

Logo lives at `web/public/logo.png`.
