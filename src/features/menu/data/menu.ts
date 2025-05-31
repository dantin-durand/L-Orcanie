export const menu = [
  {
    title: "Repas",
    dishes: [
      {
        label: "Bouillon Ecossais",
        realName: "Ragout de viande",
        description: "",
        price: 0.45,
        pinned: true,
      },
      {
        label: "Cullen Skink",
        realName: "Ragout de poisson",
        description: "",
        price: 0.45,
        pinned: false,
      },
      {
        label: "Scotch Pie",
        realName: "Tourte de viande",
        description: "",
        price: 0.35,
        pinned: false,
      },
      {
        label: "Tattie Soup",
        realName: "Soupe de poisson",
        description: "",
        price: 0.25,
        pinned: false,
      },
      {
        label: "Cock-a-leekie",
        realName: "Soupe de viande",
        description: "",
        price: 0.25,
        pinned: false,
      },
      {
        label: "Soupe des Collines",
        realName: "Soupe de légumes",
        description: "",
        price: 0.25,
        pinned: false,
      },
      {
        label: "Tartine du pêcheur",
        realName: "Brochette de poisson",
        description: "",
        price: 0.2,
        pinned: false,
      },
    ],
  },
  {
    title: "Desserts & Fromages",
    dishes: [
      {
        label: "Bannock",
        realName: "Steack Patate",
        description: "",
        price: 0.2,
      },
      {
        label: "Butterscotch",
        realName: "Tourte au poisson",
        description: "",
        price: 0.35,
      },
      {
        label: "Cranachan",
        realName: "Cranachan",
        description: "",
        price: 0.35,
        pinned: true,
      },
      {
        label: "Fromage (Shropshire)",
        realName: "Fromage",
        description: "",
        price: 0.05,
      },
    ],
  },
  {
    title: "Boissons",
    dishes: [
      {
        label: "Jus d'orange",
        realName: "Jus d'orange",
        description: "",
        price: 0.1,
      },
      {
        label: "Lally Cola",
        realName: "Lally Cola",
        description: "",
        price: 0.05,
      },
      {
        label: "Café",
        realName: "Café",
        description: "",
        price: 0.15,
      },
      {
        label: "Scottish Coffee",
        realName: "Irish Coffee",
        description: "",
        price: 0.1,
      },
      {
        label: "Thé noir",
        realName: "Thé noir",
        description: "",
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
        description: "",
        price: 0.1,
      },
      {
        label: "Captain Morgane",
        realName: "Verre d'alcool",
        description: "",
        price: 0.1,
      },
      {
        label: "Bière, Whisky, Rhum, Téquila",
        realName: "Bière, Whisky, Rhum, Téquila",
        description: "",
        price: 0.1,
      },
      // {
      //   label: "Bière",
      //   realName: "Bière",
      //   description: "",
      //   price: 0.1,
      // },
      // {
      //   label: "Whiskey",
      //   realName: "Whiskey",
      //   description: "",
      //   price: 0.1,
      // },
      // {
      //   label: "Rhum",
      //   realName: "Rhum",
      //   description: "",
      //   price: 0.1,
      // },
      // {
      //   label: "Téquila",
      //   realName: "Téquila",
      //   description: "",
      //   price: 0.1,
      // },
      {
        label: "Gnole",
        realName: "Gnole",
        description: "",
        price: 0.05,
      },
      {
        label: "Pyramide de Gnole",
        realName: "15 Shots de Gnole",
        description: "",
        price: 0.75,
        pinned: true,
      },
      {
        label: "Champagne",
        realName: "Verre de Champagne",
        description: "",
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
};
