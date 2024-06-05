import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Layout from '@/components/Layout';
import Paginator from '@/components/Paginator';
import Hero from '@/components/Hero';

import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';

const anitext = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: 'easeInOut',
      delay: 0.8,
    },
  },
};

const highPoints = () => {
  return (
    <>
      <Head>
        <title>Axxela 2023 Sustainability Report | 2023 High Points</title>
        <meta
          name="description"
          content="Axxela 2023 Interactive Sustainability Report"
        />
      </Head>
      <TransitionEffect />

      <Paginator prevLink="/weAreAxxela" nextLink="/environmentalStewardship" />

      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout>
          <Hero
            text="High Points of 2023"
            backgroundImage="/images/content/high_points.jpeg"
          />

          <Footer
            prevLink="/weAreAxxela"
            nextLink="/environmentalStewardship"
          />
        </Layout>
      </main>
    </>
  );
};

export default highPoints;
