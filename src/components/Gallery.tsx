import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

const images: GalleryImage[] = [
  { src: '/images/gallery-1.webp', alt: 'Equipe da clinica odontologica', caption: 'Nossa Equipe' },
  { src: '/images/gallery-2.webp', alt: 'Consultorio equipado com tecnologia moderna', caption: 'Tecnologia de Ponta' },
  { src: '/images/gallery-3.webp', alt: 'Sala de espera elegante e confortavel', caption: 'Conforto e Elegancia' },
  { src: '/images/gallery-4.webp', alt: 'Consultorio com ambiente acolhedor', caption: 'Ambiente Acolhedor' },
  { src: '/images/gallery-5.webp', alt: 'Fachada da clinica odontologica', caption: 'Nossa Clinica' },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="relative cursor-pointer group"
            style={{ aspectRatio: i === 0 ? '3/4' : i === 2 ? '3/4' : '3/4' }}
            onHoverStart={() => setHoveredIndex(i)}
            onHoverEnd={() => setHoveredIndex(null)}
            onClick={() => setSelected(i)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-full h-full overflow-hidden rounded-2xl">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700"
                style={{
                  transform: hoveredIndex === i ? 'scale(1.08)' : 'scale(1)',
                }}
                loading="lazy"
              />

              {/* Hover overlay */}
              <div
                className="absolute inset-0 transition-all duration-500 flex items-end"
                style={{
                  background: hoveredIndex === i
                    ? 'linear-gradient(to top, rgba(26,24,21,0.7) 0%, transparent 60%)'
                    : 'linear-gradient(to top, rgba(26,24,21,0.3) 0%, transparent 40%)',
                }}
              >
                <div
                  className="p-4 md:p-5 w-full transition-all duration-500"
                  style={{
                    transform: hoveredIndex === i ? 'translateY(0)' : 'translateY(8px)',
                    opacity: hoveredIndex === i ? 1 : 0.7,
                  }}
                >
                  <p className="text-white text-sm font-semibold tracking-wide">
                    {img.caption}
                  </p>
                </div>
              </div>

              {/* Gold border on hover */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-500"
                style={{
                  boxShadow: hoveredIndex === i
                    ? 'inset 0 0 0 2px rgba(196,154,60,0.5)'
                    : 'inset 0 0 0 0px rgba(196,154,60,0)',
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelected(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            {/* Image */}
            <motion.div
              className="relative max-w-4xl max-h-[85vh] w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selected].src}
                alt={images[selected].alt}
                className="w-full h-full object-contain rounded-2xl"
              />

              {/* Caption */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent rounded-b-2xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-white font-semibold text-lg">{images[selected].caption}</p>
                <p className="text-white/60 text-sm mt-1">{images[selected].alt}</p>
              </motion.div>

              {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Fechar"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation arrows */}
              {selected > 0 && (
                <button
                  onClick={(e) => { e.stopPropagation(); setSelected(selected - 1); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Anterior"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}
              {selected < images.length - 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); setSelected(selected + 1); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Próximo"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
