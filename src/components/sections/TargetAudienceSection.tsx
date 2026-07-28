import React from 'react';
import { Badge } from '../ui/Badge';
import { Check, X, ShieldAlert } from 'lucide-react';

export const TargetAudienceSection: React.FC = () => {
  const forWho = [
    "Médicos que desejam acompanhar novas evidências de forma prática",
    "Residentes de Medicina que buscam qualificar suas discussões de caso",
    "Estudantes de Medicina em fase de internato e preparação",
    "Profissionais que prestam exames de residência ou título de especialista",
    "Médicos com rotinas intensas e pouco tempo para busca ativa na literatura",
    "Profissionais que valorizam Medicina Baseada em Evidências e análise crítica"
  ];

  const notForWho = [
    "Pessoas em busca de promessas milagrosas ou atalhos de aprovação",
    "Quem procura respostas individuais e imediatas para consultas de pacientes",
    "Quem busca uma substituição definitiva de livros-texto, diretrizes e preceptoria",
    "Quem deseja prescrições ou aconselhamento médico individualizado"
  ];

  return (
    <section className="py-20 bg-slate-950 border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <Badge variant="primary">Perfil da Comunidade</Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Para quem é o <span className="text-gradient-blue">Rounds</span>?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Construído para profissionais e estudantes comprometidos com o rigor científico e o aprimoramento constante.
          </p>
        </div>

        {/* Two Columns Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* YES Column */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-emerald-500/20 space-y-6 text-left shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold">
                <Check className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">O Rounds É recomendado para você que:</h3>
                <p className="text-xs text-slate-400">Desenvolvido para transformar sua rotina de atualização</p>
              </div>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              {forWho.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* NO Column */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-rose-500/20 space-y-6 text-left shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/30 flex items-center justify-center font-bold">
                <X className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">O Rounds NÃO é para você que:</h3>
                <p className="text-xs text-slate-400">Transparência e alinhamento de expectativas desde o início</p>
              </div>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              {notForWho.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Mandatory Educational Disclaimer */}
        <div className="mt-10 p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-4 text-left max-w-4xl mx-auto">
          <ShieldAlert className="w-6 h-6 text-amber-400 shrink-0 hidden sm:block" />
          <p className="text-xs text-slate-400 leading-relaxed">
            <strong className="text-slate-200">Aviso ético:</strong> O Rounds possui finalidade educacional e de curadoria científica. O conteúdo enviado não substitui a leitura integral das fontes originais, livros-texto, preceptoria médica ou a avaliação clínica individual de pacientes.
          </p>
        </div>

      </div>
    </section>
  );
};
