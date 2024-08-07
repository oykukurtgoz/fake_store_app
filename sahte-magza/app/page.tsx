"use client";
import Image from "next/image";
import Deneme from './deneme';
import Navbar from './navbar';
import Footer from './footer';
import { useSearchParams } from 'next/navigation';

interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  createdAt: string;
}

export default async function Home() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || 'all';

  let url = 'https://fakestoreapi.com/products';
  
  if (category !== 'all') {
    url += `/category/${category}`;
  }

  const res = await fetch(url);
  const products: Products[] = await res.json();

  return (
    <>
      <Navbar />
      <div className="text-black justify-center px-10 py-10">
        <div className="grid lg:grid-cols-4 gap-8 mb-4">
          {products.map((product) => (
            <Deneme key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
