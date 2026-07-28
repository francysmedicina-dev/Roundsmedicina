import React from 'react';
import { roundsConfig } from '../../config/roundsConfig';
import { ArrowRight } from 'lucide-react';

export const MobileStickyBar: React.FC = () => {
  const isFounderActive = roundsConfig.pricing.founderOfferActive;
  const checkoutUrl = isFounderActive
    ? roundsConfig.checkout.founderCheckoutUrl
    : roundsConfig.checkout.regularCheckoutUrl;

  const priceFormatted = isFounderActive
    ? `R$ ${roundsConfig.pricing.founderPrice.toFixed(2).replace('.', ',')}/mês`
    : `R$ ${roundsConfig.pricing.regularPrice.toFixed(2).replace('.', ',')}/mês`;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 shadow-lg">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-500">
            {isFounderActive ? "Membro Fundador" : "Plano Regular"}
          </span>
          <span className="text-sm font-extrabold text-[#172033]">
            {priceFormatted}
          </span>
        </div>

        <a
          href={checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#0055FF] hover:bg-blue-700 text-white text-xs font-semibold tracking-wide transition-colors"
        >
          <span>Entrar no Rounds</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
