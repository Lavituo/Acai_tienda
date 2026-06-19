import { OrderSummary } from "@/components/checkout/OrderSummary";
import { CheckoutForm } from "@/components/checkout/CheckoutForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-muted/30 pb-20">
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border mb-6">
        <div className="w-full max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/menu" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium">
            <ArrowLeft size={20} />
            Menú
          </Link>
          <h1 className="font-bold text-lg">Finalizar Pedido</h1>
          <div className="w-16"></div>
        </div>
      </header>

      <main className="w-full max-w-5xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <CheckoutForm />
          </div>
          <div className="lg:col-span-5 sticky top-24">
            <OrderSummary />
          </div>
        </div>
      </main>
    </div>
  );
}
