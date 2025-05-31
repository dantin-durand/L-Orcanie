export const menu = [
  {
    title: "Repas",
    dishes: [
      {
        label: "Bouillon Ecossais",
        realName: "Ragout de viande",
        description:
          "Ragoût d'agneau mijoté longuement, la viande est tendre et fondante.",
        price: 0.45,
        pinned: true,
        intredients: [
          { label: "2 Pièce du boucher" },
          { label: "3 Tas de légume coupés" },
          { label: "1 Champignons coupés" },
          { label: "Sel" },
        ],
      },
      {
        label: "Cullen Skink",
        realName: "Ragout de poisson",
        description:
          "Soupe crémeuse et parfumée avec de gros morceaux de saumon fumé.",
        price: 0.45,
        pinned: false,
        intredients: [
          { label: "2 Filets de poisson" },
          { label: "3 Tas de légume coupés" },
          { label: "1 Champignons coupés" },
          { label: "Sel" },
        ],
      },
      {
        label: "Scotch Pie",
        realName: "Tourte de viande",
        description:
          "Tourte dorée et croustillante, farcie de mouton haché. Servie chaude avec une cuillère de purée.",
        price: 0.35,
        pinned: false,
        intredients: [
          { label: "2 Viande hachée" },
          { label: "1 Farine de maïs" },
          { label: "1 Tas de légume coupés" },
          { label: "1 Laurier-rose" },
          { label: "Sel" },
        ],
      },
      {
        label: "Tattie Soup",
        realName: "Soupe de poisson",
        description:
          "Soupe de pommes de terre parssemée de morceaux de truite fumée. Servie avec une miche de main d'avoine.",
        price: 0.25,
        pinned: false,
        intredients: [
          { label: "1 Filet de poisson" },
          { label: "1 Tas de légume coupés" },
          { label: "1 Origan" },
          { label: "Sel" },
        ],
      },
      {
        label: "Cock-a-leekie",
        realName: "Soupe de viande",
        description:
          "Bouillon de poule et poirreau réconfortant avec de l'oge perlé. Servie avec une miche de pain d'avoine.",
        price: 0.25,
        pinned: false,
        intredients: [
          { label: "1 Viande hachée" },
          { label: "1 Tas de légume coupés" },
          { label: "1 Origan" },
          { label: "Sel" },
        ],
      },
      {
        label: "Soupe des Collines",
        realName: "Soupe de légumes",
        description: "Soupe épaisse de légumes parsemé de morceaux de lard",
        price: 0.25,
        pinned: false,
        intredients: [
          { label: "3 Tas de légume coupés" },
          { label: "1 Origan" },
          { label: "Sel" },
        ],
      },
      {
        label: "Tartine du pêcheur",
        realName: "Brochette de poisson",
        description:
          "Deux oeufs au plat sur une tranche de truite fumée. Le tout sur une épaisse tranche de main grillé",
        price: 0.2,
        pinned: false,
        intredients: [
          { label: "1 Filet de poisson" },
          { label: "1 Tas de légume coupés" },
          { label: "1 Menthe sauvage" },
          { label: "Sel" },
        ],
      },
    ],
  },
  {
    title: "Desserts & Fromages",
    dishes: [
      {
        label: "Bannock",
        realName: "Steack Patate",
        description:
          "Petites galettes d'avoine toasté au beurre salé. Servies avec du bacon grillé et des oeufs brouillés.",
        price: 0.2,
        intredients: [
          { label: "1 Pièce du boucher" },
          { label: "1 Tas de légume coupés" },
          { label: "1 Thym sauvage" },
          { label: "Sel" },
        ],
      },
      {
        label: "Butterscotch",
        realName: "Tourte au poisson",
        description:
          "Tarte à la crème de caramel. Servie avec une cuillère de crème fouettée.",
        price: 0.35,
        intredients: [
          { label: "2 Filets de poisson" },
          { label: "1 Farine de maïs" },
          { label: "1 Tas de légume coupés" },
          { label: "1 Laurier-rose" },
          { label: "Sel" },
        ],
      },
      {
        label: "Cranachan",
        realName: "Cranachan",
        description:
          "Dessert écossais à base de framboises et baies sauvages. Des flocons d'avoine grillés avec un filet de miel des montagnes. Servi avec de la crème fouettée et une touche de whisky.",
        price: 0.35,
        pinned: true,
        intredients: [
          { label: "4 Framboises" },
          { label: "4 Groseilles" },
          { label: "3 Oeufs" },
          { label: "2 Bouteilles de lait" },
          { label: "Sac de sucre" },
        ],
      },
      {
        label: "Fromage (Shropshire)",
        realName: "Fromage",
        description: "",
        price: 0.05,
        intredients: [{ label: "Meule de fromage" }],
      },
    ],
  },
  {
    title: "Boissons",
    dishes: [
      {
        label: "Jus d'orange",
        realName: "Jus d'orange",
        description: "Jus d'orange frais",
        price: 0.1,
      },
      {
        label: "Lally Cola",
        realName: "Lally Cola",
        description: "Limonade pétillante au cola",
        price: 0.05,
      },
      {
        label: "Café",
        realName: "Café",
        description: "Café noir corsé",
        price: 0.15,
      },
      {
        label: "Scottish Coffee",
        realName: "Irish Coffee",
        description: "Café avec une touche de whisky écossais",
        price: 0.1,
      },
      {
        label: "Thé noir",
        realName: "Thé noir",
        description: "Thé noir chaud",
        price: 0.05,
      },
    ],
  },
  {
    title: "Boissons alcoolisées",
    dishes: [
      {
        label: "Little Cidre",
        realName: "Bouteille d'alcool",
        description:
          "Cidre doux et pétillant. Fait maison avec des pommes locales de LittleCreek.",
        price: 0.1,
      },
      {
        label: "Captain Morgane",
        realName: "Verre d'alcool",
        description: "Rhum aromatisé à la cannelle",
        price: 0.1,
      },
      {
        label: "Bière, Whisky, Rhum, Téquila",
        realName: "Bière, Whisky, Rhum, Téquila",
        description: "Sélection de boissons alcoolisées",
        price: 0.1,
      },
      {
        label: "Gnole",
        realName: "Gnole",
        description: "Gnole, l'alcool local",
        price: 0.05,
      },
      {
        label: "Pyramide de Gnole",
        realName: "15 Shots de Gnole",
        description: "Pyramide de 15 shots de Gnole",
        price: 0.75,
        pinned: true,
      },
      {
        label: "Champagne",
        realName: "Verre de Champagne",
        description: "Champagne pétillant",
        price: 0.5,
      },
    ],
  },
] as MenuItem[];

export type MenuItem = {
  title: string;
  description?: string;
  dishes: Dish[];
};

export type Dish = {
  label: string;
  realName: string;
  description: string;
  price: number;
  pinned: boolean;
  intredients?: DishIngredient[];
};

// les ingrédients d'un plat
export type DishIngredient = {
  label: string;
  image?: string;
};
