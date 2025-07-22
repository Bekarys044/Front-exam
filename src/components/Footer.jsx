import Ins from "../assets/Icons/Footer/ins.svg";
import Bas from "../assets/Icons/Footer/bas.svg";
import Twi from "../assets/Icons/Footer/Twi.svg";
import You from "../assets/Icons/Footer/you.svg";
import Send from "../assets/Icons/Footer/send.svg";

import { Company, Support } from "../Contant/GenerList";

function Footer() {
  return (
    <div className="w-full py-16 bg-[var(--Neutral-Black)]">
      <div className="container-custom grid   grid-cols-1  sm:grid-cols-2 md:grid-cols-[3fr_1fr_1fr_2fr] gap-10">
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <img
              src="/Footer/Logo.png"
              alt="Logo"
              className="w-[48px] h-[29px]"
            />
            <div className="main-title text-[var(--Neutral-White)]">
              Nexcent
            </div>
          </div>

          <div className="mt-4  secondary-title text-[var(--Neutral-Silver)] text-center md:text-left">
            <p>Copyright © 2020 Nexcent ltd.</p>
            <p className="pt-2">All rights reserved</p>
          </div>

          <div className="mt-4 md:mt-10 flex justify-center md:justify-start gap-4">
            <img src={Ins} alt="Instagram icon" />
            <img src={Bas} alt="Dribbble icon" />
            <img src={Twi} alt="Twitter icon" />
            <img src={You} alt="YouTube icon" />
          </div>
        </div>

        
        <div className="text-center  mt-6  md:text-left">
          <h4 className="main-title text-xl text-[var(--Neutral-White)]">
            Company
          </h4>
          <ul className="mt-6 flex flex-col gap-3">
            {Company.map((item, index) => (
              <li key={index}>
                <a
                  className="secondary-title text-sm text-[var(--Neutral-Silver)]"
                  href={item.href}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center  mt-6  md:text-left">
          <h4 className="main-title  text-xl text-[var(--Neutral-White)]">
            Support
          </h4>
          <ul className="mt-6 flex flex-col gap-3">
            {Support.map((item, index) => (
              <li key={index}>
                <a
                  className="secondary-title text-sm text-[var(--Neutral-Silver)]"
                  href={item.href}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mt-6 md:text-left flex flex-col items-center md:items-start">
          <h4 className="main-title text-xl text-[var(--Neutral-White)] mb-2">
            Stay up to date
          </h4>
          <div className="relative w-[255px] mt-6 group">
            <input
              type="text"
              placeholder="Your email address"
              className="w-full  bg-[rgba(255,255,255,0.2)] text-[var(--Text-Gray-300)] rounded-lg pl-3 pr-10 py-2.5 text-sm secondary-title"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:rotate-[15deg]">
              <img src={Send} alt="send" className="w-[18px] h-[18px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
