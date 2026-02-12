const images : Record<string, {default: string}> = import.meta.glob(
  "@/assets/images/Gallery6/*.{png,jpg,jpeg,webp,svg,gif}",
  { eager: true }
);

export const Gal6Images : string[] = Object.values(images).map(
  mod => mod.default
);