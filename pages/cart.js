import React from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import CartItem from "@/components/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {cartItems.length > 0 &&
          +(
            <>
              {/* Heading start */}
              <div className="mt-8 md:mt-0">
                <div className="text-black md:text-3xl text-2xl font-semibold text-center">
                  Shopping Cart
                </div>
              </div>
              {/* Heading End */}

              {/* Cart Items and Purchase Summary Start */}

              <div className="flex md:flex-row flex-col-1 gap-12 py-10">
                {/* Left division start */}
                <div className="flex-[2]">
                  <div className="text-lg font-bold">Cart Items</div>
                  <div className=" flex flex-col gap-2">
                    {cartItems.map((item) => (
                      <CartItem key={item.id} data={item} />
                    ))}
                    {/* <CartItem />
                  <CartItem /> */}
                  </div>
                </div>
                {/* Left division end */}

                {/* Right Division Start */}
                <div className="flex-[1] gap-1">
                  <div className="text-lg font-bold">Summary</div>
                  <div className="bg-gray-300/[0.3] rounded-lg gap-4 p-5 my-5 ">
                    <div className="flex justify-between p-4">
                      <h2 className="md:text-[16px] text-[13px] font-medium uppercase">
                        SUBTOTAL
                      </h2>
                      <h2 className="md:text-[16px] text-[13px] font-medium uppercase">
                        Rs 19 695.00
                      </h2>
                    </div>
                    <div className="px-2 py-3 md:text-md text-sm border-t mt-5 leading-tight">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Aut sit rem voluptas inventore exercitationem culpa natus!
                      Quis tenetur iste ducimus?
                    </div>
                  </div>
                  <div className="bg-black py-4 text-center text-white mt-5 rounded-full  hover:bg-black/[0.5]">
                    Checkout
                  </div>
                </div>
              </div>
            </>
          )}

        {/* Cart Items and Purchase Summary End */}

        {/* Empty Cart Screen */}
        {cartItems.length < 1 && (
          <div className="flex-[2] flex flex-col items-center justify-center pb-[50px] md:-mt-14">
            <Image
              src="/empty-cart.jpg"
              width={300}
              height={300}
              className="w-[300px] md:w-[400px]"
            />
            <span className="text-xl font-bold">Your Cart is Empty</span>
            <span className="text-center mt-4">
              Looks like you have not added anything in your cart.
              <br />
              Go ahead and explore top categories.
            </span>
            <Link
              href="/"
              className="bg-black py-4 px-8 text-center text-white mt-5 rounded-full hover:bg-black/[0.5]"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default Cart;
