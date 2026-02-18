"use client";

import { useState, useEffect, useRef } from "react";
// import Image from "next/image"; // Confirmed: Image remains commented
import menuData from "@/data/menu.json";

const FILTERS = ["All", "Meat", "Veggie", "Vegan", "Spicy", "Gluten-Free"];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(menuData.categories[0].id);
  const [activeFilter, setActiveFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  
  const mobileNavRef = useRef<HTMLDivElement>(null); // Specific ref for mobile slider
  const isManualScrolling = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  // 1. MOBILE AUTO-SLIDE LOGIC (Strictly targets mobile nav)
  useEffect(() => {
    if (isLoading) return;
    
    const activeBtn = mobileNavRef.current?.querySelector(`[data-id="${activeCategory}"]`) as HTMLElement;
    const container = mobileNavRef.current;

    if (activeBtn && container) {
      const containerWidth = container.offsetWidth;
      const btnOffset = activeBtn.offsetLeft;
      const btnWidth = activeBtn.offsetWidth;
      const scrollPosition = btnOffset - containerWidth / 2 + btnWidth / 2;

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [activeCategory, isLoading]);

  // 2. INTERSECTION OBSERVER (Syncs both Sidebar & Top Bar)
  useEffect(() => {
    if (isLoading) return;

    const observer = new IntersectionObserver((entries) => {
      if (isManualScrolling.current) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveCategory(entry.target.id);
        }
      });
    }, { 
      threshold: 0.1, 
      rootMargin: "-20% 0px -60% 0px" 
    });

    menuData.categories.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeFilter, isLoading]);

  const scrollToCategory = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      isManualScrolling.current = true;
      setActiveCategory(id);
      
      const offset = typeof window !== 'undefined' && window.innerWidth < 1024 ? 180 : 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      
      window.scrollTo({
        top: elementRect - bodyRect - offset,
        behavior: "smooth",
      });

      setTimeout(() => {
        isManualScrolling.current = false;
      }, 1000);
    }
  };

  const shouldShowItem = (item: any) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Veggie" || activeFilter === "Vegan") {
      return item.tags.includes(activeFilter) && !item.tags.includes("Meat");
    }
    return item.tags.includes(activeFilter);
  };

  const totalVisibleItems = menuData.categories.reduce((acc, cat) => {
    return acc + cat.items.filter(shouldShowItem).length;
  }, 0);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#FBFBF9] pt-40 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-orange-600"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#FBFBF9] pb-24">
      
      {/* MOBILE TOP NAV (lg:hidden) */}
      <div className="lg:hidden sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-100 pt-20">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-black uppercase italic">Menu</h1>
            <div className="flex gap-2">
              {FILTERS.slice(0, 3).map(f => (
                <button key={f} onClick={() => setActiveFilter(f)} className={`text-[8px] font-bold uppercase px-3 py-1 rounded-full border ${activeFilter === f ? 'bg-orange-600 text-white border-orange-600' : 'text-gray-400 border-gray-100'}`}>{f}</button>
              ))}
            </div>
          </div>
          <div className="relative border-t border-gray-50 pt-3" style={{ maskImage: 'linear-gradient(to right, transparent, black 40px, black calc(100% - 40px), transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 40px, black calc(100% - 40px), transparent)' }}>
            <nav ref={mobileNavRef} className="flex gap-6 overflow-x-auto no-scrollbar px-10">
              {menuData.categories.map((cat) => (
                <button key={cat.id} data-id={cat.id} onClick={() => scrollToCategory(cat.id)} className={`pb-2 text-[9px] font-black uppercase tracking-widest whitespace-nowrap transition-all ${activeCategory === cat.id ? "text-orange-600" : "text-gray-400"}`}>
                  {cat.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 mt-8 lg:mt-32">
        
        {/* DESKTOP SIDEBAR (hidden lg:block) */}
        <aside className="hidden lg:block lg:w-64 flex-shrink-0 z-30 sticky top-32 self-start h-fit">
          <h1 className="text-6xl font-black uppercase italic tracking-tighter leading-none mb-10">
            The <span className="text-orange-600">Menu</span>
          </h1>
          <nav className="space-y-2">
            {menuData.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={`w-full text-left px-6 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all duration-300 ${
                  activeCategory === cat.id ? "bg-black text-white translate-x-3 shadow-xl" : "text-gray-400 hover:text-black hover:bg-gray-100"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </nav>
        </aside>

        {/* CONTENT AREA */}
        <div className="flex-1">
          {/* DESKTOP FILTERS (Top Right) */}
          <div className="hidden lg:flex justify-end items-center gap-4 mb-12">
            <p className="text-[10px] font-bold uppercase text-gray-300 tracking-[0.2em]">Dietary Filters:</p>
            <div className="flex gap-2">
              {FILTERS.map(f => (
                <button key={f} onClick={() => setActiveFilter(f)} className={`px-4 py-2 rounded-xl text-[9px] font-bold uppercase transition-all ${activeFilter === f ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>{f}</button>
              ))}
            </div>
          </div>

          {totalVisibleItems === 0 ? (
            <div className="py-40 text-center flex flex-col items-center">
              <h2 className="text-4xl font-black uppercase italic text-gray-200 mb-4">No results</h2>
              <button onClick={() => setActiveFilter("All")} className="bg-black text-white px-8 py-3 rounded-full text-[10px] uppercase font-black">Clear Filters</button>
            </div>
          ) : (
            <div className="space-y-32">
              {menuData.categories.map((category) => {
                const filteredItems = category.items.filter(shouldShowItem);
                if (filteredItems.length === 0) return null;
                const isTopping = ["fillings", "toppings", "sauces"].includes(category.id);

                return (
                  <section key={category.id} id={category.id} className="scroll-mt-48 lg:scroll-mt-32">
                    <div className="mb-12">
                      <h2 className="text-3xl lg:text-4xl font-black uppercase italic tracking-tight">{category.name}</h2>
                      <div className="h-1 w-12 bg-orange-600 mt-2"></div>
                    </div>
                    
                    <div className={`grid gap-10 ${isTopping ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-2'}`}>
                      {filteredItems.map((item, idx) => (
                        <div key={idx} className="group border-b border-gray-100 pb-8 flex flex-col h-full">
                          {/* IMAGE CODE (REMAINS COMMENTED)
                          <div className={`relative mb-6 bg-gray-100 rounded-3xl overflow-hidden ${isTopping ? 'aspect-square' : 'aspect-video'}`}>
                             <Image src={item.image} alt={item.name} fill className="..." />
                          </div> */}
                          <h3 className={`font-black uppercase tracking-tight mb-2 ${isTopping ? 'text-xs' : 'text-2xl'}`}>{item.name}</h3>
                          {!isTopping && <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">{item.desc}</p>}
                          <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                            <span className="text-[8px] font-black px-2 py-1 bg-black text-white rounded uppercase">{item.tags[0]}</span>
                            <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{item.calories}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}