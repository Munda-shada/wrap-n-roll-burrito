"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav className="fixed top-0 w-full z-[999] bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* LOGO & NAME */}
        <Link href="/" className="z-[1001] flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
          <div className="relative h-10 w-10"> 
            <Image src="/logo.png" alt="Logo" fill className="object-contain" priority />
          </div>
          <span className="text-xl font-extrabold tracking-tighter text-gray-900 group-hover:text-orange-600 transition-colors">
            Wrap<span className="text-orange-600 group-hover:text-gray-900 transition-colors">N</span>RollBurrito
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8 text-[13px] font-bold uppercase tracking-widest text-gray-500">
          <Link href="/menu" className="hover:text-orange-600 transition">Menu</Link>
          <Link href="/about" className="hover:text-orange-600 transition">About</Link>
          <Link href="/contact" className="hover:text-orange-600 transition">Contact</Link>
          <Link href="/order" className="bg-orange-600 text-white px-7 py-2.5 rounded-full hover:bg-black transition-all">
            Order Now
          </Link>
        </div>

        {/* MOBILE BURGER BUTTON */}
        <button 
          onClick={() => {
            console.log("Menu toggled:", !isOpen);
            setIsOpen(!isOpen);
          }}
          className="md:hidden z-[1001] relative w-10 h-10 flex flex-col justify-center items-center focus:outline-none"
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
             <span className={`h-0.5 w-full bg-black transition-all duration-300 transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
             <span className={`h-0.5 w-full bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
             <span className={`h-0.5 w-full bg-black transition-all duration-300 transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {/* MOBILE OVERLAY MENU */}
        <div 
          className={`fixed inset-0 bg-white z-[1000] flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out ${
            isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-full"
          }`}
        >
          <Link href="/" onClick={() => setIsOpen(false)} className="text-4xl font-black uppercase italic">Home</Link>
          <Link href="/menu" onClick={() => setIsOpen(false)} className="text-4xl font-black uppercase italic">Menu</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-4xl font-black uppercase italic">About</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-4xl font-black uppercase italic">Contact</Link>
          <Link href="/order" onClick={() => setIsOpen(false)} className="mt-4 bg-orange-600 text-white px-12 py-5 rounded-full text-xl font-black uppercase italic">Order Now</Link>
        </div>
      </div>
    </nav>
  );
}