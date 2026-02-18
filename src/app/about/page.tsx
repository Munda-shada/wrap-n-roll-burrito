import { siteConfig } from "@/config/site";

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-5xl font-black uppercase italic text-gray-900 mb-8">
        The Story of {siteConfig.name}
      </h1>
      <div className="prose prose-lg text-gray-600 space-y-6">
        <p>
          Founded in 2026, <strong>{siteConfig.name}</strong> was born out of a simple obsession: 
          to create the world's most perfectly rolled burrito.
        </p>
        <p>
          We don't believe in shortcuts. Our tortillas are pressed daily, our salsas are 
          made from scratch, and our meats are marinated for 24 hours in a secret blend of 
          authentic spices.
        </p>
        <div className="bg-orange-50 p-8 border-l-4 border-orange-600 rounded-r-xl">
          <p className="italic font-medium text-orange-900">
            "We aren't just making wraps; we're rolling up a better way to eat."
          </p>
        </div>
      </div>
    </main>
  );
}