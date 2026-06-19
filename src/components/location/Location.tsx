import { MapPin, Clock } from "lucide-react";

export function Location() {
  return (
    <section className="py-20 bg-brand-primary text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">Visítanos en Nuestro Local</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <MapPin size={24} className="text-brand-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Dirección</h3>
                  <p className="text-white/80">Territorio Social G.R.F. M8 L7</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <Clock size={24} className="text-brand-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Horarios</h3>
                  <p className="text-white/80">Lunes a Domingos</p>
                  <p className="text-white/80">14:00 hs a 22:00 hs</p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://maps.google.com/?q=Territorio+Social+G.R.F.+M8+L7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-white text-brand-primary font-bold px-6 py-3 rounded-full hover:bg-white/90 transition-colors shadow-lg"
            >
              Abrir en Google Maps
            </a>
          </div>
          
          <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/20">
            <h3 className="text-2xl font-bold mb-6 text-brand-accent">También te recomendamos</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <div>
                  <h4 className="font-bold text-lg">🍦 Conos de Helado</h4>
                  <p className="text-white/70 text-sm">1 bocha</p>
                </div>
                <div className="font-bold">3.500 Gs</div>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <div>
                  <h4 className="font-bold text-lg">🍨 Vasitos</h4>
                  <p className="text-white/70 text-sm">1 bocha</p>
                </div>
                <div className="font-bold">3.000 Gs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
