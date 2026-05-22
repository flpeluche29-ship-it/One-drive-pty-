import { Translation } from './types';

export const translations: Record<'es' | 'en', Translation> = {
  es: {
    nav: [
      { label: 'Inicio', href: '#inicio' },
      { label: 'Servicios', href: '#servicios' },
      { label: 'Tours', href: '#tours' },
      { label: 'Flota', href: '#flota' },
      { label: 'Galería', href: '#galeria' },
      { label: 'Reservas', href: '#reservas' },
    ],
    hero: {
      title: 'El Mejor Servicio de Transporte en Panamá con ONE DRIVE PTY',
      subtitle: 'Reservas rápidas • Atención VIP • Transporte en Panamá para empresas y particulares',
      ctaPrimary: 'Reservar Ahora',
      ctaSecondary: 'Ver Servicios',
      whatsapp: 'WhatsApp Directo',
    },
    services: {
      title: 'Nuestros Servicios',
      list: [
        {
          id: 'exec',
          title: 'Transporte Ejecutivo',
          description: 'Ideal para empresarios, reuniones, hoteles y clientes VIP.',
          icon: 'Briefcase',
          image: '/images/regenerated_image_1779295336733.jpg',
        },
        {
          id: 'airport',
          title: 'Traslados Aeropuerto',
          description: 'Recogidas y salidas puntuales desde y hacia el aeropuerto.',
          icon: 'Plane',
          image: '/images/regenerated_image_1779368016482.jpg',
        },
        {
          id: 'interior',
          title: 'Viajes al Interior',
          description: 'Boquete, Coronado, Playa Blanca, Colón, David y cualquier destino del país.',
          icon: 'Map',
          image: '/images/regenerated_image_1779295338005.jpg',
        },
      ],
    },
    tours: {
      title: 'Tours Privados',
      list: [
        {
          id: 'canal',
          title: 'Canal de Panamá',
          description: 'Conoce la maravilla de la ingeniería moderna en las esclusas de Miraflores.',
          image: '/images/regenerated_image_1779368016991.jpg',
        },
        {
          id: 'casco',
          title: 'Casco Antiguo',
          description: 'Historia, arquitectura colonial y el corazón cultural de la ciudad.',
          image: '/images/regenerated_image_1779368017522.webp',
        },
        {
          id: 'sanblas',
          title: 'Portobelo',
          description: 'Historia colonial, fortalezas asombrosas y la esencia caribeña de Colón.',
          image: '/images/regenerated_image_1779370504826.jpg',
        },
      ],
    },
    fleet: {
      title: 'Nuestra Flota Exclusive',
      subtitle: 'Vehículos modernos, limpios y equipados para tu máximo confort.',
      searchPlaceholder: 'Buscar vehículos por nombre, tipo o capacidad...',
      list: [
        {
          id: 'v1',
          name: 'SUV Premium Executive',
          type: 'SUV de Lujo',
          capacity: '1-7 Pasajeros',
          features: ['Aire Acondicionado', 'Asientos de Cuero', 'WiFi Abordo', 'Agua de Cortesía'],
          image: '/images/regenerated_image_1779466190717.jpg'
        },
        {
          id: 'v2',
          name: 'Luxury Transport S07',
          type: 'Camioneta de Lujo',
          capacity: '1-6 Pasajeros',
          features: ['Espacio Amplio', 'Cargadores USB', 'Conductor Bilingüe', 'Seguro Completo'],
          image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop'
        }
      ]
    },
    booking: {
      title: 'Sistema de Reservas',
      fields: {
        date: 'Fecha',
        time: 'Hora',
        pickup: 'Lugar de recogida',
        destination: 'Destino',
        passengers: 'Número de pasajeros',
        serviceType: 'Tipo de servicio',
      },
      submit: 'Confirmar Reserva',
    },
    whyUs: {
      title: '¿Por Qué Elegirnos?',
      reasons: [
        'Conductores profesionales',
        'Puntualidad garantizada',
        'Vehículos impecables',
        'Atención bilingüe',
        'Servicio privado y exclusivo',
        'Reservas rápidas por WhatsApp',
      ],
    },
    testimonials: {
      title: 'Opiniones de Nuestros Clientes',
      list: [
        { id: '1', name: 'John Doe', text: 'Excellent service! Very professional and punctual.', rating: 5 },
        { id: '2', name: 'Maria Garcia', text: 'El tour por el Casco Antiguo fue increíble. Altamente recomendado.', rating: 5 },
        { id: '3', name: 'Robert Smith', text: 'Comfortable cars and very polite drivers.', rating: 5 },
      ],
    },
    footer: {
      tagline: 'Tu mejor opción de transporte en Panamá, ofreciendo puntualidad y elegancia.',
      contact: 'Contáctanos',
      rights: '© 2024 ONE DRIVE PTY. Todos los derechos reservados.',
    },
      gallery: {
      title: 'Nuestra Flota y Experiencias',
      images: [
        '/images/regenerated_image_1779295339942.jpg',
        '/images/regenerated_image_1779295340762.jpg',
        '/images/regenerated_image_1779295341477.jpg',
        '/images/regenerated_image_1779295341885.jpg',
        '/images/regenerated_image_1779295343008.jpg',
      ],
    },
  },
  en: {
    nav: [
      { label: 'Home', href: '#inicio' },
      { label: 'Services', href: '#servicios' },
      { label: 'Tours', href: '#tours' },
      { label: 'Fleet', href: '#flota' },
      { label: 'Gallery', href: '#galeria' },
      { label: 'Booking', href: '#reservas' },
    ],
    hero: {
      title: 'The Best Transport Service in Panama with ONE DRIVE PTY',
      subtitle: 'Fast Bookings • VIP Service • Professional Transport in Panama',
      ctaPrimary: 'Book Now',
      ctaSecondary: 'View Services',
      whatsapp: 'Direct WhatsApp',
    },
    services: {
      title: 'Our Services',
      list: [
        {
          id: 'exec',
          title: 'Executive Transport',
          description: 'Ideal for businessmen, meetings, hotels, and VIP clients.',
          icon: 'Briefcase',
          image: '/images/regenerated_image_1779295336733.jpg',
        },
        {
          id: 'airport',
          title: 'Airport Transfers',
          description: 'Punctual pickups and departures to and from the airport.',
          icon: 'Plane',
          image: '/images/regenerated_image_1779368016482.jpg',
        },
        {
          id: 'interior',
          title: 'Trips to the Interior',
          description: 'Boquete, Coronado, Playa Blanca, Colon, David, and any destination in the country.',
          icon: 'Map',
          image: '/images/regenerated_image_1779295338005.jpg',
        },
      ],
    },
    tours: {
      title: 'Private Tours',
      list: [
        {
          id: 'canal',
          title: 'Panama Canal',
          description: 'Experience modern engineering at the Miraflores Locks.',
          image: '/images/regenerated_image_1779368016991.jpg',
        },
        {
          id: 'casco',
          title: 'Old Town (Casco Antiguo)',
          description: 'History, colonial architecture, and the cultural heart of the city.',
          image: '/images/regenerated_image_1779368017522.webp',
        },
        {
          id: 'sanblas',
          title: 'Portobelo',
          description: 'Colonial history, stunning fortresses, and the Caribbean essence of Colon.',
          image: '/images/regenerated_image_1779370504826.jpg',
        },
      ],
    },
    fleet: {
      title: 'Our Exclusive Fleet',
      subtitle: 'Modern, clean vehicles equipped for your maximum comfort.',
      searchPlaceholder: 'Search vehicles by name, type or capacity...',
      list: [
        {
          id: 'v1',
          name: 'SUV Premium Executive',
          type: 'Luxury SUV',
          capacity: '1-7 Passengers',
          features: ['Air Conditioning', 'Leather Seats', 'Onboard WiFi', 'Complimentary Water'],
          image: '/images/regenerated_image_1779466190717.jpg'
        },
        {
          id: 'v2',
          name: 'Luxury Transport S07',
          type: 'Luxury Van/SUV',
          capacity: '1-6 Passengers',
          features: ['Ample Space', 'USB Chargers', 'Bilingual Driver', 'Full Insurance'],
          image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop'
        }
      ]
    },
    booking: {
      title: 'Booking System',
      fields: {
        date: 'Date',
        time: 'Time',
        pickup: 'Pickup Location',
        destination: 'Destination',
        passengers: 'Number of Passengers',
        serviceType: 'Service Type',
      },
      submit: 'Confirm Reservation',
    },
    whyUs: {
      title: 'Why Choose Us?',
      reasons: [
        'Professional drivers',
        'Guaranteed punctuality',
        'Impeccable vehicles',
        'Bilingual attention',
        'Private and exclusive service',
        'Fast bookings via WhatsApp',
      ],
    },
    testimonials: {
      title: 'What Our Clients Say',
      list: [
        { id: '1', name: 'John Doe', text: 'Excellent service! Very professional and punctual.', rating: 5 },
        { id: '2', name: 'Maria Garcia', text: 'The tour of Casco Antiguo was incredible. Highly recommended.', rating: 5 },
        { id: '3', name: 'Robert Smith', text: 'Comfortable cars and very polite drivers.', rating: 5 },
      ],
    },
    footer: {
      tagline: 'More than transport, we offer an experience.',
      contact: 'Contact Us',
      rights: '© 2024 ONE DRIVE PTY. All rights reserved.',
    },
      gallery: {
      title: 'Our Fleet and Experiences',
      images: [
        '/images/regenerated_image_1779295339942.jpg',
        '/images/regenerated_image_1779295340762.jpg',
        '/images/regenerated_image_1779295341477.jpg',
        '/images/regenerated_image_1779295341885.jpg',
        '/images/regenerated_image_1779295343008.jpg',
      ],
    },
  },
};
