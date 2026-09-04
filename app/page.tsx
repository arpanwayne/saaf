'use client'

import { useState } from 'react'

const features = [
  { title: 'Automated, rule-based execution', body: 'Signals execute automatically with mandatory stop-loss on every trade, automatic profit-booking, and risk-matched position sizing.', icon: 'shield' },
  { title: 'Kill-switch', body: 'Client or broker can pause instantly. Every action is logged with a reason — no silent pauses or resumes.', icon: 'pause' },
  { title: 'Full transparency, real-time', body: 'Plain-language WhatsApp and dashboard explanations arrive the moment a trade fires. Wins and losses are shown equally.', icon: 'chat' },
  { title: 'AI research assistant', body: 'Continuous scanning of news, filings, and global events with cited sources, explainable signals, and confidence scores grounded in historical data.', icon: 'radar' },
  { title: 'Built for the regulatory reality', body: 'Aligned to the SEBI retail algo framework, with Algo-ID on every order and disclosed AI usage.', icon: 'check' },
]

const steps = ['Signal fires', 'Risk engine decides', 'Approved order', 'Broker executes', 'Result logged']
const built = ['Full risk engine (kill-switch, stop-loss, sizing, profit-booking, audit trail)', 'Forex/commodity execution via MetaTrader-connected brokers', 'Indian equities execution (NSE/BSE) with Algo-ID tagging via empanelled brokers', 'Honest forecast engine with verifiable track record', 'WhatsApp + dashboard delivery infrastructure', 'Continuous AI research-assistant layer', 'Unified client + broker dashboard']

function Mark() { return <span className="mark" aria-hidden="true">S</span> }
function Icon({ type }: { type: string }) { return <span className={`feature-icon icon-${type}`} aria-hidden="true">{type === 'pause' ? 'Ⅱ' : type === 'chat' ? '•••' : type === 'radar' ? '◎' : type === 'check' ? '✓' : '◇'}</span> }

