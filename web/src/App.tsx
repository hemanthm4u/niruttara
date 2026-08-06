import { useEffect, useRef, useState, type ReactNode } from 'react'
import {
  offerings,
  practices,
  INSTAGRAM_URL,
  EMAIL,
  LOCATION,
  whatsappOrderLink,
} from './data'
import './App.scss'

function useInView<T extends HTMLElement>(threshold = 0.18) {
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
          <img src="/logo.png" alt="" className="nav__logo" width={40} height={40} />
          <span>Niruttara</span>
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
          <a href="#farm" onClick={closeMenu}>
            The farm
          </a>
          <a href="#craft" onClick={closeMenu}>
            Practices
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
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=2000&q=80"
              alt=""
              className="hero__image"
            />
            <div className="hero__veil" />
          </div>
          <div className="hero__content">
            <img
              src="/logo.png"
              alt="Niruttara Organics"
              className="hero__mark"
              width={120}
              height={120}
            />
            <p className="hero__brand">Niruttara Organics</p>
            <h1 className="hero__headline">
              Fresh, chemical-free produce from our farm.
            </h1>
            <p className="hero__lede">
              Two IT professionals turned farmers, cultivating sustainable
              harvests near Malavalli, Karnataka.
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
              <a href="#story" className="btn btn--ghost">
                Our story
              </a>
            </div>
            <p className="hero__note">
              Catalogue only — orders are placed over WhatsApp, not on this site.
            </p>
          </div>
        </section>

        <section id="story" className="story">
          <div className="story__inner">
            <Reveal>
              <p className="eyebrow">Welcome to Niruttara Organic Farm · Est. 2023</p>
              <h2 className="section-title">
                From keyboards to the fields.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="story__text">
                We are two IT professionals turned farmers on a mission to
                cultivate fresh, chemical-free produce while promoting
                sustainable farming. Here we share our experiences, challenges,
                and tips — a journey of passion and sustainability toward a
                healthier, greener future.
              </p>
            </Reveal>
          </div>
          <Reveal className="story__visual" delay={200}>
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80"
              alt="Morning light over green farmland near Malavalli"
            />
          </Reveal>
        </section>

        <section id="farm" className="products">
          <div className="products__intro">
            <Reveal>
              <p className="eyebrow">On the farm</p>
              <h2 className="section-title">What you will find here</h2>
              <p className="products__hint">
                Browse what we grow and how we farm. To order fresh produce,
                message us on WhatsApp — we confirm availability and delivery
                personally.
              </p>
            </Reveal>
          </div>
          <div className="products__list">
            {offerings.map((item, index) => (
              <article
                key={item.id}
                id={item.id}
                className={`product ${index % 2 === 1 ? 'product--reverse' : ''}`}
              >
                <Reveal className="product__media" delay={80}>
                  <img src={item.image} alt={item.imageAlt} />
                </Reveal>
                <Reveal className="product__copy" delay={160}>
                  <p className="product__tagline">{item.tagline}</p>
                  <h3 className="product__name">{item.name}</h3>
                  <p className="product__desc">{item.description}</p>
                  <a
                    href={whatsappOrderLink(item.name)}
                    className="btn btn--primary btn--sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enquire on WhatsApp
                  </a>
                </Reveal>
              </article>
            ))}
          </div>
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
        <img src="/logo.png" alt="" className="footer__logo" width={64} height={64} />
        <div className="footer__brand">Niruttara Organics</div>
        <p className="footer__note">
          Chemical-free produce · {LOCATION} · Est. 2023
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
        <p className="footer__copy">© {new Date().getFullYear()} Niruttara Organics</p>
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
