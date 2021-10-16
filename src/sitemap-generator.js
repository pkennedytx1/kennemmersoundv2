const router = require("./sitemap-routes").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
    return (
    new Sitemap(router)
        .build("https://josephkennemer.com")
        .save("../public/sitemap.xml")
    );
}

generateSitemap();