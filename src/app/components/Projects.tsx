"use client";

import { motion } from "framer-motion";
import Wrapper from "./Wrapper";
import { useState } from "react";
import { HiEye } from "react-icons/hi";
import Image from "next/image";
import { urlFor } from "@/sanity-client";
import Link from "next/link";
import { DiGithubBadge, DiGithubFull } from "react-icons/di";
import MotionWrapper from "./MotionWrapper";

type Props = {
  projects: {
    projectLink: string,
    codeLink: string,
    image: string,
    description: string,
    title: string,
    name: string,
    tags: string[]
  }[]

}

function Projects({ projects }: Props) {
  const [activeFilterItem, setActiveFilterItem] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterProject, setFilterProject] = useState<Props["projects"]>(projects);

  const handleFilter = (item: string) => {
    setActiveFilterItem(item);
    setAnimateCard({
      y: 100, opacity: 0
    });

    setTimeout(() => {
      setAnimateCard({
        y: 0, opacity: 1
      });

      if (item === 'All') setFilterProject(projects);
      else setFilterProject(filterProject.filter(proj => proj.tags.includes(item)))
    }, 500);
  }

  return (
    <section className="flex-1 w-full flex-col bg-primary">
      <h2 className='font-bold text-4xl text-center text-black/75 capitalize 4xl:text-6xl max-xs:text-3xl '>
        My Projects <br />
      </h2>

      <div className="flex flex-row justify-center items-center flex-wrap my-12 mx-0">
        {
          ["React", "Svelte", "Java", "Typescript", "Vue.js", "Frontend", "Backend", "All"]
            .map((item, index) => (
              <div
                key={index}
                onClick={() => handleFilter(item)}
                className={`py-2 px-4 rounded-lg bg-white font-bold cursor-pointer transition-all duration-300 ease-in m-2 hover:bg-secondary hover:text-white/80 4xl:py-4 4xl:rounded-xl paragraph centered-flex ${activeFilterItem === item && 'bg-secondary text-white/80'}`}
              >
                {item}
              </div>
            )
            )
        }
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: .5, delayChildren: .5 }}
        className="flex flex-wrap justify-center items-center"
      >
        {
          filterProject.map(
            (proj, index) => (
              <div 
                key={index}
                className="w-[25rem] h-[23rem] flex-col m-8 p-4 rounded-lg bg-white/95 text-neutral-950 centered-flex cursor-pointer transition-all duration-300 ease-out hover:shadow-lg hover:shadow-black/20 4xl:w-[450px] 4xl:p-3 4xl:rounded-xl max-[300px]:w-full max-[300px]:m-4"
              >
                <div className="w-full h-56 relative centered-flex 4xl:h-80">
                  <Image 
                    width={400}
                    height={400}
                    src={urlFor(proj.image).url()}
                    alt={proj.name}
                    className="w-full h-full rounded-lg object-cover"
                  />
                  <motion.div
                    whileHover={{ opacity: [0,1] }}
                    transition={{ 
                      duration: .25,
                      ease: 'easeInOut',
                      staggerChildren: .5
                    }}
                    className="proj-hover absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-black/50 rounded-lg opacity-0 centered-flex"
                  >
                    <Link
                      href={proj.projectLink}
                      target="_blank"
                      rel="noreferrer"
                      className=""
                    >
                      <motion.div
                        whileHover={{ scale: [1,.87] }}
                        whileInView={{ scale: [0,1] }}
                        transition={{ 
                          duration: .25,
                        }}
                        className="centered-flex w-12 h-12 rounded-full bg-black/50 text-white/95 m-4 font-bold cursor-pointer font-sans transition-all duration-300 ease-in-out"
                      >
                        <HiEye
                          className="w-1/2 h-1/2 text-blanc"
                        />
                      </motion.div>
                    </Link>

                    <Link
                      href={proj.codeLink}
                      target="_blank"
                      rel="noreferrer"
                      className=""
                    >
                      <motion.div
                        whileHover={{ scale: [1, .9] }}
                        whileInView={{ scale: [0,1] }}
                        transition={{ 
                          duration: .25,
                        }}
                        className="centered-flex w-12 h-12 rounded-full bg-black/50 text-white/95 m-4 font-bold cursor-pointer font-sans transition-all duration-300 ease-in-out"
                      >
                        <DiGithubBadge
                          className="w-1/2 h-1/2 text-blanc"
                        />
                      </motion.div>
                    </Link>

                  </motion.div>
                </div>

                <div className="centered-flex p-2 w-full relative flex-col">
                  <h4 className="text-base font-bold text-black/75 text-left 4xl:text-4xl max-xs:text-sm mt-4 leading-[1.6]">{proj.title}</h4>
                  <p className="paragraph mt-2.5">
                      {proj.description}
                  </p>

                  <div className="centered-flex absolute bg-blanc py-2 px-4 rounded-lg -top-6">
                    <p className="paragraph">
                      {proj.tags[0]}
                    </p>
                  </div>
                </div>
              </div>
            )
          )
        }
      </motion.div>
    </section>
  )
}

export default Wrapper(MotionWrapper(Projects), "projects", "bg-primary");
