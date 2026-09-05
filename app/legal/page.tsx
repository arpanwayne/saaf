import Link from 'next/link'
import { Eyebrow, Footer, Header } from '@/components/site-shell'
import { legalNavItems } from '@/lib/nav'
import { legalDocs, legalLastUpdated } from '@/lib/legal-content'

export const metadata = { title: 'Legal — Saaf Trade' }

export default function LegalIndexPage() {
  return <main className="legal-page">
    <Header />
    <section className="legal-hero">
      <div className="site-shell">
        <Eyebrow>LEGAL</Eyebrow>
        <h1>Policies &amp; agreements.</h1>
        <p>The terms, privacy, refund and cookie policies that govern use of the Saaf Trade website and platform.</p>
        <div className="legal-tabs">
          {legalNavItems.map(item => <Link key={item.href} href={item.href} className="legal-tab">{item.label}</Link>)}
        </div>
        <div className="legal-updated">LAST UPDATED — {legalLastUpdated.toUpperCase()}</div>
      </div>
    </section>
    <section className="legal-section">
      <div className="site-shell">
        <div className="legal-body">
          {legalDocs.map(doc => <p key={doc.slug}><Link href={`/legal/${doc.slug}`}><strong>{doc.title}</strong></Link></p>)}
        </div>
      </div>
    </section>
    <Footer />
  </main>
}
