import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import CarouselMain from '../components/CarouselMain'

const SecondPage = () => {

  const router=useRouter()

  return (
    <>
    <Head>
      <title>Features</title>
    </Head>
    <div className='second flex flex-row h-screen overflow-y-hidden'>
      <div className='w-[20%] border-r-[1px] border-[#c6a07a] flex justify-center items-center'>
      <div className="relative z-10 flex flex-row justify-center items-center">
            <i onClick={() => { router.back() }} className="fa-solid fa-chevron-left text-[#191730] h-[40px] w-[40px] rounded-[20px] border border-white pl-[13px] pt-[13px] cursor-pointer hover:bg-[#7b5734] hover:bg-opacity-25 duration-1000"></i>
            <div className="flex flex-col justify-center items-center">
              <i onClick={() => { router.push("/contact") }} className="fa-solid fa-chevron-right text-[#191730] xss:h-[80px] xss:w-[80px] xss:rounded-[40px]  h-[40px] w-[40px] rounded-[20px] xss:border-4 border border-[#7b5734] xss:pl-[30px] xss:pt-[30px] pl-[13px] pt-[13px] ml-1 cursor-pointer hover:bg-[#7b5734] hover:bg-opacity-25 duration-1000"></i>
              <p className="text-[#191730] text-[12px] tracking-[8px] ml-[8px] mt-[4px]">NEXT</p>
            </div>
            </div>
      </div>
      <div className='w-[80%]'>
        <CarouselMain/>
      </div>
    </div>
    </>
  )
}

export default SecondPage