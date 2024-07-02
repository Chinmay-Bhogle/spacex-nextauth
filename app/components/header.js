"use client";

import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="header_top_nav flex justify-end py-[12px]">
            <ul className="flex gap-[20px]">
              <li className="text-xs font-normal text-[#333333]">Help</li>
              <li className="text-xs font-normal text-[#333333]">Orders & Returns</li>
              <li className="text-xs font-normal text-[#333333]"><Link href={"/account/login"}>Hi, John</Link></li>
            </ul>
        </div>
        <div className="main_header flex items-center justify-between flex-wrap gap-4 pt-[10px] pb-[20px]">
          <h1 className="text-3xl font-bold text-black">ECOMMERCE</h1>
          <div className="main_nav max-w-full">
            <ul className="flex overflow-x-auto gap-[30px]">
              <li className="text-base font-semibold text-black whitespace-nowrap">Categories</li>
              <li className="text-base font-semibold text-black whitespace-nowrap">Sale</li>
              <li className="text-base font-semibold text-black whitespace-nowrap">Clearance</li>
              <li className="text-base font-semibold text-black whitespace-nowrap">New stock</li>
              <li className="text-base font-semibold text-black whitespace-nowrap">Trending</li>
            </ul>
          </div>
          <div className="right_icons flex gap-[30px]">
            <Image src="../search.svg" alt="Search Icon" width={32} height={32} />
            <Image src="../cart.svg" alt="Cart icon" width={32} height={32}/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;