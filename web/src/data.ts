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

export const products = [
  {
    id: 'dairy',
    name: 'A2 Dairy Products',
    description:
      'Fresh A2 Milk, Paneer, Butter, Ghee and Buttermilk prepared from our naturally raised Gir cows using traditional methods for exceptional taste and nutrition.',
    cta: 'Explore Dairy',
    image: '/products/a2-dairy.jpg',
    imageAlt: 'Fresh A2 dairy products from Gir cows',
  },
  {
    id: 'vegetables',
    name: 'Organic Vegetables',
    description:
      'Naturally grown vegetables cultivated without harmful chemicals and harvested fresh to preserve their flavour and nutrition.',
    cta: 'Explore Vegetables',
    image: '/products/vegetables.jpg',
    imageAlt: 'Fresh colorful organic vegetables',
  },
  {
    id: 'fruits',
    name: 'Seasonal Fruits',
    description:
      'Seasonal fruits ripened naturally on the farm for authentic taste and wholesome goodness.',
    cta: 'Explore Fruits',
    image: '/products/fruits.jpg',
    imageAlt: 'Premium fresh seasonal fruits',
  },
  {
    id: 'honey',
    name: 'Natural Honey',
    description:
      'Pure, raw and unprocessed honey harvested with care while preserving its natural flavour and nutrients.',
    cta: 'Explore Honey',
    image: '/products/honey.jpg',
    imageAlt: 'Premium glass jar of natural honey',
  },
  {
    id: 'vermicompost',
    name: 'Organic Vermicompost',
    description:
      'Organic vermicompost that naturally improves soil fertility and promotes healthier plant growth.',
    cta: 'Explore Vermicompost',
    image: '/products/vermicompost.jpg',
    imageAlt: 'Rich dark vermicompost with healthy plants',
  },
]

export const whyChoose = [
  {
    id: 'grown',
    title: 'Naturally Grown',
    text: 'Produce cultivated with care, without harmful chemicals.',
    icon: 'leaf',
  },
  {
    id: 'dairy',
    title: 'Gir Cow A2 Dairy',
    text: 'Premium A2 milk products from stress-free Gir cows.',
    icon: 'cow',
  },
  {
    id: 'pure',
    title: 'Pure & Unprocessed',
    text: 'Honey and harvests kept close to their natural state.',
    icon: 'honey',
  },
  {
    id: 'sustainable',
    title: 'Sustainable Farming',
    text: 'Practices that protect soil, animals, and seasons.',
    icon: 'cycle',
  },
  {
    id: 'fresh',
    title: 'Farm Fresh',
    text: 'From our fields near Malavalli to your family table.',
    icon: 'tractor',
  },
  {
    id: 'trust',
    title: 'Quality You Can Trust',
    text: 'Crafted with integrity, purity, and tradition.',
    icon: 'heart',
  },
]

export const practices = [
  {
    title: 'Sustainable farming',
    text: 'We cultivate with integrity and respect for nature — soil, animals, and season in balance.',
  },
  {
    title: 'Animal welfare',
    text: 'Our Gir cows live in a natural, stress-free environment with the highest standards of care.',
  },
  {
    title: 'Purity & freshness',
    text: 'Every harvest and dairy product is naturally wholesome, ethically produced, and crafted with care.',
  },
  {
    title: 'Farm to home',
    text: 'From our farm near Malavalli to your kitchen — food that begins at the source.',
  },
]
