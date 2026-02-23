import { motion } from 'framer-motion';

export default function Sobre() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  // Variantes para las tarjetas flotantes
  const cardVariants = {
    initial: (direction) => ({
      opacity: 0,
      x: direction === 'right' ? 40 : direction === 'left' ? -40 : 0,
      y: direction === 'bottom' ? 30 : 0,
    }),
    hover: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  return (
    <section className="bg-[#0f0f0f] py-24 overflow-hidden font-inter">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* LADO IZQUIERDO: IMAGEN Y TARJETAS */}
        <div className="relative flex justify-center items-center">
          <div className="absolute w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -z-10" />
          
          {/* Contenedor disparador del Hover */}
          <motion.div
            initial="initial"
            whileHover="hover" // Dispara la animación de los hijos
            className="relative cursor-pointer group"
          >
            {/* Imagen Principal */}
            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              src="/img/entrenador.webp" 
              alt="Sobre mí" 
              className="rounded-2xl shadow-2xl w-full max-w-sm object-cover md:grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            
            {/* TARJETA 1: EXPERIENCIA */}
            <motion.div 
              variants={cardVariants}
              custom="right"
              className="absolute -right-12 top-1/4 bg-orange-500 p-5 rounded-xl shadow-2xl min-w-[170px] pointer-events-none"
            >
              <span className="block text-4xl font-black text-white">+12</span>
              <span className="text-[10px] text-orange-100 uppercase font-bold tracking-widest">Años de experiencia</span>
            </motion.div>

            {/* TARJETA 2: CLIENTES */}
            <motion.div 
              variants={cardVariants}
              custom="left"
              className="absolute -left-12 top-1/2 bg-[#1a1a1a] border border-white/10 p-5 rounded-xl shadow-2xl min-w-[170px] pointer-events-none"
            >
              <span className="block text-3xl font-black text-orange-500">+500</span>
              <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Alumnos activos</span>
            </motion.div>

            {/* TARJETA 3: RESULTADOS */}
            <motion.div 
              variants={cardVariants}
              custom="bottom"
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white py-4 px-6 rounded-xl shadow-2xl min-w-[200px] text-center pointer-events-none"
            >
              <div className="flex justify-center gap-1 mb-1">
                {[1,2,3,4,5].map(i => <span key={i} className="text-orange-500 text-[10px]">★</span>)}
              </div>
              <span className="block text-xs font-bold text-gray-900 italic leading-tight">"Resultados reales en poco tiempo"</span>
            </motion.div>
          </motion.div>
        </div>

        {/* LADO DERECHO: TEXTO (Se mantiene igual) */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-orange-500 font-bold uppercase tracking-[0.3em] text-sm mb-2 block">
              Mi Filosofía
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              No soy solo un coach, <br /> soy tu <span className="text-orange-500">socio de éxito.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              Mi enfoque se basa en optimizar cada minuto de tu entrenamiento. Entiendo que como profesional, tu tiempo es oro.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4"
          >
            {[
              { title: "Planificación Elite", desc: "Adaptado a tu vida." },
              { title: "Nutrición Real", desc: "Sin restricciones absurdas." },
              { title: "Bio-mecánica", desc: "Entrenamiento seguro." },
              { title: "Mentalidad", desc: "Disciplina de alto nivel." }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="flex flex-col p-4 bg-white/5 rounded-lg border-l-2 border-orange-500 hover:bg-white/10 transition-colors"
              >
                <h4 className="text-white font-bold text-md">{feature.title}</h4>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="pt-6"
          >
            <button className="text-white font-bold border-b-2 border-orange-500 pb-1 hover:text-orange-500 transition-colors">
              VER CASOS DE ÉXITO →
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}