import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>

    <section className='flex w-full justify-center min-h-[50px] relative rounded-inherit box-border max-w-none bg-white border'>
      <div className='flex-auto w-full'>
        <div className='flex flex-wrap flex-row w-full mx-auto my-0 min-h-12 justify-between'>
          <div className='flex relative flex-col grow shrink max-h-full box-border text-center justify-center bg-partnership border-solid border-black border-0 basis-[calc(33.3333%+0px)] max-w-[calc(33.3333%+0px)] md:grow-0 md:shrink-0 md:order-3 md:basis-[calc(100%+0px)] md:max-w-[calc(100%+0px)]sm:grow-0 sm:shrink-0 sm:basis-[calc(100%+0px)] sm:max-w-[calc(100%+0px)]'>

            <div className='flex flex-1 items-center justify-center py-[69px] pl-[3.55114vw] pr-[3.55114vw] md:py-[59px] md:pl-[3.125vw] md:pr-[3.125vw] sm:py-[39px] sm:pl-[6.4vw] sm:pr-[6.4vw] rounded-[inherit]'>
              <div>
                <Link href='./' className='inline-block mb-[0.55em]'>
                  <div class="relative inline-block transition-all duration-300 ease-in-out w-fit shadow-[rgba(0,0,0,0.3)_0px_0px_0px] rounded-md text-white border border-white px-5 py-3 bg-transparent font-mont font-semibold">
                    Previous page
                  </div>

                </Link>
              </div>

            </div>

          </div>

          <div className='flex relative flex-col grow shrink max-h-full box-border text-center justify-center bg-background border-solid border-black border-0 basis-[calc(33.3333%+0px)] max-w-[calc(33.3333%+0px)] md:grow-0 md:shrink-0 md:order-2 md:basis-[calc(100%+0px)] md:max-w-[calc(100%+0px)]sm:grow-0 sm:shrink-0 sm:basis-[calc(100%+0px)] sm:max-w-[calc(100%+0px)]'>

          </div>

          <div className='flex relative flex-col grow shrink max-h-full box-border text-center justify-center bg-growth border-solid border-black border-0 basis-[calc(33.3333%+0px)] max-w-[calc(33.3333%+0px)] md:grow-0 md:shrink-0 md:order-1 md:basis-[calc(100%+0px)] md:max-w-[calc(100%+0px)]sm:grow-0 sm:shrink-0 sm:basis-[calc(100%+0px)] sm:max-w-[calc(100%+0px)]'>

          </div>


        </div>

      </div>

    </section>
    
    
    
    
    </>
  )
}

export default Footer