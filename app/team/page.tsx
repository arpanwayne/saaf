import { ArrowLink, Eyebrow, Footer, Header } from '@/components/site-shell'

// Real team, generic titles only — no fabricated career claims.
const TEAM = [
  { initials: 'PK', name: 'Pankaj Kumar', role: 'Founder & Director' },
  { initials: 'PN', name: 'Pavnoor Kaur', role: 'Co-founder' },
  { initials: 'PM', name: 'Piyush Mehndiratta', role: 'Marketing Head' },
  { initials: 'SM', name: 'Surbhi Mehndiratta', role: 'Graphic Designer' },
  { initials: 'BK', name: 'Baljeet Kaur', role: 'Graphic Designer' },
  { initials: 'AS', name: 'Arpan Saini', role: 'Software Developer' },
  { initials: 'SK', name: 'Sant Kaur', role: 'Senior Software Developer' },
  { initials: 'MK', name: 'Mandeep Kaur', role: 'Senior Web Developer' },
] as const

export default function TeamPage() {
  return <main className="team-page">
    <Header />
    <section className="team-hero">
      <div className="site-shell">
        <Eyebrow>THE PEOPLE BEHIND SAAF TRADE</Eyebrow>
        <h1>Meet the team.</h1>
        <p>Saaf Trade is built by Wayne E Solutions — a small team based in Ludhiana, Punjab, building disciplined trading infrastructure for India&apos;s regulated market.</p>
      </div>
    </section>
    <section className="team-section">
      <div className="site-shell">
        <div className="team-grid">
          {TEAM.map(m => <div className="team-card" key={m.name}>
            <div className="team-avatar">{m.initials}</div>
            <div><div className="team-name">{m.name}</div><div className="team-role">{m.role}</div></div>
          </div>)}
        </div>
        <div className="team-cta">
          <h2>Want to talk to us directly?</h2>
          <p>We&apos;re happy to walk you through Saaf Trade, plan by plan.</p>
          <div style={{ marginTop: 22 }}><ArrowLink href="/request-demo">Request a demo</ArrowLink></div>
        </div>
      </div>
    </section>
    <Footer />
  </main>
}
