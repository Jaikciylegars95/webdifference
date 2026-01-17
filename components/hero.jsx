import Image from "next/image";
import { Calendar, ArrowDown } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center px-4">
      <div className="max-w-4xl w-full text-center">
        {/* Badge en haut */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-8 py-4 shadow-lg">
          <Image
      src="/assets/2_Logo_Bulle.png"
      alt="logo bulle"
      width={50}
      height={50}
      className="-mt-1 translate-x-3"
    />
            <span className="text-[#1a1a1a] font-semibold text-lg tracking-wide">
              CRÉER UN SITE WEB <span className="underline decoration-2">VRAIMENT</span> UNIQUE
            </span>
          </div>
        </div>

        {/* Titre principal */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">Votre </span>
          <span className="text-[#6ee7b7]">site</span>
          <span className="text-white"> doit </span>
          <span className="text-[#6ee7b7]">donner envie</span>
          <span className="text-white"> de</span>
          <br />
          <span className="text-[#6ee7b7]">rester</span>
          <span className="text-white">, pas de </span>
          <span className="text-white relative inline-block">
            <span className="line-through decoration-2">revenir en</span>
          </span>
          <br />
          <span className="text-white relative inline-block">
            <span className="line-through decoration-2">arrière</span>
          </span>
          <span className="text-[#6ee7b7]">.</span>
        </h1>

        {/* Sous-titre */}
        <p className="text-gray-400 text-lg md:text-xl mb-4 max-w-2xl mx-auto">
          Design moderne, SEO solide, Suivi complet :
        </p>
        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          on construit un site qui retient vos visiteurs et vous apporte des résultats.
        </p>

        {/* Boutons CTA */}
        <div className="flex items-start justify-center gap-8 mb-8">

  {/* Bouton Prendre RDV + image */}
  <div className="flex flex-col items-center">
    <button className="bg-[#6ee7b7] hover:bg-[#5dd9a8] text-[#1a1a1a] font-semibold px-8 py-4 rounded-lg transition-colors flex items-center gap-2 shadow-lg">
      <Calendar size={20} />
      Prendre RDV
    </button>

    <Image
      src="/assets/3_Un_Ptit_Click.png"
      alt="Un p'tit click"
      width={100}
      height={100}
      className="-mt-4 -translate-x-18"
    />
  </div>

  {/* Deuxième bouton */}
  <button className="border-2 border-[#6ee7b7] text-[#6ee7b7] hover:bg-[#6ee7b7] hover:text-[#1a1a1a] font-semibold px-8 py-4 rounded-lg transition-colors flex items-center gap-2">
    Découvrir nos projets
    <ArrowDown size={18} />
  </button>

</div>

      </div>
    </div>
  );
}
