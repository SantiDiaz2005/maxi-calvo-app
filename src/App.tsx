import { useState } from 'react';
import { motion } from 'framer-motion';
import { Disc, ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

// Con @ts-ignore silenciamos el falso error de TypeScript para que no haya líneas rojas
// @ts-ignore
import logomaxi from './imports/IMG_1076.PNG';
// @ts-ignore
import img0315 from './imports/IMG_0315.JPEG';
// @ts-ignore
import img0352 from './imports/IMG_0877.JPG.jpeg';
// @ts-ignore
import img0360 from './imports/IMG_0360.JPEG';

export default function App() {
  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden selection:bg-primary/30 bg-black text-white font-sans">
      <HeroSection />
      <AboutSection />
      <TourDatesSection />
      <PastSetsSection />
      <GearBrandsSection />
      <Footer />
    </div>
  );
}
function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Fondo original simple con la foto y opacidad */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/60" />
        <img 
          src={img0315} 
          alt="Fondo de luces de club" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative flex flex-col items-center justify-center text-center px-4 w-full h-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full flex justify-center mix-blend-screen"
        >
          <img 
            src={logomaxi} 
            alt="Maxi Calvo Logo" 
            className="w-full max-w-lg md:max-w-2xl lg:max-w-4xl h-auto object-contain mb-8 invert opacity-90 drop-shadow-[0_0_20px_rgba(0,243,255,0.2)]"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col items-center mt-4"
        >
          <a 
            href="#tour" 
            className="inline-flex items-center gap-2 border border-cyan-400/50 text-cyan-400 px-8 py-3 rounded-full hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(0,243,255,0.6)] font-medium uppercase tracking-wider text-sm transition-all"
          >
            Ver Fechas
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 relative z-10 px-6 max-w-7xl mx-auto bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0">
            <div className="absolute inset-0 bg-cyan-400/20 translate-x-4 translate-y-4 border border-cyan-400/30" />
            <img 
              src={img0352} 
              alt="DJ Set de Maxi Calvo" 
              className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 border border-white/10"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 lg:pl-12 flex flex-col justify-center"
        >
          <h2 className="font-sans text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">
            Biografía <span className="text-cyan-400">&</span> Estilo
          </h2>
          <div className="space-y-4 text-white/80 font-light text-lg leading-relaxed">
            <p>
              Maxi Calvo es un DJ nacido en la ciudad de Córdoba, Argentina, donde dio sus primeros pasos en la escena electrónica formándose en Academia Groove y en la academia "Be Skills".
            </p>
            <p>
              Allí desarrolló y perfeccionó su identidad artística de la mano de "Nyvo" y "Be Skills", adquiriendo un enfoque versátil que recorre géneros como el indie dance, tech house, melodic house y techno melódico. A lo largo de su crecimiento artístico, Maxi ha formado parte de eventos junto a productoras como Cuarto Nativo, Flapper Producciones y Satira.
            </p>
            <p>
              En paralelo a su carrera como DJ, inició su camino en la producción musical logrando lanzar su primer track titulado "Crash Out" en el reconocido sello Trippy Code.
            </p>
            <p>
              Con un perfil en constante evolución, Maxi Calvo se destaca por sets dinámicos y con identidad propia, orientados a generar una conexión profunda en la pista mediante grooves hipnóticos y líneas melódicas envolventes.
            </p>
          </div>
          
          <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-6">
            <a href="https://open.spotify.com/intl-es/artist/3o3UXSZE6WgX2vGdVEbvzH?si=dUuVFAI6SiCjaBXitkPoMQ" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-fuchsia-500 hover:text-white transition-colors uppercase tracking-widest text-sm font-semibold border-b border-fuchsia-500/30 hover:border-fuchsia-500 pb-1">
              <Disc className="w-4 h-4" /> Escuchar en Spotify
            </a>
            
            <a href="https://www.youtube.com/channel/UC7bjctyBXX3u5AX01kLeO_A" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-fuchsia-500 hover:text-white transition-colors uppercase tracking-widest text-sm font-semibold border-b border-fuchsia-500/30 hover:border-fuchsia-500 pb-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" />
              </svg> Escuchar en YouTube
            </a>

            <a href="https://soundcloud.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-fuchsia-500 hover:text-white transition-colors uppercase tracking-widest text-sm font-semibold border-b border-fuchsia-500/30 hover:border-fuchsia-500 pb-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
              </svg> Escuchar en SoundCloud
            </a>

            <a href="https://www.instagram.com/maxicalvo7/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-fuchsia-500 hover:text-white transition-colors uppercase tracking-widest text-sm font-semibold border-b border-fuchsia-500/30 hover:border-fuchsia-500 pb-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg> Abrir el perfil de Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const TOUR_DATES: any[] = [];

