"use client";

import { AnimatePresence, VariantLabels, Variants, motion } from "framer-motion"
import Image from "next/image";
import { SiTypescript } from "react-icons/si";
import { DiAngularSimple, DiIntellij, DiReact } from "react-icons/di";
import Wrapper from "./Wrapper";
import { urlFor } from "@/sanity-client";

const variants: Variants = {
    whileInView: {
        scale: [0,1],
        opacity: [0,1],
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}

type Props = {
    me: {
        image: string
    }[]
}

function Intro ({ me }: Props) {
    return (
        <div className="centered-flex relative bg-[url('/assets/bgIMG.png')] bg-cover bg-repeat bg-center flex-1 flex-col w-full h-full pt-24 pb-8 xs:pb-0 px-4 xs:px-8 xl:flex-row 4xl:pt-32">

        <AnimatePresence>
            <motion.div
                animate={{ x: [-1000, 0], opacity: [0,1] }}
                transition={{ duration: .8, ease: 'easeInOut' }}
                className="flex-[.65] flex flex-col justify-start items-start h-full max-4xl:w-full max-4xl:mr-0"
            >
                <div className="w-full flex justify-end items-start flex-col">
                    <div className="centered-flex py-4 px-8 border-blanc rounded-2xl flex-row w-auto shadow">
                        <motion.span 
                            className="text-3xl max-4xl:text-7xl max-xl:justify-start max-xl:items-start inline-block pr-11 -mr-11 pb-5 -mb-5"
                            animate={{ rotate: 20 }}
                            transition={{
                                repeatType: 'reverse',
                                repeat: Infinity,
                                from: 0,
                                duration: .2,
                                type: 'tween',
                                ease: 'easeInOut'
                            }}
                        >
                            👋
                        </motion.span>
                        <div className="ml-5">
                            <p className="paragraph">Hello, I am</p>
                            <h1 className="sm:text-5xl text-3xl font-extrabold text-center text-deep-black capitalize 2xl:text-6xl">
                                Alviss
                            </h1>
                        </div>
                    </div>

                    <div className="centered-flex py-4 px-8 border-blanc rounded-2xl flex-col mt-12 w-auto shadow ">
                        <p className="paragraph w-full uppercase text-right">Web Developer</p>
                        <p className="paragraph w-full uppercase text-right">Blockchains Enthusiast</p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                whileInView={{opacity: [0,1]}}
                transition={{ duration: .5, delayChildren: .4}}
                className="flex-1 h-full flex justify-end items-end relative"
            >
                <Image 
                    src={urlFor(me[0].image).url()} 
                    alt="Profile Image" 
                    className="w-full z-[1] object-contain rounded-full translate-x-[5px] -translate-y-[1px] 3xl:translate-x-[7px] 3xl:-translate-y-[-4px]" 
                    width={550}
                    height={550}
                />
                <motion.img 
                    whileInView={{ scale: [0,1]}}
                    src="/assets/circle.svg"
                    className="absolute left-0 right-0 bottom-0 z-0 w-full h-5/6"
                    transition={{ duration: 1, ease: 'easeInOut' }}
                />
            </motion.div>

            <motion.div
                variants={variants}            
                whileInView={variants.whileInView as VariantLabels}
                className="justify-evenly items-start flex flex-col flex-[.75] ml-4 h-full max-xl:flex-wrap max-xl:w-full max-xl:flex-row max-xl:ml-0"
            >
                {
                    [DiReact, DiAngularSimple, SiTypescript].map(
                        (circle, idx) => {
                            const Icon = circle;
                            return (
                            <div className="centered-flex w-full h-full rounded-full bg-blanc shadow max-sm:max-w-[3rem] max-sm:max-h-[3rem] odd:w-24 odd:h-24 even:m-7 even:w-36 even:h-36 last:h-28 last:w-28 4xl:first:w-96 4xl:first:h-96 4xl:last:w-48 4xl:last:h-48 4xl:even:w-44 4xl:even:h-44 max-xl:m-4 first:text-blue-500 even:text-rose-700 last:text-blue-700" key={idx}>
                                <span className="w-3/5 h-3/5">
                                    <Icon className="w-full h-full" />
                                </span>
                            </div>
                        )
                        }
                    )
                }
            </motion.div>
        </AnimatePresence>
        </div>
    )
}

export default Wrapper(Intro, 'home');