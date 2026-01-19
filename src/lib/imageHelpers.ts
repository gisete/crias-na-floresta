export function getImageUrl(image: any, fallback: string): string {
  if (typeof image === 'object' && image?.url) {
    return image.url;
  }
  return fallback;
}
