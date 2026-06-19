"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Check } from "lucide-react";
import { acaiSizes, acaiFruits, acaiToppings } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import { trackAddToCart } from "@/utils/analytics";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function AcaiConfigurator() {
  const { addItem } = useCartStore();
  const [selectedSize, setSelectedSize] = useState(acaiSizes[0]);
  const [selectedFruits, setSelectedFruits] = useState<string[]>([]);
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);

  const toggleSelection = (item: string, list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (list.includes(item)) {
      setList(list.filter((i) => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const handleAddToCart = () => {
    const productName = `Açaí Personalizado (${selectedSize.name})`;
    addItem({
      id: `custom-acai-${Date.now()}`,
      name: productName,
      price: selectedSize.price,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1590159763121-0a14daeb77dc?q=80&w=600&auto=format&fit=crop",
      details: {
        size: selectedSize.name,
        fruits: selectedFruits,
        toppings: selectedToppings,
      },
    });
    trackAddToCart(productName, selectedSize.price);
    toast.success("Açaí añadido al carrito", {
      description: "Tu creación personalizada está lista.",
    });
    
    // Reset after adding
    setSelectedSize(acaiSizes[0]);
    setSelectedFruits([]);
    setSelectedToppings([]);
  };

  return (
    <div className="bg-card rounded-3xl p-6 shadow-sm border border-border max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Arma tu Açaí Perfecto</h2>
        <p className="text-muted-foreground">Sigue los pasos para crear tu bowl ideal.</p>
      </div>

      <div className="space-y-8">
        {/* Step 1: Size */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-brand-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <h3 className="font-bold text-lg">Elige el tamaño</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {acaiSizes.map((size) => (
              <button
                key={size.name}
                onClick={() => setSelectedSize(size)}
                className={`relative p-4 rounded-xl border-2 text-center transition-all ${
                  selectedSize.name === size.name
                    ? "border-brand-primary bg-brand-primary/5"
                    : "border-border hover:border-brand-primary/30"
                }`}
              >
                {selectedSize.name === size.name && (
                  <div className="absolute top-2 right-2 text-brand-primary">
                    <Check size={16} />
                  </div>
                )}
                <div className="font-bold mb-1">{size.name}</div>
                <div className="text-sm text-muted-foreground">{size.price.toLocaleString("es-PY")} Gs</div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Fruits */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-brand-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <h3 className="font-bold text-lg">Elige las frutas</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {acaiFruits.map((fruit) => (
              <button
                key={fruit}
                onClick={() => toggleSelection(fruit, selectedFruits, setSelectedFruits)}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                  selectedFruits.includes(fruit)
                    ? "bg-brand-accent text-white border-brand-accent"
                    : "bg-transparent border-border hover:border-brand-accent/50 text-foreground"
                }`}
              >
                {fruit}
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Toppings */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-brand-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <h3 className="font-bold text-lg">Elige los agregados</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {acaiToppings.map((topping) => (
              <button
                key={topping}
                onClick={() => toggleSelection(topping, selectedToppings, setSelectedToppings)}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                  selectedToppings.includes(topping)
                    ? "bg-brand-secondary text-white border-brand-secondary"
                    : "bg-transparent border-border hover:border-brand-secondary/50 text-foreground"
                }`}
              >
                {topping}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-muted-foreground text-sm">Total calculado</p>
          <p className="text-3xl font-bold text-brand-primary">{selectedSize.price.toLocaleString("es-PY")} Gs</p>
        </div>
        <Button
          onClick={handleAddToCart}
          size="lg"
          className="w-full sm:w-auto rounded-full px-8 py-6 text-lg bg-brand-primary hover:bg-brand-primary/90 shadow-lg"
        >
          <ShoppingBag className="mr-2" size={20} />
          Añadir al Carrito
        </Button>
      </div>
    </div>
  );
}
