export const Navbar = () => {
  return (
    // Añadimos z-[100] para que siempre esté arriba y backdrop-blur para estilo
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-white/5 z-[100]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Cambié el azul por naranja para que combine con tus otras secciones */}
          <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center font-black text-white shadow-lg shadow-orange-500/20">
            D
          </div>
          <span className="text-white font-black text-2xl tracking-tighter uppercase italic">
            Dash<span className="text-orange-500">Board</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-xs font-bold uppercase tracking-widest">Inicio</a>
          <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-xs font-bold uppercase tracking-widest">Métricas</a>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/20">
            Perfil
          </button>
        </div>
      </div>
    </nav>
  );
};