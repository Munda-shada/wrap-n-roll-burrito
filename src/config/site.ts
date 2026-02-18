export const siteConfig = {
  name: "WrapsNRollBurrito",
  description: "Authentic Burritos & Wraps",
  phone: "+1 905-555-5555", // Replace with your actual number
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
};