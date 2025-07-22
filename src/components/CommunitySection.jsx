import { community } from "../Contant/GenerList";

function CommunitySection() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center">
      {community.map((feature, index) => (
        <div
          key={index}
          className="bg-[var(--Default-White)] w-full max-w-[300px] h-auto text-center p-6  rounded-lg shadow-[0px_2px_4px_0px_rgba(171,190,209,0.2)]"
        >
          <div className="relative w-[50px] h-[49px] mx-auto mb-4">
            <div
              className="w-full h-full 
                  rounded-tl-[10px] rounded-tr-[5px] 
                  rounded-br-[18px] rounded-bl-[5px] 
                  bg-[var(--Tint-T5)]
                  translate-x-[14px] translate-y-[8px]"
            ></div>

            <img
              src={feature.icon}
              alt={feature.title}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                object-contain z-10"
            />
          </div>

          <h3 className="text-2xl  font-semibold    px-10 text-center  text-[var(--Neutral-D-Grey)] mb-2">
            {feature.title}
          </h3>
          <p className="text-[var(--Neutral-Grey)] text-sm leading-6 ">
            {feature.subtitle}
          </p>
        </div>
      ))}
    </div>
  );
}

export default CommunitySection;
