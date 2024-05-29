import AnimatedIntro from '@/components/AnimatedIntro'
import Head from 'next/head'




export default function Home() {
  return (
    <>
      <Head>
        <title>Axxela 2023 Sustainability Report</title>
        <meta name="description" content="Axxela 2023 Interactive Sustainability Report" /> 
      </Head>
      <main>
        <AnimatedIntro />
        
      </main>
    </>
  )
}
