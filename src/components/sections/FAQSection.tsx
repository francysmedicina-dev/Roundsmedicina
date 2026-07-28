import React, { useState } from 'react';
import { roundsConfig } from '../../config/roundsConfig';
import { ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const founderPriceStr = `R$ ${roundsConfig.pricing.founderPrice.toFixed(2).replace('.', ',')}`;
  const regularPriceStr = `R$ ${roundsConfig.pricing.regularPrice.toFixed(2).replace('.', ',')}`;
  const limit = roundsConfig.pricing.founderLimit;

  const faqs = [
    {
      q: "O que é o grupo de atualizações?",
      a: "O grupo é uma comunidade de curadoria, educação e atualização médica baseada em evidências. Ele entrega análises críticas de artigos científicos, resumos práticos de diretrizes e questões de residência comentadas direto no seu celular."
    },
    {
      q: "O conteúdo será enviado pelo WhatsApp ou Telegram?",
      a: `O conteúdo é disponibilizado através de canais e grupos fechados de transmissão no ${roundsConfig.community.platform}. Os links de acesso são liberados imediatamente após a confirmação da compra.`
    },
    {
      q: "Qual será a frequência das atualizações?",
      a: "Serão enviadas publicações periódicas ao longo da semana (com artigos, diretrizes e questões), garantindo ritmo constante de atualização sem sobrecarga de mensagens."
    },
    {
      q: "Quem pode participar da comunidade?",
      a: "A comunidade é destinada a médicos de todas as especialidades, residentes de medicina interna e especialidades clínicas/cirúrgicas, e estudantes de medicina em fase de internato ou preparação para provas."
    },
    {
      q: "Como funciona a condição de Membro Fundador?",
      a: `Os primeiros ${limit} membros entram pelo valor de ${founderPriceStr} por mês e mantêm essa mensalidade enquanto a assinatura permanecer ativa. Após o preenchimento das ${limit} vagas, novas assinaturas passarão a custar ${regularPriceStr} por mês.`
    },
    {
      q: "Posso cancelar a assinatura a qualquer momento?",
      a: `${roundsConfig.subscription.cancellationPolicy} Não há multa, carência nem contrato de fidelidade de longo prazo.`
    },
    {
      q: "O conteúdo substitui diretrizes completas ou avaliação clínica?",
      a: "Não. O conteúdo possui finalidade exclusivamente educacional e informativa, não substituindo a leitura integral das fontes originais, livros-texto, preceptoria médica ou a tomada de decisão clínica individualizada para cada paciente."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 border-b border-slate-200/80 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-3 mb-10">
          <span className="text-xs font-bold text-[#0055FF] uppercase tracking-wider block">
            ESCLARECIMENTOS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172033] tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-sm text-slate-600">
            Transparência sobre o grupo de atualizações, entrega e termos comerciais.
          </p>
        </div>

        {/* Minimalist Accordion */}
        <div className="border-t border-slate-200 text-left">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="border-b border-slate-200 transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-5 text-left flex items-center justify-between gap-4 font-bold text-[#172033] hover:text-[#0055FF] text-base sm:text-lg focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-[#0055FF]' : ''}`} />
                </button>

                {isOpen && (
                  <div className="pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
