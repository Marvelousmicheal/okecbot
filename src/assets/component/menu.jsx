import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { staggerAnimation, staggerNav, staggerRevealAnimation } from "../animations/menuAnimation";

function Menu({ menuOpen }) {
  const menu = useRef(null);
  const revealMenuBackground = useRef(null);
  const menuMain = useRef(null);
  const textone = useRef(null);
  const texttwo = useRef(null);
  const textthree = useRef(null);
  const textfour = useRef(null);
  const info = useRef(null);

  useEffect(() => {
    if (menuOpen.clicked === false) {
      //close the menu
      gsap.to([menuMain.current, revealMenuBackground.current], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });

      gsap.to(menu.current, {
        duration: 1,
        css: { display: "none" },
      });
    } else if (
      menuOpen.clicked === true ||
      (menuOpen.clicked === true && menuOpen.inital === null)
    ) {
      //open our menu
      gsap.to(menu.current, {
        duration: 1,
        css: { display: "block" },
      });
      staggerRevealAnimation(info.current);
      staggerAnimation(revealMenuBackground.current, menuMain.current);
       staggerNav( textone.current,texttwo.current, textthree.current, textfour.current);

     
    }
  }, [menuOpen]);

  return (
    <>
      <div
        ref={menu}
        className="z-40 top-0 fixed left-0 right-0 bottom-0 h-full w-full overflow-hidden hidden "
      >
        <div
          ref={revealMenuBackground}
          className="top-0 bottom-0 left-0 right-0 fixed h-full w-full -z-10 bg-black"
        ></div>
        <div
          ref={menuMain}
          className="relative overflow-hidden bg-blue-600 h-full w-full z-20 "
        >
          <div className="relative">
            <div className="flex lg:flex-row flex-col justify-between items-center relative lg:top-28 top-20 container mx-auto">
              <nav className="block">
                <ul className="p-0 m-0 relative">
           <li className="font-bold lg:text-8xl text-4xl lg:h-[135px] h-[60px] lg:w-[700px] w-[400px] relative overflow-hidden    cursor-pointer" ><a ref={textone} href="" className="absolute ">Programmes</a></li>
           <li className="font-bold lg:text-8xl text-4xl lg:h-[135px] h-[60px] lg:w-[700px] relative overflow-hidden    cursor-pointer" ><a ref={texttwo} href="" className="absolute ">About</a></li>
           <li className="font-bold lg:text-8xl text-4xl lg:h-[135px] h-[60px] lg:w-[700px] relative overflow-hidden    cursor-pointer" ><a ref={textthree} href="" className="absolute ">Services</a></li>
           <li className="font-bold lg:text-8xl text-4xl lg:h-[135px] h-[60px] lg:w-[700px] relative overflow-hidden    cursor-pointer" ><a ref={textfour} href="" className="absolute ">Contact Us</a></li>
                </ul>
              </nav>
              <div ref={info} className="text-white">
                <h3 className="text-2xl font-medium text-center   lg:px-0 px-8">our vows</h3>
                <p className=" font-medium lg:text-xl text-[12px] lg:px-0 px-8">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolor eum illo debitis aliquam eveniet minus accusamus
                  doloremque quisquam consequatur suscipit, maiores nesciunt.
                  Suscipit repellendus aut quos minus iusto maxime in
                  perferendis doloremque velit quidem. Minus optio consequuntur
                  blanditiis dicta dolor?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
