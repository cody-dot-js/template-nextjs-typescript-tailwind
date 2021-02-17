const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const withMDX = require("@next/mdx")();

module.exports = withMDX(
  withPWA({
    pwa: {
      dest: "public",
      runtimeCaching,
      disable: process.env.NODE_ENV === "development",
    },
    images: {
      domains: ["www.placehold.it", "images.unsplash.com"],
    },
    // Uncomment this if you wanna add MDX support
    // pageExtensions: ["js", "jsx", "mdx"],
  })
);
