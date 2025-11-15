import clsx from 'clsx';
import React from 'react';

import Heading from '@theme/Heading';

import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: React.JSX.Element;
};

const FEATURE_LIST: FeatureItem[] = [
  {
    title: 'Truly Open-Source',
    Svg: require('./undraw_open_source.svg').default,
    description: (
      <>
        100% of our core stack is FOSS (Apache 2.0, MIT, MPL). No BSL, no
        source-available, no non-compete clauses.
      </>
    ),
  },
  {
    title: 'Platform-in-a-Box',
    Svg: require('./undraw_container.svg').default,
    description: (
      <>
        A.R.C. provides foundational services like auth, messaging, and
        observability out of the box, so you can focus on building.
      </>
    ),
  },
  {
    title: 'Modular & Pluggable',
    Svg: require('./undraw_version_control.svg').default,
    description: (
      <>
        Built on open standards, A.R.C. is designed to be flexible and
        extensible, allowing you to bring your own tools.
      </>
    ),
  },
  {
    title: 'Polyglot Architecture',
    Svg: require('./undraw_polyglot.svg').default,
    description: (
      <>
        Best of all worlds: high-performance Go CLI and gateway, powerful Python
        AI ecosystem. Use the right tool for each job.
      </>
    ),
  },
  {
    title: 'Cloud-Native',
    Svg: require('./undraw_cloud_native.svg').default,
    description: (
      <>
        Built with cloud-native patterns, fully containerized, horizontally
        scalable, and ready for any deployment environment.
      </>
    ),
  },
  {
    title: 'Event-Driven',
    Svg: require('./undraw_event_driven.svg').default,
    description: (
      <>
        Durable streaming with Apache Pulsar and ephemeral messaging with NATS
        for real-time, distributed intelligence.
      </>
    ),
  },
  {
    title: 'Distributed Intelligence',
    Svg: require('./undraw_connected_world.svg').default,
    description: (
      <>
        A.R.C. is the scalable backbone for creating and orchestrating powerful
        AI agents and intelligent systems.
      </>
    ),
  },
  {
    title: 'Stateful Agents',
    Svg: require('./undraw_stateful.svg').default,
    description: (
      <>
        Long-term memory and persistence with PostgreSQL + pgvector for agents
        that remember and learn over time.
      </>
    ),
  },
  {
    title: 'Self-Hosted',
    Svg: require('./undraw_self_hosted.svg').default,
    description: (
      <>
        Complete control over your data and infrastructure. Privacy-first with
        no vendor lock-in or external dependencies.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureItem)}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <Heading as='h3'>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Features(): React.JSX.Element {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          <div className='col col--12 text--center margin-bottom--lg'>
            <Heading as='h3' className={styles.sectionSubtitle}>
              Why Choose A.R.C.?
            </Heading>
            <p className={styles.subtitle}>
              The complete platform for building production-ready AI agents
            </p>
          </div>
        </div>
        <div className='row'>
          {FEATURE_LIST.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
