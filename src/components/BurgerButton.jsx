const BurgerButton = ({ onClick, isOpen }) => {
  return (
    <button
      className="flex flex-col justify-between w-6 h-5 focus:outline-none"
      onClick={onClick}
    >
      <span
        className={`block h-[3px] bg-[var(--Brand-Primary)] rounded transition-transform duration-300 ${
          isOpen ? "rotate-45 translate-y-[8px]" : ""
        }`}
      ></span>
      <span
        className={`block h-[3px] bg-[var(--Brand-Primary)] rounded transition-opacity duration-300 ${
          isOpen ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`block h-[3px] bg-[var(--Brand-Primary)] rounded transition-transform duration-300 ${
          isOpen ? "-rotate-45 -translate-y-[8px]" : ""
        }`}
      ></span>
    </button>
  );
};

export default BurgerButton;
