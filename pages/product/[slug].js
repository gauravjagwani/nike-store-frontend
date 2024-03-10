import ProductDetailsCurousals from "@/components/ProductDetailsCurousals";
import Wrapper from "@/components/Wrapper";
import { addToCart } from "@/store/cartSlice";
import { fetchDataFromAPI } from "@/utils/api";
import React, { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = ({ product, products }) => {
  const [selectedsize, setSelectedSize] = useState();
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();
  const p = product?.data[0]?.attributes;

  const notify = () => {
    toast.success("Success! Check your cart", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <div className="w-full md:py-20">
      <ToastContainer />
      <Wrapper>
        <div className="flex lg:flex-row md:flex-col md:px-10 gap-[50px] lg:gap-[100px]">
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCurousals images={p.image.data} />
          </div>
          <div className="flex-[1] py-3">
            <div className="text-[35px] font-semibold mb-2 leading-tight ">
              {p.name}
            </div>

            <div className="text-lg font-semibold mb-5">{p.subtitle}</div>

            <div className="text-lg font-semibold mb-0">
              MRP: &#8377;{p.price}
            </div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            {/* Product Sizing range */}
            <div className="mb-10 mt-7">
              <div className=" flex justify-between mt-5">
                <div className="font-semibold text-lg">Select Size</div>
                <div className="font-semibold text-lg text-black/[0.5]">
                  Size Guide
                </div>
              </div>

              {/* Size options */}
              <div id="sizeGrid" className="grid grid-cols-3 mt-5 gap-3">
                {p.size.data.map((s, i) => (
                  <div
                    key={i}
                    className={`border rounded-md hover:border-black py-3 font-medium  text-center ${
                      s.enabled
                        ? "cursor-pointer"
                        : "bg-black/[0.1] text-black/[0.4] cursor-not-allowed"
                    } ${selectedsize === s.size ? "border-black" : ""}`}
                    onClick={() => {
                      setSelectedSize(s.size);
                      setShowError(false);
                    }}
                  >
                    {s.size}
                  </div>
                ))}
              </div>
              {/* Show error */}
              {showError && (
                <div className="text-red-600 mt-1">
                  Size selection is required
                </div>
              )}
              {/* Add to Cart */}

              <div
                className="mt-6 w-full bg-black rounded-full text-white font-medium text-center py-3 cursor-pointer"
                onClick={() => {
                  if (!selectedsize) {
                    setShowError(true);
                    document.getElementById("sizeGrid").scrollIntoView({
                      block: "center",
                      behavior: "smooth",
                    });
                  } else {
                    dispatch(
                      addToCart({
                        ...product?.data[0],
                        selectedsize,
                        oneQuantityPrice: p.price,
                      })
                    );
                    notify();
                  }
                }}
              >
                Add to Cart
              </div>
              <div className="mt-2 w-full border border-black bg-white rounded-full text-black font-medium text-center py-3 mb-7 cursor-pointer">
                Wishlist 💖
              </div>

              <div className="mt-5">
                <div className="font-semibold text-lg mb-4">
                  Product Details
                </div>
                <div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  eligendi aliquam dolorem saepe libero consequatur ipsum eaque
                  quam aperiam nostrum, ducimus doloremque illum et
                  reprehenderit quos, magni maiores! Repudiandae sint iste
                  soluta. Fugit reprehenderit illo nisi quam, aliquid aspernatur
                  sapiente atque. Exercitationem labore porro ipsa aut a
                  obcaecati minus natus!
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;

export async function getStaticPaths() {
  const products = await fetchDataFromAPI("/api/products?populate=*");

  const paths = products?.data?.map((p) => ({
    params: {
      slug: p?.attributes?.slug,
    },
  }));
  return {
    paths,
    fallback: false, // false or "blocking"
  };
}

export async function getStaticProps({ params: { slug } }) {
  const product = await fetchDataFromAPI(
    `/api/products?populate=*&[filters][slug][$eq]=${slug}`
  );
  const products = await fetchDataFromAPI(
    `/api/products?populate=*&[filters][slug][$ne]=${slug}`
  );

  return {
    props: {
      product,
      products,
    },
  };
}
