import React from 'react';
import { roundsConfig } from '../../config/roundsConfig';

export const Navbar: React.FC = () => {
  const isFounderActive = roundsConfig.pricing.founderOfferActive;
  const checkoutUrl = isFounderActive 
    ? roundsConfig.checkout.founderCheckoutUrl 
    : roundsConfig.checkout.regularCheckoutUrl;

  return (
    <header className="sticky top-3 z-50 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full transition-all">
      <div className="bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-slate-900/5 rounded-2xl h-16 px-4 sm:px-6 flex items-center justify-between">
        
        {/* Official Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img 
            src="/images/rounds-logo.png" 
            alt="Rounds" 
            className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col text-left">
            <span className="font-extrabold text-base tracking-tight text-[#172033]">
              {roundsConfig.brand.name}
            </span>
            <span className="text-[10px] text-blue-600 font-semibold tracking-wide uppercase -mt-1">
              Atualização Médica
            </span>
          </div>
        </a>

        {/* Liquid Glass Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/60 p-1.5 rounded-xl border border-slate-200/50 backdrop-blur-sm text-xs font-semibold text-slate-700">
          <a href="#curadoria" className="px-3 py-1.5 rounded-lg hover:bg-white hover:text-blue-600 hover:shadow-sm transition-all">Curadoria & Direção</a>
          <a href="#proposta" className="px-3 py-1.5 rounded-lg hover:bg-white hover:text-blue-600 hover:shadow-sm transition-all">A Proposta</a>
          <a href="#roadmap" className="px-3 py-1.5 rounded-lg hover:bg-white hover:text-blue-600 hover:shadow-sm transition-all">Futuro</a>
          <a href="#oferta" className="px-3 py-1.5 rounded-lg hover:bg-white hover:text-blue-600 hover:shadow-sm transition-all">Membro Fundador</a>
          <a href="#faq" className="px-3 py-1.5 rounded-lg hover:bg-white hover:text-blue-600 hover:shadow-sm transition-all">FAQ</a>
        </nav>

        {/* Single CTA Button */}
        <div>
          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-xl bg-[#0055FF] hover:bg-blue-700 text-white text-xs font-semibold tracking-wide transition-all shadow-md shadow-blue-500/20 active:scale-95"
          >
            Quero entrar no grupo
          </a>
        </div>

      </div>
    </header>
  );
};
