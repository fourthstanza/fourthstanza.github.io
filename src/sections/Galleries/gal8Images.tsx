const images : Record<string, {default: string}> = import.meta.glob(
  "@/assets/images/Gallery8/*.{png,jpg,jpeg,webp,svg,gif}",
  { eager: true }
);

export const Gal8Images : string[] = Object.values(images).map(
  mod => mod.default
);