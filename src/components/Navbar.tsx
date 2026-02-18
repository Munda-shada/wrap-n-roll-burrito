"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-white/20 transition-all duration-300 ${
        scrolled 
          ? "py-3 shadow-sm" 
          : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO & NAME */}
        <Link href="/" className="z-[1001] flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
          <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-orange-600 transition-transform duration-300 group-hover:rotate-20"> 
            <Image src="/logo.png" alt="Logo" fill className="object-contain" priority />
          </div>
          <span className="text-xl font-extrabold tracking-tighter text-gray-900 group-hover:text-orange-600 transition-colors">
            Wrap<span className="text-orange-600 group-hover:text-gray-900 transition-colors">N</span>RollBurrito
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {['Menu', 'About', 'Contact'].map((item) => (
            <Link 
              key={item}
              href={`/${item.toLowerCase()}`} 
              className="text-sm font-bold uppercase tracking-widest text-gray-600 hover:text-orange-600 transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          <Link 
            href="/order" 
            className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-2.5 rounded-full text-sm font-black uppercase tracking-widest hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            Order Now
          </Link>
        </div>

        {/* MOBILE BURGER BUTTON */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-[1001] relative w-10 h-10 flex flex-col justify-center items-center focus:outline-none"
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
             <span className={`h-0.5 w-full rounded-full bg-gray-900 transition-all duration-300 transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
             <span className={`h-0.5 w-full rounded-full bg-gray-900 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
             <span className={`h-0.5 w-full rounded-full bg-gray-900 transition-all duration-300 transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {/* MOBILE OVERLAY MENU */}
        <div 
          className={`fixed inset-0 h-dvh bg-white z-[1000] flex flex-col items-center justify-start pt-24 gap-8 transition-all duration-500 ease-in-out overflow-y-auto ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
        >
          {['Home', 'Menu', 'About', 'Contact'].map((item, idx) => (
             <Link 
               key={item}
               href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
               onClick={() => setIsOpen(false)} 
               className={`text-4xl font-black uppercase italic tracking-tighter text-gray-900 hover:text-orange-600 transition-all duration-300 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
               style={{ transitionDelay: `${idx * 100}ms` }}
             >
               {item}
             </Link>
          ))}

          <Link 
            href="/order" 
            onClick={() => setIsOpen(false)} 
            className={`mt-4 bg-orange-600 text-white px-10 py-4 rounded-full text-xl font-black uppercase italic shadow-xl hover:scale-105 transition-all duration-300 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: '400ms' }}
          >
            Order Now
          </Link>
        </div>
      </div>
    </nav>
  );
}