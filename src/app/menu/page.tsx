import menuData from "@/data/menu.json";
import { siteConfig } from "@/config/site";

export default function MenuPage() {
  return (
    <main className="py-20 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-black uppercase italic tracking-tighter text-gray-900">The Menu</h1>
        <p className="text-orange-600 font-bold uppercase tracking-widest mt-2">
          Fresh at {siteConfig.name}
        </p>
      </div>

      <div className="grid gap-20">
        {menuData.categories.map((category, idx) => (
          <div key={idx}>
            <h2 className="text-3xl font-black uppercase border-b-4 border-orange-600 inline-block mb-10 italic">
              {category.name}
            </h2>
            <div className="grid gap-y-12">
              {category.items.map((item, itemIdx) => (
                <div key={itemIdx} className="flex flex-col md:flex-row md:justify-between md:items-center border-b border-gray-100 pb-6 group">
                  <div className="max-w-xl">
                    <h3 className="text-2xl font-bold uppercase group-hover:text-orange-600 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1 leading-snug">{item.desc}</p>
                  </div>
                  
                  {/* OPTIONS & PRICES DISPLAY */}
                  <div className="flex gap-4 mt-4 md:mt-0">
                    {item.options.map((option, optIdx) => (
                      <div key={optIdx} className="flex flex-col items-center bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
                        <span className="text-[10px] uppercase font-bold text-gray-400 leading-none mb-1">
                          {option.label}
                        </span>
                        <span className="text-orange-700 font-mono font-bold">
                          {option.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}