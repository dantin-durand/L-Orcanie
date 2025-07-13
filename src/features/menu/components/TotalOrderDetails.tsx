import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "../../../components/ui/drawer";
import { Heading1 } from "../../../components/ui/title";
import type { Ingredient } from "../data/ingredients";
import type { Dish } from "../data/menu";

interface TotalOrderDetailsProps {
  name: string;
  realname: string;
  description?: string;
  selectedDishes: {
    dish: Dish;
    quantity: number;
  }[];
}

export function TotalOrderDetails({
  name,
  realname,
  description,
  selectedDishes,
}: TotalOrderDetailsProps) {
  const ingredients = (() => {
    const ingredientMap = new Map<
      string,
      { quantity: number; details: Ingredient }
    >();

    selectedDishes.forEach(({ dish, quantity }) => {
      const multiplier = dish.multiplier || 1;
      const batches = Math.ceil(quantity / multiplier);

      if (!dish.intredients) return;

      dish.intredients.forEach((ingredient) => {
        const key = ingredient.details.label;
        const totalQty = ingredient.quantity * batches;

        if (ingredientMap.has(key)) {
          ingredientMap.get(key)!.quantity += totalQty;
        } else {
          ingredientMap.set(key, {
            quantity: totalQty,
            details: ingredient.details,
          });
        }
      });
    });

    return Array.from(ingredientMap.values())
      .sort((a, b) => b.quantity - a.quantity)
      .map((entry) => ({
        quantity: entry.quantity,
        details: entry.details,
      }));
  })();

  return (
    <Drawer>
      <DrawerTrigger className="mt-[0.5px] p-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 14 14"
        >
          {/* Icon from Streamline by Streamline - https://creativecommons.org/licenses/by/4.0/ */}
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <ellipse cx="10.6" cy="3.5" rx="2.4" ry="3" />
            <path d="M10.6 6.5v7M3.5.5v13M6 .5V3a2.5 2.5 0 0 1-2.5 2.5h0A2.5 2.5 0 0 1 1 3V.5" />
          </g>
        </svg>
      </DrawerTrigger>
      <DrawerContent className="pb-10">
        <div className="px-6 py-4 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Heading1 className="text-2xl text-left flex items-center gap-x-4 gap-y-1 flex-wrap">
              {name || "Détails du plat"}
              <span className="text-sm bg-gray-100 px-3 py-1 rounded-sm border border-gray-400 text-gray-600 font-medium ">
                {realname}
              </span>
            </Heading1>
            <p className="text-lg">
              {description || "Aucune description disponible."}
            </p>
          </div>
          <ul className="flex flex-col gap-4 max-h-[50vh] overflow-y-auto pb-4">
            {ingredients.length > 0 ? (
              ingredients
                .sort((a, b) => {
                  if (
                    a.details.isBaseIngredient &&
                    !b.details.isBaseIngredient
                  ) {
                    return 1;
                  }
                  if (
                    !a.details.isBaseIngredient &&
                    b.details.isBaseIngredient
                  ) {
                    return -1;
                  }
                  return 0;
                })
                .map((ingredient, index) => (
                  <li
                    key={index}
                    className="mt-2 flex items-center gap-3 text-md"
                  >
                    <img
                      src={ingredient.details.image}
                      alt={ingredient.details.label}
                      className="w-10 h-10"
                    />
                    <span>
                      <strong>{ingredient.quantity}</strong>{" "}
                      {ingredient.details.label}
                    </span>
                  </li>
                ))
            ) : (
              <li>Aucun ingrédient spécifié.</li>
            )}
          </ul>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
