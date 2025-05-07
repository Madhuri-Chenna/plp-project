import React from "react";
import Head from "next/head";

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
}

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Product Listing Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="p-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-xl shadow p-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600 text-sm mb-2">{product.category}</p>
            <p className="font-bold text-blue-600 mb-2">${product.price}</p>
            <p className="text-sm text-gray-500">
              {product.description.substring(0, 100)}...
            </p>
          </div>
        ))}
      </main>
    </>
  );
}
