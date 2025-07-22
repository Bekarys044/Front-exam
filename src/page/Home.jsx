// pages/Home.tsx
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Framer from "../assets/images/Frame.png";
import Pana from "../assets/images/pana.png";
import Tesla from "../assets/images/Tesla.png";

import { MoveRight } from "lucide-react";

import sliderSettings from "../components/SliderSettings";
import SlideContent from "../components/SlideContent";
import CommunitySection from "../components/CommunitySection";
import CartSection from "../components/CartSection";

import { Icons } from "../Contant/GenerList";
import { Counts } from "../Contant/GenerList";

function Home() {
  return (
    <div>
      <div className="w-full bg-[var(--Neutral-Silver)]">
        <div>
          <Slider {...sliderSettings}>
            <SlideContent />
            <SlideContent />
            <SlideContent />
          </Slider>
        </div>
      </div>

      <div className="container-custom py-10 flex flex-col items-center text-center   lg:px-16">
        <h2 className="main-title text-[var(--Neutral-D-Grey)]">Our Clients</h2>

        <p className="secondary-title text-[var(--Neutral-Grey)] max-w-[600px]">
          We have been working with some Fortune 500+ clients
        </p>

        <div className="w-full  flex items-center justify-between flex-wrap gap-6 mt-10">
          {Icons.map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt={`icon-${index}`}
              className="w-16 h-16 object-contain"
            />
          ))}
        </div>
      </div>

      <div className="container-custom flex flex-col items-center text-center ">
        <h2 className="main-title w-full  md:w-[42%] text-[var(--Neutral-D-Grey)] leading-[1.40] ">
          Manage your entire community in a single system
        </h2>

        <p className="secondary-title pt-[8px] text-[var(--Neutral-Grey)]">
          Who is Nextcent suitable for?
        </p>

        <div className="w-full py-[40px]">
          <CommunitySection />
        </div>
      </div>

      <div className="w-full ">
        <div className="container-custom flex flex-col xl2:flex-row xl2:justify-around items-center gap-10 px-4 sm:px-6 lg:px-8">
        
          <div className="w-full xl2:w-[440px] pt-[32px] xl2:py-[52px] ">
            <img
              src={Framer}
              alt="Frame"
              className="w-full max-w-[440px] mx-auto"
            />
          </div>

      
          <div className="w-full xl2:w-[720px] text-left">
            <h2 className="main-title text-[var(--Neutral-D-Grey)] pt-[16px] sm:pt-[40px] xl2:pt-[130px] pr-0 sm:pr-[40px] xl2:pr-[100px] text-[24px] sm:text-[28px] xl2:text-[32px] leading-[36px] xl2:leading-[44px]">
              The unseen of spending three years at Pixelgrade
            </h2>

            <p className="pt-[16px] text-[14px]   w-[100%] md:w-[85%]   secondary-title text-[var(--Neutral-Grey)]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>

            <button className="mt-[24px] sm:mt-[32px] mb-[32px] btn-primary">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="w-full my-[48px] bg-[var(--Neutral-Silver)]">
        <div className="container-custom py-[64px] flex flex-col xl2:flex-row gap-[40px] xl2:gap-0 justify-between">
   
          <div className="w-full xl2:w-[540px] py-4">
            <h2 className="text-[36px] text-[var(--Neutral-D_Grey)] font-semibold leading-tight lg:leading-[44px]">
              Helping a local <br />
              <span className="text-[var(--Brand-Primary)]">
                business reinvent itself
              </span>
            </h2>
            <p className="pt-[8px] secondary-title text-[var(--Text-Gray-900)] text-[16px] sm:text-[18px]">
              We reached here with our hard work and dedication
            </p>
          </div>

     
          <div className="w-full xl2:w-[540px] grid grid-cols-2 [column-gap:30px] [row-gap:40px]">
            {Counts.map((item, index) => (
              <div key={index} className="flex gap-[16px]">
                <div className="mb-3">
                  <img
                    src={item.Icon}
                    alt={item.label}
                    className="w-[48px] h-[48px]"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.value}
                  </h3>
                  <p className="text-sm text-gray-500">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full ">
        <div className="container-custom  flex flex-col xl2:flex-row xl2:justify-around items-center gap-10 px-4 sm:px-6 lg:px-8">
        
          <div className="w-full xl2:w-[440px] pb-[48px] ">
            <img
              src={Pana}
              alt="Pana"
              className="w-full max-w-[440px] mx-auto"
            />
          </div>

          <div className="w-full xl2:w-[720px] text-left ">
            <h2 className="main-title text-[var(--Neutral-D-Grey)] pt-[16px]   pr-0 sm:pr-[40px] xl2:pr-[100px] text-[24px] sm:text-[28px] xl2:text-[32px] leading-[36px] xl2:leading-[44px]">
              How to design your site footer like we did
            </h2>

            <p className="pt-[16px] w-[100%] md:w-[85%] text-[14px] secondary-title text-[var(--Neutral-Grey)]">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>

            <button className="mt-[24px] sm:mt-[32px] mb-[32px] btn-primary">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-[var(--Neutral-Silver)] pt-[32px] mb-[48px]">
        <div className="container-custom flex flex-col lg:flex-row gap-[32px] items-center lg:items-start px-4 sm:px-6 lg:px-0 lg:justify-around lg:pr-[100px]">
      
          <div className="flex-shrink-0">
            <img
              src={Tesla}
              alt="Tesla"
              className="w-[250px] h-[250px] sm:w-[280px] sm:h-[280px] lg:w-[326px] lg:h-[326px] rounded-lg shadow-[0px_8px_16px_0px_rgba(171,190,209,0.4)]"
            />
          </div>

    
          <div className="w-full lg:w-[748px]">
            <p className="secondary-title text-[var(--Neutral-Grey)] font-medium text-[14px] sm:text-[16px] lg:leading-[24px] text-justify">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>

            <h4 className="main-title text-[18px] sm:text-[20px] mt-[16px] lg:leading-[28px] text-[var(--Brand-Primary)]">
              Tim Smith
            </h4>

            <p className="secondary-title text-[var(--Neutral-L-Grey)] text-[14px] sm:text-[16px] lg:leading-[24px]">
              British Dragon Boat Racing Association
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-[22px] gap-4">
              <div className="flex flex-wrap justify-center sm:justify-start gap-x-[44px] gap-y-[16px]">
                {Icons.slice(0, 6).map((icon, index) => (
                  <div
                    key={index}
                    className="w-[40px] h-[40px] flex items-center justify-center"
                  >
                    <img
                      src={icon}
                      alt={`Client Logo ${index}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-center sm:justify-end">
                <button className="main-title flex items-center gap-2 px-4 py-2 text-[16px] sm:text-[18px] md:text-[20px] text-[var(--Brand-Primary)] group">
                  Meet all customers
                  <MoveRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full pb-[174px]">
        <div className="container-custom flex flex-col items-center px-4 sm:px-6 lg:px-8">
          <h2 className="main-title text-[var(--Neutral-D-Grey)] text-center">
            Caring is the new marketing
          </h2>

          <p className="secondary-title text-[var(--Neutral-Grey)] max-w-[650px] text-center ">
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.
          </p>

          <div className="w-full pt-[16px]">
            <CartSection />
          </div>
        </div>
      </div>

      <div className="w-full bg-[var(--Neutral-Silver)] py-[32px]">
        <div className="container-custom  flex flex-col items-center">
          <h2
            className="  w-[100%]  md:w-[60%]  text-[var(--Neutral-Black)] main-title  text-center
                  text-[34px]  md:text-[64px] leading-[48px]  md:leading-[76px]"
          >
            Pellentesque suscipit fringilla libero eu.
          </h2>

          <button
            className="mt-[32px] btn-primary 
               flex items-center gap-2 md:text-[16px] group"
          >
            Get a Demo
            <MoveRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
