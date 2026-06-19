"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products, ProductCategory } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { AcaiConfigurator } from "./AcaiConfigurator";
import { motion } from "framer-motion";
import Image from "next/image";

const categoryConfig: Record<ProductCategory, { image: string; label: string }> = {
  "Açaí": { image: "/images/nuestros_menu/menu_acai.png", label: "Açaí" },
  "Milk Shakes": { image: "/images/nuestros_menu/menu_milk_shake - copia.png", label: "Milk Shakes" },
  "Helados": { image: "/images/nuestros_menu/menu_helado.png", label: "Helados" },
};

export function MenuTabs() {
  const categories: ProductCategory[] = ["Açaí", "Milk Shakes", "Helados"];

  return (
    <div className="w-full">
      <Tabs defaultValue="Açaí" className="w-full flex-col">
        <div className="flex justify-center mb-8 sticky top-0 z-30 bg-background/80 backdrop-blur-md py-4">
          <TabsList className="flex w-full max-w-lg gap-1 sm:gap-2 rounded-2xl p-1 sm:p-2 bg-muted/50 border border-border h-auto overflow-x-auto no-scrollbar">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="flex-1 flex flex-col items-center gap-1.5 rounded-xl py-2 px-1
                  data-[state=active]:bg-brand-primary data-[state=active]:text-white
                  data-[state=inactive]:text-muted-foreground
                  transition-all duration-300 hover:scale-105 h-auto"
              >
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2
                  border-white/30 data-[state=active]:border-white shadow-md
                  group-data-[state=active]:border-white">
                  <Image
                    src={categoryConfig[category].image}
                    alt={category}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <span className="text-xs font-semibold leading-tight text-center">
                  {categoryConfig[category].label}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value="Açaí" className="mt-0 focus-visible:outline-none">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-12"
          >
            <AcaiConfigurator />
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Potes Artesanales</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products
                  .filter((p) => p.category === "Açaí")
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent value="Milk Shakes" className="mt-0 focus-visible:outline-none">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {products
              .filter((p) => p.category === "Milk Shakes")
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </motion.div>
        </TabsContent>

        <TabsContent value="Helados" className="mt-0 focus-visible:outline-none">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {products
              .filter((p) => p.category === "Helados")
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
