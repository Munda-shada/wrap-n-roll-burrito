import { siteConfig } from "@/config/site";
import Link from "next/link";
import menuData from "@/data/menu.json";
import Image from 'next/image';

export default function Home() {
  const featuredItems = menuData.categories[0].items.slice(0, 4);
  const { address, getMapEmbedUrl } = siteConfig.location;
  return (
    <main className="min-h-screen bg-white">
      {/* 1. PREMIUM HERO SECTION */}
      <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax-like feel */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" /> {/* Dark Overlay */}
          <Image 
            src="/image/hero-burritos.png" 
            alt="Delicious Burrito"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-20 text-center px-6">
          <span className="text-orange-500 font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
            The Best in Town
          </span>
          <h1 className="text-6xl md:text-9xl font-black text-white uppercase italic leading-[0.8] tracking-tighter">
            Roll <br /> <span className="text-orange-600 italic">With</span> Us
          </h1>
          <p className="mt-8 text-white/90 text-lg md:text-xl font-light max-w-xl mx-auto uppercase tracking-wide">
            {siteConfig.name} — Handcrafted burritos that hit different.
          </p>
          <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/menu" className="bg-orange-600 text-white px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-orange-600 transition-all duration-300">
              View Menu
            </Link>
            <Link href="/order" className="bg-white text-black px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-all duration-300">
              Order Online
            </Link>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">Chef's Picks</span>
              <h2 className="text-4xl font-extrabold tracking-tighter text-gray-900 mt-2">
                Most Loved <span className="italic font-light text-gray-400">Wraps</span>
              </h2>
            </div>
            <Link href="/menu" className="text-sm font-bold uppercase border-b-2 border-orange-600 pb-1 hover:text-orange-600 transition-colors">
              View Full Menu
            </Link>
          </div>

          <div className="flex overflow-x-auto gap-6 pb-8 snap-x no-scrollbar">
            {featuredItems.map((item, i) => (
              <div key={i} className="min-w-[300px] bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 snap-center hover:shadow-xl transition-all duration-500 group">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-orange-100 text-orange-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                    Best Seller
                  </div>
                  <span className="text-xl font-mono font-bold text-gray-400">0{i + 1}</span>
                </div>
                
                <h3 className="text-2xl font-black text-gray-900 leading-tight">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-sm mt-3 line-clamp-2">
                  {item.desc}
                </p>
                
                <div className="mt-8 pt-6 border-t border-gray-50 flex justify-between items-center">
                  <span className="text-2xl font-black text-orange-600">
                    {item.options[1].price} {/* Showing the 'Full' price */}
                  </span>
                  <Link href="/order" className="bg-gray-900 text-white p-3 rounded-full group-hover:bg-orange-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 2. THE "FEAST YOUR EYES" SECTION (Grid Layout) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-none">
              Not Your Average <br /> <span className="text-orange-600">Fast Food</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm uppercase tracking-widest font-bold">
            We use 100% fresh ingredients, sourced locally and prepared with love every morning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group cursor-pointer">
            <div className="h-[450px] overflow-hidden rounded-3xl bg-gray-100 mb-6">
              <img src="/image/featured-burrito.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Wraps" />
            </div>
            <h3 className="text-2xl font-black uppercase italic">Signature Wraps</h3>
            <p className="text-gray-500 mt-2">Packed with protein and secret spices.</p>
          </div>
          {/* Card 2 */}
          <div className="group cursor-pointer md:mt-12">
            <div className="h-[450px] overflow-hidden rounded-3xl bg-gray-100 mb-6">
              <img src="/image/featured-burrito.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Bowls" />
            </div>
            <h3 className="text-2xl font-black uppercase italic">Loaded Bowls</h3>
            <p className="text-gray-500 mt-2">Everything you love, without the wrap.</p>
          </div>
          {/* Card 3 */}
          <div className="group cursor-pointer">
            <div className="h-[450px] overflow-hidden rounded-3xl bg-gray-100 mb-6">
              <img src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1000" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Sides" />
            </div>
            <h3 className="text-2xl font-black uppercase italic">Craveable Sides</h3>
            <p className="text-gray-500 mt-2">From hand-smashed guac to spicy fries.</p>
          </div>
        </div>
      </section>

      {/* 3. "BIG CRAVING" CALLOUT */}
      <section 
                className="relative py-24 bg-gray-900 text-white flex flex-col items-center justify-center text-center overflow-hidden"
                style={{ backgroundImage: "url('/image/food-pattern-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
            >
                <div className="absolute inset-0 bg-black/70 z-0"></div> {/* Dark overlay for text contrast */}
                <div className="relative z-10 max-w-2xl mx-auto px-6">
                    <h2 className="text-5xl font-extrabold uppercase italic leading-tight tracking-tighter drop-shadow-lg">
                        Ready to <span className="text-orange-600">Roll?</span>
                    </h2>
                    <p className="mt-6 text-xl font-medium drop-shadow">
                        Experience the freshest ingredients and boldest flavors, delivered right to your door or ready for pickup.
                    </p>
                    <Link
                        href="/order"
                        className="mt-10 inline-flex items-center gap-3 bg-orange-600 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-orange-600 transition-all text-lg shadow-lg"
                    >
                        Order Your Burrito Now!
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </Link>
                </div>
            </section>
<section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 items-center text-center md:text-left">
            
            {/* 1. BRAND TAGLINE */}
            <div>
              <h2 className="text-3xl font-black uppercase italic tracking-tighter leading-none">
                Freshly Rolled <br />
                <span className="text-orange-600">Daily.</span>
              </h2>
              <p className="text-gray-400 text-xs mt-4 uppercase tracking-[0.2em] font-bold">
                Caledon East's Favorite
              </p>
            </div>

            {/* 2. CLICKABLE ADDRESS */}
            <div className="md:border-l md:border-gray-800 md:pl-12">
              <span className="text-orange-500 font-bold uppercase text-[10px] tracking-[0.3em] block mb-2">Location</span>
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                target="_blank"
                className="group"
              >
                <p className="text-xl font-bold group-hover:text-orange-600 transition-colors leading-snug">
                  {address}
                </p>
              </a>
            </div>

            {/* 3. CLICKABLE PHONE */}
            <div className="md:border-l md:border-gray-800 md:pl-12">
              <span className="text-orange-500 font-bold uppercase text-[10px] tracking-[0.3em] block mb-2">Call for Pickup</span>
              <a href={`tel:${siteConfig.contact.raw}`} className="group">
                <p className="text-3xl font-black group-hover:text-orange-600 transition-colors tracking-tighter">
                  {siteConfig.contact.display}
                </p>
              </a>
            </div>

          </div>
        </div>
      </section>
      {/* 4. TESTIMONIALS / REVIEWS */}
<section className="py-24 bg-gray-50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-center text-4xl font-black uppercase italic mb-16 tracking-tighter">
      What the <span className="text-orange-600">Fans</span> Say
    </h2>
    
    <div className="grid md:grid-cols-3 gap-8">
      {[
        { name: "Alex R.", text: "Best burrito I've had in years. The 'Classic Roll' is actually life-changing." },
        { name: "Sarah M.", text: "Finally, a place that doesn't skimp on the guac! 10/10 would recommend." },
        { name: "Jason D.", text: "Fast service, incredibly fresh, and the spicy mayo is addictive." }
      ].map((review, i) => (
        <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex gap-1 text-orange-500 mb-4 text-xl">★★★★★</div>
          <p className="text-gray-600 italic mb-6">"{review.text}"</p>
          <p className="font-black uppercase tracking-widest text-sm">— {review.name}</p>
        </div>
      ))}
    </div>
  </div>
</section>
    </main>
  );
}