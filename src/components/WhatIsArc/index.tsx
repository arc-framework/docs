import clsx from 'clsx';
import React from 'react';

import Heading from '@theme/Heading';

import styles from './styles.module.css';

export default function WhatIsArc(): React.JSX.Element {
  return (
    <section className={styles.section}>
      <div className='container'>
        <div className='text--center margin-bottom--xl'>
          <Heading as='h2' className={styles.mainHeading}>
            What is A.R.C.?
          </Heading>
          <p className={styles.subtitle}>
            <strong>A.R.C. (Agentic Reasoning Core)</strong> is a distributed
            intelligence orchestration engine—an open-source framework that
            transforms weeks of infrastructure setup into a single command.
          </p>
        </div>

        <div className={clsx('row', styles.conceptRow)}>
          <div className='col col--12'>
            <div className={styles.philosophyCard}>
              <div className={styles.philosophyContent}>
                <Heading as='h3' className={styles.philosophyTitle}>
                  The A.R.C. Philosophy
                </Heading>
                <p className={styles.philosophyText}>
                  Building AI agents shouldn't mean rebuilding the entire stack.
                  Most frameworks force you to choose: start from scratch or
                  accept vendor lock-in. A.R.C. rejects both paths.
                </p>
                <p className={styles.philosophyText}>
                  We provide the <strong>infrastructure foundation</strong> you
                  need—authentication, messaging, observability, and more—as
                  pre-integrated, production-ready services. Your job is to
                  build the <strong>intelligence layer</strong>, not wire up
                  databases and API gateways.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={clsx('row', styles.highlightRow)}>
          <div className='col col--4'>
            <div className={styles.valueCard}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>🏗️</span>
              </div>
              <Heading as='h4' className={styles.valueTitle}>
                Platform, Not Library
              </Heading>
              <p className={styles.valueText}>
                A.R.C. is a complete ecosystem. One CLI command scaffolds your
                entire platform with battle-tested open-source services working
                in harmony.
              </p>
            </div>
          </div>
          <div className='col col--4'>
            <div className={styles.valueCard}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>⚡</span>
              </div>
              <Heading as='h4' className={styles.valueTitle}>
                Minutes, Not Months
              </Heading>
              <p className={styles.valueText}>
                From idea to production deployment. Skip the infrastructure
                assembly and focus immediately on your agent's unique logic and
                capabilities.
              </p>
            </div>
          </div>
          <div className='col col--4'>
            <div className={styles.valueCard}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>🔧</span>
              </div>
              <Heading as='h4' className={styles.valueTitle}>
                Your Stack, Your Rules
              </Heading>
              <p className={styles.valueText}>
                Built on open standards. Every component is swappable. No
                proprietary cores, no vendor dependencies—just pure,
                unapologetic open source.
              </p>
            </div>
          </div>
        </div>

        <div className='row margin-top--lg'>
          <div className='col col--12'>
            <div className={styles.howItWorksCard}>
              <Heading as='h3' className={styles.howItWorksTitle}>
                How A.R.C. Works
              </Heading>
              <div className={styles.stepsContainer}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <strong>Interactive Scaffolding</strong>
                    <p>
                      The CLI guides you through a wizard, understanding your
                      platform's needs.
                    </p>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <strong>Smart Composition</strong>
                    <p>
                      A.R.C. generates a fully-configured project, composing
                      Docker services into a cohesive platform.
                    </p>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <strong>One-Command Launch</strong>
                    <p>
                      Your entire multi-service platform launches locally with a
                      single command. Infrastructure: done.
                    </p>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <strong>Build Intelligence</strong>
                    <p>
                      Focus exclusively on your agent's reasoning engine. The
                      plumbing is complete.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
