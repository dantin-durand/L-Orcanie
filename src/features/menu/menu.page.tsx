import {
  Card,
  CardAction,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { menu } from "./data/menu";
import { useState, useMemo } from "react";
import { Label } from "../../components/ui/label";
import { Switch } from "../../components/ui/switch";
import { Button } from "../../components/ui/button";
import { MenuItemSection } from "./components/MenuItemCard";
import { TotalOrderDetails } from "./components/TotalOrderDetails";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

export default function MenuPage() {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [showRealName, setShowRealName] = useState(false);

  const getDishId = (itemIndex: number, dishIndex: number) =>
    `${itemIndex}-${dishIndex}`;

  const selectedDishes = useMemo(() => {
    const result: { dish: (typeof menu)[0]["dishes"][0]; quantity: number }[] =
      [];

    menu.forEach((item, itemIndex) => {
      item.dishes.forEach((dish, dishIndex) => {
        const id = getDishId(itemIndex, dishIndex);
        const qty = quantities[id] || 0;
        if (qty > 0) {
          result.push({ dish, quantity: qty });
        }
      });
    });

    return result;
  }, [quantities]);

  const selectedItems = useMemo(() => {
    return selectedDishes.map(({ dish, quantity }) => ({
      label: dish.label,
      qty: quantity,
      price: dish.price,
    }));
  }, [selectedDishes]);

  const total = useMemo(() => {
    return selectedItems.reduce((acc, item) => acc + item.qty * item.price, 0);
  }, [selectedItems]);

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
        {/* {selectedItems.length > 0 && (
          <Button
            className="w-full mb-6"
            onClick={() => setQuantities({})}
            size="lg"
          >
            Réinitialiser les quantités
          </Button>
        )} */}
        <div className="w-full">
          {/* {menu.map((item, itemIndex) => (
            <MenuItemSection
              key={itemIndex}
              item={item}
              itemIndex={itemIndex}
              showRealName={showRealName}
              getDishId={getDishId}
              quantities={quantities}
              setQuantities={setQuantities}
            />
          ))} */}
          <Tabs defaultValue="item-0" className="w-full">
            <TabsList className="w-full mb-4">
              {menu.map((item, itemIndex) => (
                <TabsTrigger
                  key={itemIndex}
                  value={`item-${itemIndex}`}
                  className="text-3xl flex items-center justify-center"
                >
                  {item.icon}
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="flex flex-col gap-4">
              {menu.map((item, itemIndex) => (
                <TabsContent
                  key={itemIndex}
                  value={`item-${itemIndex}`}
                  className=""
                >
                  <MenuItemSection
                    item={item}
                    itemIndex={itemIndex}
                    showRealName={showRealName}
                    getDishId={getDishId}
                    quantities={quantities}
                    setQuantities={setQuantities}
                  />
                </TabsContent>
              ))}
            </div>
          </Tabs>

          {selectedItems.length > 0 && (
            <Card className="mt-4 md:mt-0 col-span-1 md:col-span-2 xl:col-span-4 ">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 justify-between">
                  Détails
                  <TotalOrderDetails
                    name="Total des ingrédients"
                    selectedDishes={selectedDishes}
                  />
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
