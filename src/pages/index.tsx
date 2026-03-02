import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/01-Getting-Started/quick-start">
            Get Started in 5 Minutes 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

function Feature({title, description, emoji}: {title: string; description: string; emoji: string}) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <div className="text--center" style={{fontSize: '3rem', marginBottom: '1rem'}}>
        {emoji}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <Feature
            title="🔒 Privacy-Preserving"
            description="Verify and compute on data without exposing it. Zero-knowledge proofs ensure privacy."
            emoji="🔒"
          />
          <Feature
            title="⚡ High Performance"
            description="10-340x faster than traditional solutions. Production-ready technology."
            emoji="⚡"
          />
          <Feature
            title="🌐 Chain-Agnostic"
            description="Works across multiple blockchains. Ethereum, L2s, and more supported."
            emoji="🌐"
          />
        </div>
        <div className="row" style={{marginTop: '2rem'}}>
          <Feature
            title="🔧 Developer Friendly"
            description="Easy-to-use SDKs, comprehensive documentation, and active community support."
            emoji="🔧"
          />
          <Feature
            title="📊 Data Verification"
            description="zkTLS technology verifies off-chain data authenticity without exposing raw data."
            emoji="📊"
          />
          <Feature
            title="💻 Encrypted Computation"
            description="zkFHE enables secure computation on encrypted data with verifiable results."
            emoji="💻"
          />
        </div>
      </div>
    </section>
  );
}

function HomepageUseCases(): JSX.Element {
  return (
    <section className={styles.useCases}>
      <div className="container">
        <h2 className="text--center" style={{marginBottom: '3rem'}}>
          Real-World Use Cases
        </h2>
        <div className="row">
          <div className={clsx('col col--6', styles.useCaseCard)}>
            <h3>💰 DeFi & Lending</h3>
            <ul>
              <li>Proof of Assets</li>
              <li>Credit Assessment</li>
              <li>Fraud Detection</li>
            </ul>
            <Link to="/docs/05-Use-Cases/verification-use-cases#--defi--lending">Learn More →</Link>
          </div>
          <div className={clsx('col col--6', styles.useCaseCard)}>
            <h3>👤 Identity & Authentication</h3>
            <ul>
              <li>Digital Identity Verification</li>
              <li>Social Graph Verification</li>
              <li>Privacy-Preserving KYC</li>
            </ul>
            <Link to="/docs/05-Use-Cases/verification-use-cases#--identity--authentication">Learn More →</Link>
          </div>
        </div>
        <div className="row" style={{marginTop: '2rem'}}>
          <div className={clsx('col col--6', styles.useCaseCard)}>
            <h3>🗳️ Confidential Voting</h3>
            <ul>
              <li>Private Elections</li>
              <li>DAO Governance</li>
              <li>Confidential Auctions</li>
            </ul>
            <Link to="/docs/05-Use-Cases/computation-use-cases#--confidential-voting">Learn More →</Link>
          </div>
          <div className={clsx('col col--6', styles.useCaseCard)}>
            <h3>🤖 AI & Machine Learning</h3>
            <ul>
              <li>Privacy-Preserving ML</li>
              <li>Federated Learning</li>
              <li>Secure Data Sharing</li>
            </ul>
            <Link to="/docs/05-Use-Cases/computation-use-cases#--ai--machine-learning">Learn More →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomepageQuickLinks(): JSX.Element {
  return (
    <section className={styles.quickLinks}>
      <div className="container">
        <h2 className="text--center" style={{marginBottom: '2rem'}}>
          Quick Links
        </h2>
        <div className="row text--center">
          <div className="col col--3">
            <div className={styles.linkCard}>
              <h3>🚀 Quick Start</h3>
              <p>Get started in 5 minutes</p>
              <Link to="/docs/01-Getting-Started/quick-start">Start Here →</Link>
            </div>
          </div>
          <div className="col col--3">
            <div className={styles.linkCard}>
              <h3>📚 Core Concepts</h3>
              <p>Understand zkTLS & zkFHE</p>
              <Link to="/docs/02-Core-Concepts/zktls-explained">Learn More →</Link>
            </div>
          </div>
          <div className="col col--3">
            <div className={styles.linkCard}>
              <h3>🔧 SDK Guides</h3>
              <p>Integration tutorials</p>
              <Link to="/docs/03-Data-Verification/core-sdk/index">View SDKs →</Link>
            </div>
          </div>
          <div className="col col--3">
            <div className={styles.linkCard}>
              <h3>🎯 Use Cases</h3>
              <p>Real-world applications</p>
              <Link to="/docs/05-Use-Cases/verification-use-cases">Explore →</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - ${siteConfig.tagline}`}
      description="Primus is building the future of data interoperability with zkTLS and zkFHE technology.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageUseCases />
        <HomepageQuickLinks />
      </main>
    </Layout>
  );
}
