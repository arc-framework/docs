import React from 'react';

import CallToAction from '@site/src/components/CallToAction';
import Comparison from '@site/src/components/Comparison';
import Features from '@site/src/components/Features';
import Hero from '@site/src/components/Hero';
import Introduction from '@site/src/components/Introduction';
import UseCases from '@site/src/components/UseCases';
import Workflow from '@site/src/components/Workflow';
import Layout from '@theme/Layout';

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title='Home'
      description="An open-source, 'Platform-in-a-Box' for building, deploying, and orchestrating production-ready AI agents.">
      <Hero />
      <main>
        <Introduction />
        <Features />
        <Workflow />
        <Comparison />
        <UseCases />
        <CallToAction />
      </main>
    </Layout>
  );
}
