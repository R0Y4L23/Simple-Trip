import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Spline from '@splinetool/react-spline';
import Image from 'next/image';

import logo from "../assets/logo.png"

const ThirdPage = () => {

  const router = useRouter()

  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <div className="third">
      <Spline scene="https://prod.spline.design/CgQ8VdWwajIW3nGp/scene.splinecode" className='back3d1' />
        <div className='h-screen'>
          <div className="w-4/5 flex flex-row justify-between items-center mx-auto pt-5 relative z-10">
            <div className='flex flex-row items-center cursor-pointer' onClick={() => { router.back() }}>
              <i className="fa-solid fa-caret-left text-[#191730]"></i>
              <p className='text-[#191730] uppercase ml-5 text-sm'>Back</p>
            </div>
            <button onClick={()=>{router.push("/registration")}} type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Login</button>
          </div>
          <div className='h-[60%] flex flex-col items-center justify-center xs:mt-36 mt-20 xs:scale-100 xsss:scale-[0.8] scale-[0.6]'>
          <h1 className="text-[#191730] relative z-10 uppercase sm:tracking-[45px] tracking-[15px] text-[15px] mt-32 w-4/5 mx-auto text-center">Budget Friendly Packages</h1>
          <Image alt="logo" src={logo} height={300} width={300}/>
          <a className="relative z-10 flex flex-row justify-between items-center mx-auto h-[60px] w-[250px] p-10 bg-[#7b5734] bg-opacity-[60%] cursor-pointer hover:bg-opacity-90 duration-1000" href="https://forms.gle/Ymk8xtx48jrkPAYDA" target="_blank" rel="noreferrer">
            <p className="text-[#fff] uppercase text-[15px] tracking-wide">Find Voyage</p>
            <i className="fa-solid fa-caret-right text-[#fff]"></i>
          </a>
          </div>

        </div>
        
      </div>
    </>
  )
}

export default ThirdPage