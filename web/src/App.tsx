import { useEffect, useRef, useState, type ReactNode } from 'react'
import {
  products,
  whyChoose,
  practices,
  INSTAGRAM_URL,
  EMAIL,
  LOCATION,
  whatsappOrderLink,
} from './data'
import { OutlineIcon } from './components/OutlineIcon'
import './App.scss'

function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, visible }
}

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const { ref, visible } = useInView<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function App() {
  const [navSolid, setNavSolid] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site">
      <header className={`nav ${navSolid ? 'nav--solid' : ''} ${menuOpen ? 'nav--open' : ''}`}>
        <a href="#top" className="nav__brand" onClick={closeMenu}>
          <img
            src="/niruttar_organics_logo.png"
            alt=""
            className="nav__logo"
            width={40}
            height={40}
          />
          <span>Niruttara Organics</span>
        </a>
        <button
          className="nav__toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
        <nav className="nav__links" aria-label="Primary">
          <a href="#story" onClick={closeMenu}>
            Story
          </a>
          <a href="#products" onClick={closeMenu}>
            Products
          </a>
          <a href="#why" onClick={closeMenu}>
            Why us
          </a>
          <a
            href={whatsappOrderLink()}
            className="nav__cta"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Order on WhatsApp
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-label="Niruttara Organics">
          <div className="hero__media" aria-hidden="true">
            <img
              src="/products/farm-cta.png"
              alt=""
              className="hero__image"
            />
            <div className="hero__veil" />
          </div>
          <div className="hero__content">
            <img
              src="/niruttar_organics_logo.png"
              alt=""
              className="hero__mark"
              width={140}
              height={140}
            />
            <h1 className="hero__brand">Niruttara Organics</h1>
            <p className="hero__headline">Pure by Nature. Premium by Choice.</p>
            <p className="hero__lede">
              Organic vegetables, seasonal fruits, and premium A2 dairy — from
              our farm near Malavalli to your home.
            </p>
            <div className="hero__actions">
              <a
                href={whatsappOrderLink()}
                className="btn btn--primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order on WhatsApp
              </a>
              <a href="#products" className="btn btn--ghost">
                Our products
              </a>
            </div>
            <p className="hero__note">
              Catalogue only — orders are placed over WhatsApp, not on this
              site.
            </p>
          </div>
        </section>

        <section id="story" className="story">
          <div className="story__inner">
            <Reveal>
              <p className="eyebrow">About Niruttara Organics · Est. 2023</p>
              <h2 className="section-title">
                True quality begins at the source.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="story__text">
                At Niruttara Organics, our farm is dedicated to cultivating
                organic vegetables, seasonal fruits, and premium A2 dairy
                products with care, integrity, and respect for nature.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="story__text">
                Our Gir cows are nurtured in a natural, stress-free environment
                and cared for with the highest standards of animal welfare.
                This allows us to produce fresh A2 Milk, Paneer, Butter, Ghee,
                and other dairy products that are rich in taste and
                uncompromising in quality.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className="story__text">
                Every harvest and every product reflects our commitment to
                sustainable farming, purity, and freshness. From our farm to
                your home, we bring you food that is naturally wholesome,
                ethically produced, and crafted with care.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <p className="story__tagline">
                Pure by Nature. Premium by Choice.
              </p>
            </Reveal>
          </div>
          <Reveal className="story__visual" delay={200}>
            <img
              src="/products/gir-cows.png"
              alt="Gir cow and calf at Niruttara Organics farm"
            />
          </Reveal>
        </section>

        <section id="products" className="catalog">
          <div className="catalog__inner">
            <Reveal className="catalog__intro">
              <p className="eyebrow">From our farm</p>
              <h2 className="section-title">Our Products</h2>
              <p className="catalog__subtitle">
                Experience the purity of nature through our carefully cultivated
                produce and handcrafted A2 dairy products, brought directly from
                our farm to your family.
              </p>
            </Reveal>

            <div className="catalog__grid">
              {products.map((product, i) => (
                <Reveal key={product.id} delay={i * 70}>
                  <article className="pcard" id={product.id}>
                    <div className="pcard__media">
                      <img
                        src={product.image}
                        alt={product.imageAlt}
                        loading="lazy"
                      />
                    </div>
                    <div className="pcard__body">
                      <h3 className="pcard__title">{product.name}</h3>
                      <p className="pcard__desc">{product.description}</p>
                      <a
                        href={whatsappOrderLink(product.name)}
                        className="pcard__cta"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {product.cta}
                        <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="why">
          <div className="why__inner">
            <Reveal className="why__intro">
              <p className="eyebrow">Our promise</p>
              <h2 className="section-title">Why Choose Niruttara Organics</h2>
            </Reveal>
            <ul className="why__grid">
              {whyChoose.map((item, i) => (
                <li key={item.id}>
                  <Reveal delay={i * 60}>
                    <div className="why-card">
                      <div className="why-card__icon">
                        <OutlineIcon
                          name={
                            item.icon as
                              | 'leaf'
                              | 'cow'
                              | 'honey'
                              | 'cycle'
                              | 'tractor'
                              | 'heart'
                          }
                        />
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="farm-cta" aria-label="Order from our farm">
          <div className="farm-cta__media" aria-hidden="true">
            <img src="/products/farm-cta.png" alt="" />
            <div className="farm-cta__veil" />
          </div>
          <Reveal className="farm-cta__content">
            <h2 className="farm-cta__title">
              Fresh from Our Farm to Your Home
            </h2>
            <p className="farm-cta__text">
              Experience the difference of naturally grown produce and
              handcrafted A2 dairy products made with care, purity and
              tradition.
            </p>
            <div className="farm-cta__actions">
              <a
                href={whatsappOrderLink()}
                className="btn btn--gold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Now
              </a>
              <a href="#contact" className="btn btn--ghost">
                Contact Us
              </a>
            </div>
          </Reveal>
        </section>

        <section id="craft" className="craft">
          <div className="craft__inner">
            <Reveal>
              <p className="eyebrow">How we farm</p>
              <h2 className="section-title">Sustainable by choice.</h2>
            </Reveal>
            <ul className="craft__list craft__list--four">
              {practices.map((item, i) => (
                <li key={item.title}>
                  <Reveal delay={i * 80}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="contact">
          <Reveal>
            <p className="eyebrow">How to order</p>
            <h2 className="section-title">Message us on WhatsApp</h2>
            <p className="contact__lede">
              This website is for browsing only. Tell us what you need, and we
              will share availability, pricing, and delivery details over
              WhatsApp.
            </p>
            <p className="contact__meta">
              <span>{LOCATION}</span>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <a href="tel:+919980005314">+91 99800 05314</a>
            </p>
            <div className="contact__actions">
              <a
                href={whatsappOrderLink()}
                className="btn btn--primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
              <a
                href={INSTAGRAM_URL}
                className="btn btn--outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow on Instagram
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="footer">
        <img
          src="/niruttar_organics_logo.png"
          alt=""
          className="footer__logo"
          width={64}
          height={64}
        />
        <div className="footer__brand">Niruttara Organics</div>
        <p className="footer__note">
          Pure by Nature. Premium by Choice. · {LOCATION} · Est. 2023
        </p>
        <div className="footer__links">
          <a href={whatsappOrderLink()} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={`mailto:${EMAIL}`}>Email</a>
        </div>
        <p className="footer__copy">
          © {new Date().getFullYear()} Niruttara Organics
        </p>
      </footer>

      <a
        className="whatsapp-fab"
        href={whatsappOrderLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true" width="28" height="28">
          <path
            fill="currentColor"
            d="M16.01 3C9.39 3 4 8.3 4 14.8c0 2.1.56 4.1 1.62 5.88L4 29l8.55-1.57A12.2 12.2 0 0 0 16.01 27C22.63 27 28 21.7 28 15.2S22.63 3 16.01 3zm0 21.7c-1.72 0-3.4-.45-4.88-1.3l-.35-.2-5.07.93.95-4.88-.22-.37A9.6 9.6 0 0 1 6.3 14.8c0-5.28 4.36-9.57 9.71-9.57s9.71 4.29 9.71 9.57-4.36 9.9-9.71 9.9zm5.33-7.17c-.29-.14-1.72-.84-1.98-.93-.27-.1-.46-.14-.66.14-.2.29-.76.93-.93 1.12-.17.2-.34.22-.63.08-.29-.14-1.22-.44-2.32-1.4-.86-.75-1.44-1.68-1.61-1.96-.17-.29-.02-.44.13-.58.13-.13.29-.34.43-.51.14-.17.2-.29.29-.48.1-.2.05-.37-.02-.51-.08-.14-.66-1.56-.9-2.14-.24-.57-.48-.49-.66-.5h-.56c-.2 0-.51.07-.78.37-.27.29-1.02.98-1.02 2.4s1.05 2.78 1.19 2.97c.14.2 2.06 3.28 5.1 4.47.71.3 1.27.48 1.7.61.72.23 1.37.2 1.89.12.58-.09 1.72-.69 1.96-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.2-.55-.34z"
          />
        </svg>
      </a>
    </div>
  )
}
