"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-brand-bg to-brand-primary/10">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-brand-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-brand-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-brand-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-4 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-medium backdrop-blur-sm"
        >
          Experiencia Premium ✨
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-brand-text mb-4 sm:mb-6 font-sans"
        >
          Açaí Ña Kati <span className="text-brand-primary">Roga</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-[600px] font-medium"
        >
          Pequeños Momentos Que Refrescan Tu Día
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/menu">
            <Button
              size="lg"
              className="rounded-full px-6 sm:px-8 py-6 text-base sm:text-lg bg-brand-primary hover:bg-brand-primary/90 text-white shadow-xl shadow-brand-primary/25 hover:shadow-brand-primary/40 transition-all hover:-translate-y-1 group w-full sm:w-auto"
            >
              <span className="mr-2">🍧</span> Armar Mi Pedido
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Floating images mimicking Oakberry style */}
      <motion.img
        initial={{ opacity: 0, x: -50, y: 50, rotate: -10 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: -15 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        src="https://images.unsplash.com/photo-1590159763121-0a14daeb77dc?q=80&w=300&auto=format&fit=crop"
        alt="Açaí bowl"
        className="absolute -bottom-10 -left-10 w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-2xl border-4 border-white/20 hidden md:block"
      />
    </section>
  );
}
