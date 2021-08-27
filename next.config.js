/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    MONGO_URI: "mongodb+srv://hoa4c18hanu:Hoa2000kx.@test.mmbr1.mongodb.net/accounts?retryWrites=true&w=majority"
  },
  // node: {
  //   net: 'empty',
  // },

}

// const withImages = require("next-images");

// module.exports = withImages({
//   images: {
//     domains: ['localhost:3000']
//   },
//   webpack(config, options) {
//     return config;
//   }
// });


