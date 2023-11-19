import React from "react";
import Button from "../assets/component/button";
import ViewToast from "../assets/component/viewToast";

function SectionHero() {
  return (
    <>
      
      <div className="  w-full">
    
       <main className="relative">

        <div className="w-full h-full bg-transparent z-40  flex items-center flex-col">
          <div className="lg:w-[800px] h-fit mt-24 w-fit mx-auto lg:mx-0 px-4">
            <h1 className="lg:text-[56px] md:text-5xl text-[30px] lg:leading-[3.5rem] leading-[2rem] font-semibold ">
              SuperCharge your{" "}
              <span className="text-blue-700">YouTube <br className="md:block lg:hidden"/> Account</span> using the
              power
            </h1>
            <div className="flex lg:gap-2 md:gap-2 gap-0 ">
              <h1 className="lg:text-5xl md:text-5xl  text-[30px] font-semibold lg:leading-[3.5rem] leading-[2rem]">of interactive Bots</h1>
              <div className=" font-medium text-xs lg:w-[300px]  w-[250px] ">
                <p className="pr-7 mt-1   md:text-[12px] ">
                  Unlocking AI's Potential: Embrace Limitless Automation
                  Possibilities with Interactive Bot Technologies. Powering the
                  Future of Web Automation.
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-6 mt-5 ">
            <Button text={"Apple Store"} src={"/applelogo.png"} alt={"apple store link"} bg={"bg-white"} color={"text-black"}/>
            <Button text={"Play Store"} src={"/googlelogo.png"} bg={"bg-white"} color={"text-black"}/>
            
          </div>
          <div className="  h-96 w-full relative mt-10 px-1">
            <div className="flex flex-wrap flex-grow gap-2 mb-2">

<ViewToast src={"/anna-keibalo-91I4ELp9fqE-unsplash.jpg"} name={"Jacob Simmons"} view={"4k"} like={"2k"} top={"top-[30px]"} left={"left-[170px]"} bg={"bg-red-500"} />
<ViewToast src={"/anna-keibalo-91I4ELp9fqE-unsplash.jpg"} name={"Jacob Simmons"} view={"4k"} like={"2k"} top={"top-[94px]"} left={"left-[230px]"} bg={"bg-green-500"} />
<ViewToast src={"/anna-keibalo-91I4ELp9fqE-unsplash.jpg"} name={"Jacob Simmons"} view={"4k"} like={"2k"} top={"top-[160px]"} left={"left-[50px]"} bg={"bg-pink-500"} />
<ViewToast src={"/anna-keibalo-91I4ELp9fqE-unsplash.jpg"} name={"Jacob Simmons"} view={"4k"} like={"2k"} top={"top-[230px]"} left={"left-[320px]"} bg={"bg-yellow-500"} />
<ViewToast src={"/anna-keibalo-91I4ELp9fqE-unsplash.jpg"} name={"Jacob Simmons"} view={"4k"} like={"2k"} top={"top-[290px]"} left={"left-[120px]"} bg={"bg-purple-500"} />
<ViewToast src={"/anna-keibalo-91I4ELp9fqE-unsplash.jpg"} name={"Jacob Simmons"} view={"4k"} like={"2k"} top={"top-[350px]"} left={"left-[200px]"} bg={"bg-orange-500"} />


            </div>
            <div className="mx-auto w-fit relative md:block hidden">
              <div className="absolute top-[172px] left-[100px] flex justify-center items-center gap-2">
            <img src="/favion.png" alt="" aria-hidden="true"  />
                <h5 className="text-black text-3xl font-semibold">Okecbot</h5>
              </div>
              
              <img src="/robot.png" alt=""width="400" /></div>
<div className="flex flex-wrap flex-grow gap-2">

<ViewToast src={"/anna-keibalo-91I4ELp9fqE-unsplash.jpg"} name={"Jacob Simmons"} view={"4k"} like={"2k"} top={"top-[10px]"} left={"right-[270px]"} bg={"bg-blue-500"} />
<ViewToast src={"/anna-keibalo-91I4ELp9fqE-unsplash.jpg"} name={"Jacob Simmons"} view={"4k"} like={"2k"} top={"top-[74px]"} left={"right-[130px]"} bg={"bg-blue-500"} />
<ViewToast src={"/anna-keibalo-91I4ELp9fqE-unsplash.jpg"} name={"Jacob Simmons"} view={"4k"} like={"2k"} top={"top-[140px]"} left={"right-[100px]"} bg={"bg-blue-500"} />
<ViewToast src={"/anna-keibalo-91I4ELp9fqE-unsplash.jpg"} name={"Jacob Simmons"} view={"4k"} like={"2k"} top={"top-[210px]"} left={"right-[220px]"} bg={"bg-blue-500"} />
<ViewToast src={"/anna-keibalo-91I4ELp9fqE-unsplash.jpg"} name={"Jacob Simmons"} view={"4k"} like={"2k"} top={"top-[270px]"} left={"right-[160px]"} bg={"bg-blue-500"} />
<ViewToast src={"/anna-keibalo-91I4ELp9fqE-unsplash.jpg"} name={"Jacob Simmons"} view={"4k"} like={"2k"} top={"top-[330px]"} left={"right-[200px]"} bg={"bg-blue-500"} />
</div>
          
           
         

           
          </div>
        </div>
       </main>
      </div>
    </>
  );
}

export default SectionHero;
