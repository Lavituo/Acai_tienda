"use client";

import { useCartStore } from "@/store/cartStore";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";

export function OrderSummary() {
  const { items, updateQuantity, removeItem, getTotal } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (items.length === 0) {
    return (
      <div className="bg-card rounded-2xl p-6 shadow-sm border border-border text-center py-12">
        <div className="text-4xl mb-4">🛒</div>
        <h3 className="font-bold text-xl mb-2">Tu carrito está vacío</h3>
        <p className="text-muted-foreground">¡Agrega algunos productos deliciosos!</p>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
      <h2 className="font-bold text-xl mb-6">Resumen del Pedido</h2>
      
      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4">
            <div className="w-20 h-20 bg-muted rounded-lg overflow-hidden flex-shrink-0">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="font-bold leading-tight">{item.name}</h3>
                <button 
                  onClick={() => removeItem(item.id)}
                  className="text-muted-foreground hover:text-destructive transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
              
              {item.details && (
                <div className="text-xs text-muted-foreground mt-1 space-y-0.5">
                  {item.details.size && <div>Tamaño: {item.details.size}</div>}
                  {item.details.fruits && item.details.fruits.length > 0 && (
                    <div>Frutas: {item.details.fruits.join(", ")}</div>
                  )}
                  {item.details.toppings && item.details.toppings.length > 0 && (
                    <div>Agregados: {item.details.toppings.join(", ")}</div>
                  )}
                </div>
              )}
              
              <div className="flex items-center justify-between mt-3">
                <div className="font-bold text-brand-primary">
                  {(item.price * item.quantity).toLocaleString("es-PY")} Gs
                </div>
                
                <div className="flex items-center gap-3 bg-muted rounded-full px-2 py-1">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-white transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-white transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <Separator className="my-6" />
      
      <div className="flex justify-between items-center text-lg font-bold">
        <span>Total</span>
        <span className="text-brand-primary text-2xl">{getTotal().toLocaleString("es-PY")} Gs</span>
      </div>
    </div>
  );
}
