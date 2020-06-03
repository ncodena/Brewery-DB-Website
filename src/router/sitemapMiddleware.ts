// import VueRouterSitemap from "vue-router-sitemap";
// const path = require("path");
// const app = require("app");
// import router from "./index";

// export const sitemapMiddleware = () => {
//   return (req: any, res: any) => {
//     res.set("Content-Type", "application/xml");

//     const staticSitemap = path.resolve("dist/static", "sitemap.xml");
//     const filterConfig = {
//       isValid: false,
//       rules: [/\/example-page/, /\*/]
//     };

//     new VueRouterSitemap(router)
//       .filterPaths(filterConfig)
//       .build("http://example.com")
//       .save(staticSitemap);

//     return res.sendFile(staticSitemap);
//   };
// };

// app.get("/sitemap.xml", sitemapMiddleware());
