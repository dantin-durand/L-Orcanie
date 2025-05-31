import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Heading1 } from "../../components/ui/title";
import { menu, type MenuItem } from "./data/menu";
import { useState, useMemo } from "react";
import { Label } from "../../components/ui/label";
import { Switch } from "../../components/ui/switch";
import { Button } from "../../components/ui/button";

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

  return (
    <div className="bg-gray-100 px-[5%] py-10 min-h-screen w-full">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center space-x-2 mb-6">
          <Switch
            id="realname-mode"
            checked={showRealName}
            onCheckedChange={setShowRealName}
          />
          <Label htmlFor="realname-mode">Afficher les noms</Label>
        </div>
        <Button
          className="w-full mb-6"
          onClick={() => setQuantities({})}
          size="lg"
        >
          Réinitialiser les quantités
        </Button>
        {menu.map((item: MenuItem, itemIndex: number) => (
          <Card key={itemIndex} className="mb-4 gap-0 px-4">
            <Heading1 className="mb-6">{item.title}</Heading1>
            {item.dishes.map((dish, dishIndex) => {
              const id = getDishId(itemIndex, dishIndex);
              const qty = quantities[id] || 0;
              const totalDishPrice = dish.price * qty;

              return (
                <CardHeader
                  key={dishIndex}
                  className={`px-2 py-3 rounded-lg border-2 ${
                    dish.pinned ? "border-grey-800 px-3" : " border-transparent"
                  } ${qty > 0 ? "bg-green-50" : ""}`}
                >
                  <CardTitle>
                    {showRealName ? dish.realName : dish.label}
                  </CardTitle>
                  <CardDescription>
                    {showRealName ? dish.label : dish.realName}
                  </CardDescription>
                  <CardAction className="flex flex-col items-end gap-2">
                    <p>
                      {qty > 1
                        ? `$${totalDishPrice.toFixed(
                            2
                          )} (${qty} x $${dish.price.toFixed(2)})`
                        : `$${dish.price.toFixed(2)}`}
                    </p>
                    <select
                      className="ml-2 border rounded p-1"
                      value={qty}
                      onChange={(e) =>
                        setQuantities((prev) => ({
                          ...prev,
                          [id]: Number(e.target.value),
                        }))
                      }
                    >
                      {Array.from({ length: 41 }, (_, i) => i).map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </CardAction>
                </CardHeader>
              );
            })}
          </Card>
        ))}

        {selectedItems.length > 0 && (
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Détails</CardTitle>
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
        <Button
          className="w-full mt-6"
          onClick={() => setQuantities({})}
          size="lg"
        >
          Réinitialiser les quantités
        </Button>
      </div>
    </div>
  );
}
