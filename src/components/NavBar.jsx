import { navItems } from "../Contant/GenerList";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import BurgerButton from "./BurgerButton";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  const location = useLocation();

  return (
    <div className="w-full relative z-50 bg-[var(--Neutral-Silver)]">
      <div className="container-custom flex justify-between items-center py-5">

        <div>
          <img src="/NavBar/Logo.svg" alt="Logo" />
        </div>

        <ul className="hidden md:flex gap-1.5  lg:gap-[3.125rem] justify-center items-center">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={index}>
                <a
                  className={`secondary-title nav-link ${
                    isActive ? "font-semibold" : "font-normal"
                  }`}
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex gap-6">
          <button className="py-2.5  px-5 rounded-md border border-transparent hover:border-[var(--Brand-Primary)] text-[var(--Brand-Primary)] secondary-title transition-custom ">  
              Login
          </button>
          <button className="py-2.5 px-5 rounded-md   bg-[var(--Brand-Primary)] secondary-title text-[var(--Default-White)]">
            Sign up
          </button>
        </div>

        <div className="md:hidden border-2 p-2 rounded-md">
          <BurgerButton onClick={toggleMenu} isOpen={isOpen} />
        </div>
      </div>


        <div
            className={`
            fixed  top-[80px] right-0 h-full w-[250px] bg-white shadow-custom transition-transform duration-300
            block md:hidden
            ${isOpen ? "translate-x-0" : "translate-x-full"}
            `}
        >
             <div className="p-6 flex flex-col gap-4">
               {navItems.map((item, index) => {
                 const isActive = location.pathname === item.href;
                 return (
                   <a
                     key={index}
                     href={item.href}
                     className={`secondary-title nav-link ${
                       isActive ? "font-semibold" : "font-normal"
                     }`}
                     onClick={() => setIsOpen(false)}
                   >
                     {item.label}
                   </a>
                 );
               })}
     
               <hr className="my-4" />
     
               <button className="py-2.5 px-5 text-[var(--Brand-Primary)] border border-[var(--Brand-Primary)] rounded secondary-title">
                 Login
               </button>
               <button className="py-2.5 px-5 rounded bg-[var(--Brand-Primary)] text-[var(--Default-White)] secondary-title">
                 Sign up
               </button>
             </div>
      </div>
    </div>
  );
}

export default NavBar;
