"use client";
import Image from "next/image";
import Wrapper from "./Wrapper";
import { AnimatePresence, motion } from "framer-motion";
import { urlFor } from "@/sanity-client";
import MotionWrapper from "./MotionWrapper";

type Props = {
  skills: {
    name: string,
    icon: string,
    // backgroundColor: string
  }[],
  experiences: {
    year: number,
    works: {
      name: string,
      company: string,
      description: string,
    }[]
  }[]
}

function Skills({ skills, experiences }: Props) {
  return (
    <section className="flex flex-1 w-full flex-col">
      <h2 className="text-4xl font-bold text-center text-black/80 capitalize 4xl:text-[4rem] max-xs:text-[1.8rem]">
        Skills & Experience
      </h2>
      <AnimatePresence>
        <div className="container w-4/5 mt-12 flex flex-row max-[920px]:w-full max-[920px]:flex-col">
          <motion.div
            className="flex-1 flex flex-wrap justify-start items-start mr-20 max-[920px]:mr-0 max-[920px]:justify-center max-[920px]:items-center"
          >
            {
              skills.map(
                (skill, idx) => (
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: .3, ease: "easeInOut" }}
                    whileHover={{ opacity: [1, .89], transition: { duration: .34, ease: "easeOut" } }}
                    key={idx}
                    className="centered-flex flex-col text-center m-4 4xl:my-4 4xl:mx-8 cursor-pointer"
                  >
                    <div
                      className="centered-flex w-24 h-24 rounded-full bg-[#e9e0e1] hover:shadow-lg hover:shadow-[#fef4f5] 4xl:w-40 4xl:h-40 max-xs:w-16 max-xs:h-16"
                    >
                      <Image
                        width={200}
                        height={200}
                        src={urlFor(skill.icon).url()}
                        alt={skill.name}
                        className="w-2/4 h-1/2"
                      />
                    </div>

                    <p className="paragraph font-medium mt-2 4xl:mt-4">
                      {skill.name}
                    </p>
                  </motion.div>
                )
              )
            }
          </motion.div>

          <motion.div
            className="flex flex-1 justify-start items-start flex-col max-[900px]:mt-8"
          >
            {
              experiences.map(
                (exp, idx) => (
                  <motion.div
                    className="w-full flex flex-row justify-start items-start my-4 mx-0"
                    key={exp.year + idx}
                  >
                    <div className="mr-12 max-xs:mr-4">
                      <p className="text-base text-left 4xl:text-4xl max-xs:text-sm text-secondary font-bold">{exp.year}</p>
                    </div>

                    <motion.div
                      className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8"
                    >
                      {
                        exp.works.map(
                          (work, idx) => (
                            <div
                              className="py-5"
                              key={work.name + " " + idx}
                            >
                              <details className="group">
                                <motion.summary 
                                  whileInView={{ opacity: [0, 1] }}
                                  transition={{ duration: .5 }} 
                                  className="flex justify-between items-center font-medium cursor-pointer list-none"
                                >
                                  <div className="flex flex-col justify-start items-start gap-2"> 
                                    <h4 className="text-base text-left 4xl:text-4xl max-xl:text-2xl max-xs:text-sm text-neutral-800 font-medium">{work.name}</h4>
                                    <p className="paragraph font-normal text-normal-gray mt-1.5">{work.company}</p>
                                  </div>
                                  <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                  </span>
                                </motion.summary>
                                <motion.p animate={{ opacity: [0, .4, 1] }} transition={{ duration: .3, ease: 'easeInOut', }} className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                  {work.description}
                                </motion.p>
                              </details>
                              {/* <motion.div
                                whileInView={{ opacity: [0, 1] }}
                                transition={{ duration: .5 }}
                                className="flex flex-col justify-start items-start mb-4 cursor-pointer peer"
                              >
                                <h4 className="text-base text-left 4xl:text-4xl max-xs:text-sm text-neutral-800 font-medium">{work.name}</h4>
                                <p className="paragraph font-normal text-normal-gray mt-1.5">{work.company}</p>
                              </motion.div>

                              // <button data-tooltip-target="tooltip-top" data-tooltip-placement="top" type="button" className="mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tooltip top</button>
                              <motion.div animate={{ opacity: [0, .4, 1] }} transition={{ duration: .3, ease: 'easeInOut', }} role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-200 bg-gray-900 opacity-0 -translate-x-1/2 translate-y-full m-4 mx-auto group-hover:opacity-75 group-hover:visible max-w-xs shadow-md rounded p-4 leading-[1.5] 4xl:text-2xl 4xl:max-w-lg 4xl:leading-[2] -top-[14rem] left-[6rem] right-0 md:min-w-[15rem] 2xl:left-[90%] lg:left-[80%] max-[630px]:left-0 max-[630px]:-top-[20rem]">
                                {work.description}
                                <div className="bg-inherit h-2 w-2 absolute invisible before:content-none before:visible before:rotate-45 -bottom-1 before:border-[#e5e7eb] before:border-solid after:border-[#4b5563] before:border-b-[1px] before:border-[1px] after:border-solid" data-popper-arrow></div>
                              </motion.div> */}
                            </div>
                          )
                        )
                      }

                    </motion.div>
                  </motion.div>
                )
              )
            }

          </motion.div>
        </div>
      </AnimatePresence>
    </section>
  )
}

export default Wrapper(
  MotionWrapper(Skills),
  Skills.name.toLowerCase(),
  "bg-blanc/95"
);
