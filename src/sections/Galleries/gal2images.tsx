const images : Record<string, {default: string}> = import.meta.glob(
  "@/assets/images/Gallery2/*.{png,jpg,jpeg,webp,svg}",
  { eager: true }
);

export const Gal2Images : string[] = Object.values(images).map(
  mod => mod.default
);