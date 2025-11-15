import clsx from 'clsx';
import React from 'react';

import Heading from '@theme/Heading';

import styles from './styles.module.css';

type UseCaseItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: string;
};

const USE_CASES: UseCaseItem[] = [
  {
    title: 'Build AI Agents',
    Svg: require('./undraw_artificial_intelligence.svg').default,
    description:
      'Leverage A.R.C. to create sophisticated AI agents that can reason, learn, and interact with the world.',
  },
  {
    title: 'Scalable AI Platforms',
    Svg: require('./undraw_server_cluster.svg').default,
    description:
      'Use A.R.C. as the foundation for your own AI platforms, providing a robust and scalable environment for development.',
  },
  {
    title: 'Intelligent Automation',
    Svg: require('./undraw_automation.svg').default,
    description:
      "Automate complex workflows and processes with intelligent agents built on top of A.R.C.'s distributed architecture.",
  },
];

function UseCase({ title, Svg, description }: UseCaseItem) {
  return (
    <div className='col col--4'>
      <div className={clsx('card', styles.useCaseCard)}>
        <div className='card__header'>
          <div className='text--center'>
            <Svg className={styles.useCaseSvg} role='img' />
          </div>
          <Heading as='h3'>{title}</Heading>
        </div>
        <div className='card__body'>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function UseCases(): React.JSX.Element {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className='container'>
        <div className='row'>
          <div className='col col--12 text--center margin-bottom--lg'>
            <Heading as='h3' className={styles.sectionSubtitle}>
              Powerful Use Cases
            </Heading>
            <p className={styles.subtitle}>
              See how A.R.C. powers real-world applications
            </p>
          </div>
        </div>
        <div className='row'>
          {USE_CASES.map((item, idx) => (
            <UseCase key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
