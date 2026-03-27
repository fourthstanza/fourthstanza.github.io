const images : Record<string, {default: string}> = import.meta.glob(
  "@/assets/images/Project1/*.{png,jpg,jpeg,webp,svg}",
  { eager: true }
);

export const Proj1Images : string[] = Object.values(images).map(
  mod => mod.default
);