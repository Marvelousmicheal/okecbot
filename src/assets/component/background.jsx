import React from 'react'

function Background() {
  return (
    <div class="gradient-bg">
    <svg xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="goo">
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="10"
            result="blur"
          />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
    <div class="gradient-container">
      {/* <div class="mouse-mover"></div> */}
      <div class="bg1"></div>
      <div class="bg2"></div>
      <div class="bg3"></div>
      
      <div class="bg5"></div>
    </div>
  </div>
  )
}

export default Background