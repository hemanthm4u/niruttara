/** Business WhatsApp: country code + number, no + or spaces. */
export const WHATSAPP_NUMBER = '919980005314'

export const INSTAGRAM_URL = 'https://www.instagram.com/niruttaraorganics/'
export const EMAIL = 'niruttaraorganics@gmail.com'
export const LOCATION = 'Near Malavalli, Karnataka'

export const whatsappOrderLink = (productName?: string) => {
  const base =
    'Hello Niruttara Organics! I would like to place an order'
  const message = productName
    ? `${base} for: ${productName}. Please share availability and pricing.`
    : `${base}. Please share your product list, availability, and pricing.`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const offerings = [
  {
    id: 'techniques',
    name: 'Organic farming techniques',
    tagline: 'Chemical-free by design.',
    description:
      'From soil prep to harvest, we grow with methods that protect the land and keep produce truly fresh — no synthetic chemicals, no shortcuts.',
    image:
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Rows of healthy green crops on an organic farm',
  },
  {
    id: 'compost',
    name: 'Composting & natural fertilizers',
    tagline: 'Feeding the soil first.',
    description:
      'We build fertility with compost and natural inputs so the land stays alive — healthier soil, stronger plants, cleaner food.',
    image:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Hands working with rich compost and soil',
  },
  {
    id: 'rotation',
    name: 'Crop rotation & eco-friendly practices',
    tagline: 'Farming in rhythm with nature.',
    description:
      'Rotating crops and choosing eco-friendly practices keep pests in balance and the farm resilient season after season.',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Open farmland under soft morning light',
  },
  {
    id: 'fresh',
    name: 'Farm-to-table freshness',
    tagline: 'From our fields to your kitchen.',
    description:
      'What leaves our farm is fresh, chemical-free produce — grown near Malavalli, Karnataka, and shared with care.',
    image:
      'https://images.unsplash.com/photo-1488459716781-31db5254d4d3?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Fresh harvested vegetables and produce',
  },
]

export const practices = [
  {
    title: 'Organic techniques',
    text: 'Everyday farming choices that keep produce chemical-free and the land healthier for the long run.',
  },
  {
    title: 'Compost & natural fertility',
    text: 'We rely on composting and natural fertilizers instead of synthetic inputs.',
  },
  {
    title: 'Crop rotation',
    text: 'Eco-friendly rotation and field practices that protect soil life and biodiversity.',
  },
  {
    title: 'Farm-to-table',
    text: 'Fresh harvests from our farm near Malavalli — a journey of passion and sustainability.',
  },
]
