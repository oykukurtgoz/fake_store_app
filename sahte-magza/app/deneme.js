import Image from "next/image"
import Link from "next/link"

export default async function deneme({product}) {
return(
    <div className="flex flex-col rounded-lg text-black place-center px-10 py-10 shadow-2xl justify-center items-center border">
    <div className="flex justify-center relative w-44 h-52 items-center py-4 mb-4"> 
        <Image src={product.image} fill></Image>
    </div>  
    
    <p className="mb-4 max-h-12 overflow-hidden">{product.title}</p>

    <p className="text-black font-bold">${product.price}</p>
    <Link href={`/product/${product.id}`} className="text-blue-500 hover:underline">View Details</Link>
    </div>
)
}
