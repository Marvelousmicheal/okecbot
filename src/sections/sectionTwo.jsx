import React from 'react'
import Button from '../assets/component/button'

function SectionTwo() {
  return (
<>
<section className='container w-[90%] mx-auto md:pt-[15rem] pt-8 z-50'>
<h2 className='lg:text-[56px] md:text-5xl text-[30px] font-semibold' >Booast your account</h2>
<p className='my-5 text-gray-500  lg:text-xl text-[14px] font-medium'>simple, secure and very interactive bot that is powered <br/> by ai. undetecteable bot </p>
<Button text={"Apple Store"} src={"/applelogo.png"} alt={"apple store link"} bg={"bg-white"} color={"text-black"}/>

<main className='flex justify-center mt-[9rem] w-full h-[37rem] gap-7'>
    <img src="/brock-wegner-A8D0-14bcng-unsplash.jpg" alt="" className='w-[40%] h-full rounded-2xl' />
    <div className='w-[60%] -mt-[11rem] h-[40rem] overflow-hidden rounded-2xl'>
    <img src="/dwayne-joe-47DNuDf2Ups-unsplash.jpg" alt="" className='w-full h-[45rem] rounded-2xl'/>
    </div>
</main>
</section>

</>
  )
}

export default SectionTwo