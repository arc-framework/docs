import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { HiOutlineX } from 'react-icons/hi';

import Heading from '@theme/Heading';

import styles from './styles.module.css';

const TRADITIONAL_APPROACH = [
  '⏰ Days of infrastructure setup',
  '🔧 Manual service integration',
  '🔒 Vendor lock-in risks',
  '🐛 Complex debugging process',
  '📈 Scaling challenges',
  '👓 Limited observability',
  '💸 High maintenance costs',
  '📚 Steep learning curve',
];

const ARC_APPROACH = [
  '⚡ Single command deployment',
  '🔗 Pre-integrated services',
  '🆓 Open source freedom',
  '🔍 Built-in debugging tools',
  '🚀 Auto-scaling infrastructure',
  '📊 Full observability',
  '💰 Cost-effective solution',
  '🎯 Production-ready instantly',
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

export default function Comparison(): React.JSX.Element {
  return (
    <section className={styles.section}>
      <div className='container'>
        <div className='row'>
          <div className='col col--12 text--center margin-bottom--lg'>
            <Heading as='h3' className={styles.sectionSubtitle}>
              Traditional vs A.R.C.
            </Heading>
            <p className={styles.subtitle}>See the difference in approaches</p>
          </div>
          <motion.div
            className={styles.cardsWrapper}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-100px' }}
            variants={ANIMATION_VARIANTS.container}>
            <div className={styles.cardColumn}>
              <motion.div variants={ANIMATION_VARIANTS.card}>
                <div className={clsx(styles.splitCard, styles.beforeCard)}>
                  <div className={styles.splitCardHeader}>
                    <HiOutlineX className={styles.splitIcon} />
                    <Heading as='h3'>Other Way</Heading>
                  </div>
                  <div className={styles.splitCardBody}>
                    <ul className={styles.splitList}>
                      {TRADITIONAL_APPROACH.map((item, index) => (
                        <li key={index}>
                          <HiOutlineX className={styles.listIcon} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className={styles.splitCardFooter}>
                      <strong>Timeline:</strong> Days of setup before production
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className={styles.cardColumn}>
              <motion.div variants={ANIMATION_VARIANTS.card}>
                <div className={clsx(styles.splitCard, styles.afterCard)}>
                  <div className={styles.splitCardHeader}>
                    <FiCheckCircle className={styles.splitIcon} />
                    <Heading as='h3'>The A.R.C. Way</Heading>
                  </div>
                  <div className={styles.splitCardBody}>
                    <ul className={styles.splitList}>
                      {ARC_APPROACH.map((item, index) => (
                        <li key={index}>
                          <FiCheckCircle className={styles.listIcon} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className={styles.splitCardFooter}>
                      <strong>Timeline:</strong> Production-ready in minutes
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
