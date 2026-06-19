"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "María González",
    avatar: "MG",
    comment: "El mejor açaí que probé. La textura es perfecta y las frutas siempre frescas.",
    rating: 5,
  },
  {
    id: 2,
    name: "Carlos Ruiz",
    avatar: "CR",
    comment: "Pido siempre por WhatsApp y llega súper rápido. El envase mantiene el frío súper bien.",
    rating: 5,
  },
  {
    id: 3,
    name: "Laura Martínez",
    avatar: "LM",
    comment: "Me encanta poder personalizar mi bowl. La opción Suprema es una locura de rica.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            La frescura y calidad de nuestros productos, avalada por quienes ya nos probaron.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card p-6 rounded-2xl shadow-sm border border-border"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
