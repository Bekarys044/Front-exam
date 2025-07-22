

import Illustration from "../assets/images/Illustration.png"

function SlideContent() {
  return (
    <div className="container-custom    py-16 px-6 md:px-10 lg:px-16 lg:py-12 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-24">
      <div className="w-full lg:w-[657px] text-center lg:text-left ">
        <h2 className="text-[32px] sm:text-[40px] lg:text-[64px] text-[var(--Neutral-D_Grey)] font-semibold leading-tight lg:leading-[76px]">
          Lessons and insights <br />
          <span className="text-[var(--Brand-Primary)]">from 8 years</span>
        </h2>

        <p className="secondary-title text-[var(--Neutral-Grey)] pt-4 text-base sm:sm:text-lg">
          Where to grow your business as a photographer: site or social media?
        </p>

        <button className="mt-6 sm:mt-8 secondary-title btn-primary">
          Register
        </button>
      </div>

      <div className="max-w-[500px]">
        <img src={Illustration} alt="Illustration" className="w-full h-auto" />
      </div>
    </div>
  );
}

export default SlideContent;