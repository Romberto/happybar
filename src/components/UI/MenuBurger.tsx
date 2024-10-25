import { useState } from "react";
import { Link } from "react-router-dom";
import { menuListData } from "../../data.config";
import { Button } from "@mui/material";

const MenuBurger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };





  return (
    <>
      <div className="relative w-16 h-14 cursor-pointer" onClick={toggleMenu}>
        <span
          className={`bg-orange-500 absolute h-2 rounded-md  top-2 w-full transition-transform duration-300 ${
            isOpen ? "rotate-45 top-6" : ""
          }`}
        ></span>
        <span
          className={`bg-orange-500 absolute h-2 rounded-md  top-6 w-full transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100 duration-1000 "
          }`}
        ></span>
        <span
          className={`bg-orange-500 absolute h-2 rounded-md  top-10 w-full transition-transform duration-300 ${
            isOpen ? "-rotate-45 top-6" : ""
          }`}
        ></span>
      </div>

      {/* menu */}

      {/* <div className={`${isOpen ? "block" : "hidden"}`}>
        <div
          className={`absolute w-full h-screen bg-orange-100 opacity-35 top-0 left-0 `}
        ></div>
        <div className={`absolute w-full h-screen top-0 left-0 `}>
          <div
            onClick={handelClose}
            className="relative w-full h-screen flex items-center justify-around"
          >
            <div className="w-60 md:w-96 min-h-5 p-2 bg-amber-900 rounded-md">
              <nav className={"pt-1 flex flex-col gap-x-1"}>
                <img src={'/happybar/img/1751088.svg'} className="w-5/6 mx-auto"/>
                {menuListData.map((item) => (
                  <li key={item.id}>
                    <Button><Link className="text-slate-50 hover:text-orange-500 active:text-orange-500"  to={item.path}>{item.name}</Link></Button>
                  </li>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div> */}

      <div
        className={`fixed top-0 right-0 w-full h-full transition-transform duration-300 ease-linear transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-center h-full w-full relative">
            <div onClick={()=>setIsOpen(!isOpen)} className="absolute h-full w-full top-0 left-0 bg-orange-100 opacity-35"></div>
            
            <nav className="pt-1 flex flex-col gap-x-1 absolute top-0 left-0 w-60 h-auto bg-amber-900 rounded-md translate-x-1/4 translate-y-1/4">
                <img src={'/happybar/img/1751088.svg'} className="w-5/6 mx-auto"/>
                {menuListData.map((item) => (
                  <li key={item.id}>
                    <Button><Link onClick={()=>setIsOpen(!isOpen)} className="text-slate-50 hover:text-orange-500 active:text-orange-500"  to={item.path}>{item.name}</Link></Button>
                  </li>
                ))}
              </nav>
        </div>

      </div>
    </>
  );
};

export default MenuBurger;
