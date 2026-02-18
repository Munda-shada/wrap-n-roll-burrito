import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function Footer() {
  const { display, raw } = siteConfig.contact;
  return (
    <footer className="bg-gray-900 text-white py-16 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        <div>
          <Link href="/" className="z-[1001] flex items-center gap-3 group">
          
          <span className="text-xl font-extrabold tracking-tighter text-white group-hover:text-orange-600 transition-colors">
            Wrap<span className="text-orange-600 group-hover:text-white transition-colors">N</span>RollBurrito
          </span>
        </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Crafting the ultimate burrito experience since 2026. <br/>
            Quality ingredients, zero shortcuts.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold uppercase text-orange-500 mb-4 tracking-widest">Hours</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>Mon - Fri: 11am - 10pm</li>
            <li>Sat - Sun: 12pm - 11pm</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase text-orange-500 mb-4 tracking-widest">Connect</h4>
          
          <a href={`tel:${raw}`} className="group block">
              <p className="text-4xl font-black text-gray-400 group-hover:text-orange-600 transition-colors tracking-tighter">
                {display}
              </p>
              
            </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-500 uppercase tracking-widest">
        © 2026 {siteConfig.name}. All Rights Reserved.
      </div>
    </footer>
  );
}