"use client";

import { useCartStore } from "@/store/cartStore";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingCart() {
  const { getTotalItems, getTotal } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const itemsCount = getTotalItems();
  const total = getTotal();

  if (!mounted || itemsCount === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-md z-50"
      >
        <Link href="/checkout" className="block w-full">
          <div className="bg-primary text-primary-foreground rounded-full shadow-2xl p-4 flex items-center justify-between backdrop-blur-md bg-primary/95 border border-primary-foreground/20 transition-transform active:scale-95">
            <div className="flex items-center gap-3">
              <div className="relative">
                <ShoppingBag size={24} />
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {itemsCount}
                </span>
              </div>
              <span className="font-semibold text-sm">Ver Carrito</span>
            </div>
            <span className="font-bold">{total.toLocaleString("es-PY")} Gs</span>
          </div>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
}
