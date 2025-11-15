import clsx from 'clsx';
import React from 'react';

import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

export default function GettingStarted(): React.JSX.Element {
  return (
    <section className={styles.section}>
      <div className='container'>
        <Heading as='h2' className='text--center margin-bottom--lg'>
          Get Up and Running in Minutes
        </Heading>
        <div className='row'>
          <div className={clsx('col col--6', styles.gettingStartedCol)}>
            <div className={clsx('card', styles.gettingStartedCard)}>
              <div className='card__header'>
                <Heading as='h3'> Explore the Docs</Heading>
              </div>
              <div className='card__body'>
                <p>
                  Follow our guides to understand the core concepts and start
                  building your own intelligent systems.
                </p>
                <Link
                  className={clsx(
                    'button button--primary button--lg',
                    styles.docButton
                  )}
                  to='/docs/intro'>
                  Explore Documentation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
