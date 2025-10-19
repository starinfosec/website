import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://starinfosec.example.com"
  const paths = ["/", "/about", "/mission", "/vision", "/services", "/contact"]
  const lastModified = new Date()
  return paths.map((p) => ({
    url: `${base}${p}`,
    lastModified,
    changeFrequency: "monthly",
    priority: p === "/" ? 1 : 0.7,
  }))
}
