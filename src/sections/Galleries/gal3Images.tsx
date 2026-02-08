const images : Record<string, {default: string}> = import.meta.glob(
  "@/assets/images/Gallery3/*.{png,jpg,jpeg,webp,svg}",
  { eager: true }
);

export const Gal3Images : string[] = Object.values(images).map(
  mod => mod.default
);