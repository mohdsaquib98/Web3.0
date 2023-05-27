import React, { useState, useRef } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";

const NavBarItem = ({ title, classprops, handleClick }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`} onClick={handleClick}>
    {title}
  </li>
);

const Navbar = ({ handleMarketClick }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const marketRef = useRef(null);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleItemClick = (title) => {
    if (title === "Market") {
      handleMarketClick(); // Call the handler function when "Market" is clicked
      marketRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to the market table
    }
    handleToggleMenu();
  };

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavBarItem
            key={item + index}
            title={item}
            handleClick={() => handleItemClick(item)} // Pass the item as an argument to the handler function
          />
        ))}
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li>
      </ul>
      <div className="flex relative">
        {!toggleMenu ? (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={handleToggleMenu}
          />
        ) : (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={handleToggleMenu}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={handleToggleMenu} />
            </li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
              <NavBarItem
                key={item + index}
                title={item}
                classprops="my-2 text-lg"
                handleClick={() => handleItemClick(item)} // Pass the item as an argument to the handler function
              />
            ))}
          </ul>
        )}
      </div>
      <div ref={marketRef} />
    </nav>
  );
};

export default Navbar;
