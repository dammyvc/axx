import React from 'react'
import Link from 'next/link'

const Paginator = ({ prevLink, nextLink }) => {
  return (

    
        
            <div className='flex fixed z-10 right-[30px] bottom-[45%] flex-col justify-center h-[90px] text-[24px] transition-opacity duration-300 ease-linear opacity-100 sm:bottom-[60px] sm:flex-row sm:h-0'>
                <Link href={prevLink}>
                    <div className='flex p-[9px] pt-[9px] pr-[8px] pb-[8px] pl-[9px] items-center opacity-100 cursor-pointer pointer-events-auto rounded-t-[20px] rounded-b-none bg-vision text-partnership sm:rounded-tl-[2px] sm:rounded-tr-none sm:rounded-br-none sm:rounded-bl-[2px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                    
                    </div>
                </Link>

                <Link href={nextLink}>
                    <div className='flex p-[9px] pt-[9px] pr-[8px] pb-[8px] pl-[9px] items-center opacity-100 cursor-pointer pointer-events-auto rounded-t-none rounded-b-[20px] bg-vision text-partnership sm:rounded-tl-none sm:rounded-tr-[2px] sm:rounded-br-[2px] sm:rounded-bl-none '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    
                    </div>
                </Link>

            </div>

        
    
   
    
  )
}

export default Paginator