function TourDatesSection() {
  return (
    <section id="tour" className="py-24 bg-[#0a0a0a] border-y border-white/5 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent opacity-50" />
      
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row justify-between items-baseline gap-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white drop-shadow-[0_0_10px_rgba(255,0,255,0.3)]">
            Próximas Fechas
          </h2>
        </motion.div>

        <div className="flex flex-col">
          {TOUR_DATES.length > 0 ? (
            TOUR_DATES.map((gig, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b border-white/10 hover:border-fuchsia-500/50 transition-colors gap-4"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-12 w-full md:w-auto">
                  <span className="text-xl md:text-2xl font-semibold text-fuchsia-500 w-24">
                    {gig.date}
                  </span>
                  <span className="text-lg md:text-xl font-medium tracking-wide">
                    {gig.venue}
                  </span>
                  <span className="text-white/60 text-sm uppercase tracking-wider">
                    {gig.city}
                  </span>
                </div>
                
                {gig.status === 'Agotado' ? (
                  <span className="px-6 py-2 rounded-full uppercase text-xs font-bold tracking-widest border border-white/10 text-white/30 cursor-not-allowed w-full md:w-auto text-center">
                    Agotado
                  </span>
                ) : (
                  <a
                    href={gig.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-full uppercase text-xs font-bold tracking-widest border border-fuchsia-500/50 text-fuchsia-500 hover:bg-fuchsia-500 hover:text-white hover:shadow-[0_0_15px_rgba(255,0,255,0.4)] transition-all w-full md:w-auto text-center"
                  >
                    Entradas
                  </a>
                )}
              </motion.div>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              className="text-center py-12 border border-white/5 rounded-2xl bg-white/5"
            >
              <p className="text-white/50 uppercase tracking-widest text-sm">Nuevas fechas por anunciar</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

function PastSetsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const VIDEOS = [
    { id: 1, title: 'Open set live', type: 'Situra XL X UNP', src: '/videos/IMG_1200.MP4' },
    { id: 2, title: 'Open set live', type: 'Situra XL X UNP', src: '/videos/IMG_1201.MP4' },
    { id: 3, title: 'Open set live', type: 'Situra XL X UNP', src: '/videos/IMG_1204.MP4' }
  ];

  const nextVideo = () => setCurrentIndex((prev) => (prev + 1) % VIDEOS.length);
  const prevVideo = () => setCurrentIndex((prev) => (prev - 1 + VIDEOS.length) % VIDEOS.length);

  const nextIndex = (currentIndex + 1) % VIDEOS.length;

  return (
    <section className="py-24 px-6 max-w-[90rem] mx-auto bg-black">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-cyan-400">
          Visuales y Sets
        </h2>
      </motion.div>

      <div className="flex items-center gap-4 md:gap-8">
        <button 
          onClick={prevVideo}
          className="w-16 h-16 shrink-0 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-cyan-400 transition-all text-white"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <div className="aspect-video bg-[#111] border border-white/10 relative overflow-hidden rounded-lg shadow-2xl">
              <video 
                key={VIDEOS[currentIndex].id}
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                src={VIDEOS[currentIndex].src}
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold uppercase">{VIDEOS[currentIndex].title}</h3>
              <p className="text-fuchsia-500 text-sm tracking-widest uppercase mt-1">{VIDEOS[currentIndex].type}</p>
            </div>
          </div>

          <div className="hidden lg:flex flex-col gap-4 opacity-60 hover:opacity-100 transition-opacity">
            <div className="aspect-video bg-[#111] border border-white/10 relative overflow-hidden rounded-lg shadow-2xl">
              <video 
                key={VIDEOS[nextIndex].id}
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                src={VIDEOS[nextIndex].src}
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold uppercase">{VIDEOS[nextIndex].title}</h3>
              <p className="text-fuchsia-500 text-sm tracking-widest uppercase mt-1">{VIDEOS[nextIndex].type}</p>
            </div>
          </div>
        </div>

        <button 
          onClick={nextVideo}
          className="w-16 h-16 shrink-0 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-cyan-400 transition-all text-white"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}

function GearBrandsSection() {
  const brands = ['Pioneer DJ', 'CDJ 3000', 'DJM 900 Nexus', 'QSC', 'Pioneer DJ', 'CDJ 3000'];
  
  return (
    <section className="py-20 bg-[#0a0a0a] overflow-hidden relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <h3 className="text-white/30 uppercase tracking-[0.2em] text-sm font-semibold">
          Rider Técnico
        </h3>
      </div>
      
      <div className="flex whitespace-nowrap opacity-40 hover:opacity-100 transition-opacity duration-500">
        <motion.div 
          animate={{ x: [0, -1035] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex gap-16 items-center"
        >
          {[...brands, ...brands, ...brands].map((brand, idx) => (
            <div key={idx} className="text-2xl font-bold uppercase tracking-widest text-white/50">
              {brand}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-16 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="col-span-1 lg:col-span-2">
          <h2 className="text-3xl font-black uppercase tracking-tighter text-white drop-shadow-[0_0_10px_rgba(0,243,255,0.4)] mb-4">
            Maxi Calvo
          </h2>
          <p className="text-white/50 text-sm leading-relaxed max-w-sm">
            Profundo, envolvente y melódico. Contrataciones a nivel mundial para festivales, clubes y eventos privados.
          </p>
        </div>
        
        <div>
          <h4 className="uppercase tracking-widest text-sm font-bold mb-6 text-white/80">
            Booking
          </h4>
          <a 
            href="mailto:maxi04calvo@gmail.com" 
            className="flex items-center gap-2 text-cyan-400 hover:text-white transition-colors uppercase text-sm tracking-wider"
          >
            maxi04calvo@gmail.com <ExternalLink className="w-3 h-3" />
          </a>
        </div>
        
        <div>
          <h4 className="uppercase tracking-widest text-sm font-bold mb-6 text-white/80">
            Redes
          </h4>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/maxicalvo7/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center hover:bg-fuchsia-500 hover:text-white transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a href="https://www.youtube.com/channel/UC7bjctyBXX3u5AX01kLeO_A" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-colors text-white">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
              </svg>
            </a>
            <a href="https://open.spotify.com/intl-es/artist/3o3UXSZE6WgX2vGdVEbvzH?si=dUuVFAI6SiCjaBXitkPoMQ" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#1DB954] hover:text-white transition-colors text-white">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.66.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.84.241 1.2zM20.16 9.6C15.84 7.08 9.12 6.9 5.28 8.1c-.6.18-1.2-.12-1.38-.72-.18-.6.12-1.2.72-1.38 4.32-1.38 11.64-1.2 16.62 1.8.54.3.72 1.02.42 1.56-.24.6-.96.78-1.5.24z"/>
              </svg>
            </a>
            <a href="https://soundcloud.com/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ff5500] hover:text-white transition-colors text-white">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Maxi Calvo. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}