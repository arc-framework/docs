import clsx from 'clsx';

import Heading from '@theme/Heading';

import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: React.JSX.Element;
};

const FeatureList: FeatureItem[] = [
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
    Svg: require('./undraw_product_box.svg').default,
    description: (
      <>
        Get auth, secrets, messaging, and observability out of the box, not as
        an afterthought. Batteries included.
      </>
    ),
  },
  {
    title: 'Modular & Pluggable',
    Svg: require('./undraw_building_blocks.svg').default,
    description: (
      <>
        Built on open standards like OpenFeature and OpenTelemetry, so you're
        never locked into a single vendor.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
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

export default function HomepageFeatures(): React.JSX.Element {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
