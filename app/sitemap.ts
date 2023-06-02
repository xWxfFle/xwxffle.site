import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://xwxffle.site',
      lastModified: new Date(),
    },
  ]
}
