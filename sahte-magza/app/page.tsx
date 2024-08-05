import Image from "next/image";
import Deneme from './deneme'
import Navbar from './navbar'
import Footer from './footer'

interface Products{
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
  
  const res = await fetch('https://fakestoreapi.com/products?limit=20')
  const products: Products[] = await res.json();  
  
    return (
      <>
      <Navbar />
          <div className="text-black justify-center px-10 py-10">
            <div className="grid lg:grid-cols-4 gap-8 mb-4">
              {products.map((product, index) => (
                <Deneme key={index} product={product} />
              ))}
            </div>
           
          </div>
          <Footer />
    </>
  );
}