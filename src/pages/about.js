import React from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import Layout from '@/components/Layout'
import Paginator from '@/components/Paginator'
import Hero from '@/components/Hero'

const about = () => {
  return (

    <>

        <Head>
          <title>Axxela 2023 Sustainability Report | About this Report</title>
          <meta name="description" content="Axxela 2023 Interactive Sustainability Report" /> 
        </Head>

        <Paginator prevLink="./" nextLink="/contents" />

        <main className='flex items-center text-dark w-full min-h-screen'>
          
          <Layout>
            
              <Hero text="About this Report" backgroundImage="/images/content/about_this_report.jpg" />
              

            
            
            
              <Footer prevLink="./" nextLink="/contents" />
            
            
          </Layout>

          
          

        
          

        
            

            
          

        </main>

      
    
    </>
    
  )
}

export default about