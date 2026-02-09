const images : Record<string, {default: string}> = import.meta.glob(
  "@/assets/images/Gallery4/*.{png,jpg,jpeg,webp,svg}",
  { eager: true }
);

export const Gal4Images : string[] = Object.values(images).map(
  mod => mod.default
);