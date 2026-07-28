import React from 'react';
import { Filter, SearchCheck, Send, HelpCircle, ArrowRight } from 'lucide-react';

export const ProposalSection: React.FC = () => {
  const steps = [
    {
      step: "01",
      icon: Filter,
      title: "Seleção de Artigos",
      desc: "Filtragem ativa entre milhares de publicações diárias para identificar o que realmente altera a prática."
    },
    {
      step: "02",
      icon: SearchCheck,
      title: "Curadoria & Análise",
      desc: "Revisão rigorosa sintetizando a pergunta clínica, benefícios, riscos, significância e limitações metodológicas."
    },
    {
      step: "03",
      icon: Send,
      title: "Postagem das Revisões",
      desc: "Envio de resumos objetivos e estruturados no seu celular para leitura rápida no intervalo do plantão ou rotina."
    },
    {
      step: "04",
      icon: HelpCircle,
      title: "Questões & Casos Clínicos",
      desc: "Revisão ativa com questões de residência comentadas, discussão de alternativas e fixação de conceitos práticos."
    }
  ];

  return (
    <section id="proposta" className="py-14 lg:py-20 border-b border-slate-200/80 bg-[#F6F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-3">
          <span className="text-xs font-bold text-[#0055FF] uppercase tracking-wider block">
            FLUXOGRAMA DE FUNCIONAMENTO
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172033] tracking-tight">
            A Proposta da Comunidade
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            Transformando o excesso de publicações científicas em atualizações claras, organizadas e prontas para a rotina diária.
          </p>
        </div>

        {/* Sequential Visual Flowchart Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 text-left relative flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0055FF] border border-blue-100 flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 font-mono">
                      PASSO {item.step}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-base font-bold text-[#172033] flex items-center justify-between">
                      {item.title}
                      {idx < 3 && <ArrowRight className="w-4 h-4 text-slate-400 hidden lg:block" />}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 text-[11px] font-semibold text-[#0055FF]">
                  Entregue no seu aplicativo
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
