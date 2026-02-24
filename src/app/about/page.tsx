import { siteConfig } from "@/config/site";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen pb-20">
      {/* HERO SECTION */}
      <div className="relative bg-gray-900 text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <Image 
             src="/image/hero-burritos.png" 
             alt="Background" 
             fill 
             className="object-cover grayscale" 
           />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-orange-500 font-bold uppercase tracking-widest text-xs md:text-sm mb-4">Since 2026</p>
          <h1 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter leading-tight">
            The Story of <br className="md:hidden" /> 
            <span className="text-orange-600 normal-case">{siteConfig.name}</span>
          </h1>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-3xl mx-auto py-16 px-6">
        <div className="prose prose-lg text-gray-600 space-y-8 leading-relaxed">
          <p className="text-lg md:text-2xl font-medium text-gray-900">
            Founded in 2026, <strong>{siteConfig.name}</strong> was born out of a simple obsession: 
            to create the world's most perfectly rolled burrito.
          </p>
          <p>
            We don't believe in shortcuts. Our tortillas are pressed daily, our salsas are 
            made from scratch, and our meats are marinated for 24 hours in a secret blend of 
            authentic spices.
          </p>
          
          <div className="my-10 bg-orange-50 p-8 md:p-12 rounded-3xl border border-orange-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 text-orange-200 text-9xl font-black opacity-20 -translate-x-2 -translate-y-6 leading-none">"</div>
            <p className="italic font-bold text-xl md:text-2xl text-orange-900 relative z-10 text-center">
              We aren't just making wraps; we're rolling up a better way to eat.
            </p>
          </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                  <h3 className="text-4xl font-black text-gray-900 mb-2">100%</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Fresh Ingredients</p>
              </div>
              <div className="text-center">
                  <h3 className="text-4xl font-black text-gray-900 mb-2">24hr</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Marination</p>
              </div>
              <div className="text-center">
                  <h3 className="text-4xl font-black text-gray-900 mb-2">Daily</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Hand Pressed</p>
              </div>
           </div>
        </div>
      </div>
    </main>
  );
}