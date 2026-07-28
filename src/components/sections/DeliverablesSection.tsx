import React from 'react';

export const DeliverablesSection: React.FC = () => {
  const items = [
    {
      num: "01",
      title: "Artigos analisados",
      description: "Entenda a pergunta clínica, o método, os resultados estatísticos, as limitações metodológicas, o nível de evidência e a aplicabilidade beira-leito."
    },
    {
      num: "02",
      title: "Questões comentadas",
      description: "Revisão por metodologia ativa, com explicação detalhada do raciocínio diagnóstico, discussão das alternativas e revisão do conceito principal."
    },
    {
      num: "03",
      title: "Diretrizes em contexto",
      description: "Veja o que mudou nos consensos das principais sociedades, quais recomendações merecem atenção e como elas impactam a assistência."
    },
    {
      num: "04",
      title: "Participação na comunidade",
      description: "Os membros fundadores participam do direcionamento do Rounds, sugerindo artigos, temas de revisões clínicas e novos formatos de conteúdo."
    }
  ];

  return (
    <section id="conteudo" className="py-16 lg:py-24 border-b border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-3 mb-12">
          <span className="text-xs font-bold text-[#0055FF] uppercase tracking-wider block">
            ESTRUTURA DAS ENTREGAS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172033] tracking-tight">
            O que você recebe ao entrar para o Rounds
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Experiência didática, objetiva e com rigor científico no seu aplicativo de mensagens.
          </p>
        </div>

        {/* Numbered List with Fine Light Lines */}
        <div className="border-t border-slate-200">
          {items.map((item, idx) => (
            <div 
              key={idx}
              className="py-7 border-b border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-4 items-start hover:bg-slate-50/80 transition-colors px-2 rounded-lg"
            >
              <div className="md:col-span-1 text-xs font-bold text-[#0055FF]">
                [{item.num}]
              </div>

              <div className="md:col-span-4 text-left">
                <h3 className="text-lg font-bold text-[#172033]">
                  {item.title}
                </h3>
              </div>

              <div className="md:col-span-7 text-left">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
