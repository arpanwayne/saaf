'use client'

import { useState } from 'react'
import Link from 'next/link'

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/brokers', label: 'For brokers' },
  { href: '/investors', label: 'For investors' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/our-promise', label: 'Our promise' },
]

export function Header({ inverse = false }: { inverse?: boolean }) {
  const [open, setOpen] = useState(false)
  return <header className={`site-header ${inverse ? 'inverse' : ''}`}>
    <div className="site-shell header-inner">
      <Link href="/" className="brand" onClick={() => setOpen(false)}><span className="brand-mark">S</span><span>saaf<span className="brand-dot">.</span>trade</span></Link>
      <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>Menu <span>{open ? '×' : '☰'}</span></button>
      <nav className={`site-nav ${open ? 'open' : ''}`}>
        {navItems.slice(1).map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
        <a className="header-cta" href="mailto:hello@saaf.trade?subject=Saaf Trade demo" onClick={() => setOpen(false)}>Request a demo <span>↗</span></a>
      </nav>
    </div>
  </header>
}

export function Footer() {
  return <footer className="site-footer"><div className="site-shell footer-grid">
    <Link href="/" className="brand"><span className="brand-mark">S</span><span>saaf<span className="brand-dot">.</span>trade</span></Link>
    <div><span className="footer-label">EXPLORE</span>{navItems.slice(1, 4).map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
    <div><span className="footer-label">CONTACT</span><a href="mailto:hello@saaf.trade">hello@saaf.trade ↗</a><span>New Delhi · India</span></div>
    <div className="footer-note">Technology infrastructure for disciplined trading.<br />Funds remain with the client&apos;s broker.</div>
  </div><div className="site-shell footer-bottom"><span>© 2026 SAAF TRADE</span><span>Not an offer of guaranteed returns.</span></div></footer>
}

export function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="eyebrow"><span className="eyebrow-dot" />{children}</p> }
export function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) { return <Link href={href} className="arrow-link">{children} <span>↗</span></Link> }
export function Marquee() { return <div className="marquee"><div className="marquee-track">DISCIPLINE / VISIBILITY / EXECUTION / DISCIPLINE / VISIBILITY / EXECUTION /</div></div> }
export function MarketVisual({ compact = false }: { compact?: boolean }) { return <div className={`market-visual ${compact ? 'compact' : ''}`}><img src="/saaf-market-art.png" alt="Abstract blue, coral, and mint market chart artwork" /><div className="market-overlay"><span className="mono">SAF / 1D</span><strong>+2.48%</strong></div><div className="scan-line" /></div> }
export function MotionVisual() { return <div className="motion-visual" aria-label="Animated abstract trade flow visual"><div className="motion-grid" /><div className="motion-path path-a" /><div className="motion-path path-b" /><div className="motion-node node-a">SIGNAL</div><div className="motion-node node-b">RISK</div><div className="motion-node node-c">BROKER</div><span className="motion-caption mono">LIVE SYSTEM / 09:41:22</span></div> }
export function PageFrame({ children, inverse = false }: { children: React.ReactNode; inverse?: boolean }) { return <>{children}</> }

export const featureIcons: Record<string, string> = { shield: '◇', pause: 'Ⅱ', chat: '•••', radar: '◎', check: '✓' }
export function FeatureAccordion({ items }: { items: { title: string; body: string; icon: string }[] }) {
  const [active, setActive] = useState(0)
  return <div className="feature-accordion">{items.map((item, index) => <button className={`feature-item ${active === index ? 'active' : ''}`} key={item.title} onClick={() => setActive(index)}><span className="feature-icon">{featureIcons[item.icon]}</span><span className="feature-text"><strong>{item.title}</strong>{active === index && <small>{item.body}</small>}</span><b>{active === index ? '−' : '+'}</b></button>)}</div>
}

export function QuoteBand() { return <section className="quote-band"><div className="site-shell"><span className="quote-mark">“</span><blockquote>Trading discipline, made automatic — and impossible to skip.</blockquote><a className="button button-dark" href="mailto:hello@saaf.trade?subject=Saaf Trade demo">Start a conversation ↗</a></div></section> }

export const features = [
  { title: 'Automated, rule-based execution', body: 'Signals execute automatically with mandatory stop-loss, profit-booking, and risk-matched position sizing.', icon: 'shield' },
  { title: 'Kill-switch', body: 'Client or broker can pause instantly. Every action is logged with a reason — no silent pauses.', icon: 'pause' },
  { title: 'Full transparency, real-time', body: 'Plain-language WhatsApp and dashboard explanations arrive the moment a trade fires.', icon: 'chat' },
  { title: 'AI research assistant', body: 'Continuous scanning of news, filings, and global events with cited sources and confidence scores.', icon: 'radar' },
  { title: 'Built for the regulatory reality', body: 'Aligned to the SEBI retail algo framework, with Algo-ID on every order and disclosed AI usage.', icon: 'check' },
]

export const processSteps = [
  ['01', 'Signal fires', 'Strategy, TradingView alert, or AI assistant hits our backend webhook.'],
  ['02', 'Risk engine decides', 'Kill-switch, stop-loss, sizing, and profit-booking are checked and logged.'],
  ['03', 'Approved order', 'The order goes to the broker&apos;s regulated system.'],
  ['04', 'Broker executes', 'Their server executes on the exchange. Their infra, their liability.'],
  ['05', 'Result logged', 'The trade and its reasoning are pushed to the client.'],
]
