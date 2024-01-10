import { getData } from "../../utils/featchApi";
const baseUrl = "https://www.crucerospornilo.com/";
async function sitemap() {
  const pages = await getData("/pages");
  const types = await getData("/types");
  const tours = await getData(`/tours`);
  const posts = await getData(`/posts`);
  // const articles = await getData(
  //   `/articles?tenant_id=18&language_id=11&status=active&paginate=1000`
  // );
  // const wikis = await getData(
  //   `/wikis?tenant_id=18&language_id=11&status=active&paginate=1000`
  // );
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/viajar-egipto`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/sobre-nosotras`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/CountactUs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/organizar-viaje-egipto`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/gracias`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/Blog-de-viajes-de-Egipto`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...pages?.data.map((slug) => ({
      url: `${baseUrl}/${slug?.slug}`,
      changeFrequency: "monthly",
      priority: 1,
    })),
    ...types?.data.map((slug) => ({
      url: `${baseUrl}/viajar-egipto/${slug?.slug}`,
      changeFrequency: "monthly",
      priority: 1,
    })),
    ...tours?.data.map((slug) => ({
      url: `${baseUrl}/viajar-egipto/${slug?.site_map_frequency}/${slug?.slug}`,
      changeFrequency: "monthly",
      priority: 1,
    })),
    ...posts?.data.map((slug) => ({
      url: `${baseUrl}/Blog-de-viajes-de-Egipto/${slug?.slug}`,
      changeFrequency: "monthly",
      priority: 1,
    })),
  ];
}

export default sitemap;
