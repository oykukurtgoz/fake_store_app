"use client";
import Link from 'next/link';
import { useState } from 'react';
import { MdArrowDropDown } from "react-icons/md";
import { IoMdArrowDropup } from "react-icons/io";



export default function Navbar() {
  const categories = ["men's clothing", "women's clothing", 'jewelery', 'electronics','all'];

  const [selectedCategory, setSelectedCategory] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);

  };

  return (
    <div>
      <nav className="bg-stone-300 p-10">
        <div className="mx-auto flex justify-between">
          <div className="text-black font-bold text-xl">
            <Link href="/">Fake Store App with Next.js</Link>
          </div>
          <div className="relative z-40">
            <button onClick={toggle} className="flex text-black px-12">
            Select Category <span className='py-1'>{isOpen ? < IoMdArrowDropup/>: < MdArrowDropDown />
            }</span>
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategorySelect(category)}
                    className="block px-4 py-2 text-left text-black hover:bg-gray-200 w-full"
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
