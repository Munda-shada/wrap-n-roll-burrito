import {siteConfig} from "@/config/site";
const platforms = [
  { name: "Uber Eats", link: siteConfig.deliveryLinks.uberEats, color: "bg-gradient-to-br from-[#06C167] to-[#039e50]" },
  { name: "DoorDash", link: siteConfig.deliveryLinks.doorDash, color: "bg-gradient-to-br from-[#FF3008] to-[#d92300]" },
  { name: "SkipTheDishes", link: siteConfig.deliveryLinks.skipTheDishes, color: "bg-gradient-to-br from-[#FF8200] to-[#e66e00]" },
];
export default function OrderPage() {
  

  return (
    <main className="min-h-[80vh] flex items-center justify-center py-20 px-6">
      <div className="max-w-md w-full text-center">
        <h1 className="text-4xl font-black uppercase mb-2 tracking-tighter">Hungry?</h1>
        <p className="text-gray-500 mb-10 text-lg italic">Select your favorite platform to order now.</p>
        
        <div className="grid gap-4">
        {platforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${platform.color} text-white py-5 rounded-2xl font-black uppercase tracking-widest text-lg hover:scale-[1.02] hover:shadow-xl transition-all shadow-lg block`}
          >
            Order on {platform.name}
          </a>
        ))}
        
          <p className="mt-8 text-sm text-gray-400">Or call us directly for pickup.</p>
        </div>
      </div>
    </main>
  );
}