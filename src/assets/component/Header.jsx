import React, { useState } from 'react'
import Button from './button'
import Menu from './menu'

function Header() {

  const [menuOpen , setmenuOpen] = useState({
    initial:false,
    clicked : null,
    
  })
  const [disable, setDisable] = useState(false)

  function handleClick(){
if(menuOpen.initial === false){
  setmenuOpen({
    initial:null,
    clicked:true
  })

}else if (menuOpen.clicked === true){
  setmenuOpen({
    clicked: !menuOpen.clicked,

  })
}
else if (menuOpen.clicked === false){
  setmenuOpen({
    clicked: !menuOpen.clicked,

  })
}


  }
  
  console.log(menuOpen.clicked)
  return (
  <>
  <header className=''>
    <div className='w-[96%] mx-auto flex items-center justify-between pt-7  z-50 fixed'>

    <div>
      <img src="/logo.webp" alt="" width="150"/>
    </div>

    <main className='flex gap-5 items-center justify-center'>
      <Button text={"Get started"} src={"/favion.png"}/>
      <button className=' w-9 h-9 flex flex-wrap flex-grow gap-2' disabled={disable} onClick={handleClick}>
      <div className='bg-white h-[6px] w-[6px] rounded-full'></div>
        <div  className={`bg-white h-[6px] w-[6px] rounded-full transition ${menuOpen.clicked? "opacity-0":"opacity-1 "}`}></div>
        <div className='bg-white h-[6px] w-[6px] rounded-full'></div>
        <div  className={`bg-white h-[6px] w-[6px] rounded-full transition ${menuOpen.clicked? "opacity-0":"opacity-1 "}`}></div>
        <div className='bg-white h-[6px] w-[6px] rounded-full'></div>
        <div  className={`bg-white h-[6px] w-[6px] rounded-full transition ${menuOpen.clicked? "opacity-0":"opacity-1 "}`}></div>
        <div className='bg-white h-[6px] w-[6px] rounded-full'></div>
        <div  className={`bg-white h-[6px] w-[6px] rounded-full transition ${menuOpen.clicked? "opacity-0":"opacity-1 "}`}></div>
        <div className='bg-white h-[6px] w-[6px] rounded-full'></div>
      
      
        
      </button>
    </main>
    </div>
    <Menu menuOpen={menuOpen}/>

  </header>
  </>
  )
}

export default Header