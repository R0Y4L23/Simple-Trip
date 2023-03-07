import React from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import Spline from '@splinetool/react-spline';
import Image from "next/image";

import logo from "../assets/logo.png"

export default function Home() {

  const router = useRouter()
  return (
    <>
      <Head>
        <title>Simple Trip</title>
      </Head>
      <div className="home">
        <Spline scene="https://prod.spline.design/NPYaBDOq6810KpIn/scene.splinecode" className='back3d1' />
        <div className="w-4/5 flex flex-row justify-between items-center mx-auto relative z-10 ">
          <Image alt="logo" src={logo} height={150} width={150} />
          <button onClick={() => { router.push("/registration") }} type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Login</button>
        </div>
        <div className='sm:w-[80%] h-[75%] flex flex-row justify-between items-center mx-auto xs:scale-100 xss:scale-[0.8] xsss:scale-[0.7] scale-[0.6] sm:ml-20 xss:ml-0 -ml-12'>
          <div className="relative z-10 flex flex-row justify-center items-center">
            <i onClick={() => { router.back() }} className="fa-solid fa-chevron-left text-[#191730] h-[40px] w-[40px] rounded-[20px] border border-white pl-[13px] pt-[13px] cursor-pointer hover:bg-[#7b5734] hover:bg-opacity-25 duration-1000"></i>
            <div className="flex flex-col justify-center items-center">
              <i onClick={() => { router.push("/features") }} className="fa-solid fa-chevron-right text-[#191730] xss:h-[80px] xss:w-[80px] xss:rounded-[40px]  h-[40px] w-[40px] rounded-[20px] xss:border-4 border border-[#7b5734] xss:pl-[30px] xss:pt-[30px] pl-[13px] pt-[13px] ml-1 cursor-pointer hover:bg-[#7b5734] hover:bg-opacity-25 duration-1000"></i>
              <p className="text-[#191730] text-[12px] tracking-[8px] ml-[8px] mt-[4px]">NEXT</p>
            </div>
          </div>
          <div className='flex flex-col'>
            <h1 className="text-[#191730] uppercase tracking-[10px] text-[12px] mt-20 sm:w-4/5 sm:mx-auto sm:text-left text-center pl-2 relative z-10">Find <span className="text-white">The Best</span> Travel Packages</h1>
            <div className="mt-10 sm:w-4/5 mx-auto flex flex-row xss:justify-between justify-center">
              <div className="flex flex-col justify-center items-start xss:m-0 mx-5">

                <p className="flex text-[#191730] w-4/5 lg:text-6xl xs:text-4xl xss:text-2xl text-5xl xss:text-left text-center font-bold relative z-10">Customisable<br />Tour Packages</p>
                <p className="text-[#191730] xss:w-3/5 w-4/5 mt-10 relative z-10 xss:text-left text-center ">Welcome to Simple Trip, your one-stop-shop for unforgettable travel experiences! We specialize in crafting unique and personalized travel packages that cater to all your needs and preferences. <b>Launching Soon!</b></p>
                <div onClick={() => { router.push("/map") }} target="_blank" rel="noreferrer" className=" relative z-10 flex flex-row justify-between items-center h-[60px] w-[300px] p-10 mt-10 bg-[#7b5734] bg-opacity-[60%] cursor-pointer hover:bg-opacity-90 duration-1000 xs:scale-100 scale-[0.8] xs:-ml-0 -ml-10">
                  <p className="text-[#fff] uppercase text-[15px] tracking-wide">Find Voyage</p>
                  <i className="fa-solid fa-caret-right text-[#fff]"></i>
                </div>

              </div>

            </div>
          </div>
          <div className="flex flex-row relative z-10">
            <p className="text-[#191730] xs:text-5xl text-2xl font-bold border-b-4 border-white xs:h-[60px] h-[40px]">01</p>
            <p className="text-[#7b5734] xs:text-xl font-bold ml-5">/ 03</p>
          </div>
        </div>

      </div>
    </>
  )
}