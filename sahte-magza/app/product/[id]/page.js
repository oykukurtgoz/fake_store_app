import React from 'react';
import Navbar from '../../../navbar';
import Footer from '../../../footer';


    async function getProducts() {
    try{
    const response =await fetch("https://fakestoreapi.com/products?limit=20");
  
    return response.json();
  }
  catch(err){
    throw new Error(err);
  }
  
}

    async function getProduct(idOrName) {
      try{
      const res = await fetch(`https://fakestoreapi.com/products/${idOrName}`)
     if(!res.ok){
        return null;
     }
    return res.json()
    } catch(err){
        throw new Error(err)
    }
    }
export default async function ProductPage({params}) {
   
const product = await getProduct(params.id)

  return (
    <>
    <Navbar></Navbar>
    <div className='px-10 py-10' >
      <h1 className="text-black font-bold">{product.title}</h1>
      <div className='flex px-4 py-4'>
        <img src={product.image} alt={product.title} className="border-none p-10 shadow-xl max-h-80" />
        <div className="md:w-1/2 px-4 py-4">
          <p className="text-black mb-4">{product.description}</p>
          <p className="text-black font-bold pb-4">${product.price}</p>
          <button className='border-none shadow-xl bg-neutral-400 rounded-full p-2'>add to card</button>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}