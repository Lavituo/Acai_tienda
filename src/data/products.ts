export type ProductSize = "Mediano" | "Grande" | "Extra Grande" | "Suprema" | "1/4 kg" | "1/2 kg" | "1 kg" | "1 bocha" | "Único";
export type ProductCategory = "Açaí" | "Milk Shakes" | "Helados";

export interface AcaiConfig {
  size: string;
  fruits: string[];
  toppings: string[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  image: string;
  size?: ProductSize;
  isConfigurable?: boolean;
}

export const acaiSizes = [
  { name: "Mediano", price: 10000 },
  { name: "Grande", price: 16000 },
  { name: "Extra Grande", price: 22000 },
  { name: "Suprema", price: 27000 },
];

export const acaiFruits = ["Banana", "Kiwi", "Frutilla", "Durazno"];
export const acaiToppings = ["Tres Leches", "Confites", "Rocklets", "Maní"];

export const products: Product[] = [
  // Acai is dynamic, but we can add predefined products or the artisan bowls
  {
    id: "acai-artesanal-1",
    name: "Açaí Pote Artesanal 1/4 kg",
    description: "Auténtico açaí brasileño, textura perfecta y sabor intenso.",
    price: 12000,
    category: "Açaí",
    image: "https://images.unsplash.com/photo-1590159763121-0a14daeb77dc?q=80&w=600&auto=format&fit=crop",
    size: "1/4 kg",
  },
  {
    id: "acai-artesanal-2",
    name: "Açaí Pote Artesanal 1/2 kg",
    description: "Auténtico açaí brasileño para compartir.",
    price: 22000,
    category: "Açaí",
    image: "https://images.unsplash.com/photo-1590159763121-0a14daeb77dc?q=80&w=600&auto=format&fit=crop",
    size: "1/2 kg",
  },
  {
    id: "acai-artesanal-3",
    name: "Açaí Pote Artesanal 1 kg",
    description: "El formato más grande para los verdaderos fans del açaí.",
    price: 32000,
    category: "Açaí",
    image: "https://images.unsplash.com/photo-1590159763121-0a14daeb77dc?q=80&w=600&auto=format&fit=crop",
    size: "1 kg",
  },
  {
    id: "milkshake-1",
    name: "Milk Shake Clásico",
    description: "Batido cremoso de helado con leche y salsa.",
    price: 10000,
    category: "Milk Shakes",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop",
    size: "Único",
  },
  {
    id: "helado-cono-1",
    name: "Cono de Helado (1 Bocha)",
    description: "Helado artesanal servido en cono crujiente.",
    price: 3500,
    category: "Helados",
    image: "/images/products/cono de helado 1 bocha.png",
    size: "1 bocha",
  },
  {
    id: "helado-vaso-1",
    name: "Vasito de Helado (1 Bocha)",
    description: "Helado artesanal servido en vasito.",
    price: 3000,
    category: "Helados",
    image: "/images/products/vasito de helado 1 bocha.png",
    size: "1 bocha",
  },
];
