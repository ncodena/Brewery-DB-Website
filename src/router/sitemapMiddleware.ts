import VueRouterSitemap from "vue-router-sitemap";
import router from "./index";
const path = require("path");
const app = require("app");


export const sitemapMiddleware = () => {
  return (req: any, res: any) => {
    res.set("Content-Type", "application/xml");

    const staticSitemap = path.resolve("dist/static", "sitemap.xml");
    console.log(staticSitemap)
    const filterConfig = {
      isValid: false,
      rules: [/\/example-page/, /\*/]
    };

    new VueRouterSitemap(router)
      .filterPaths(filterConfig)
      .build("https://brewerydb-ncodena.netlify.app")
      .save(staticSitemap);

    return res.sendFile(staticSitemap);
  };
};

app.get("/sitemap.xml", sitemapMiddleware());
