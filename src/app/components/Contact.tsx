'use client';

import { useState, type FocusEvent, type ChangeEvent, type FormEvent } from 'react'
import Wrapper from './Wrapper';
import MotionWrapper from './MotionWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity-client';
import { motion } from 'framer-motion';
import { Poppins } from "next/font/google";
import { validators } from '@/util';

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  style: 'normal',
  subsets: ['latin']
});


function Contact() {
  const spinner = <div className="flex centered-flex max-sm:p-2 space-x-3">

    <div className='relative w-8 h-8'>
      <motion.span 
        className='block w-8 h-8 border-[0.25rem] border-solid border-[#e9e9e9] border-t-[0.25rem] border-t-[#3498db] rounded-full absolute box-border top-0 left-0'
        animate={{
          rotate: 360
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
          repeatType: 'loop',
          type: 'tween'
        }}
        >

      </motion.span>
    </div>
    <span className='text-blanc/75'>Loading...</span>
  </div>
  const [formData, setFormData] = useState({
    name: {
      touched: false,
      error: true,
      value: ''
    },
    email: {
      touched: false,
      error: true,
      value: ''
    },
    message: {
      touched: false,
      error: true,
      value: ''
    },
  });
  type FormState = typeof formData;
  type FormStateField = keyof FormState;

  const setFieldValue = (field: string, value?: string | null, blur?: boolean | null) => setFormData(prevState => {
    console.log(value, blur, );
    return {
      ...prevState,
      [field]: {
        // ...prevState[field as keyof FormState],
        value: value ?? prevState[field as FormStateField]["value"],
        touched: blur ?? prevState[field as FormStateField]["touched"],
        error: !validators[field as FormStateField](value ?? prevState[field as FormStateField]["value"]) ? true : false
      }
    }
  });

  const handleInputChange = (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = ev.target;
    setFieldValue(name, value, false);
    console.log(formData);
  }

  const handleBlur = (ev: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = ev.target;
    setFieldValue(name, null, true);
  }

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChange = (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = ev.currentTarget;

    setFormData({
      ...formData,
      [name as keyof typeof formData]: {
        value,
      }
    });
  }

  const contact = {
    _type: 'contact',
    name: name.value,
    email: email.value,
    message: message.value
  }

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    console.log(formData, Object.values(formData).every(s => s.error));
    setLoading(true);

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
  }

  return (
    <div>
      <h2 className='text-4xl font-bold text-center text-black/75 capitalize 4xl:text-6xl max-xs:text-[2rem]'>
        Take a coffee && get in touch with me.
      </h2>

      <div className="w-3/5 lg:w-[unset] flex justify-evenly flex-wrap-reverse my-16 mb-8 mx-8 items-center max-md:w-full">
        <motion.div
          className="min-w-[300px] flex flex-row justify-start items-center my-4 mx-0 p-4 rounded-xl cursor-pointer bg-[#ecdddf] hover:shadow-md hover:shadow-[#fef4f5] max-xs:w-full"
          whileInView={{
            opacity: [0,1],
            scale: [0, 1],
          }}
          transition={{
            duration: .38,
            ease: "easeInOut"
          }}
        >
          <Image
            src="/assets/email.png"
            width={340}
            height={340}
            alt='email'
            className='w-10 h-10 my-0 mx-3'
          />
          <Link
            href="mailto:isiomastewart@gmail.com"
            className='paragraph font-semibold no-underline'
          >
            isiomastewart@gmail.com
          </Link>
        </motion.div>

        <motion.div
          className="min-w-[300px] flex flex-row justify-start items-center my-4 mx-0 p-4 rounded-xl cursor-pointer hover:shadow-md max-xs:w-full bg-[#e3ecf3]"
          whileInView={{
            opacity: [0,1],
            scale: [0, 1],
          }}
          transition={{
            duration: .38,
            ease: "easeInOut"
          }}
        >
          <Image
            src="/assets/mobile.png"
            width={340}
            height={340}
            alt='email'
            className='w-10 h-10 my-0 mx-3'
          />
          <Link
            href="tel:+2349024795751"
            className='paragraph font-semibold no-underline'
          >
            +234 902 479 5751
          </Link>
        </motion.div>
      </div>

      {
        !isFormSubmitted
          ? <form onSubmit={handleSubmit} className="centered-flex w-3/5 flex-col my-4 mx-8 max-md:w-full max-md:my-4">
            <div className="centered-flex w-full my-3 mx-0 rounded-lg cursor-pointer flex-col transition-all duration-300 ease-in-out">
              <input
                type="text"
                name="name"
                className={`paragraph w-full p-4 border-none rounded-md bg-primary ${poppins.className} text-secondary outline-none ${!formData.name.error && '!bg-green-400 !text-blanc text-sm block'} ${formData.name.error && formData.name.touched && 'bg-red-300 text-sm block !text-red-200'}`}
                value={name.value}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder='Your Name'
              />
               {(formData.name.touched && !validators.name(formData.name.value)) && <div className="text-red-600 my-1 text-sm w-full pl-1">
                    Name must have at least 3 characters.
                </div>}
            </div>

            <div className="centered-flex w-full my-3 mx-0 rounded-lg cursor-pointer flex-col transition-all duration-300 ease-in-out">
              <input
                type="text"
                name="email"
                className={`paragraph w-full p-4 border-none rounded-md bg-primary font-poppins text-secondary outline-none ${poppins.className} ${!formData.email.error && '!bg-green-400 text-blanc text-sm block'} ${!formData.email.error && 'bg-green-300 !text-blanc text-sm block'} ${formData.email.error && formData.email.touched && 'bg-red-300 text-sm block !text-red-200'}`}
                value={email.value}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder='Your Email Address'
              />
              {(formData.email.touched && !validators.email(formData.email.value)) && <div className="text-red-600 my-1 text-sm w-full pl-1">
                    Email must have at least 3 characters.
                </div>}
            </div>

            <div className="centered-flex w-full my-3 mx-0 rounded-lg cursor-pointer flex-col transition-all duration-300 ease-in-out">
              <textarea
                name="message"
                value={message.value}
                cols={30}
                rows={10}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`paragraph h-44 hover:shadow-primary hover:shadow-md w-full p-4 border-none rounded-md bg-primary ${poppins.className} text-secondary outline-none ${!formData.message.error && '!bg-green-400 !text-blanc text-sm block'} ${formData.message.error && formData.message.touched && 'bg-red-300 text-sm block !text-red-200'}`}
                placeholder='Your Message'
              />
              {(formData.message.touched 
                      && !validators.message(formData.message.value)) 
                      && <div className="text-red-600 my-1 text-sm w-full pl-1">
                      Message must have at least 5 characters.
                    </div>
                }
            </div>

            <button
              type='submit' 
              className='paragraph py-4 px-8 border-none rounded-xl bg-secondary font-medium text-blanc outline-none my-8 font-dm-sans cursor-pointer relative !text-blanc/75'
              disabled={Object.values(formData).some(el => el.error === true)}
            >
              {
                loading ? spinner
                  : 'Send Message'
              }
            </button>

          </form>
          : <h3 className='text-[2.75rem] font-bold text-center text-black/75 capitalize 4xl:text-6xl max-xs:text-[2rem]'>
            Thanks for leaving a message!
          </h3>
      }



    </div>
  )
}

export default Wrapper(
  MotionWrapper(Contact, "flex-col"), 
  Contact.name.toLowerCase(), 
  "blanc-bg flex-1 w-full"
);