export default function Page() {
  const [menu, setMenu] = useState(false)
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(false)
  return (
    <main>
      <nav className="nav shell">
        <a href="#top" className="brand"><Mark /> <span>saaf<span className="brand-dot">.</span>trade</span></a>
        <button className="menu-button" aria-label="Toggle menu" aria-expanded={menu} onClick={() => setMenu(!menu)}>Menu <span>☰</span></button>
        <div className={`nav-links ${menu ? 'is-open' : ''}`}>
          <a href="#brokers" onClick={() => setMenu(false)}>For brokers</a><a href="#investors" onClick={() => setMenu(false)}>For investors</a><a href="#how" onClick={() => setMenu(false)}>How it works</a><a href="#trust" onClick={() => setMenu(false)}>Our promise</a>
          <a className="nav-cta" href="mailto:hello@saaf.trade?subject=Saaf Trade demo">Request a demo <span>↗</span></a>
        </div>
      </nav>

      <section id="top" className="hero shell">
        <div className="hero-copy"><p className="eyebrow"><span className="pulse" /> DISCIPLINE, MADE VISIBLE</p><h1>Trading discipline,<br /><em>made automatic</em><br />and impossible to skip.</h1><p className="hero-sub">Saaf Trade automates execution and research while giving clients full, honest visibility into every decision. We never hold client funds.</p><div className="hero-actions"><a className="button button-dark" href="#brokers">For brokers <span>↗</span></a><a className="button button-light" href="#investors">For investors <span>↘</span></a></div><div className="trust-badges"><span>SEBI Retail Algo Framework</span><span>Live on NSE/BSE</span><span>Non-Custodial by Design</span><span>Mandatory Stop-Loss</span></div></div>
        <div className="hero-art" aria-label="Abstract market chart illustration"><div className="chart-label mono">SAF / 1D <b>+2.48%</b></div><svg viewBox="0 0 600 420" role="img" aria-label="Muted rising line chart"><path className="gridline" d="M10 90H590M10 180H590M10 270H590M10 360H590M100 15V405M200 15V405M300 15V405M400 15V405M500 15V405"/><path className="chart-line" d="M0 330 C50 335 60 270 105 290 S150 320 190 240 S250 280 290 180 S345 220 390 160 S430 190 470 100 S530 125 600 35"/><path className="chart-line faint" d="M0 370 C60 350 100 360 155 310 S260 330 330 260 S450 280 600 180"/><g className="candles"><path d="M84 302v-72m-12 36h24"/><path d="M166 277v-90m-12 42h24"/><path d="M256 236v-105m-12 54h24"/><path d="M350 205v-85m-12 38h24"/><path d="M448 164V70m-12 41h24"/></g></svg><span className="art-note mono">RULE-BASED / 09:41:22</span></div>
      </section>

      <section className="section problem-section"><div className="shell"><div className="section-kicker">THE GAP</div><div className="problem-grid"><article id="investors"><div className="illustration screens"><span>◒</span><span>◓</span><span>◑</span></div><p className="mono label">FOR RETAIL INVESTORS</p><h2>Investing shouldn’t require a second job.</h2><p>You are stuck between watching charts all day or handing your money to schemes that promise what markets cannot. There is a more honest middle ground.</p></article><article id="brokers"><div className="illustration tabs"><i /><i /><i /><i /></div><p className="mono label">FOR BROKERS</p><h2>Your clients need discipline. Your team needs leverage.</h2><p>Manual research, position monitoring, and client updates burn hours. Saaf Trade gives you the infrastructure to offer automation without building it in-house.</p></article></div></div></section>

      <section className="solution section"><div className="shell"><p className="section-kicker">THE SOLUTION</p><h2>Saaf Trade automates disciplined trade execution and research — while giving clients full, honest visibility into every decision made with their money.</h2><div className="honesty"><span className="honesty-mark">!</span><span><b>What we do not promise:</b> guaranteed returns.</span></div></div></section>

      <section className="section features-section"><div className="shell"><div className="section-kicker">THE OPERATING SYSTEM</div><div className="features-layout"><div><h2>Calm by design.<br /><em>Strict by default.</em></h2><p className="muted">Every part of the system is designed to remove ambiguity — for the person investing and the broker responsible.</p></div><div className="feature-list">{features.map((feature, i) => <button className={`feature-row ${active === i ? 'active' : ''}`} key={feature.title} onClick={() => setActive(i)}><Icon type={feature.icon} /><span><strong>{feature.title}</strong>{active === i && <small>{feature.body}</small>}</span><b className="plus">{active === i ? '−' : '+'}</b></button>)}</div></div></div></section>

      <section id="how" className="section how-section"><div className="shell"><div className="section-kicker">HOW IT WORKS</div><h2>A clear chain of custody.<br /><em>Nothing happens in the dark.</em></h2><div className="steps">{steps.map((step, i) => <div className="step" key={step}><span className="step-no">0{i + 1}</span><div className="step-node" /><strong>{step}</strong><p>{['Strategy, TradingView alert, or AI assistant hits our backend webhook.', 'Kill-switch, stop-loss, sizing, and profit-booking are checked and logged.', 'The order goes to the broker’s regulated system.', 'Their server executes on the exchange. Their infra, their liability.', 'The trade and its reasoning are pushed to the client.'][i]}</p></div>)}</div></div></section>

      <section id="trust" className="trust section"><div className="shell trust-grid"><div><div className="section-kicker">THE MOST IMPORTANT PART</div><h2>Your money stays<br /><em>where it belongs.</em></h2><p className="trust-lead">The client’s own SEBI-registered broker holds funds — always.</p><p>This is deliberate. Saaf Trade is structurally safer as a technology partner under the SEBI algo framework, not an unregulated fund manager.</p><a className="text-link" href="#how">See the full flow <span>↗</span></a></div><button className="video-card" onClick={() => setPlaying(!playing)} aria-label="Watch how it works"><div className="video-screen"><div className="video-flow"><span>signal</span><b>→</b><span>risk engine</span><b>→</b><span>broker</span></div>{playing ? <div className="playing">Playing explainer<br /><small>Your money never leaves your broker.</small></div> : <div className="play-button">▶</div>}</div><span className="mono">WATCH HOW IT WORKS · 0:42</span></button></div></section>

      <section className="section built-section"><div className="shell built-grid"><div><div className="section-kicker">RADICAL TRANSPARENCY</div><h2>Live today,<br /><em>not planned.</em></h2></div><div className="checklist">{built.map(item => <div key={item}><span>✓</span><p>{item}</p></div>)}</div></div></section>

      <section className="bottom-line section"><div className="shell"><span className="quote-mark">“</span><blockquote>Our differentiator isn’t better returns — it’s making trading discipline automatic and impossible to skip, in a market where discipline is usually the first thing people abandon.</blockquote><a className="button button-teal" href="mailto:hello@saaf.trade?subject=Saaf Trade demo">Talk to us <span>↗</span></a></div></section>
      <footer className="footer"><div className="shell footer-inner"><a href="#top" className="brand"><Mark /> <span>saaf<span className="brand-dot">.</span>trade</span></a><p>Saaf Trade — Investor Overview.<br />Not an offer of guaranteed returns.</p><a href="mailto:hello@saaf.trade">hello@saaf.trade <span>↗</span></a><span className="mono">© 2026 SAAF TRADE</span></div></footer>
    </main>
  )
}
