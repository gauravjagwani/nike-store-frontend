import Link from "next/link";
import React from "react";
import Image from "next/image";

const ProductCards = ({ data }) => {
  const d = data?.attributes;
  // const { id } = data;
  const possibleNumbers = [20, 25, 30];
  const randomIndex = Math.floor(Math.random() * possibleNumbers.length);
  const discount = possibleNumbers[randomIndex];

  return (
    <Link
      className="transform overflow-hidden duration-200 hover:scale-105"
      href={`/product/${d.slug}`}
      // href={`/products/1`}
    >
      <Image
        width={500}
        height={500}
        src={d?.thumbnail?.data?.attributes?.url}
        alt={d?.name}
      />

      <div className="p-4">
        <h1 className="font-medium">{d?.name}</h1>
        {/* <div className="flex items-center text-black/[0.5]">
        <div className="mr-2 font-semibold">
            {Math.trunc(((100 - discount) / 100) * d.price)}
          </div>
          
          <div className="font-medium line-through">&#8377;{d.price}</div>
          <div className="text-sm text-green-600 ml-auto">-{discount}% off</div>
        </div> */}
      </div>
    </Link>
  );
};

export default ProductCards;
