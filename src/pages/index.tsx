import clsx from 'clsx';
import React from 'react';

import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import GettingStarted from '@site/src/components/GettingStarted';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import UseCases from '@site/src/components/UseCases';
import WhatIsArc from '@site/src/components/WhatIsArc';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className='container'>
        <Heading as='h1' className='hero__title'>
          {siteConfig.title}
        </Heading>
        <p className='hero__subtitle'>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className='button button--secondary button--lg'
            to='/docs/intro'>
            Get Started
          </Link>
          <Link
            className='button button--secondary button--lg'
            to='https://github.com/arc-framework/arc-docs'>
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title='Home'
      description="An open-source, 'Platform-in-a-Box' for building, deploying, and orchestrating production-ready AI agents.">
      <HomepageHeader />
      <main>
        <WhatIsArc />
        <HomepageFeatures />
        <UseCases />
        <GettingStarted />
      </main>
    </Layout>
  );
}
