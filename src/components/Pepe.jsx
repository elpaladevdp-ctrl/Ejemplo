import { motion } from 'framer-motion';

export default function Pepe() {
  // Configuración de la animación para reutilizar
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <section className="relative h-[50rem] flex items-center justify-center overflow-hidden font-inter">
      {/* La imagen entra con un zoom suave */}
      <motion.img 
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        src="/img/hero.webp" 
        className="absolute inset-0 w-full h-full object-cover -z-10 brightness-50" 
      />
      
      <div className="container mx-auto px-6 text-center">
        <motion.span 
          {...fadeIn}
          transition={{ delay: 0.2 }}
          className="uppercase tracking-widest text-orange-500 font-bold mb-4 block"
        >
          Entrenamiento de Élite
        </motion.span>

        <motion.h1 
          {...fadeIn}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold text-white mb-6 font-abel"
        >
          Tu mejor versión <br/> no es una opción, es un plan.
        </motion.h1>

        <motion.p 
          {...fadeIn}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto"
        >
          Programas personalizados diseñados para profesionales ocupados que buscan resultados reales sin perder el tiempo.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, type: "spring", stiffness: 100 }}
          viewport={{once: false}}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          {/* Botón con efecto de escala al pasar el mouse */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition"
          >
            AGENDAR CITA GRATIS
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-full font-bold transition"
          >
            VER RESULTADOS
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}