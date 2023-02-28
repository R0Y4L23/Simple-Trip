import React from 'react'
import Image from 'next/image';

const CarouselComponent = ({ position, icon, heading,hiddenaction, action, list, image }) => {
  return (
    <div className={'citem w-1/4 border-r-[1px] border-[#c6a07a] relative h-screen group'}>

      <div style={{ backgroundImage: 'url("' + image + '")' }} className="absolute overflow-hidden top-0 left-0 h-full w-full bg-no-repeat bg-cover bg-center opacity-0 group-hover:blur-sm group-hover:opacity-100 duration-1000 -z-10">
      </div>
      <div className='absolute top-0 left-0 h-full w-full bg-[#7b5734] bg-opacity-0  group-hover:bg-opacity-50 -z-10'>
      </div>

      <div className='flex flex-col justify-between items-start z-10'>
        <p className='text-[#191730] group-hover:text-white text-[14px] tracking-[5px] font-bold border-b-4 border-[#191730] group-hover:border-white lg:ml-10 ml-5 mt-10 pb-14 mb-16 duration-1000'>{position}</p>

        <div className='flex justify-center items-center sm:h-[100px] sm:w-[100px] sm:rounded-[50px] h-[50px] w-[50px] rounded-[25px] border border-[#7b5734] mt-20 group-hover:border-white lg:ml-12 sm:ml-6 ml-2 duration-1000'>
          <i className={icon + " text-[#191730] text-[38px] cursor-pointer group-hover:text-white duration-1000"}></i>
        </div>
        <div className='flex flex-col justify-center items-start mt-10 w-full pl-5 mb-10'>
          <p className='text-[#191730] xl:text-4xl md:text-3xl sm:text-xl font-bold text-center group-hover:text-white duration-1000 ml-5'>{heading}</p>
          <p className='uppercase text-[#7b5734] md:tracking-[10px] tracking-[5px] md:text-[12px] text-left text-[8px] font-bold mt-10 ml-5 group-hover:text-white duration-1000'>{action}</p>
          <p className='uppercase text-[#fff] md:tracking-[10px] tracking-[5px] md:text-[12px] text-left text-[8px] font-bold mt-2 ml-5 opacity-0 group-hover:opacity-100  duration-1000'>{hiddenaction}</p>
        </div>
        <div>
          
          <ul className='list-disc w-[80%] text-justify mx-auto text-[12px] h-[30vh] opacity-0 pt-20 group-hover:pt-0  group-hover:opacity-100  duration-1000'>
            {list.map((item, index) => {
              return (<li className='poppins text-white mb-5' key={index}>{item}</li>)
            })}
          </ul>
          
        </div>
        <i className="fa-sharp fa-solid fa-caret-right text-[#191730] cursor-pointer text-left ml-10 group-hover:text-white duration-1000"></i>
      </div>



    </div>
  )
}

export default CarouselComponent