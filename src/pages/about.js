import React from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import Layout from '@/components/Layout'

const about = () => {
  return (

    <>

        <Head>
          <title>Axxela 2023 Sustainability Report | About this Report</title>
          <meta name="description" content="Axxela 2023 Interactive Sustainability Report" /> 
        </Head>

        <main className='flex items-center text-dark w-full min-h-screen'>
          <Layout className='pt-0'>
            <div>about</div>
            
            <Footer />

          </Layout>
          

        
          

        
            

            
          

        </main>

      
    
    </>
    
  )
}

export default about