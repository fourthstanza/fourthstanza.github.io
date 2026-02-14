const images : Record<string, {default: string}> = import.meta.glob(
  "@/assets/images/Gallery7/*.{png,jpg,jpeg,webp,svg,gif,JPG}",
  { eager: true }
);

export const Gal7Images : string[] = Object.values(images).map(
  mod => mod.default
);