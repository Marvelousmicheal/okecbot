import React from 'react'

function Footer() {
  return (
 <>
 <footer className='bg-black-custom lg:py-20 py-8 mt-28'>
  <main className='flex lg:flex-row flex-col container mx-auto  justify-between'>
    <div className='flex flex-col items-center '>
      <div className='mb-5'>
        <img src="/logo.webp" alt="" className='w-40'/>
    
      </div>
      <div className=" w-fit relative">
              <div className="absolute top-[90px] left-[40px] flex justify-center items-center gap-2">
                <img src="/favion.png" alt="" aria-hidden="true" />
                <h5 className="text-black text-xl font-semibold">Okecbot</h5>
              </div>

              <img src="/robot.png" alt="" width="200" />
            </div>
    </div>
  <div className='flex lg:w-[80%]  justify-between  lg:text-xl text-[14px] lg:px-0 px-2'>
  <div className='flex flex-col  '>
      <h5 className='lg:text-lg font-semibold text-gray-300 mb-6'>Product</h5>
      <p className='text-gray-500 font-medium mb-3 lg:text-xl text-[14px]'>Features</p>
      <p className='text-gray-500 font-medium mb-3 lg:text-xl text-[14px]'>Integeration</p>
      <p className='text-gray-500 font-medium mb-3 lg:text-xl text-[14px]'>Pricing</p>
      <p className='text-gray-500 font-medium mb-3 lg:text-xl text-[14px]'>Roadmap</p>
      <p className='text-gray-500 font-medium mb-3 lg:text-xl text-[14px]'>Changelog</p>
    </div>
    <div>
    <h5 className='lg:text-lg font-semibold text-gray-300 mb-6'>Company</h5>
      <p className='text-gray-500 font-medium mb-3 lg:text-xl text-[14px]'>Product</p>
      <p className='text-gray-500 font-medium mb-3 lg:text-xl text-[14px]'>Our Teams</p>
      <p className='text-gray-500 font-medium mb-3 lg:text-xl text-[14px]'>Value</p>
      <p className='text-gray-500 font-medium mb-3 lg:text-xl text-[14px]'>Blog</p>
    
    </div>
    <div>
    <h5 className='lg:text-lg font-semibold text-gray-300 mb-6'>Resources</h5>
      <p className='text-gray-500 font-medium mb-3 lg:text-xl text-[14px]'>Download</p>
      <p className='text-gray-500 font-medium mb-3 lg:text-xl text-[14px]'>Documentation</p>
      <p className='text-gray-500 font-medium mb-3 lg:text-xl text-[14px]'>Contact</p>
      <p className='text-gray-500 font-medium mb-3 lg:text-xl text-[14px]'>FAQ's</p>
      
    </div>
    <div className='pr-8'>
    <h5 className='lg:text-lg font-semibold text-gray-300 mb-6'>Social</h5>
      <p className='text-gray-500 font-medium mb-3 lg:text-xl text-[14px]'>Facebook</p>
      <p className='text-gray-500 font-medium mb-3 lg:text-xl text-[14px]'>Instagram</p>
      <p className='text-gray-500 font-medium mb-3 lg:text-xl text-[14px]'>Twitter</p>
      <p className='text-gray-500 font-medium mb-3 lg:text-xl text-[14px]'>LinkedIn</p>
      
    </div>
  </div>
  </main>
  <main className='mt-5 border-t-2 border-b-2 py-14 border-gray-500 container mx-auto flex lg:flex-row flex-col  items-center justify-between'>
    <div>
      <h3 className='text-3xl font-semibold text-gray-300'>Join our newsletter</h3>
      <p  className='text-gray-500 font-normal mt-3 text-xl'>Keep up to date with everything Reflect</p>
    </div>
    <form action="">
      <input type="email" name="" id="" className='bg-transparent border rounded-lg rounded-r-none px-4 py-2 w-[350px] ' placeholder='Enter your email' />
      <button className='bg-blue-600 px-4 py-2 border-blue-600 border-2 rounded-lg rounded-l-none'>Subscribe</button>
    </form>
  </main>
  <main className='flex items-center justify-between container mx-auto'>
    <p className='text-gray-500 font-normal mt-3 text-base'>Privacy Policy. Terms of Conditions</p>
    <p className='text-gray-500 font-normal mt-3 text-base'>DannyOkec Group of Company.All rights reserved.</p>

  </main>
 </footer>
 </>
  )
}

export default Footer