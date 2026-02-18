"use client";
import { useState } from "react";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  const mapEmbedUrl = siteConfig.location.getMapEmbedUrl(siteConfig.location.address);
  const { display, raw } = siteConfig.contact;
  const [state, setState] = useState({
    submitting: false,
    succeeded: false,
    errors: []
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState({ ...state, submitting: true });

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const message = formData.get("message")?.toString() || "";
    
    // Construct WhatsApp URL
    const phoneNumber = raw.replace(/[^0-9]/g, "");
    // Use encodeURIComponent to handle special characters and line breaks properly
    const text = `Hello Team,\n\n${message}\n\nThank you\n${name}\n${email}`;
    const whatsappUrl = `https://wa.me/${siteConfig.contact.raw}/?text=${encodeURIComponent(text)}`;

    // Redirect to WhatsApp (using location.href avoids popup blockers)
    console.log("Redirecting to:", whatsappUrl);
    window.location.href = whatsappUrl;

    // Show success message
    setState({ submitting: false, succeeded: true, errors: [] });
    form.reset();
  }
  return (
    <main className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-black uppercase italic tracking-tighter text-gray-900">Get In Touch</h1>
        <p className="text-orange-600 font-bold uppercase tracking-widest mt-2">We're here for your cravings</p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* INTERACTIVE MAP */}
        <div className="h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* CONTACT INFO & FORM */}
        <div className="space-y-12">
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
            <h2 className="text-2xl font-black uppercase italic mb-6">Visit Us</h2>
            <a 
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.location.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <p className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-orange-600 transition-colors">
              {siteConfig.location.address}
            </p>
            <span className="inline-block mt-4 text-xs font-bold uppercase tracking-widest text-gray-400 border-b border-gray-200 group-hover:border-orange-600 group-hover:text-orange-600 transition-all">
              Tap to get directions →
            </span>
          </a>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm font-bold uppercase text-gray-400">Call Us</p>
              <a href={`tel:${raw}`} className="group block">
              <p className="text-4xl font-black text-gray-900 group-hover:text-orange-600 transition-colors tracking-tighter">
                {display}
              </p>
              
            </a>
            </div>
          </div>

          {/* QUICK MESSAGE FORM */}
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
          {!state.succeeded ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* IMPORTANT: Added 'name' attributes to each input */}
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-400 ml-2">Your Name</label>
                <input required name="name" type="text" placeholder="e.g. Dinesh" className="w-full p-4 rounded-xl border border-gray-200 focus:outline-orange-600 font-bold text-sm uppercase text-gray-900 bg-white" />
              </div>
              
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-400 ml-2">Email Address</label>
                <input required name="email" type="email" placeholder="email@example.com" className="w-full p-4 rounded-xl border border-gray-200 focus:outline-orange-600 font-bold text-sm uppercase text-gray-900 bg-white" />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-400 ml-2">Message</label>
                <textarea required name="message" rows={4} placeholder="How can we help?" className="w-full p-4 rounded-xl border border-gray-200 focus:outline-orange-600 font-bold text-sm uppercase text-gray-900 bg-white"></textarea>
              </div>

              <button type="submit" className="w-full bg-[#25D366] text-white py-4 rounded-full font-black uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.48s3.48 5.228 3.48 8.404c0 6.556-5.332 11.888-11.888 11.888-2.013 0-3.987-.512-5.728-1.487l-6.26 1.712zm6.106-4.221l.44.262c1.46.868 3.141 1.326 4.864 1.326 5.201 0 9.432-4.231 9.432-9.432s-4.231-9.432-9.432-9.432-9.432 4.231-9.432 9.432c0 1.916.58 3.788 1.678 5.372l.291.423-1.002 3.655 3.731-.975z"/></svg>
              <span className="truncate">Chat on WhatsApp</span>
            </button>
            </form>
          ) : (
            <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
              <div className="text-6xl mb-4">🌯</div>
              <h2 className="text-3xl font-black uppercase italic tracking-tighter">Got it!</h2>
              <p className="text-gray-600 mt-2">We've received your message and will roll back to you soon.</p>
              <button onClick={() => setState({ ...state, succeeded: false })} className="mt-6 text-orange-600 font-bold uppercase text-sm border-b-2 border-orange-600">
                Send another message
              </button>
            </div>
          )}
        </div>
      </div>
        </div>
    </main>
  );
}