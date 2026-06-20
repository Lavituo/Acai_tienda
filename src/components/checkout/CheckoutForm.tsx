"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { trackCheckoutComplete, trackWhatsAppOrder } from "@/utils/analytics";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";

export function CheckoutForm() {
  const { items, getTotal, clearCart } = useCartStore();
  const [deliveryType, setDeliveryType] = useState<"delivery" | "pickup">("delivery");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (items.length === 0) return;

    const total = getTotal();
    trackCheckoutComplete(total);
    trackWhatsAppOrder();

    // Format products list
    let productsText = "";
    items.forEach((item) => {
      productsText += `- ${item.quantity}x ${item.name} (${(item.price * item.quantity).toLocaleString("es-PY")} Gs)\n`;
      if (item.details) {
        if (item.details.fruits?.length) productsText += `  Frutas: ${item.details.fruits.join(", ")}\n`;
        if (item.details.toppings?.length) productsText += `  Agregados: ${item.details.toppings.join(", ")}\n`;
      }
    });

    // Build message
    const message = `¡Hola Ña Kati Roga! 🍧

Quiero realizar un pedido:

---
${productsText}---

💰 Total: ${total.toLocaleString("es-PY")} Gs
🚚 Entrega: ${deliveryType === "delivery" ? "Delivery" : "Retiro en Local"}
👤 Cliente: ${name}
📱 Teléfono: ${phone}
${deliveryType === "delivery" ? `📍 Dirección: ${address}` : ""}

¡Gracias!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "595972466816"; // added country code based on 0972... assuming Paraguay (+595)
    
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
    
    // Clear cart after redirecting to WhatsApp
    clearCart();
  };

  return (
    <form onSubmit={handleCheckout} className="bg-card rounded-2xl p-6 shadow-sm border border-border">
      <h2 className="font-bold text-xl mb-6">Datos de Entrega</h2>

      <div className="space-y-6">
        <div>
          <Label className="text-base mb-3 block">Tipo de Entrega</Label>
          <RadioGroup 
            defaultValue="delivery" 
            onValueChange={(v) => setDeliveryType(v as "delivery" | "pickup")}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div>
              <RadioGroupItem value="delivery" id="delivery" className="sr-only" />
              <Label
                htmlFor="delivery"
                className={`flex flex-col items-center justify-between rounded-xl border-2 p-4 cursor-pointer transition-all ${
                  deliveryType === "delivery"
                    ? "border-brand-primary bg-brand-primary/5 text-brand-primary"
                    : "border-muted bg-transparent hover:bg-muted hover:text-accent-foreground"
                }`}
              >
                Delivery
              </Label>
            </div>
            <div>
              <RadioGroupItem value="pickup" id="pickup" className="sr-only" />
              <Label
                htmlFor="pickup"
                className={`flex flex-col items-center justify-between rounded-xl border-2 p-4 cursor-pointer transition-all ${
                  deliveryType === "pickup"
                    ? "border-brand-primary bg-brand-primary/5 text-brand-primary"
                    : "border-muted bg-transparent hover:bg-muted hover:text-accent-foreground"
                }`}
              >
                Retiro
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre y Apellido</Label>
            <Input 
              id="name" 
              placeholder="Ej. Juan Pérez" 
              required 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-xl h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono de contacto</Label>
            <Input 
              id="phone" 
              placeholder="Ej. 0981 123 456" 
              required 
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="rounded-xl h-12"
            />
          </div>

          {deliveryType === "delivery" && (
            <div className="space-y-2">
              <Label htmlFor="address">Dirección de entrega</Label>
              <Input 
                id="address" 
                placeholder="Calle y número de casa" 
                required={deliveryType === "delivery"}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="rounded-xl h-12"
              />
            </div>
          )}

          {deliveryType === "pickup" && (
            <div className="bg-brand-primary/5 border border-brand-primary/20 p-4 rounded-xl flex items-start gap-3 mt-2">
              <MapPin className="text-brand-primary shrink-0 mt-0.5" size={20} />
              <div>
                <p className="font-bold text-sm text-brand-primary">Retirar en nuestro local:</p>
                <p className="text-sm text-muted-foreground mt-1">Territorio Social G.R.F. M8 L7</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={items.length === 0}
        className="w-full mt-8 rounded-full h-14 text-lg font-bold bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg transition-all hover:-translate-y-1"
      >
        <Phone className="mr-2" size={20} fill="currentColor" />
        Enviar por WhatsApp
      </Button>
    </form>
  );
}
