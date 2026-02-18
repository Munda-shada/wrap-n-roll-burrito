export const siteConfig = {
  name: "WrapsNRollBurrito",
  description: "Authentic Burritos & Wraps",
  phone: "+1 905-555-5555", // Replace with your actual number
  slogan: "The Best in Town",
  location: {
    address: "15958 Airport Rd, Caledon East, ON L7C 1K5 Canada",
    // This helper creates the encoded URL for the Google Maps Embed API
    getMapEmbedUrl: (address: string) => {
      const encodedAddress = encodeURIComponent(address);
      return `https://maps.google.com/maps?width=600&height=400&hl=en&q=${encodedAddress}&t=k&z=15&ie=UTF8&iwloc=B&output=embed`;
    },
  },

  links: {
    instagram: "https://instagram.com/wrapsnroll",
    facebook: "https://facebook.com/wrapsnroll",
    twitter: "https://twitter.com/wrapsnroll",
  },
  contact: {
    display: "+1 (905) 555-0123", // How it looks on screen
    raw: "+19055550123"           // No spaces/brackets for the dialer
  },
  deliveryLinks: {
    uberEats: "https://www.ubereats.com/store/your-store-link",
    doorDash: "https://www.doordash.com/store/your-store-link",
    skipTheDishes: "https://www.skipthedishes.com/your-store-link",
     // For direct ordering
  },
  openingHours: {
    // 0 is Sunday, 6 is Saturday
    schedule: [
      { day: 0, open: 11, close: 20 }, // Sun: 11am - 8pm
      { day: 1, open: 11, close: 21 }, // Mon: 11am - 9pm
      { day: 2, open: 11, close: 21 }, // Tue
      { day: 3, open: 11, close: 21 }, // Wed
      { day: 4, open: 11, close: 21 }, // Thu
      { day: 5, open: 11, close: 22 }, // Fri: 11am - 10pm
      { day: 6, open: 11, close: 22 }, // Sat: 11am - 10pm
    ]
  }
  
};
