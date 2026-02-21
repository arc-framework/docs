import clsx from 'clsx';
import React from 'react';

import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';

// Import all animation components
import { GeometricShapes, ParticleSystem } from './animations';
import styles from './styles.module.css';

export default function Hero(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const logoUrl = useBaseUrl('/img/arc-icon.png');
  const heroBackgroundUrl = useBaseUrl('/img/arc-hero-background.png');

  return (
    <header
      className={clsx('hero', styles.heroBanner)}
      style={{ backgroundImage: `url(${heroBackgroundUrl})` }}>
      <ParticleSystem />
      <div className={styles.heroContent}>
        <div className={styles.heroLayout}>
          <div className={styles.heroTextSide}>
            <Heading as='h1' className={clsx('hero__title', styles.heroTitle)}>
              {siteConfig.title}
            </Heading>
            <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
              {siteConfig.tagline}
            </p>
            <p className={styles.heroDescription}>
              The open-source distributed intelligence orchestration engine.
              <br />
              Transform weeks of infrastructure setup into a single command.
            </p>
            <div className={styles.buttons}>
              <Link
                className='button button--outline button--secondary button--lg'
                to='/docs/getting-started/'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='currentColor'
                  style={{ marginRight: '8px', verticalAlign: 'middle' }}>
                  <path d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM5.78 6.97a.75.75 0 0 0-1.06 1.06L7.44 10.75a.75.75 0 0 0 1.06 0l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 9.13 5.78 6.97z' />
                </svg>
                Get Started
              </Link>
              <Link
                className='button button--primary button--lg'
                to='https://github.com/arc-framework'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='currentColor'
                  style={{ marginRight: '8px', verticalAlign: 'middle' }}>
                  <path d='M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8z' />
                </svg>
                GitHub
              </Link>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statValue}>⚡</span>
                <span className={styles.statLabel}>Minutes to Deploy</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>🔧</span>
                <span className={styles.statLabel}>Fully Customizable</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>🌐</span>
                <span className={styles.statLabel}>Open Source</span>
              </div>
            </div>
          </div>
          <div
            className={styles.heroImageSide}
            style={{ backgroundImage: `url(${logoUrl})` }}>
            <GeometricShapes />
          </div>
        </div>
      </div>
    </header>
  );
}
