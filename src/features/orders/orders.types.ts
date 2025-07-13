export interface Order {
  id: string;
  title: string;
  date?: string; // ISO date string
  time?: string; // Time in HH:mm format
  order: {
    label: string;
    qty: number;
    price: number;
  }[];
  total: number;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}
