export const trackAddToCart = (productName: string, price: number) => {
  console.log(`[Analytics] Added to Cart: ${productName} - ${price} Gs`);
};

export const trackCheckoutStart = () => {
  console.log(`[Analytics] Checkout Started`);
};

export const trackCheckoutComplete = (total: number) => {
  console.log(`[Analytics] Checkout Completed - Total: ${total} Gs`);
};

export const trackWhatsAppOrder = () => {
  console.log(`[Analytics] WhatsApp Order Initiated`);
};
