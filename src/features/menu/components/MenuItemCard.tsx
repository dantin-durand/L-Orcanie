// components/MenuItemSection.tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
} from "../../../components/ui/card";
import { Heading1 } from "../../../components/ui/title";
import type { MenuItem } from "../data/menu";
import { MenuItemDetails } from "./MenuItemDetails";

interface MenuItemSectionProps {
  item: MenuItem;
  itemIndex: number;
  showRealName: boolean;
  getDishId: (itemIndex: number, dishIndex: number) => string;
  quantities: { [key: string]: number };
  setQuantities: React.Dispatch<
    React.SetStateAction<{ [key: string]: number }>
  >;
}

export function MenuItemSection({
  item,
  itemIndex,
  showRealName,
  getDishId,
  quantities,
  setQuantities,
}: MenuItemSectionProps) {
  return (
    <Card className="mb-4 gap-0 px-4 self-start" id={`item-${itemIndex}`}>
      <div className="sticky top-0 bg-white z-10 px-2 py-3 border-b border-gray-200 mb-6">
        <Heading1 className="">{item.title}</Heading1>
      </div>
      {item.dishes.map((dish, dishIndex) => {
        const id = getDishId(itemIndex, dishIndex);
        const qty = quantities[id] || 0;
        const totalDishPrice = dish.price * qty;

        return (
          <CardHeader
            key={dishIndex}
            className={`px-2 py-3 rounded-lg border ${
              dish.pinned
                ? "border-yellow-500 bg-yellow-50 px-3"
                : " border-transparent"
            } ${qty > 0 ? "bg-green-50" : ""}`}
          >
            <div className="flex flex-col gap-0.5 pt-2">
              <CardTitle className="flex items-center gap-3">
                {showRealName ? dish.realName : dish.label}{" "}
                <MenuItemDetails
                  name={showRealName ? dish.realName : dish.label}
                  realname={showRealName ? dish.label : dish.realName}
                  description={dish.description}
                  ingredients={dish.intredients}
                  quantity={qty}
                  multiplier={dish.multiplier || 1}
                />
              </CardTitle>
              <CardDescription>
                {showRealName ? dish.label : dish.realName}
              </CardDescription>

              <p className="text-xs text-gray-500 pt-2">{dish.description}</p>
            </div>
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
                {Array.from({ length: 31 }, (_, i) => i).map((num) => (
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
  );
}
