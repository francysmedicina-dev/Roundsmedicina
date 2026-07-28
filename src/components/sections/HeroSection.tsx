import React from 'react';
import { roundsConfig } from '../../config/roundsConfig';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const HeroSection: React.FC = () => {
  const isFounderActive = roundsConfig.pricing.founderOfferActive;
  const founderPriceStr = `R$ ${roundsConfig.pricing.founderPrice.toFixed(2).replace('.', ',')}`;
  const regularPriceStr = `R$ ${roundsConfig.pricing.regularPrice.toFixed(2).replace('.', ',')}`;
  const limit = roundsConfig.pricing.founderLimit;

  const checkoutUrl = isFounderActive
    ? roundsConfig.checkout.founderCheckoutUrl
    : roundsConfig.checkout.regularCheckoutUrl;

  const { drGustavo, francys } = roundsConfig.founders;

  return (
    <section className="relative overflow-hidden pt-8 pb-12 lg:pt-12 lg:pb-16 border-b border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Header Bar */}
        <div className="flex flex-wrap items-center justify-between pb-4 border-b border-slate-200 text-xs font-medium text-slate-500 gap-2">
          <div className="flex items-center gap-3">
            <Badge variant="primary">Lançamento Exclusivo</Badge>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="hidden sm:inline text-slate-600 font-semibold">{roundsConfig.brand.tagline}</span>
          </div>
          <span className="text-slate-600 font-semibold">Entregue via WhatsApp & Telegram</span>
        </div>

        {/* TOP FULL-WIDTH SECTION: Banner, Headline & Subheadline */}
        <div className="text-left space-y-4 max-w-4xl">
          {/* Prominent Banner */}
          <div>
            <span className="bg-[#0055FF] text-white px-5 py-2.5 rounded-xl font-extrabold text-sm sm:text-base tracking-wider uppercase inline-block shadow-md shadow-blue-500/20 border border-blue-400/30">
              Grupo de Atualizações Médicas
            </span>
          </div>

          {/* Full Width Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172033] leading-[1.16] tracking-tight">
            Evidência médica selecionada, analisada e colocada em contexto.
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            O Rounds reúne artigos recentes, mudanças em diretrizes e questões comentadas em um grupo construído e liderado diretamente pelo <strong className="text-[#172033]">Dr. Gustavo Lenci Marques</strong> e pelo <strong className="text-[#172033]">Dr. Francys de Luca</strong>.
          </p>
        </div>

        {/* PERFECTLY SYMMETRICAL 2 COLUMNS: Pricing Box (Left) & Large Doctors Cutouts (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch pt-2">
          
          {/* Left Column: Pricing Box & CTA (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            
            {/* Light Sober Pricing Box */}
            <div className="h-full p-6 sm:p-7 rounded-2xl bg-[#F6F9FC] border border-[#E4EAF0] space-y-6 shadow-sm flex flex-col justify-between text-left">
              
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200/80 pb-4">
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Condição de Membro Fundador
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#172033] mt-1">
                      {limit} vagas · {founderPriceStr} <span className="text-xs font-normal text-slate-500">/ mês</span>
                    </div>
                  </div>
                  <div className="text-left sm:text-right text-xs text-slate-500">
                    <span>Valor regular pós-{limit} vagas:</span>
                    <div className="font-semibold text-slate-700">{regularPriceStr}/mês</div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Os primeiros {limit} membros entram por <strong className="text-slate-800">{founderPriceStr}/mês</strong> e mantêm esse valor continuamente enquanto a assinatura permanecer ativa. Após o preenchimento das {limit} vagas, novas assinaturas passam a custar <strong className="text-slate-800">{regularPriceStr}/mês</strong>.
                </p>
              </div>

              <div className="pt-2">
                <Button 
                  href={checkoutUrl}
                  variant="primary"
                  className="w-full text-sm sm:text-base py-4 px-8 text-center shadow-lg shadow-blue-500/20"
                >
                  Quero entrar no grupo
                </Button>
                <p className="mt-2.5 text-[11px] text-slate-500 text-center sm:text-left">
                  Assinatura mensal recorrente. Cancelamento simples no checkout sem fidelidade.
                </p>
              </div>

            </div>

          </div>

          {/* Right Column: Large Doctors Cutouts Standing on Dark Blue Support Bar (6 cols) */}
          <div className="lg:col-span-6 relative flex flex-col items-center lg:items-end justify-end">
            
            <div className="w-full max-w-xl relative flex flex-col items-center">
              
              {/* Extra Large Cutout Photos Grid */}
              <div className="w-full flex items-end justify-center gap-2 sm:gap-4 -mb-3 z-10 px-2">
                
                {/* Dr. Gustavo Photo */}
                <div className="flex-1 text-center flex flex-col items-center group">
                  <img 
                    src="/images/dr-gustavo-transparent.png" 
                    alt={drGustavo.name} 
                    className="w-full max-h-[380px] sm:max-h-[440px] lg:max-h-[460px] object-contain object-bottom drop-shadow-lg transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Dr. Francys Photo */}
                <div className="flex-1 text-center flex flex-col items-center group">
                  <img 
                    src="/images/francys-deluca-transparent.png" 
                    alt={francys.name} 
                    className="w-full max-h-[380px] sm:max-h-[440px] lg:max-h-[460px] object-contain object-bottom drop-shadow-lg transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>

              </div>

              {/* Dark Blue Support Bar */}
              <div className="w-full bg-[#0A2540] text-white p-4 sm:p-5 rounded-2xl border border-blue-900/60 shadow-xl z-20">
                <div className="grid grid-cols-2 gap-4 text-center divide-x divide-blue-800/80">
                  
                  {/* Dr. Gustavo Info */}
                  <div className="space-y-0.5 px-1 text-left sm:text-center">
                    <h3 className="text-xs sm:text-sm font-extrabold text-white leading-snug">
                      Dr. Gustavo Lenci Marques
                    </h3>
                    <p className="text-[10px] sm:text-xs text-blue-300 font-medium leading-tight">
                      Cardiologia & Ensino (UFPR/PUCPR)
                    </p>
                  </div>

                  {/* Dr. Francys Info */}
                  <div className="space-y-0.5 px-1 text-left sm:text-center pl-3">
                    <h3 className="text-xs sm:text-sm font-extrabold text-white leading-snug">
                      Dr. Francys de Luca
                    </h3>
                    <p className="text-[10px] sm:text-xs text-blue-300 font-medium leading-tight">
                      Clínica Médica & Prescrevendo.ai
                    </p>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>

        {/* FULL-WIDTH CHECKMARKS BANNER */}
        <div className="pt-4 border-t border-slate-200/80">
          <div className="flex flex-col sm:flex-row items-center justify-around gap-4 text-xs sm:text-sm text-slate-700 font-semibold bg-[#F6F9FC] p-4 rounded-xl border border-slate-200/60">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-blue-100 text-[#0055FF] flex items-center justify-center font-bold text-xs">✓</span>
              <span>Curadoria focada na prática</span>
            </div>
            <div className="hidden sm:block text-slate-300">|</div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-blue-100 text-[#0055FF] flex items-center justify-center font-bold text-xs">✓</span>
              <span>Revisões de artigos semanais</span>
            </div>
            <div className="hidden sm:block text-slate-300">|</div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-blue-100 text-[#0055FF] flex items-center justify-center font-bold text-xs">✓</span>
              <span>Questões comentadas e interação</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
