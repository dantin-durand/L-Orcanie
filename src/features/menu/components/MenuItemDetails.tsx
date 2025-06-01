import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "../../../components/ui/drawer";
import { Heading1 } from "../../../components/ui/title";
import type { DishIngredient } from "../data/menu";

interface MenuItemDetailsProps {
  name: string;
  description?: string;
  ingredients?: DishIngredient[];
}

export function MenuItemDetails({
  name,
  description,
  ingredients,
}: MenuItemDetailsProps) {
  return (
    <Drawer>
      <DrawerTrigger className="mt-[0.5px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 512 512"
        >
          <path
            fill="none"
            stroke="#807c73"
            strokeMiterlimit="10"
            strokeWidth="32"
            d="M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184s184-82.39 184-184S349.61 64 248 64Z"
          />
          <path
            fill="none"
            stroke="#807c73"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M220 220h32v116"
          />
          <path
            fill="none"
            stroke="#807c73"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="32"
            d="M208 340h88"
          />
          <path
            fill="#807c73"
            d="M248 130a26 26 0 1 0 26 26a26 26 0 0 0-26-26"
          />
        </svg>
      </DrawerTrigger>
      <DrawerContent className="pb-10">
        <div className="px-6 py-4 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Heading1 className="text-2xl text-left">
              {name || "Détails du plat"}
            </Heading1>
            <p className="text-lg">
              {description || "Aucune description disponible."}
            </p>
          </div>
          <ul className="flex flex-col gap-4">
            {ingredients && ingredients.length > 0 ? (
              ingredients.map((ingredient, index) => (
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
