import React from 'react'

function Button({src, alt,bg,text,color}) {
  return (
    <button className={`${bg} ${color} px-5 py-2 rounded-2xl flex items-center gap-2 border border-white`}> <img src={src} alt={alt} width="20" />  {text}</button>
  )
}

export default Button