export const butcher_piece: Ingredient = {
  label: "Pièce du boucher",
  image: "/ingredients/butcher_piece.jpg",
};

export const fish_filet: Ingredient = {
  label: "Filet de poisson",
  image: "/ingredients/fish_filet.jpg",
};

export const minced_meat: Ingredient = {
  label: "Viande hachée",
  image: "/ingredients/minced_meat.jpg",
};

export const corn_flour: Ingredient = {
  label: "Farine de maïs",
  image: "/ingredients/corn_flour.jpg",
};

export const chopped_vegetables: Ingredient = {
  label: "Tas de légume coupés",
  image: "/ingredients/chopped_vegetables.jpg",
};

export const chopped_mushrooms: Ingredient = {
  label: "Champignons coupés",
  image: "/ingredients/chopped_mushrooms.jpg",
};

export const laurier_rose: Ingredient = {
  label: "Laurier-rose",
  image: "/ingredients/laurier_rose.jpg",
};

export const origan: Ingredient = {
  label: "Origan",
  image: "/ingredients/origan.jpg",
};

export const wild_mint: Ingredient = {
  label: "Menthe sauvage",
  image: "/ingredients/wild_mint.jpg",
};

export const salt: Ingredient = {
  label: "Sel",
  image: "/ingredients/salt.jpg",
  isBaseIngredient: true,
};

export const wild_thyme: Ingredient = {
  label: "Thym sauvage",
  image: "/ingredients/wild_thyme.jpg",
};

export const raspberries: Ingredient = {
  label: "Framboises",
  image: "/ingredients/raspberries.jpg",
};

export const red_currants: Ingredient = {
  label: "Groseilles",
  image: "/ingredients/red_currants.jpg",
};

export const eggs: Ingredient = {
  label: "Oeufs",
  image: "/ingredients/eggs.jpg",
};

export const milk_bottles: Ingredient = {
  label: "Bouteilles de lait",
  image: "/ingredients/milk_bottles.jpg",
};

export const sugar_bag: Ingredient = {
  label: "Sac de sucre",
  image: "/ingredients/sugar_bag.jpg",
  isBaseIngredient: true,
};

export const cheese_wheel: Ingredient = {
  label: "Meule de fromage",
  image: "/ingredients/cheese_wheel.jpg",
};

export type Ingredient = {
  label: string;
  image?: string;
  buyPrice?: number;
  isBaseIngredient?: boolean;
};
