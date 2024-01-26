import React from "react";
import { MdOutlineDelete } from "react-icons/md";
import Image from "next/image";

const CartItem = ({ data }) => {
  const p = data.attributes;
  return (
    <div className="flex md:w-[700px] border-b">
      <div className=" shrink-0 md:w-[120px] md:h-[120px] aspect-square w-[50px] h-[50px] m-auto ">
        <Image
          width={120}
          height={120}
          src={p.thumbnail.data.attributes.url}
          alt={p.name}
        />
      </div>
      <div className="mx-4 w-full py-5">
        <div className="flex md:flex-row flex-col justify-between">
          <h2 className="font-semibold md:text-[20px] text-[15px]">Name</h2>
          <p className="text-black/[0.7] md:text-sm text-[12px] md:mt-1 mt-0 md:hidden">
            {p.subtitle}
          </p>
          <h2 className="font-bold md:text-[13px] text-[11px] text-black/[0.6]">
            MRP: ₹ {p.price}
          </h2>
        </div>
        <p className="text-black/[0.7] md:text-sm text-[12px] md:mt-1 mt-0 md:block hidden">
          {p.subtitle}
        </p>

        <div className="flex justify-between">
          <div className="flex md:flex-row items-center md:gap-10 gap-2 flex-col justify-between md:text-[15px] text-[12px]">
            <div className="flex">
              <div className="font-semibold">Size: </div>
              <select className=" text-black/[0.7] hover:text-black">
                <option value="1">UK6</option>
                <option value="2">UK8</option>
                <option value="3">UK8</option>
                <option value="4">UK8</option>
                <option value="5">UK8</option>
                <option value="6">UK8</option>
                <option value="7">UK8</option>
                <option value="8">UK8</option>
                <option value="9">UK8</option>
              </select>
            </div>

            <div className="flex">
              <div className="font-semibold">Quantity: </div>
              <select className=" text-black/[0.7] hover:text-black">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </select>
            </div>

            <div>
              <MdOutlineDelete className="text-black/[0.6] hover:text-black md:text-[20px] text-[16px] cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
