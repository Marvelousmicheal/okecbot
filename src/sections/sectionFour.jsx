import React from "react";

function SectionFour() {
  return (
    <>
      <section className="container mx-auto lg:px-0 px-4">
<p className="text-blue-700 font-medium text-lg mb-6 mt-20 ">About Okecbot:</p>
        <main className="flex items-center lg:flex-row flex-col">
          <div className="lg:w-[50%] lg:order-1 order-2 lg:mt-0 mt-2">
          <h1 className="lg:text-6xl text-4xl font-medium"> Your web automation <span className="text-blue-700"> solution</span>  to improve your <span className="text-blue-700">account</span>  </h1>

          <p className="mt-5 text-gray-500 font-medium lg:text-xl text-[14px]">
            Okecbot, your trusted web automation partner, is at the forefront of
            AI and technology innovation, committed to enhancing digital
            efficiency. We empower businesses and individuals alike by providing
            cutting-edge solutions for a streamlined online presence. Our
            mission goes beyond automation, striving to educate and empower the
            digital community, fostering a more efficient, secure, and connected
            online future.
          </p>
          </div>
          <div className="lg:order-2 order-1">
            <img src="/botAi.png" alt="" />
          </div>
        </main>
        <main className="mt-9 mb-48">
            <div className="flex mx-auto lg:w-[70%] justify-between items-center">
                <article >
                    <h3 className="lg:text-5xl text-2xl font-semibold lg:text-center">8K+</h3>
                    <p className="font-medium text-gray-500 lg:text-xl text-[12px]">Account managed</p>
                </article>
                <article>
                    <h3 className="lg:text-5xl text-2xl font-semibold lg:text-center">18K+</h3>
                    <p className="font-medium text-gray-500 lg:text-xl text-[12px]">user worldwide</p>
                </article>
                <article>
                    <h3 className="lg:text-5xl text-2xl font-semibold lg:text-center">100%</h3>
                    <p className="font-medium text-gray-500 lg:text-xl text-[12px]">Client satisfaction</p>
                </article>
                <article>
                    <h3 className="lg:text-5xl text-2xl font-semibold lg:text-center">10+</h3>
                    <p className="font-medium text-gray-500 lg:text-xl text-[12px]">Team members</p>
                </article>
            </div>
        </main>
      </section>
    </>
  );
}

export default SectionFour;
