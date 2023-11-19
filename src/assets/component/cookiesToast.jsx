import React from 'react'

function CookiesToast() {
  return (
    <>
    <main className='bg-white text-black  flex items-center fixed bottom-3 right-3 rounded-xl p-3 gap-2 text-sm font-medium z-50'>
<div className='text-2xl wave'>👋</div>
<div >
    <main className='font-medium mb-2'>Hey there, this <span className='text-blue-700'>website</span> uses <span className='text-blue-700'>cookies</span> for better experience</main>
    <main className='flex gap-1'><button className='bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-900 custom-transition'>Accept</button><button className='custom-transition px-4 py-2 rounded-md hover:bg-red-600 hover:text-white'>Cancel</button></main>
</div>
    </main>
    
    </>
  )
}

export default CookiesToast