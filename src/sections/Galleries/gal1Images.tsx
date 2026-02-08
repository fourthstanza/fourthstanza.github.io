const images : Record<string, {default: string}> = import.meta.glob(
  "@/assets/images/Gallery1/*.{png,jpg,jpeg,webp,svg}",
  { eager: true }
);

export const Gal1Images : string[] = Object.values(images).map(
  mod => mod.default
);