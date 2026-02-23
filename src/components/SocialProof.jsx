import { motion } from 'framer-motion';

// Icono de Comilla SVG para no depender de librerías externas
const QuoteIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-20 absolute top-4 right-4">
    <path d="M11.192 15.757c0 1.147-.473 2.119-1.42 2.914-.945.795-2.106 1.192-3.483 1.192-1.757 0-3.115-.61-4.074-1.832-.958-1.222-1.438-2.703-1.438-4.444 0-2.838.803-5.328 2.411-7.471 1.605-2.143 3.864-3.513 6.777-4.11l.781 1.494c-1.921.432-3.418 1.257-4.492 2.474-1.074 1.217-1.611 2.59-1.611 4.12h2.09c1.233 0 2.27.382 3.112 1.147.842.765 1.263 1.772 1.263 3.021zm12.808 0c0 1.147-.473 2.119-1.42 2.914-.945.795-2.106 1.192-3.483 1.192-1.757 0-3.115-.61-4.074-1.832-.958-1.222-1.438-2.703-1.438-4.444 0-2.838.803-5.328 2.411-7.471 1.605-2.143 3.864-3.513 6.777-4.11l.781 1.494c-1.921.432-3.418 1.257-4.492 2.474-1.074 1.217-1.611 2.59-1.611 4.12h2.09c1.233 0 2.27.382 3.112 1.147.842.765 1.263 1.772 1.263 3.021z" fill="#f97316"/>
  </svg>
);

export default function SocialProof() {
  const cases = [
    {
      name: "Carlos Méndez",
      role: "Emprendedor",
      text: "En 3 meses logré bajar mi porcentaje de grasa del 22% al 12% sin dejar de rendir en mi empresa. El enfoque en bio-mecánica cambió mi vida.",
      before: "",
      after: "",
    },
    {
      name: "Laura Rivas",
      role: "Abogada",
      text: "Buscaba fuerza y disciplina. No solo transformé mi físico, sino mi mentalidad. Las planificaciones son increíblemente precisas.",
      before: "",
      after: "",
    }
  ];

  return (
    <section className="bg-[#0f0f0f] py-24 px-6 overflow-hidden">
      <div className="container mx-auto">
        
        {/* TÍTULO */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 italic">
            RESULTADOS <span className="text-orange-500 underline decoration-white/10">REALES</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto uppercase tracking-widest text-sm font-bold">
            No vendemos humo, vendemos transformaciones documentadas.
          </p>
        </div>

        {/* GRID DE CASOS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {cases.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#161616] rounded-3xl p-8 border border-white/5 relative group"
            >
              <QuoteIcon />

              <div className="flex flex-col md:flex-row gap-8 items-center">
                
                {/* CONTENEDOR ANTES Y DESPUÉS */}
                <div className="flex gap-2 min-w-[260px]">
                  <div className="relative">
                    <img src={item.before} alt="Antes" className="w-32 h-44 object-cover rounded-xl grayscale" />
                    <span className="absolute bottom-2 left-2 bg-black/70 text-[10px] text-white px-2 py-1 rounded font-bold uppercase">Antes</span>
                  </div>
                  <div className="relative">
                    <img src={item.after} alt="Después" className="w-32 h-44 object-cover rounded-xl border-2 border-orange-500" />
                    <span className="absolute bottom-2 left-2 bg-orange-500 text-[10px] text-white px-2 py-1 rounded font-bold uppercase">Después</span>
                  </div>
                </div>

                {/* TEXTO DE LA RESEÑA */}
                <div className="flex flex-col justify-center">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map(star => <span key={star} className="text-orange-500 text-sm">★</span>)}
                  </div>
                  <p className="text-gray-300 italic text-lg leading-relaxed mb-6">
                    "{item.text}"
                  </p>
                  <div>
                    <h4 className="text-white font-black text-xl uppercase">{item.name}</h4>
                    <span className="text-orange-500 font-bold text-xs tracking-widest uppercase">{item.role}</span>
                  </div>
                </div>

              </div>

              {/* EFECTO HOVER DECORATIVO */}
              <div className="absolute inset-0 border-2 border-orange-500/0 group-hover:border-orange-500/20 rounded-3xl transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* BANNER INFERIOR DE ACCIÓN */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-20 bg-gradient-to-r from-orange-600 to-orange-400 rounded-3xl p-10 text-center"
        >
          <h3 className="text-white text-3xl md:text-4xl font-black mb-6">¿LISTO PARA SER EL SIGUIENTE CASO DE ÉXITO?</h3>
          <button className="bg-white text-orange-600 px-10 py-4 rounded-full font-black hover:bg-black hover:text-white transition-all transform hover:scale-105 shadow-2xl">
            EMPEZAR MI CAMBIO AHORA
          </button>
        </motion.div>

      </div>
    </section>
  );
}