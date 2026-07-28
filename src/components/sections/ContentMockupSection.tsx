import React from 'react';
import { Badge } from '../ui/Badge';
import { ExternalLink } from 'lucide-react';

export const ContentMockupSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 border-b border-slate-200/80 bg-[#F0F7FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-3 mb-10">
          <span className="text-xs font-bold text-[#0055FF] uppercase tracking-wider block">
            DEMONSTRAÇÃO REAL
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172033] tracking-tight">
            Exemplo de Análise Enviada no Grupo
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Mensagem estruturada, objetiva e pronta para visualização no celular durante o seu dia.
          </p>
        </div>

        {/* Structured Briefing Sheet */}
        <div className="max-w-4xl mx-auto">
          <div className="p-6 sm:p-10 rounded-2xl bg-white border border-slate-200 space-y-6 text-left shadow-sm">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-2">
              <div className="flex items-center gap-3">
                <img 
                  src="/images/rounds-logo.png" 
                  alt="Rounds Logo" 
                  className="h-7 w-auto object-contain"
                />
                <span className="text-xs font-bold tracking-wider text-[#172033] uppercase">
                  ROUNDS / ARTIGO EM CONTEXTO #34
                </span>
              </div>
              <Badge variant="primary" className="text-[10px]">
                DEMONSTRAÇÃO ILUSTRATIVA
              </Badge>
            </div>

            {/* Title */}
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#0055FF] uppercase">Cardiologia & Clínica Médica</span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#172033] leading-snug">
                [Título do Estudo Clínico Investigado]
              </h3>
            </div>

            {/* Technical Briefing Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2 text-xs sm:text-sm text-slate-700">
              
              <div className="p-4 rounded-xl bg-[#F6F9FC] border border-slate-200/80 space-y-1.5">
                <span className="text-xs font-bold uppercase text-[#0055FF] block">01. PERGUNTA CLÍNICA</span>
                <p className="text-slate-700 leading-relaxed">
                  Avaliar se a intervenção [X] reduz desfechos cardiovasculares maiores em pacientes com insuficiência cardíaca e fração de ejeção preservada.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F6F9FC] border border-slate-200/80 space-y-1.5">
                <span className="text-xs font-bold uppercase text-[#0055FF] block">02. DESENHO DO ESTUDO</span>
                <p className="text-slate-700 leading-relaxed">
                  Ensaio clínico randomizado, duplo-cego, multicêntrico com N = 4.500 pacientes acompanhados por um período médio de 3 anos.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F6F9FC] border border-slate-200/80 space-y-1.5">
                <span className="text-xs font-bold uppercase text-[#0055FF] block">03. RESULTADO PRINCIPAL</span>
                <p className="text-slate-700 leading-relaxed">
                  Redução relativa de 18% no desfecho primário composto (HR 0.82; IC 95% 0.73-0.92; p = 0.001). NNT = 32 em 3 anos.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F6F9FC] border border-slate-200/80 space-y-1.5">
                <span className="text-xs font-bold uppercase text-[#0055FF] block">04. LIMITAÇÕES</span>
                <p className="text-slate-700 leading-relaxed">
                  Baixa representatividade de idosos &gt;80 anos e subanálise com seguimento curto para desfechos secundários de segurança renal.
                </p>
              </div>

            </div>

            {/* Specialist Comment Block */}
            <div className="p-5 rounded-xl bg-[#F6F9FC] border-l-4 border-[#0055FF] space-y-1 text-left">
              <span className="text-xs font-bold uppercase text-[#172033] block">
                COMENTÁRIO DO ESPECIALISTA (DR. GUSTAVO LENCI):
              </span>
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                "Embora o resultado seja estatisticamente robusto, a aplicabilidade imediata deve ser restrita aos pacientes que preenchem os critérios de inclusão estritos do estudo. Não extrapolar este benefício para pacientes com doença renal crônica avançada estágio 4/5."
              </p>
            </div>

            {/* Footer Reference */}
            <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 font-medium gap-2">
              <span className="flex items-center gap-1.5 text-slate-600">
                <ExternalLink className="w-3.5 h-3.5 text-[#0055FF]" />
                Referência original: NEJM / PubMed ID: 00000000
              </span>
              <span className="text-[11px] text-slate-500">
                ROUNDS CURATORIA MÉRICA © 2026
              </span>
            </div>

          </div>

          <p className="mt-3 text-xs text-slate-500 text-center">
            * Exemplo ilustrativo da estrutura de leitura crítica enviada aos membros da comunidade.
          </p>
        </div>

      </div>
    </section>
  );
};
