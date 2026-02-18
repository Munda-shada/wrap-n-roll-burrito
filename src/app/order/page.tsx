export default function OrderPage() {
  const platforms = [
    { name: "UberEats", color: "bg-black" },
    { name: "DoorDash", color: "bg-red-600" },
    { name: "SkipTheDishes", color: "bg-orange-500" }
  ];

  return (
    <main className="min-h-[80vh] flex items-center justify-center py-20 px-6">
      <div className="max-w-md w-full text-center">
        <h1 className="text-4xl font-black uppercase mb-2 tracking-tighter">Hungry?</h1>
        <p className="text-gray-500 mb-10 text-lg italic">Select your favorite platform to order now.</p>
        
        <div className="grid gap-4">
          {platforms.map((app) => (
            <button key={app.name} className={`${app.color} text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition shadow-lg`}>
              Order via {app.name}
            </button>
          ))}
          <p className="mt-8 text-sm text-gray-400">Or call us directly for pickup.</p>
        </div>
      </div>
    </main>
  );
}