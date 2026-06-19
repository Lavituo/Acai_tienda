"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Product } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import { trackAddToCart } from "@/utils/analytics";
import { toast } from "sonner";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCartStore();

  const handleAdd = () => {
    addItem({
      id: `${product.id}-${Date.now()}`,
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
      details: { size: product.size }
    });
    trackAddToCart(product.name, product.price);
    toast.success("Añadido al carrito", {
      description: product.name,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border group"
    >
      <div className="aspect-[4/3] relative overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        {product.size && (
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded-md text-xs font-bold text-brand-primary">
            {product.size}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 line-clamp-1">{product.name}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4 min-h-[40px]">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-brand-primary text-lg">
            {product.price.toLocaleString("es-PY")} Gs
          </span>
          <button
            onClick={handleAdd}
            className="w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center hover:bg-brand-primary/90 transition-colors shadow-sm active:scale-95"
            aria-label="Añadir al carrito"
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
