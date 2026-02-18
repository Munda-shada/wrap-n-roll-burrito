import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-9xl font-black text-gray-100 absolute -z-10">404</h1>
      <h2 className="text-4xl font-extrabold uppercase italic leading-tight">
        You've gone <span className="text-orange-600">Off-Roll</span>
      </h2>
      <p className="mt-4 text-gray-500 font-medium">We can't find the page you're looking for.</p>
      <Link href="/" className="mt-8 bg-black text-white px-8 py-4 rounded-full font-black uppercase tracking-widest hover:bg-orange-600 transition-all">
        Back to Safety
      </Link>
    </main>
  );
}