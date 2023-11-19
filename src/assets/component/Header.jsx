import React from 'react'
import Button from './button'

function Header() {
  return (
  <>
  <header className='flex items-center justify-between pt-7'>
    <div>
      <img src="/logo.webp" alt="" width="150"/>
    </div>

    <main className='flex gap-5 items-center justify-center'>
      <Button text={"Get started"} src={"/favion.png"}/>
      <div className=' w-9 h-9 flex flex-wrap flex-grow gap-2'>
        <div className='bg-white h-[6px] w-[6px] rounded-full'></div>
        <div className='bg-white h-[6px] w-[6px] rounded-full'></div>
        <div className='bg-white h-[6px] w-[6px] rounded-full'></div>
        <div className='bg-white h-[6px] w-[6px] rounded-full'></div>
        <div className='bg-white h-[6px] w-[6px] rounded-full'></div>
        <div className='bg-white h-[6px] w-[6px] rounded-full'></div>
        <div className='bg-white h-[6px] w-[6px] rounded-full'></div>
        <div className='bg-white h-[6px] w-[6px] rounded-full'></div>
        <div className='bg-white h-[6px] w-[6px] rounded-full'></div>
      
        
      </div>
    </main>
  </header>
  </>
  )
}

export default Header