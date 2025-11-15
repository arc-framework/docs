import { motion } from 'framer-motion';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { HiCube } from 'react-icons/hi';
import { IoRocketSharp } from 'react-icons/io5';
import { RiBrainFill } from 'react-icons/ri';
import { TbWand } from 'react-icons/tb';

import Heading from '@theme/Heading';

import styles from './styles.module.css';

const WORKFLOW_STEPS = [
  {
    icon: <TbWand />,
    title: '1. Design Your Agent',
    description:
      "Define your agent's capabilities, context windows, and reasoning patterns using A.R.C.'s declarative configuration—no infrastructure setup required.",
    meta: 'Capabilities & reasoning',
    label: 'Focus',
  },
  {
    icon: <HiCube />,
    title: '2. Orchestrate Services',
    description:
      'A.R.C. automatically provisions your tech stack—message queues, databases, observability tools—all pre-configured and working together seamlessly.',
    meta: 'Pre-configured stack',
    label: 'Benefit',
  },
  {
    icon: <RiBrainFill />,
    title: '3. Implement Intelligence',
    description:
      "Focus on your agent's unique logic while A.R.C. handles state management, context persistence, and distributed coordination across your agent network.",
    meta: 'Logic over plumbing',
    label: 'Approach',
  },
  {
    icon: <IoRocketSharp />,
    title: '4. Deploy & Scale',
    description:
      'Ship to production with built-in monitoring, tracing, and scaling capabilities. Your agents run reliably from day one—no DevOps expertise needed.',
    meta: 'Production-ready instantly',
    label: 'Result',
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

export default function Workflow(): React.JSX.Element {
  return (
    <section className={styles.section}>
      <div className='container'>
        <div className='row'>
          <div className='col col--12 text--center margin-bottom--lg'>
            <Heading as='h3' className={styles.sectionSubtitle}>
              The A.R.C. Journey
            </Heading>
            <p className={styles.subtitle}>
              From design to deployment in four steps
            </p>
          </div>
          <div className='col col--12'>
            <motion.div
              className={styles.stepperContainer}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, margin: '-100px' }}
              variants={ANIMATION_VARIANTS.container}>
              <div className={styles.stepper}>
                {WORKFLOW_STEPS.map((step, index) => (
                  <React.Fragment key={index}>
                    <motion.div
                      className={styles.stepperItem}
                      variants={ANIMATION_VARIANTS.card}>
                      <div className={styles.stepNumber}>{step.icon}</div>
                      <div className={styles.stepContent}>
                        <Heading as='h4' className={styles.stepTitle}>
                          {step.title}
                        </Heading>
                        <p className={styles.stepDescription}>
                          {step.description}
                        </p>
                        <div className={styles.stepMeta}>
                          <strong>{step.label}:</strong> {step.meta}
                        </div>
                      </div>
                    </motion.div>
                    {index < WORKFLOW_STEPS.length - 1 && (
                      <motion.div
                        className={styles.stepperArrow}
                        variants={ANIMATION_VARIANTS.card}>
                        <FiArrowRight />
                      </motion.div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
