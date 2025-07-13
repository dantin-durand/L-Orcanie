import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import type { Order } from "./orders.types";

export default function OrdersPage() {
  const orders = localStorage.getItem("orders");
  const ordersArray = orders ? JSON.parse(orders) : [];

  const handleDeleteOrder = (orderId: string) => {
    if (
      !window.confirm("Êtes-vous sûr de vouloir supprimer cette commande ?")
    ) {
      return;
    }
    const updatedOrders = ordersArray.filter(
      (order: Order) => order.id !== orderId
    );
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    window.location.reload();
  };
  return (
    <div className="max-w-[1400px] w-full mx-auto relative">
      {ordersArray.length === 0 ? (
        <div className="h-[80vh] flex items-center justify-center text-gray-500 text-lg">
          Aucune commande enregistrée
        </div>
      ) : (
        ordersArray.map((order: Order) => (
          <Card key={order.id} className="mb-4">
            <CardHeader>
              <CardTitle>{order.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {order.date && (
                <div className="mb-4 text-sm font-medium">
                  <p>
                    Date:{" "}
                    {order.date
                      ? new Date(order.date).toLocaleDateString()
                      : "Aucune date"}
                  </p>
                  <p>Heure: {order.time || "Aucune heure"}</p>
                </div>
              )}

              <ul className="mb-4">
                {order.order.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center mb-1"
                  >
                    <span className="text-sm">{item.label}</span>
                    <span className="text-sm">
                      {item.qty} x ${item.price.toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="my-5 flex justify-between items-center text-lg font-bold">
                Total:
                <span>${order.total.toFixed(2)}</span>
              </p>
              <div className="text-xs text-gray-500">
                <p>Créé le: {new Date(order.createdAt).toLocaleString()}</p>
                <p>
                  Mis à jour le: {new Date(order.updatedAt).toLocaleString()}
                </p>
              </div>
            </CardContent>
            <div className="px-4 grid grid-cols-2 gap-4">
              <Button
                className="w-full bg-red-500 text-white hover:bg-red-600"
                onClick={() => handleDeleteOrder(order.id)}
                variant="destructive"
              >
                Supprimer
              </Button>
              <Button
                onClick={() => {
                  alert(
                    "L'édition des commandes n'est pas encore implémentée."
                  );
                }}
                variant="secondary"
              >
                Modifier
              </Button>
            </div>
          </Card>
        ))
      )}
    </div>
  );
}
