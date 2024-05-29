import React, { useEffect, useRef } from 'react';
// import '../styles/intro.css';
import { LinkArrow } from './Icons';
import Link from 'next/link';
import VideoComponent from './VideoIntro';

const AnimatedIntro = () => {
    

    return (
        <div className="w-full h-screen overscroll-contain">
            <VideoComponent />

            <div>
                <div className='absolute top-2/4 w-full h-full flex justify-around text-partnership font-mont font-bold'>
                    <p>Axxela 2023 <br /> Sustainability Report</p>
                    <h1 className='text-xl'>Empowering Today, Preserving Tomorrow: <br /> Sustainable Energy for Future Generations</h1>
                    <Link href="/about">Explore Report <LinkArrow className={"w-6 ml-1"} /> </Link>
                </div>
            </div>
            
        </div>
    );
};

export default AnimatedIntro;