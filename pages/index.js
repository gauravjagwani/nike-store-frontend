import HeroBanner from "@/components/HeroBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Wrapper from "@/components/Wrapper";
import ProductCards from "@/components/ProductCards";
import { useEffect, useState } from "react";
import { API_OPTION } from "@/utils/constant";
import { fetchDataFromAPI } from "@/utils/api";

export default function Home({ products_2 }) {
  // const [data, setData] = useState("");
  // useEffect(() => {
  //   productAPI();
  // }, []);

  // const productAPI = async () => {
  //   const { products_2 } = await fetchDataFromAPI("/api/products?populate=*");
  //   setData(products_2);
  // };
  return (
    <main>
      <HeroBanner />

      <Wrapper>
        <div className="flex flex-col justify-center items-center max-w-[1300px] my-[50px] md:py-[80px] gap-3">
          <div className="font-urbanist font-semibold text-3xl leading-tight">
            Cushioning for Your Miles
          </div>
          {
            <p className="font-urbanist font-normal text-wrap ">
              A lightweight Nike ZoopX midsole is combbined with increased stack
              height to help provide cushioning during extended streches of
              running.
            </p>
          }
        </div>
        <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 my-14 gap-5 px-5">
          {products_2?.data?.map((product) => (
            <ProductCards key={product?.id} data={product} />
          ))}
        </div>
      </Wrapper>
    </main>
  );
}

export async function getStaticProps() {
  const products_2 = await fetchDataFromAPI("/api/products?populate=*");

  return {
    props: { products_2 },
  };
}
