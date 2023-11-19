import React from "react";
import Button from "../assets/component/button";

function SectionSix() {
  return (
    <>
      <section className="mx-auto container mt-24 lg:px-0 px-4">
        <main className="bg-blue-600 flex rounded-2xl lg:px-10 px-5 items-center py-8 ">
          <div className="lg:w-[60%]  ">
            <h4 className="lg:text-6xl text-4xl font-normal">Download the software and earn without stress and pleasure </h4>
            <div className="flex gap-6 mt-9 ">
              <Button
                text={"Apple Store"}
                src={"/applelogo.png"}
                alt={"apple store link"}
                bg={"bg-white"}
                color={"text-black"}
              />
              <Button
                text={"Play Store"}
                src={"/googlelogo.png"}
                bg={"bg-white"}
                color={"text-black"}
              />
            </div>
          </div>
          <div className="lg:block hidden">
            <div className=" w-fit relative">
              <div className="absolute top-[172px] left-[100px] flex justify-center items-center gap-2">
                <img src="/favion.png" alt="" aria-hidden="true" />
                <h5 className="text-black text-3xl font-semibold">Okecbot</h5>
              </div>

              <img src="/robot.png" alt="" width="400" />
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default SectionSix;
