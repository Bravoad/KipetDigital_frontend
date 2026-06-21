export const ENDPOINTS = {
  services: '/service/',
  projects: '/project/',
  technologies: '/technology/',
  news: '/news/',
  vacancies: '/vacancy/',
  orders: '/order/',
  contactForm: '/contactform/',
} as const;

export function detailEndpoint(collectionEndpoint: string, idOrSlug: string | number): string {
  const normalized = collectionEndpoint.endsWith('/') ? collectionEndpoint : `${collectionEndpoint}/`;
  return `${normalized}${encodeURIComponent(String(idOrSlug))}/`;
}
