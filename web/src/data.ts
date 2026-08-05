/** Update this number to your business WhatsApp (country code + number, no + or spaces). */
export const WHATSAPP_NUMBER = '918123223361'

export const INSTAGRAM_URL = 'https://www.instagram.com/niruttaraorganics/'

export const whatsappOrderLink = (productName?: string) => {
  const base =
    'Hello Niruttara Organics! I would like to place an order'
  const message = productName
    ? `${base} for: ${productName}. Please share availability and pricing.`
    : `${base}. Please share your product list, availability, and pricing.`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const products = [
  {
    id: 'ghee',
    name: 'A2 Gir Cow Ghee',
    tagline: 'Bilona-churned. Slow. Golden.',
    description:
      'Crafted from the milk of pasture-raised Gir cows, bilona-churned the traditional way so every spoonful carries warmth, aroma, and quiet nourishment.',
    image:
      'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Golden ghee in a ceramic bowl',
  },
  {
    id: 'honey',
    name: 'Wild Forest Honey',
    tagline: 'From canopy to jar.',
    description:
      'Collected from forests along the Western Ghats — unheated, unfiltered, and full of the floral character of the land itself.',
    image:
      'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Jar of raw honey with honeycomb',
  },
  {
    id: 'coffee',
    name: 'Estate Arabica',
    tagline: 'Shade-grown. Hand-picked.',
    description:
      'Single-estate coffee grown under native canopy, sun-dried and roasted in small batches for a clean cup with chocolate and spice notes.',
    image:
      'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Freshly roasted coffee beans',
  },
  {
    id: 'oils',
    name: 'Cold-Pressed Oils',
    tagline: 'Pressed once. Kept pure.',
    description:
      'Groundnut, coconut, and sesame oils extracted without heat or chemicals — oils that taste like the seed, not the factory.',
    image:
      'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Bottles of golden cold-pressed oil',
  },
]

export const practices = [
  {
    title: 'Soil first',
    text: 'We feed the land with compost and cover crops before we ask anything of it.',
  },
  {
    title: 'Small batches',
    text: 'Nothing is rushed. Harvest, churn, press, and roast happen in quantities we can stand behind.',
  },
  {
    title: 'Honest labels',
    text: 'What you read is what you get — no fillers, no shortcuts, no quiet compromises.',
  },
]
