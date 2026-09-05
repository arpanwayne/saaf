// Legal content for Saaf Trade — sourced from the company's legal pages document.
export type LegalBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }

export type LegalDoc = { slug: string; title: string; label: string; blocks: LegalBlock[] }

export const legalLastUpdated = '5 September 2026'

export const legalDocs: LegalDoc[] = [
  {
    "slug": "terms",
    "title": "Terms & Conditions",
    "label": "Terms & Conditions",
    "blocks": [
      {
        "type": "p",
        "text": "These Terms & Conditions (\"Terms\") govern access to and use of the website https://saaf.trade and the Saaf Trade platform, tools, dashboards, APIs and related services (collectively, the \"Services\"), operated by Saaf Trade (\"Saaf Trade\", \"we\", \"us\", or \"our\"), headquartered in New Delhi, India. By accessing or using the Services, you (\"User\", \"you\") agree to be bound by these Terms. If you do not agree, do not use the Services."
      },
      {
        "type": "h2",
        "text": "1. Nature of the Services"
      },
      {
        "type": "p",
        "text": "Saaf Trade provides technology infrastructure that sits between a SEBI-registered broker and the broker's clients, enabling rules-based, disciplined trade execution, research tooling, risk controls and record-keeping. Saaf Trade is a technology provider, not a stock broker, investment adviser, portfolio manager, or SEBI-registered intermediary, unless expressly stated otherwise on the platform."
      },
      {
        "type": "p",
        "text": "Saaf Trade does not hold, custody, or have access to client funds or securities at any point. All funds and securities remain at all times with the User's SEBI-registered broker, under that broker's account and regulatory framework."
      },
      {
        "type": "p",
        "text": "Trade execution facilitated through the Services is carried out through the User's linked broker account, subject to that broker's own terms, risk disclosures and regulatory obligations."
      },
      {
        "type": "h2",
        "text": "2. Eligibility"
      },
      {
        "type": "ul",
        "items": [
          "You must be at least 18 years of age and legally capable of entering into a binding contract under the Indian Contract Act, 1872.",
          "You must hold, or open, a trading and demat account with a SEBI-registered broker to use the execution features of the Services.",
          "You are responsible for ensuring your use of the Services complies with applicable laws in your jurisdiction."
        ]
      },
      {
        "type": "h2",
        "text": "3. Account Registration & Security"
      },
      {
        "type": "p",
        "text": "You agree to provide accurate, current and complete information when registering for or using the Services, and to keep such information updated. You are responsible for maintaining the confidentiality of your login credentials and API keys, and for all activity that occurs through your account. Notify us immediately at hello@saaf.trade of any unauthorised use or suspected security breach."
      },
      {
        "type": "h2",
        "text": "4. No Investment Advice; No Guaranteed Returns"
      },
      {
        "type": "p",
        "text": "Nothing on the platform, including strategies, signals, research outputs, dashboards or reports, constitutes investment advice, a recommendation, or a solicitation to buy or sell any security. Saaf Trade does not guarantee any return, profit, or trading outcome. Trading and investing in securities markets are subject to market risk; past performance of any strategy is not indicative of future results."
      },
      {
        "type": "p",
        "text": "Users are solely responsible for their own investment and trading decisions. Where a strategy or signal is made available through the platform, you should independently evaluate its suitability, and consult a SEBI-registered investment adviser where appropriate."
      },
      {
        "type": "h2",
        "text": "5. Broker Relationship & Third-Party Services"
      },
      {
        "type": "p",
        "text": "Use of the execution and account-linking features requires connecting a SEBI-registered broker account via that broker's authorised APIs. Saaf Trade is not responsible for the acts, omissions, downtime, pricing, margin policies, or regulatory compliance of any third-party broker, data provider, or payment processor. Your relationship with your broker is governed independently by that broker's own account-opening agreement and terms."
      },
      {
        "type": "h2",
        "text": "6. Fees"
      },
      {
        "type": "p",
        "text": "Fees, if any, for use of the Services will be disclosed to you at the time of subscription or on the pricing page of the platform. Fees for brokerage, statutory charges (STT, GST, stamp duty, exchange charges, SEBI turnover fees, etc.) are separate, are levied by your broker/exchange, and are not controlled by Saaf Trade."
      },
      {
        "type": "h2",
        "text": "7. Acceptable Use"
      },
      {
        "type": "p",
        "text": "You agree not to:"
      },
      {
        "type": "ul",
        "items": [
          "Use the Services for any unlawful purpose, market manipulation, or in violation of SEBI, RBI, or exchange regulations;",
          "Attempt to gain unauthorised access to the platform, other users' accounts, or underlying infrastructure;",
          "Reverse-engineer, decompile, scrape or resell the Services without written permission;",
          "Introduce malware, or interfere with the normal operation of the Services."
        ]
      },
      {
        "type": "h2",
        "text": "8. Intellectual Property"
      },
      {
        "type": "p",
        "text": "All content, software, trademarks, logos, algorithms and design elements on the platform are the property of Saaf Trade or its licensors and are protected under applicable intellectual property laws. Nothing in these Terms grants you any ownership rights in the Services."
      },
      {
        "type": "h2",
        "text": "9. Disclaimers & Limitation of Liability"
      },
      {
        "type": "p",
        "text": "The Services are provided on an \"as is\" and \"as available\" basis, without warranties of any kind, express or implied, including as to accuracy, reliability, uninterrupted availability, or fitness for a particular purpose."
      },
      {
        "type": "p",
        "text": "To the maximum extent permitted by law, Saaf Trade, its officers, employees and affiliates shall not be liable for any indirect, incidental, special, consequential or exemplary damages, including loss of profits, trading losses, or loss of data, arising from your use of, or inability to use, the Services, including any delay, outage, execution latency, or data inaccuracy."
      },
      {
        "type": "h2",
        "text": "10. Indemnity"
      },
      {
        "type": "p",
        "text": "You agree to indemnify and hold harmless Saaf Trade and its affiliates, officers and employees from any claims, damages, liabilities and expenses (including reasonable legal fees) arising out of your breach of these Terms, misuse of the Services, or violation of applicable law."
      },
      {
        "type": "h2",
        "text": "11. Suspension & Termination"
      },
      {
        "type": "p",
        "text": "Saaf Trade may suspend or terminate access to the Services, with or without notice, where we reasonably believe there has been a breach of these Terms, suspected fraud, regulatory concern, or risk to the platform or other users. You may stop using the Services and disconnect your broker account at any time."
      },
      {
        "type": "h2",
        "text": "12. Changes to these Terms"
      },
      {
        "type": "p",
        "text": "We may update these Terms from time to time. Material changes will be notified via the platform or email, and continued use of the Services after such changes constitutes acceptance of the revised Terms."
      },
      {
        "type": "h2",
        "text": "13. Governing Law & Jurisdiction"
      },
      {
        "type": "p",
        "text": "These Terms are governed by the laws of India. Courts at New Delhi shall have exclusive jurisdiction over any disputes arising out of or relating to these Terms, subject to any mandatory arbitration or regulatory dispute-resolution mechanism required under SEBI regulations."
      },
      {
        "type": "h2",
        "text": "14. Contact"
      },
      {
        "type": "p",
        "text": "For questions about these Terms, contact us at hello@saaf.trade."
      }
    ]
  },
  {
    "slug": "privacy",
    "title": "Privacy Policy",
    "label": "Privacy Policy",
    "blocks": [
      {
        "type": "p",
        "text": "Saaf Trade (\"we\", \"us\", \"our\") is committed to protecting the privacy of users of https://saaf.trade and the Saaf Trade platform (the \"Services\"). This Privacy Policy explains what personal data we collect, how we use it, and the choices you have, in accordance with the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the Digital Personal Data Protection Act, 2023, to the extent applicable."
      },
      {
        "type": "h2",
        "text": "1. Information We Collect"
      },
      {
        "type": "p",
        "text": "We may collect the following categories of information:"
      },
      {
        "type": "ul",
        "items": [
          "Identity & contact data: name, email address, phone number, company/broker affiliation.",
          "Account & KYC-adjacent data: broker account identifiers, client codes, and information needed to link your broker account for execution (we do not collect your broker login password or trading PIN; linking is done via your broker's authorised API/OAuth flow).",
          "Usage data: log-in times, pages visited, feature usage, device and browser type, IP address.",
          "Trading & strategy data: strategy configurations, risk parameters, order and execution history routed through the platform, and performance analytics generated from that history.",
          "Communications: messages you send us, including support requests and demo enquiries."
        ]
      },
      {
        "type": "h2",
        "text": "2. How We Use Information"
      },
      {
        "type": "ul",
        "items": [
          "To provide, operate, and maintain the Services, including linking your broker account and executing your configured strategies;",
          "To generate dashboards, risk alerts, and performance/record-keeping reports;",
          "To communicate with you about your account, updates, or support requests;",
          "To detect, prevent and investigate fraud, abuse, or security incidents;",
          "To comply with legal, regulatory or law-enforcement obligations, including any recordkeeping required for SEBI-related audit trails;",
          "To improve the Services through aggregated, anonymised analytics."
        ]
      },
      {
        "type": "h2",
        "text": "3. No Access to Funds"
      },
      {
        "type": "p",
        "text": "Saaf Trade does not hold or have access to your funds or securities. Any account-linking is limited to the data and permissions needed for order routing, monitoring and reporting, as authorised by you and permitted by your broker's API."
      },
      {
        "type": "h2",
        "text": "4. Sharing of Information"
      },
      {
        "type": "p",
        "text": "We do not sell your personal data. We may share information with:"
      },
      {
        "type": "ul",
        "items": [
          "Your linked SEBI-registered broker, solely to execute orders and reconcile trades on your behalf;",
          "Service providers who host our infrastructure, provide analytics, or support customer service, under contractual confidentiality obligations;",
          "Regulators, exchanges, or law-enforcement authorities, where required by law or a valid legal process;",
          "A successor entity in the event of a merger, acquisition, or sale of assets, subject to equivalent privacy protections."
        ]
      },
      {
        "type": "h2",
        "text": "5. Data Retention"
      },
      {
        "type": "p",
        "text": "We retain personal and trading-related data for as long as your account is active and thereafter for the period required to meet regulatory recordkeeping obligations (which, for securities-market-related records, may extend to several years), or as otherwise required by law."
      },
      {
        "type": "h2",
        "text": "6. Data Security"
      },
      {
        "type": "p",
        "text": "We use reasonable technical and organisational safeguards, including encryption in transit, access controls, and monitoring, to protect personal data. No method of transmission or storage is completely secure, and we cannot guarantee absolute security."
      },
      {
        "type": "h2",
        "text": "7. Your Rights"
      },
      {
        "type": "p",
        "text": "Subject to applicable law, you may request access to, correction of, or deletion of your personal data, or withdraw consent for non-essential processing, by writing to hello@saaf.trade. Certain data may need to be retained for regulatory or legal reasons even after such a request."
      },
      {
        "type": "h2",
        "text": "8. Cookies"
      },
      {
        "type": "p",
        "text": "We use cookies and similar technologies as described in our separate Cookie Policy."
      },
      {
        "type": "h2",
        "text": "9. Children's Privacy"
      },
      {
        "type": "p",
        "text": "The Services are not directed at individuals under 18 years of age, and we do not knowingly collect personal data from minors."
      },
      {
        "type": "h2",
        "text": "10. International Users"
      },
      {
        "type": "p",
        "text": "The Services are intended primarily for users trading through SEBI-registered brokers in India. If you access the Services from outside India, you do so on your own initiative and are responsible for compliance with local laws."
      },
      {
        "type": "h2",
        "text": "11. Changes to this Policy"
      },
      {
        "type": "p",
        "text": "We may update this Privacy Policy periodically. Material changes will be notified through the platform or via email, along with an updated \"Last updated\" date."
      },
      {
        "type": "h2",
        "text": "12. Contact & Grievance Officer"
      },
      {
        "type": "p",
        "text": "For privacy-related queries or grievances, contact us at hello@saaf.trade. We aim to acknowledge and address grievances in accordance with applicable timelines under Indian law."
      }
    ]
  },
  {
    "slug": "refund",
    "title": "Refund Policy",
    "label": "Refund Policy",
    "blocks": [
      {
        "type": "p",
        "text": "This Refund Policy applies to subscription fees and any paid plans for the Saaf Trade platform (the \"Services\"), operated by Saaf Trade. It does not apply to brokerage, statutory charges, or any amounts charged by your SEBI-registered broker or exchange, which are governed by that broker's own policies."
      },
      {
        "type": "h2",
        "text": "1. Scope"
      },
      {
        "type": "p",
        "text": "Saaf Trade charges fees only for access to its software platform (subscriptions, premium features, or usage-based plans). We do not hold client trading funds, and this policy therefore does not — and cannot — cover trading losses, margin shortfalls, or brokerage-related charges, which are outside our control."
      },
      {
        "type": "h2",
        "text": "2. Free Trials & Demos"
      },
      {
        "type": "p",
        "text": "Where a free trial or demo period is offered, no charge is made until the trial ends and you affirmatively opt into a paid plan. You may cancel at any time during the trial without charge."
      },
      {
        "type": "h2",
        "text": "3. Subscription Cancellations"
      },
      {
        "type": "ul",
        "items": [
          "You may cancel your subscription at any time from your account settings or by writing to hello@saaf.trade.",
          "Cancellation stops future billing from the next billing cycle; it does not automatically entitle you to a refund for the current billing period already paid, except as set out below."
        ]
      },
      {
        "type": "h2",
        "text": "4. Refund Eligibility"
      },
      {
        "type": "p",
        "text": "Refunds may be considered in the following circumstances:"
      },
      {
        "type": "ul",
        "items": [
          "A duplicate or erroneous charge caused by a billing or technical error on our part;",
          "A material, verified outage or failure of the core platform that prevented use of paid features for a significant portion of the billing period, reported to us within 7 days of the issue;",
          "Cancellation within 48 hours of an annual plan's initial purchase, provided the Services have not been substantially used, at our reasonable discretion."
        ]
      },
      {
        "type": "p",
        "text": "Refunds are generally not available for:"
      },
      {
        "type": "ul",
        "items": [
          "Change of mind after substantial use of a billing period;",
          "Trading losses, missed trades, slippage, or strategy underperformance;",
          "Charges levied by your broker, exchange, or payment gateway;",
          "Partial months/periods of an already-active subscription, except as required by law."
        ]
      },
      {
        "type": "h2",
        "text": "5. How to Request a Refund"
      },
      {
        "type": "p",
        "text": "To request a refund, email hello@saaf.trade with your account details, the transaction/invoice reference, and the reason for the request. We will review requests and respond within a reasonable time, generally within 7–10 business days."
      },
      {
        "type": "h2",
        "text": "6. Refund Method & Timeline"
      },
      {
        "type": "p",
        "text": "Approved refunds will be processed to the original payment method used, typically within 7–14 business days of approval, subject to processing times of the relevant bank or payment gateway."
      },
      {
        "type": "h2",
        "text": "7. Chargebacks"
      },
      {
        "type": "p",
        "text": "We encourage you to contact us first to resolve any billing concern before initiating a chargeback with your bank or card issuer, as this allows for a faster resolution."
      },
      {
        "type": "h2",
        "text": "8. Changes to this Policy"
      },
      {
        "type": "p",
        "text": "We may update this Refund Policy from time to time; the version in effect at the time of your purchase will govern that transaction unless otherwise required by law."
      },
      {
        "type": "h2",
        "text": "9. Contact"
      },
      {
        "type": "p",
        "text": "For billing or refund queries, contact hello@saaf.trade."
      }
    ]
  },
  {
    "slug": "cookies",
    "title": "Cookie Policy",
    "label": "Cookie Policy",
    "blocks": [
      {
        "type": "p",
        "text": "This Cookie Policy explains how Saaf Trade (\"we\", \"us\", \"our\") uses cookies and similar tracking technologies on https://saaf.trade and the Saaf Trade platform (the \"Services\")."
      },
      {
        "type": "h2",
        "text": "1. What Are Cookies"
      },
      {
        "type": "p",
        "text": "Cookies are small text files placed on your device when you visit a website. They help the website function, remember your preferences, and understand how the site is used. Similar technologies include local storage, pixels, and SDKs used within our web and app interfaces."
      },
      {
        "type": "h2",
        "text": "2. Types of Cookies We Use"
      },
      {
        "type": "h3",
        "text": "2.1 Strictly Necessary Cookies"
      },
      {
        "type": "p",
        "text": "Required for core functionality such as logging in, maintaining session state, and securing your account. These cannot be disabled without affecting the operation of the Services."
      },
      {
        "type": "h3",
        "text": "2.2 Performance & Analytics Cookies"
      },
      {
        "type": "p",
        "text": "Help us understand how users interact with the platform (e.g., pages visited, feature usage, error rates) so we can improve performance and usability. These may be provided by analytics tools."
      },
      {
        "type": "h3",
        "text": "2.3 Functionality Cookies"
      },
      {
        "type": "p",
        "text": "Remember your preferences, such as display settings or previously selected dashboards, to enhance your experience on return visits."
      },
      {
        "type": "h3",
        "text": "2.4 Marketing/Referral Cookies (if applicable)"
      },
      {
        "type": "p",
        "text": "May be used to understand which channels referred visitors to our site, primarily on marketing pages rather than the logged-in platform."
      },
      {
        "type": "h2",
        "text": "3. Third-Party Cookies"
      },
      {
        "type": "p",
        "text": "Some cookies may be set by third-party service providers we use for hosting, analytics, or customer support. We do not control these third parties' own cookie practices, which are governed by their respective privacy and cookie policies."
      },
      {
        "type": "h2",
        "text": "4. Managing Cookies"
      },
      {
        "type": "p",
        "text": "You can control or delete cookies through your browser settings. Most browsers allow you to refuse or delete cookies, or to be notified when a cookie is set. Please note that disabling strictly necessary cookies may prevent parts of the Services, such as login and trade-execution dashboards, from functioning correctly."
      },
      {
        "type": "h2",
        "text": "5. Do Not Track"
      },
      {
        "type": "p",
        "text": "Some browsers offer a \"Do Not Track\" signal. As there is no common industry standard for responding to such signals, we do not currently alter our data-collection practices upon receiving one."
      },
      {
        "type": "h2",
        "text": "6. Changes to this Policy"
      },
      {
        "type": "p",
        "text": "We may update this Cookie Policy from time to time to reflect changes in technology, law, or our practices. The \"Last updated\" date at the top of this page indicates when it was last revised."
      },
      {
        "type": "h2",
        "text": "7. Contact"
      }
    ]
  }
]
