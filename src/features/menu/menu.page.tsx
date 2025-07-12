import {
  Card,
  CardAction,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { menu, type MenuItem } from "./data/menu";
import { useState, useMemo } from "react";
import { Label } from "../../components/ui/label";
import { Switch } from "../../components/ui/switch";
import { Button } from "../../components/ui/button";
import { MenuItemSection } from "./components/MenuItemCard";
import type { Ingredient } from "./data/ingredients";
import { MenuItemDetails } from "./components/MenuItemDetails";

export default function MenuPage() {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [showRealName, setShowRealName] = useState(false); // toggle

  const getDishId = (itemIndex: number, dishIndex: number) =>
    `${itemIndex}-${dishIndex}`;

  const total = useMemo(() => {
    return menu.reduce((acc, item, itemIndex) => {
      return (
        acc +
        item.dishes.reduce((dishAcc, dish, dishIndex) => {
          const id = getDishId(itemIndex, dishIndex);
          const qty = quantities[id] || 0;
          return dishAcc + dish.price * qty;
        }, 0)
      );
    }, 0);
  }, [quantities]);

  const selectedItems = useMemo(() => {
    const items: { label: string; qty: number; price: number }[] = [];

    menu.forEach((item, itemIndex) => {
      item.dishes.forEach((dish, dishIndex) => {
        const id = getDishId(itemIndex, dishIndex);
        const qty = quantities[id] || 0;
        if (qty > 0) {
          items.push({ label: dish.label, qty, price: dish.price });
        }
      });
    });

    return items;
  }, [quantities]);

  const totalIngredientsForDetails = useMemo(() => {
    const ingredientMap = new Map<
      string,
      { label: string; quantity: number; details: Ingredient }
    >();

    menu.forEach((item, itemIndex) => {
      item.dishes.forEach((dish, dishIndex) => {
        const id = getDishId(itemIndex, dishIndex);
        const qty = quantities[id] || 0;
        if (qty > 0 && dish.intredients) {
          const multiplier = dish.multiplier || 1;
          dish.intredients.forEach((ingredient) => {
            const key = ingredient.details.label;
            const totalQty = ingredient.quantity * qty * multiplier;

            if (ingredientMap.has(key)) {
              ingredientMap.get(key)!.quantity += totalQty;
            } else {
              ingredientMap.set(key, {
                label: ingredient.details.label,
                quantity: totalQty,
                details: ingredient.details,
              });
            }
          });
        }
      });
    });

    const finalList = Array.from(ingredientMap.values());

    return {
      name: "Total ingrédients nécessaires",
      realname: "Ingrédients cumulés",
      description: "Ingrédients requis pour les plats sélectionnés",
      quantity: 1,
      multiplier: 1,
      ingredients: finalList.map((entry) => ({
        quantity: entry.quantity,
        details: entry.details,
      })),
    };
  }, [quantities]);

  return (
    <div className="bg-[#fce1b6] px-[5%] py-10 min-h-screen w-full">
      <div className="max-w-[1400px] mx-auto relative">
        <div className="flex items-center space-x-2 mb-6 justify-end">
          <Label htmlFor="realname-mode">Afficher les noms</Label>
          <Switch
            id="realname-mode"
            checked={showRealName}
            onCheckedChange={setShowRealName}
          />
        </div>
        {selectedItems.length > 0 && (
          <Button
            className="w-full mb-6"
            onClick={() => setQuantities({})}
            size="lg"
          >
            Réinitialiser les quantités
          </Button>
        )}
        <div className="w-full grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {menu.map((item: MenuItem, itemIndex: number) => (
            <MenuItemSection
              key={itemIndex}
              item={item}
              itemIndex={itemIndex}
              showRealName={showRealName}
              getDishId={getDishId}
              quantities={quantities}
              setQuantities={setQuantities}
            />
          ))}

          {selectedItems.length > 0 && (
            <Card className="mt-4 md:mt-0 col-span-1 md:col-span-2 xl:col-span-4 ">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  Détails{" "}
                  {totalIngredientsForDetails && (
                    <MenuItemDetails
                      name={totalIngredientsForDetails.name}
                      realname={totalIngredientsForDetails.realname}
                      description={totalIngredientsForDetails.description}
                      ingredients={totalIngredientsForDetails.ingredients}
                      quantity={1}
                      multiplier={1}
                    />
                  )}
                </CardTitle>
                <div className="mt-2 text-sm text-gray-700">
                  {selectedItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between border-b border-dashed py-1"
                    >
                      <span>{item.label}</span>
                      <span>
                        {item.qty} × ${item.price.toFixed(2)} = $
                        {(item.qty * item.price).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </CardHeader>
              <CardHeader>
                <CardTitle className="mt-1">TOTAL</CardTitle>
                <CardAction>${total.toFixed(2)}</CardAction>
              </CardHeader>
            </Card>
          )}
        </div>
        {selectedItems.length > 0 && (
          <Button
            className="w-full mt-6"
            onClick={() => setQuantities({})}
            size="lg"
          >
            Réinitialiser les quantités
          </Button>
        )}
      </div>
      <button
        className="fixed bottom-5 left-5 p-4 rounded-full shadow-lg hover:bg-gray-100 transition-colors bg-primary text-primary-foreground z-50"
        onClick={() =>
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          })
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 512 512"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="48"
            d="m112 268l144 144l144-144M256 392V100"
          />
        </svg>
      </button>
    </div>
  );
}
