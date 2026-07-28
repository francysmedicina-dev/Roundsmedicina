import React from 'react';
import { roundsConfig } from '../../config/roundsConfig';
import { Button } from '../ui/Button';

export const PricingSection: React.FC = () => {
  const isFounderActive = roundsConfig.pricing.founderOfferActive;
  const founderPriceStr = `R$ ${roundsConfig.pricing.founderPrice.toFixed(2).replace('.', ',')}`;
  const regularPriceStr = `R$ ${roundsConfig.pricing.regularPrice.toFixed(2).replace('.', ',')}`;
  const limit = roundsConfig.pricing.founderLimit;

  const checkoutUrl = isFounderActive
    ? roundsConfig.checkout.founderCheckoutUrl
    : roundsConfig.checkout.regularCheckoutUrl;

  const summaryItems = [
    "Acesso à comunidade privada de atualizações no WhatsApp e Telegram",
    "Análises periódicas de artigos médicos de alto impacto com leitura crítica",
    "Questões de residência médica comentadas por metodologia ativa",
    "Resumos objetivos de mudanças em diretrizes e consensos",
    "Participação direta em enquetes e sugestões de novos temas"
  ];

  return (
    <section id="oferta" className="py-16 lg:py-24 border-b border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto">
          <div className="p-8 sm:p-10 rounded-2xl bg-[#F6F9FC] border border-[#E4EAF0] space-y-8 text-left shadow-sm">
            
            {/* Header / Title */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-slate-200 pb-6 gap-4">
              <div>
                <span className="text-xs font-bold text-[#0055FF] uppercase tracking-wider block mb-1">
                  CONDIÇÃO DE LANÇAMENTO
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172033]">
                  MEMBROS FUNDADORES
                </h2>
              </div>

              <div className="text-left sm:text-right">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#172033]">
                  {founderPriceStr} <span className="text-xs font-normal text-slate-500">/ mês</span>
                </div>
                <span className="text-xs font-semibold text-slate-500">Primeiras {limit} assinaturas</span>
              </div>
            </div>

            {/* Content & Rules Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Summary Items (7 cols) */}
              <div className="lg:col-span-7 space-y-3">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Tudo o que está incluído no plano:
                </span>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  {summaryItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#0055FF] font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Commercial Conditions (5 cols) */}
              <div className="lg:col-span-5 p-5 rounded-xl bg-white border border-slate-200 space-y-3 text-xs text-slate-600 shadow-sm">
                <span className="text-xs font-bold uppercase text-[#172033] block">
                  REGRA DO MEMBRO FUNDADOR:
                </span>
                <p className="leading-relaxed">
                  Os primeiros {limit} membros entram por <strong className="text-[#172033]">{founderPriceStr} por mês</strong> e mantêm esse valor continuamente enquanto a assinatura permanecer ativa e os pagamentos estiverem em dia.
                </p>
                <div className="pt-2 border-t border-slate-200 text-slate-500">
                  Após o preenchimento das {limit} vagas, novas assinaturas passarão a custar <strong className="text-slate-700">{regularPriceStr} por mês</strong>.
                </div>
              </div>

            </div>

            {/* CTA & Microcopy */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Button
                href={checkoutUrl}
                variant="primary"
                className="w-full sm:w-auto"
              >
                Quero entrar no grupo por {founderPriceStr}/mês
              </Button>
              <span className="text-xs text-slate-500 text-center sm:text-right">
                Assinatura mensal recorrente. Cancelamento simples no checkout sem fidelidade.
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
