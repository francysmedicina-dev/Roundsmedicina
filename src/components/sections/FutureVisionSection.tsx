import React from 'react';

export const FutureVisionSection: React.FC = () => {
  const roadmapCards = [
    {
      year: "2026",
      title: "Aulas e Sessões ao Vivo",
      desc: "Discussões interativas de casos clínicos complexos, revisões de temas e análise conjunta de artigos de alto impacto.",
      active: true,
    },
    {
      year: "2027",
      title: "Grupo de Dúvidas e Preceptoria",
      desc: "Auxílio direto para médicos compreenderem casos clínicos desafiadores e possuírem uma segunda opinião qualificada.",
      active: true,
    },
    {
      year: "2027",
      title: "Tecnologia, IA na Medicina e Marketing Médico",
      desc: "Conteúdos e ferramentas sobre uso ético da Inteligência Artificial, sistemas digitais e presença médica responsável.",
      active: true,
    },
    {
      year: "2027",
      title: "Cursos Médicos",
      desc: "Cursos de aprofundamento em diversas áreas da medicina com aplicabilidade em IA, marketing e conhecimento teórico aplicado à prática médica.",
      active: true,
    },
    {
      year: "Em breve",
      title: "Mentorias Médicas",
      desc: "Acompanhamento individualizado para direcionamento de carreira, residência, produção científica e posicionamento.",
      active: false,
    }
  ];

  return (
    <section id="roadmap" className="py-16 lg:py-24 bg-[#0A2540] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-300 block">
            ROADMAP & VISÃO DE FUTURO
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            O grupo de atualizações é o primeiro passo
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Nossa proposta é construir, junto com a comunidade de membros fundadores, um ecossistema completo de educação e ferramentas para a prática médica.
          </p>
        </div>

        {/* Roadmap Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {roadmapCards.map((card, idx) => {
            if (!card.active) {
              return (
                <div 
                  key={idx} 
                  className="p-6 rounded-2xl bg-[#06182B]/60 border border-blue-400/20 space-y-3 relative overflow-hidden group backdrop-blur-md"
                >
                  <div className="absolute inset-0 bg-[#0A2540]/80 backdrop-blur-sm z-10 flex items-center justify-center">
                    <span className="px-4 py-2 rounded-xl bg-blue-500/20 text-blue-200 border border-blue-400/30 text-xs font-bold tracking-widest uppercase shadow-lg">
                      Em breve...
                    </span>
                  </div>

                  <div className="opacity-40 space-y-2">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-blue-900/60 text-blue-300 font-mono text-xs font-bold">
                      ROADMAP
                    </span>
                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              );
            }

            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#06182B] border border-blue-500/30 hover:border-blue-400/60 transition-all space-y-3 shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-blue-500/20 text-blue-300 border border-blue-500/30 font-mono text-xs font-bold">
                    {card.year}
                  </span>
                  <span className="text-[11px] text-slate-400 font-semibold uppercase">Planejado</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

        <p className="text-xs text-slate-400 text-left font-normal border-t border-blue-900/60 pt-6">
          * Os novos módulos serão lançados gradualmente conforme a comunidade evoluir. A assinatura atual refere-se ao acesso exclusivo ao grupo de atualizações médicas.
        </p>

      </div>
    </section>
  );
};
