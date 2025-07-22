import { Carts } from "../Contant/GenerList";
import { MoveRight } from "lucide-react";

function CartSection() {
  return (
    <div className="flex flex-wrap justify-center lg:justify-between gap-6">
      {Carts.map((card, index) => (
        <div
          key={index}
          className="bg-white mt-8 sm:mt-30  md:mt-0  mb-10 md:mb-0 rounded-lg text-center relative w-full sm:w-80 md:w-96"
        >
          <img
            src={card.img}
            alt={`card-${index}`}
            className="w-full h-56 sm:h-64 md:h-72 object-cover rounded-t-md"
          />

          <div
            className="absolute -bottom-20 left-1/2 -translate-x-1/2 z-20 w-[90%] sm:w-72 md:w-[345px]
           h-44 py-4 px-6 sm:px-7 md:px-8
           rounded-lg bg-[var(--Neutral-Silver)] shadow-[0px_8px_16px_0px_rgba(171,190,209,0.4)]"
          >
            <p className="main-title text-base sm:text-lg md:text-xl text-[var(--Neutral-Grey)] font-medium mb-4 text-center leading-6">
              {card.subtitle}
            </p>

            <div className="w-full flex justify-center">
              <button className="main-title flex items-center gap-2 text-base sm:text-lg md:text-xl text-[var(--Brand-Primary)] group">
                Readmore
                <MoveRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartSection;
