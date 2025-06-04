import type { Ingredient } from "./ingredients";
import {
  butcher_piece,
  cheese_wheel,
  chopped_mushrooms,
  chopped_vegetables,
  corn_flour,
  eggs,
  fish_filet,
  laurier_rose,
  milk_bottles,
  minced_meat,
  origan,
  raspberries,
  red_currants,
  salt,
  sugar_bag,
  wild_mint,
  wild_thyme,
} from "./ingredients";
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
        multiplier: 2,
        intredients: [
          { quantity: 2, details: butcher_piece },
          { quantity: 3, details: chopped_vegetables },
          { quantity: 1, details: chopped_mushrooms },
          { quantity: 1, details: salt },
        ],
      },
      {
        label: "Cullen Skink",
        realName: "Ragout de poisson",
        description:
          "Soupe crémeuse et parfumée avec de gros morceaux de saumon fumé.",
        price: 0.45,
        pinned: false,
        multiplier: 2,
        intredients: [
          { quantity: 2, details: fish_filet },
          { quantity: 3, details: chopped_vegetables },
          { quantity: 1, details: chopped_mushrooms },
          { quantity: 1, details: salt },
        ],
      },
      {
        label: "Scotch Pie",
        realName: "Tourte de viande",
        description:
          "Tourte dorée et croustillante, farcie de mouton haché. Servie chaude avec une cuillère de purée.",
        price: 0.35,
        pinned: false,
        multiplier: 2,
        intredients: [
          { quantity: 2, details: minced_meat },
          { quantity: 1, details: corn_flour },
          { quantity: 1, details: chopped_vegetables },
          { quantity: 1, details: laurier_rose },
          { quantity: 1, details: salt },
        ],
      },
      {
        label: "Tattie Soup",
        realName: "Soupe de poisson",
        description:
          "Soupe de pommes de terre parssemée de morceaux de truite fumée. Servie avec une miche de main d'avoine.",
        price: 0.25,
        pinned: false,
        multiplier: 2,
        intredients: [
          { quantity: 1, details: fish_filet },
          { quantity: 1, details: chopped_vegetables },
          { quantity: 1, details: origan },
          { quantity: 1, details: salt },
        ],
      },
      {
        label: "Cock-a-leekie",
        realName: "Soupe de viande",
        description:
          "Bouillon de poule et poirreau réconfortant avec de l'oge perlé. Servie avec une miche de pain d'avoine.",
        price: 0.25,
        pinned: false,
        multiplier: 2,
        intredients: [
          { quantity: 1, details: minced_meat },
          { quantity: 1, details: chopped_vegetables },
          { quantity: 1, details: origan },
          { quantity: 1, details: salt },
        ],
      },
      {
        label: "Soupe des Collines",
        realName: "Soupe de légumes",
        description: "Soupe épaisse de légumes parsemé de morceaux de lard",
        price: 0.25,
        pinned: false,
        multiplier: 2,
        intredients: [
          { quantity: 3, details: chopped_vegetables },
          { quantity: 1, details: origan },
          { quantity: 1, details: salt },
        ],
      },
      {
        label: "Tartine du pêcheur",
        realName: "Brochette de poisson",
        description:
          "Deux oeufs au plat sur une tranche de truite fumée. Le tout sur une épaisse tranche de main grillé",
        price: 0.2,
        pinned: false,
        multiplier: 2,
        intredients: [
          { quantity: 1, details: fish_filet },
          { quantity: 1, details: chopped_vegetables },
          { quantity: 1, details: wild_mint },
          { quantity: 1, details: salt },
        ],
      },
      {
        label: "Bannock",
        realName: "Steack Patate",
        description:
          "Petites galettes d'avoine toasté au beurre salé. Servies avec du bacon grillé et des oeufs brouillés.",
        price: 0.2,
        multiplier: 2,
        intredients: [
          { quantity: 1, details: butcher_piece },
          { quantity: 1, details: chopped_vegetables },
          { quantity: 1, details: wild_thyme },
          { quantity: 1, details: salt },
        ],
      },
    ],
  },
  {
    title: "Desserts & Fromages",
    dishes: [
      {
        label: "Butterscotch",
        realName: "Tourte au poisson",
        description:
          "Tarte à la crème de caramel. Servie avec une cuillère de crème fouettée.",
        price: 0.35,
        multiplier: 2,
        intredients: [
          { quantity: 2, details: fish_filet },
          { quantity: 1, details: corn_flour },
          { quantity: 1, details: chopped_vegetables },
          { quantity: 1, details: laurier_rose },
          { quantity: 1, details: salt },
        ],
      },
      {
        label: "Cranachan",
        realName: "Cranachan",
        description:
          "Dessert écossais à base de framboises et baies sauvages. Des flocons d'avoine grillés avec un filet de miel des montagnes. Servi avec de la crème fouettée et une touche de whisky.",
        price: 0.35,
        pinned: true,
        multiplier: 2,
        intredients: [
          { quantity: 4, details: raspberries },
          { quantity: 4, details: red_currants },
          { quantity: 3, details: eggs },
          { quantity: 2, details: milk_bottles },
          { quantity: 1, details: sugar_bag },
        ],
      },
      {
        label: "Fromage (Shropshire)",
        realName: "Fromage",
        description: "",
        price: 0.05,
        intredients: [{ quantity: 1, details: cheese_wheel }],
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
        price: 0.1,
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
  multiplier?: number;
};

export type DishIngredient = {
  quantity: number;
  details: Ingredient;
};
