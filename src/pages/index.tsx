import clsx from 'clsx';

import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className='container'>
        <img
          src='https://raw.githubusercontent.com/arc-framework/.github/main/assets/arc-icon.png'
          alt='A.R.C. Logo'
          width='150'
          className={styles.heroLogo}
        />
        <h1 className='hero__title'>{siteConfig.title}</h1>
        <p className='hero__subtitle'>{siteConfig.tagline}</p>
        <p className={clsx(styles.heroOss, 'hero__subtitle')}>
          Truly open-source—built by the community, for the community.
        </p>
        <div className={styles.buttons}>
          <Link
            className='button button--secondary button--lg'
            to='/docs/intro'>
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
export default function Home(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="An open-source, 'Platform-in-a-Box' for building, deploying, and orchestrating production-ready AI agents.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
