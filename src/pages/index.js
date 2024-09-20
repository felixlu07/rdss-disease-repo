import React from 'react';
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
            to="/docs/intro">
            Explore Rare Diseases
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageContent() {
  return (
    <div className="container margin-vert--xl">
      <div className="row">
        <div className="col col--8 col--offset-2">
          <div className="margin-bottom--lg">
            <blockquote>
              <p>RDSS is a non-profit organization dedicated to supporting individuals and families affected by rare diseases in Singapore. We build RDSS to serve as a platform to raise awareness, provide resources, and facilitate access to care for those living with rare conditions.</p>
              <footer>—Patricia & Kenneth-Founders of RDSS</footer>
            </blockquote>
          </div>
          <div className="row margin-bottom--lg">
            <div className="col col--6">
              <h3>Find a Rare Disease Organization</h3>
              <Link to="/docs/intro">Where to Start</Link>
            </div>
            <div className="col col--6">
              <h3>Rare Disease Facts and Statistics</h3>
              <Link to="/docs/intro">Learn More</Link>
            </div>
          </div>
          <div className="row margin-bottom--lg">
            <div className="col col--6">
              <h3>Access the Rare Disease Database</h3>
              <Link to="/docs/intro">Explore Now</Link>
            </div>
            <div className="col col--6">
              <h3>What it means to be undiagnosed?</h3>
              <Link to="/docs/intro">Read more</Link>
            </div>
          </div>
          <div className="margin-bottom--lg">
            <blockquote>
              <p>Thankfully, your organization and particularly a women who took the time to listen to our situation, to empathize, and to ultimately search for a solution that in the end resulted in a much more positive outcome and a very grateful family. Words cannot describe how important the work your organization does, and the fact that you have such caring, compassionate and ultimately empowered staff makes NORD that much more impactful and powerful. It would have been much easier for her to simply say "no", but judging by the time she spent with us on the phone this never crossed her mind.  Thank you again for what your organization does and for the wonderful people you choose to work with - we're eternally grateful for one small "win" in an otherwise terrible journey.</p>
              <footer>—Nicholas Flamel</footer>
            </blockquote>
          </div>
          <div className="row">
            <div className="col col--3">
              <h3>Make a Donation</h3>
              <Link to="/docs/intro">Donate Now</Link>
            </div>
            <div className="col col--3">
              <h3>Stay Informed</h3>
              <Link to="/docs/intro">Subscribe</Link>
            </div>
            <div className="col col--3">
              <h3>Stories That Inspire</h3>
              <Link to="/docs/intro">Learn More</Link>
            </div>
            <div className="col col--3">
              <h3>Rare Disease Day®</h3>
              <Link to="/docs/intro">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A comprehensive repository of rare diseases information">
      <HomepageHeader />
      <main>
        <HomepageContent />
      </main>
    </Layout>
  );
}
