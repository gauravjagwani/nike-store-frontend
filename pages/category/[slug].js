import React, { useState } from "react";
import { useRouter } from "next/router";
import Wrapper from "@/components/Wrapper";
import ProductCards from "@/components/ProductCards";
import { fetchDataFromAPI } from "@/utils/api";
import useSWR from "swr";
const maxResult = 3;

const Category = ({ category, products, slug }) => {
  const [pageIndex, setPageIndex] = useState(1);
  const { data, error, isLoading } = useSWR(
    `/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=${pageIndex}&pagination[pageSize]=${maxResult}`,
    fetchDataFromAPI,
    { fallbackData: products }
  );
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-center max-w=[800px] mx-auto md:mt-0">
          <div className="text-[30px] md:text-[36px] font-semibold leading-tight mb-5">
            {category?.data[0]?.attributes?.name}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 my-14 gap-5 px-5 md:px-0">
          {data.data.map((product) => (
            <ProductCards key={product?.id} data={product} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;

export async function getStaticPaths() {
  const category = await fetchDataFromAPI("/api/categories?populate=*");

  const paths = category?.data?.map((c) => ({
    params: {
      slug: c.attributes.slug,
    },
  }));
  return {
    paths,
    fallback: false, // false or "blocking"
  };
}

export async function getStaticProps({ params: { slug } }) {
  const category = await fetchDataFromAPI(
    `/api/categories?filters[slug][$eq]=${slug}`
  );
  const products = await fetchDataFromAPI(
    `/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=1&pagination[pageSize]=${maxResult}`
  );

  return {
    props: {
      category,
      products,
      slug,
    },
  };
}
