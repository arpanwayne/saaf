import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Eyebrow, Footer, Header } from '@/components/site-shell'
import { legalNavItems } from '@/lib/nav'
import { legalDocs, legalLastUpdated, type LegalBlock } from '@/lib/legal-content'

export function generateStaticParams() {
  return legalDocs.map(doc => ({ slug: doc.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const doc = legalDocs.find(d => d.slug === slug)
  return { title: doc ? `${doc.title} — Saaf Trade` : 'Saaf Trade' }
}

function renderBlock(block: LegalBlock, index: number) {
  if (block.type === 'h2') return <h2 key={index}>{block.text}</h2>
  if (block.type === 'h3') return <h3 key={index}>{block.text}</h3>
  if (block.type === 'ul') return <ul key={index}>{block.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
  return <p key={index}>{block.text}</p>
}

export default async function LegalDocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const doc = legalDocs.find(d => d.slug === slug)
  if (!doc) notFound()

  return <main className="legal-page">
    <Header />
    <section className="legal-hero">
      <div className="site-shell">
        <Eyebrow>LEGAL</Eyebrow>
        <h1>{doc.title}</h1>
        <p>This {doc.title.toLowerCase()} applies to the Saaf Trade website and platform, operated by Saaf Trade, headquartered in New Delhi, India.</p>
        <div className="legal-tabs">
          {legalNavItems.map(item => <Link key={item.href} href={item.href} className={`legal-tab ${item.href === `/legal/${doc.slug}` ? 'active' : ''}`}>{item.label}</Link>)}
        </div>
        <div className="legal-updated">LAST UPDATED — {legalLastUpdated.toUpperCase()}</div>
      </div>
    </section>
    <section className="legal-section">
      <div className="site-shell">
        <div className="legal-body">
          {doc.blocks.map((block, index) => renderBlock(block, index))}
        </div>
      </div>
    </section>
    <Footer />
  </main>
}
