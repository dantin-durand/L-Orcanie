import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Calendar } from "../../../components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../components/ui/popover";
import { ChevronDownIcon } from "lucide-react";
import { Checkbox } from "../../../components/ui/checkbox";

interface MenuDialogSaveProps {
  order: { label: string; qty: number; price: number }[];
}

export default function MenuDialogSave({ order }: MenuDialogSaveProps) {
  const [title, setTitle] = useState<string>("");
  const [isDateDisabled, setIsDateEnabled] = useState<boolean>(false);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState<string>("22:00");
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    const orders = localStorage.getItem("orders");
    const ordersArray = orders ? JSON.parse(orders) : [];

    const newOrder = {
      id: Math.random().toString(36).substring(2, 15),
      title: title || `Commande #${Math.floor(Math.random() * 1000)}`,
      date: isDateDisabled ? undefined : date?.toISOString(),
      time: isDateDisabled ? undefined : time,
      order: order,
      total: order.reduce((acc, item) => acc + item.qty * item.price, 0),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    ordersArray.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(ordersArray));
    setOpen(false);
    setDate(new Date());
    setTime("22:00");
    window.location.reload();
  };

  return (
    <Dialog>
      <DialogTrigger className="w-full bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors p-2">
        Sauvegarder
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sauvegarder la commande</DialogTitle>
          <div className="flex flex-col gap-5 mt-10 mb-6">
            <div className="flex flex-col gap-3">
              <Label htmlFor="order-title">Titre de la commande</Label>
              <Input
                id="order-title"
                placeholder="Titre de la commande"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>

            {!isDateDisabled && (
              <div className="flex gap-4 w-full">
                <div className="flex flex-col gap-3 w-2/3">
                  <Label htmlFor="date-picker" className="px-1">
                    Date et heure de livraison
                  </Label>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        id="date-picker"
                        className="w-full justify-between font-normal"
                      >
                        {date ? date.toLocaleDateString() : "Select date"}
                        <ChevronDownIcon />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto overflow-hidden p-0"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={date}
                        captionLayout="dropdown"
                        onSelect={(date) => {
                          setDate(date);
                          setOpen(false);
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="flex flex-col gap-3 w-1/3 mt-6.5">
                  <Input
                    type="time"
                    id="time-picker"
                    defaultValue="22:00"
                    onChange={(e) => setTime(e.target.value)}
                    value={time}
                    className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                  />
                </div>
              </div>
            )}
            <div className="flex items-center gap-3">
              <Checkbox
                id="terms"
                onCheckedChange={(checked) =>
                  setIsDateEnabled(checked === true)
                }
              />

              <Label htmlFor="terms">Date inconnue</Label>
            </div>
          </div>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit" onClick={handleSave} className="w-full">
            Sauvegarder
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
