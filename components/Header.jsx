import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";
import { fetchDataFromAPI } from "@/utils/api";

import { BsCart2 } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import MenuMobile from "./MenuMobile";
import { useSelector } from "react-redux";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [categories, setCategories] = useState(null);
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const { data } = await fetchDataFromAPI("/api/categories?populate=*");
    setCategories(data);
  };

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white backdrop-filter backdrop-blur-md bg-opacity-40 border-b border-gray-200 flex items-center justify-between z-20 sticky top-0 transition-transform duration-300${show}`}
    >
      <Wrapper className="h-60px flex justify-between items-center">
        <Link href="/">
          <img src="/logo.svg" alt="" className="w-[42px] md:wd-[65px] " />
        </Link>
        <Menu
          showCatMenu={showCatMenu}
          setShowCatMenu={setShowCatMenu}
          categories={categories}
        />

        {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
            categories={categories}
          />
        )}
        <div className="flex items-center gap-2 text-black">
          <Link href="/cart">
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
              <BsCart2 className="text-[15px] md:text-[20px]" />
              {cartItems.length > 0 && (
                <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-700 text-center text-white text-[10px] md:text-[12px] left-5 top-1 absolute flex justify-center items-center px-[2px] md:px-[5px] ">
                  {cartItems.length}
                </div>
              )}
            </div>
          </Link>

          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <IoMdHeartEmpty className="text-[20px] md:text-[25px]" />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-700 text-center text-white text-[10px] md:text-[12px] left-5 top-1 absolute flex justify-center items-center px-[2px] md:px-[5px] ">
              5
            </div>
          </div>
          {/* MObile icon start */}
          <div className=" md:hidden w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            {mobileMenu ? (
              <VscChromeClose
                onClick={() => setMobileMenu(false)}
                className="text-[20px] md:text-[25px]"
              />
            ) : (
              <BiMenuAltRight
                onClick={() => setMobileMenu(true)}
                className="text-[20px] md:text-[25px]"
              />
            )}
          </div>
          {/* MObile icon end */}
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
