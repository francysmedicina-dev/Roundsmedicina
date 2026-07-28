import React from 'react';
import { roundsConfig } from '../../config/roundsConfig';
import { Button } from '../ui/Button';

export const FinalCTASection: React.FC = () => {
  const isFounderActive = roundsConfig.pricing.founderOfferActive;
  const founderPriceStr = `R$ ${roundsConfig.pricing.founderPrice.toFixed(2).replace('.', ',')}`;
  const regularPriceStr = `R$ ${roundsConfig.pricing.regularPrice.toFixed(2).replace('.', ',')}`;
  const limit = roundsConfig.pricing.founderLimit;

  const checkoutUrl = isFounderActive
    ? roundsConfig.checkout.founderCheckoutUrl
    : roundsConfig.checkout.regularCheckoutUrl;

  return (
    <section className="py-16 lg:py-20 bg-[#0A2540] text-white border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
        
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-300 block">
            CONVITE AOS PRIMEIROS MEMBROS
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
            Acompanhe a evolução da Medicina e ajude a construir o Rounds desde o início.
          </h2>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            Entre para a comunidade, receba conteúdos médicos analisados e contextualizados e participe da construção dos próximos formatos do projeto.
          </p>
        </div>

        {/* Controlled Brand Blue Box */}
        <div className="p-6 sm:p-8 rounded-xl bg-[#071D33] border border-blue-500/30 space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-blue-900/60 pb-4 gap-2">
            <div>
              <span className="text-xs font-semibold text-blue-300 uppercase">Lote de Lançamento</span>
              <div className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                Uma das {limit} vagas de membro fundador
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">
              {founderPriceStr} <span className="text-xs font-normal text-slate-300">/mês</span>
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Os membros fundadores mantêm esse valor enquanto permanecerem com a assinatura ativa. Após as {limit} primeiras assinaturas, o valor para novos membros será de <strong className="text-white">{regularPriceStr} por mês</strong>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Button
              href={checkoutUrl}
              variant="primary"
              className="w-full sm:w-auto"
            >
              Quero entrar no grupo por {founderPriceStr}/mês
            </Button>
            <span className="text-xs text-slate-400">
              Assinatura mensal recorrente. Cancelamento no checkout sem fidelidade.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
