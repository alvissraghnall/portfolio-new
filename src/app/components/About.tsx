'use client';
import Image from 'next/image';
import { useState } from 'react';
import {motion} from 'framer-motion';
import { urlFor } from '@/sanity-client';
import Wrapper from './Wrapper';
import MotionWrapper from './MotionWrapper';


export interface Props {
  abouts: {
    title: string,
    description: string,
    image: string
  }[]
}

function About ({ abouts }: Props) {
  return (
    <div className="flex-col w-full flex-1 mt-9">
      <h2 className='font-bold text-center text-black/75 text-4xl capitalize 4xl:text-6xl max-xs:text-3xl '>
        Here to create 
        <span className='text-secondary'> Excellent Builds </span> <br />
        for you {' '}
        <span className='text-secondary'>and your organization</span>
      </h2>

      <div className="flex justify-center items-start flex-wrap mt-8">
        {
          abouts.map(
            (about, idx) => <motion.div 
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: .5, type: 'tween' }}
              className='w-48 flex flex-col items-start justify-start m-8 4xl:w-96 4xl:my-8 4xl:mx-16'
              key={idx}
            >
              <Image 
                className='object-cover w-full h-40 rounded-2xl 4xl:h-80' 
                src={urlFor(about.image).url()} 
                alt={about.title} 
                height={160}
                sizes='(min-width: 2000px) 320px'
                width={0}
              />
              <h2 className="text-base font-bold text-deep-black text-left 4xl:text-4xl max-sm:text-sm mt-5">
                { about.title }
              </h2>
              <p className="paragraph mt-2.5">
                { about.description }
              </p>
            </motion.div>
          )
        }
      </div>
    </div>
  )
}

export default Wrapper(
  MotionWrapper(About), "about",  "bg-blanc/90"
);