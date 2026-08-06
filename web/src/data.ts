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
    id: 'vegetables',
    name: 'Organic vegetables',
    tagline: 'Grown with care and integrity.',
    description:
      'Fresh, chemical-free vegetables cultivated on our farm with respect for nature — wholesome harvests from soil to table.',
    image:
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Fresh organic vegetables in the field',
  },
  {
    id: 'fruits',
    name: 'Seasonal fruits',
    tagline: 'Picked at their peak.',
    description:
      'Seasonal fruits grown sustainably and harvested for purity and freshness — naturally wholesome, ethically produced.',
    image:
      'https://images.unsplash.com/photo-1619566636858-adf3ef4644b9?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Basket of fresh seasonal fruit',
  },
  {
    id: 'dairy',
    name: 'Premium A2 dairy',
    tagline: 'From our Gir cows.',
    description:
      'Our Gir cows are nurtured in a natural, stress-free environment. Fresh A2 Milk, Paneer, Butter, Ghee, and more — rich in taste, uncompromising in quality.',
    image:
      'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Fresh A2 ghee and dairy products',
  },
  {
    id: 'farm-to-home',
    name: 'Farm to your home',
    tagline: 'Crafted with care.',
    description:
      'Every harvest and every product reflects our commitment to sustainable farming, purity, and freshness — from our farm to your home.',
    image:
      'https://images.unsplash.com/photo-1488459716781-31db5254d4d3?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Fresh farm produce ready for home',
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
