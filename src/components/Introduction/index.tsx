import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';

import Heading from '@theme/Heading';

import styles from './styles.module.css';

const VALUES = [
  {
    icon: '🏗️',
    title: 'Platform, Not Library',
    description:
      'A.R.C. is a complete ecosystem. One CLI cmd build your entire platform with battle-tested open-source working in harmony.',
  },
  {
    icon: '⚡',
    title: 'Minutes, Not Months',
    description:
      "From idea to production deployment. Skip the infrastructure assembly and focus immediately on your agent's unique logic and capabilities.",
  },
  {
    icon: '🔧',
    title: 'Your Stack, Your Rules',
    description:
      'Built on open standards. Every component is swappable. No proprietary cores, no vendor dependencies—just pure, open source.',
  },
];

const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  },
  card: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  },
};

export default function Introduction(): React.JSX.Element {
  return (
    <section className={styles.section}>
      <div className='container'>
        <div className='text--center'>
          <Heading as='h2' className={styles.mainHeading}>
            What is A.R.C.?
          </Heading>
          <p className={styles.subtitle}>
            <strong>A.R.C. (Agentic Reasoning Core)</strong> is a distributed
            intelligence orchestration engine—an open-source framework that
            transforms weeks of infrastructure setup into a single command.
          </p>
          <motion.div
            className={clsx('row', styles.highlightRow)}
            variants={ANIMATION_VARIANTS.container}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-100px' }}>
            {VALUES.map((value, index) => (
              <div key={index} className='col col--4'>
                <motion.div variants={ANIMATION_VARIANTS.card}>
                  <div className={styles.valueCard}>
                    <div className={styles.iconWrapper}>
                      <span className={styles.icon}>{value.icon}</span>
                    </div>
                    <Heading as='h4' className={styles.valueTitle}>
                      {value.title}
                    </Heading>
                    <p className={styles.valueText}>{value.description}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
