import { MenuTabs } from "@/components/menu/MenuTabs";
import { FloatingCart } from "@/components/cart/FloatingCart";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function MenuPage() {
  return (
    <div className="min-h-screen pb-32">
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border mb-6">
        <div className="w-full max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium">
            <ArrowLeft size={20} />
            Volver
          </Link>
          <h1 className="font-bold text-lg">Nuestro Menú</h1>
          <div className="w-16"></div> {/* Spacer for alignment */}
        </div>
      </header>

      <main className="w-full max-w-5xl mx-auto px-4 md:px-6">
        <MenuTabs />
      </main>

      <FloatingCart />
    </div>
  );
}
