/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { 
  Briefcase, 
  Plane, 
  Map as MapIcon, 
  Users,
  ChevronRight, 
  Star, 
  CheckCircle2, 
  MessageCircle,
  Menu,
  X,
  Globe,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Search,
  Upload,
  Image as ImageIcon
} from 'lucide-react';
import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { LanguageProvider, useLanguage } from './LanguageContext';

const IconMap: Record<string, any> = {
  Briefcase,
  Plane,
  Map: MapIcon,
};

function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center font-black text-black text-xl">1</div>
          <span className="text-white font-black text-2xl tracking-tighter">ONE DRIVE <span className="text-amber-500">PTY</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {t.nav.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className="text-white/80 hover:text-amber-400 transition-colors text-sm uppercase tracking-widest font-medium"
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            className="flex items-center space-x-1 text-white/80 hover:text-amber-400 border border-white/20 px-3 py-1 rounded-full text-xs uppercase tracking-tighter transition-all"
          >
            <Globe size={14} />
            <span>{language === 'es' ? 'EN' : 'ES'}</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 py-8 px-4 flex flex-col items-center space-y-6 md:hidden"
          >
            {t.nav.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white text-lg uppercase tracking-widest"
              >
                {item.label}
              </a>
            ))}
            <button 
              onClick={() => {
                setLanguage(language === 'es' ? 'en' : 'es');
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center space-x-2 text-white border border-white/20 px-6 py-2 rounded-full"
            >
              <Globe size={18} />
              <span>{language === 'es' ? 'English' : 'Español'}</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero() {
  const { t } = useLanguage();
  const [heroImage, setHeroImage] = useState("/images/regenerated_image_1779466190717.jpg");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setHeroImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetHeroImage = () => {
    setHeroImage("/images/regenerated_image_1779466190717.jpg");
  };

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with darker overlay */}
      <div className="absolute inset-0 z-0 text-white">
        <img 
          src={heroImage} 
          alt="Soueast S07 - ONE DRIVE PTY Luxury Transport"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        
        {/* Image Uploader Trigger */}
        <div className="absolute top-24 right-4 md:right-8 z-20 flex gap-2">
          <input 
            type="file" 
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            className="hidden"
          />
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all group"
          >
            <Upload size={14} className="group-hover:translate-y-[-1px] transition-transform" />
            <span>Cambiar Fondo</span>
          </button>
          
          <button 
            onClick={resetHeroImage}
            className="flex items-center space-x-2 bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all"
          >
            <span>Restaurar</span>
          </button>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block text-amber-500 font-bold uppercase tracking-[0.3em] text-sm mb-4">Servicio Premium 24/7</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tighter">
            {t.hero.title}
          </h1>
          <p className="text-xl text-white/80 mb-10 font-light max-w-lg">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#reservas" 
              className="bg-amber-500 hover:bg-amber-400 text-black px-8 py-4 rounded-full font-bold transition-all text-center flex items-center justify-center group"
            >
              {t.hero.ctaPrimary}
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a 
              href="#servicios" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold transition-all text-center"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-amber-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

function Services() {
  const { t } = useLanguage();

  return (
    <section id="servicios" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{t.services.title}</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.services.list.map((service, index) => {
            const Icon = IconMap[service.icon] || Briefcase;
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-amber-500/50 transition-all duration-500"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center text-black shadow-lg">
                    <Icon size={24} />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white/60 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Tours() {
  const { t } = useLanguage();

  return (
    <section id="tours" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter">
              {t.tours.title}
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed">
              Explora lo mejor de Panamá con guías expertos y la comodidad que mereces. Desde la selva hasta el mar.
            </p>
          </div>
          <a href="#" className="text-amber-500 font-bold uppercase tracking-widest text-sm hover:text-amber-400 transition-colors flex items-center group">
            Ver todos los tours <ChevronRight className="ml-2 group-hover:translate-x-1" size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {t.tours.list.map((tour, index) => (
            <motion.div 
              key={tour.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-3xl ${
                index === 0 ? 'md:col-span-8 h-[500px]' : 
                index === 1 ? 'md:col-span-4 h-[500px]' : 
                'md:col-span-12 h-[400px]'
              }`}
            >
              <img 
                src={tour.image} 
                alt={tour.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-bold text-white mb-2">{tour.title}</h3>
                <p className="text-white/70 font-light max-w-md line-clamp-2">
                  {tour.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Fleet() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredVehicles = t.fleet.list.filter(vehicle =>
    vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    vehicle.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    vehicle.capacity.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="flota" className="py-24 bg-zinc-900 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{t.fleet.title}</h2>
          <p className="text-white/60 text-lg font-light max-w-2xl mx-auto">
            {t.fleet.subtitle}
          </p>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mt-6" />
        </div>

        <div className="max-w-md mx-auto mb-16">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
            <input
              type="text"
              placeholder="Buscar por nombre, tipo o capacidad..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 text-white rounded-full py-4 pl-12 pr-6 focus:ring-2 focus:ring-amber-500 outline-none transition-all placeholder:text-white/30"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {filteredVehicles.length > 0 ? (
            filteredVehicles.map((vehicle, index) => (
              <motion.div 
                key={vehicle.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row bg-white/5 rounded-[40px] overflow-hidden border border-white/10 group hover:border-amber-500/30 transition-colors"
              >
                <div className="md:w-1/2 h-80 md:h-auto overflow-hidden">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                  <span className="text-amber-500 font-bold text-sm uppercase tracking-widest mb-2">{vehicle.type}</span>
                  <h3 className="text-3xl font-bold text-white mb-4">{vehicle.name}</h3>
                  
                  <div className="flex items-center space-x-2 text-white/80 mb-6 bg-white/5 px-4 py-2 rounded-xl self-start">
                    <Users size={18} className="text-amber-500" />
                    <span className="font-medium">{vehicle.capacity}</span>
                  </div>

                  <div className="space-y-3">
                    {vehicle.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3 text-white/60">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                        <span className="text-sm font-light">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a 
                    href="#reservas" 
                    className="mt-8 border border-white/20 hover:bg-white/10 text-white px-6 py-3 rounded-2xl text-sm font-bold transition-all text-center"
                  >
                    {t.hero.ctaPrimary}
                  </a>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-white/40">
              No se encontraron vehículos que coincidan con su búsqueda.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="galeria" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{t.gallery.title}</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {t.gallery.images.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: index * 0.1 
              }}
              className="aspect-square overflow-hidden rounded-2xl group cursor-pointer shadow-lg hover:shadow-amber-500/20 transition-shadow duration-300"
            >
              <img 
                src={img} 
                alt={`Experience ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-115"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookingForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    pickup: '',
    destination: '',
    passengers: '1',
    serviceType: t.services.list[0].title
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Format WhatsApp message
    const message = `Hola ONE DRIVE PTY, me gustaría reservar:
Fecha: ${formData.date}
Hora: ${formData.time}
Recogida: ${formData.pickup}
Destino: ${formData.destination}
Pasajeros: ${formData.passengers}
Servicio: ${formData.serviceType}`;
    
    window.open(`https://wa.me/50768923188?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="reservas" className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4 inline-block">Reserva Hoy</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-8 tracking-tighter leading-none">
              {t.booking.title}
            </h2>
            <p className="text-lg text-black/60 mb-10 leading-relaxed max-w-lg">
              Completa el formulario y un asesor te contactará de inmediato por WhatsApp para confirmar tu servicio VIP.
            </p>

            <div className="space-y-6">
              {t.whyUs.reasons.map((reason, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-lg font-medium text-black/80">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-50 p-8 md:p-12 rounded-[40px] shadow-2xl border border-zinc-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-black/40">{t.booking.fields.date}</label>
                  <input 
                    type="date" 
                    required
                    className="w-full bg-white border border-zinc-200 p-4 rounded-2xl focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-black/40">{t.booking.fields.time}</label>
                  <input 
                    type="time" 
                    required
                    className="w-full bg-white border border-zinc-200 p-4 rounded-2xl focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-black/40">{t.booking.fields.pickup}</label>
                <input 
                  type="text" 
                  placeholder="Ej: Aeropuerto de Tocumen"
                  required
                  className="w-full bg-white border border-zinc-200 p-4 rounded-2xl focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                  onChange={(e) => setFormData({...formData, pickup: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-black/40">{t.booking.fields.destination}</label>
                <input 
                  type="text" 
                  placeholder="Ej: Hotel Hilton, Ave. Balboa"
                  required
                  className="w-full bg-white border border-zinc-200 p-4 rounded-2xl focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                  onChange={(e) => setFormData({...formData, destination: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-black/40">{t.booking.fields.passengers}</label>
                  <select 
                    className="w-full bg-white border border-zinc-200 p-4 rounded-2xl focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                    onChange={(e) => setFormData({...formData, passengers: e.target.value})}
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-black/40">{t.booking.fields.serviceType}</label>
                  <select 
                    className="w-full bg-white border border-zinc-200 p-4 rounded-2xl focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                    onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                  >
                    {t.services.list.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                  </select>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-black text-amber-500 hover:bg-zinc-900 py-5 rounded-2xl font-extrabold transition-all text-xl mt-4 flex items-center justify-center space-x-3 shadow-xl shadow-black/5"
              >
                <MessageCircle size={24} />
                <span>{t.booking.submit}</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-zinc-50 border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 text-black">{t.testimonials.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.list.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100"
            >
              <div className="flex text-amber-500 mb-4">
                {[...Array(item.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-zinc-600 mb-6 italic">"{item.text}"</p>
              <span className="font-bold text-black">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center font-black text-black text-xl">1</div>
              <span className="text-white font-black text-2xl tracking-tighter uppercase">ONE DRIVE <span className="text-amber-500">PTY</span></span>
            </div>
            <p className="text-white/40 max-w-sm mb-8 leading-relaxed">
              {t.footer.tagline} Especialistas en brindarte un traslado seguro, puntual y con la elegancia que mereces en todo el territorio panameño.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/onedrive_pty/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-amber-500 hover:text-black transition-all"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-amber-500 hover:text-black transition-all"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Links</h4>
            <div className="flex flex-col space-y-4">
              {t.nav.map(item => (
                <a key={item.href} href={item.href} className="text-white/40 hover:text-amber-500 transition-colors text-sm uppercase tracking-wide">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">{t.footer.contact}</h4>
            <div className="flex flex-col space-y-4 text-white/40">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-amber-500" />
                <span className="text-sm">+507 6892-3188</span>
              </div>
              <div className="flex flex-col space-y-3">
                <input 
                  type="text" 
                  placeholder="¿Alguna consulta?" 
                  className="bg-white/5 border border-white/10 text-white rounded p-2 text-sm"
                  id="inquiry-input"
                />
                <a 
                  href="mailto:tany04822@gmail.com?subject=Consulta"
                  className="text-amber-500 text-sm font-bold uppercase hover:text-amber-400 flex items-center space-x-2"
                  onClick={(e) => {
                    const input = document.getElementById('inquiry-input') as HTMLInputElement;
                    const body = encodeURIComponent(input.value);
                    e.currentTarget.href = `mailto:tany04822@gmail.com?subject=Consulta%20desde%20sitio%20web&body=${body}`;
                  }}
                >
                  <Mail size={16} />
                  <span>Enviar consulta</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-white/20 text-xs tracking-widest uppercase">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloating() {
  return (
    <motion.a 
      href="https://wa.me/50768923188"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="fixed bottom-8 right-8 z-[60] bg-green-500 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:bg-green-400 transition-all group scale-100 hover:scale-110 active:scale-95"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
        ¿Necesitas ayuda? ¡Contáctanos!
      </span>
    </motion.a>
  );
}

function LandingPage() {
  return (
    <div className="bg-black text-white selection:bg-amber-500 selection:text-black">
      <Navbar />
      <Hero />
      <Services />
      <Tours />
      <Fleet />
      <Gallery />
      <BookingForm />
      <Testimonials />
      <Footer />
      <WhatsAppFloating />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <LandingPage />
    </LanguageProvider>
  );
}
