'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

function Header() {
    const [sidebar, setSidebar] = useState(false);
    return (
        <header className='w-full py-4 px-8 bg-white/25 blur-[4] border border-solid md:fixed z-[2] border-slate-50/20'>
            <nav className='items-center justify-between flex'>
                <div className="flex justify-start items-center">
                    <Image src="/assets/logo.png" width={128} height={77} alt="logo" className='2xl:w-48 2xl:h-10 w-24 h-12' />
                    <span className='font-bold text-base font-mono -ml-3'>Alviss</span>
                </div>
                <ul className="flex-1 justify-center items-center list-none hidden lg:flex">
                    {
                        ['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item, index) => (
                            <li key={`link-${index}`} className='centered-flex paragraph my-0 mx-4 cursor-pointer flex-col group'>
                                <div className='w-1.5 h-1.5 bg-transparent rounded-full mb-1.5 group-hover:bg-secondary ' />
                                <a href={`#${item.toLowerCase()}`} className='text-normal-gray flex-col uppercase font-medium transition-all duration-300 ease-in-out hover:text-secondary no-underline'>{item}</a>
                            </li>
                        ))
                    }
                </ul>

                <div className="w-8 h-8 rounded-full relative centered-flex bg-secondary lg:hidden float-right">
                    <HiMenuAlt4 className='cursor-pointer w-2/3 h-2/3 text-blanc' onClick={() => setSidebar(true)} />
                    <AnimatePresence>
                    {
                        sidebar && (
                            <>
                            <motion.div
                                initial={{ x: "100%"}}
                                exit={{ x: "100%"}}
                                animate={{ x: 0 }}
                                transition={{ type: "spring", bounce: 0, duration: 0.67, ease: 'easeInOut' }}
                                className='fixed top-0 bottom-0 right-0 z-[5] p-4 w-4/5 h-screen flex justify-end items-end flex-col bg-blanc bg-cover bg-[url("/assets/sidebar.png")] bg-repeat shadow-sm shadow-[#d8aaaa26]'
                            >
                                <HiX onClick={() => setSidebar(false)} className='w-8 h-8 text-secondary my-2 mx-4 cursor-pointer' />
                                <ul className='list-none m-0 p-0 h-full w-full flex justify-start items-start flex-col space-y-4'>
                                    {
                                        ['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item, index) => (
                                            <li key={index}>
                                                <a onClick={() => setSidebar(false)} href={`#${item.toLowerCase()}`} className='text-normal-gray flex-col uppercase font-medium text-base transition-all duration-300 ease-in-out hover:text-secondary no-underline'>{item}</a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0}}
                                animate={{ opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{ type: "spring", bounce: 0, duration: 0.67, ease: 'easeInOut' }}
                                className="bg-transparent px-5 fixed h-full w-full flex items-center justify-center top-0 left-0"
                                onClick={() => setSidebar(!sidebar)}
                            />
                            </>
                        )
                    }
                    </AnimatePresence>
                </div>
            </nav>
        </header>
    )
}

export default Header