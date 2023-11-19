import React from 'react'


function SectionThree() {
  return (
    <>
    <section className='container mx-auto mt-28 lg:px-0 px-4'>
        <div className='text-center'>

        <h2 className='lg:text-[56px] md:text-5xl text-[30px] font-semibold'>Our new features</h2>
        <p className='my-5 text-gray-500 lg:text-xl text-[14px] font-medium'>save every minute with our new features.we will <br/> help you feel your interlocutor next</p>
        </div>
<main className='flex lg:h-[500px] gap-4 flex-col md:flex-row lg:flex-row w-full'>
<div className='bg-blue-400 lg:w-[50%] w-full rounded-xl text-center pt-6 overflow-hidden'>
    <h3 className='md:text-4xl text-[25px] font-semibold text-black'>Download the software</h3>
    <button className='bg-black px-5 py-4 mt-4 text-white rounded-3xl md:text-base text-sm'>Get the Software</button>
<div className='lg:w-[80%] mx-auto lg:h-[350px] w-[300px]  mt-4' >

    <img src="/phone.webp" alt="" className='aspect-square w-full h-full' />
</div>
</div>
<div className='flex flex-col gap-4'>
    <div className='bg-gray-950 rounded-xl h-[50%] flex items-center pl-10'>
        <div className='w-[60%]' >

        <h3 className='md:text-4xl text-[25px] font-semibold text-white pt-5 lg:pt-0'>Create your Personality</h3>
        <p className='my-5 text-gray-500 font-medium lg:text-xl text-[14px]'>The new create your personality features allows you to create a personality for your bots that allows them to interact just like regular human beings</p>
        </div>
    </div>
    <div className='bg-blue-600 h-[50%] rounded-xl flex lg:items-center  pl-10'>
        <div className='w-[60%]'>

    <h3 className='md:text-4xl text-[25px] font-semibold text-white pt-5 lg:pt-0'>Boast your account</h3>
        <p className='my-5 text-gray-300 font-medium lg:text-xl text-[14px]'>The new create your personality features allows you to create a personality for your bots that allows them to interact just like regular human beings</p>
        </div>
    </div>
</div>
</main>
    </section>
    </>
  )
}

export default SectionThree