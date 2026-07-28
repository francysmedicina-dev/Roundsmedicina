import React from 'react';
import { Badge } from '../ui/Badge';
import { Clock, Layers, AlertCircle, FileSearch } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problemPoints = [
    {
      icon: Clock,
      title: "Pouco tempo hábil no cotidiano",
      description: "Entre plantões, consultas, rotinas de enfermaria e estudos, sobra pouquíssimo tempo para pesquisar, ler e filtrar artigos na íntegra."
    },
    {
      icon: Layers,
      title: "Excesso e ruído de informação",
      description: "Milhares de estudos são publicados diariamente. Identificar o que realmente tem rigor científico e impacto na prática tornou-se um desafio constante."
    },
    {
      icon: AlertCircle,
      title: "Pegadinhas estatísticas vs. relevância clínica",
      description: "Um resultado 'estatisticamente significante' nem sempre significa benefício real ao paciente. Ler apenas o abstract pode induzir a condutas precipitadas."
    },
    {
      icon: FileSearch,
      title: "Diretrizes extensas e complexas",
      description: "Documentos de centenas de páginas dificultam a identificação rápida do que realmente mudou nas classes de recomendação e fluxogramas."
    }
  ];

  return (
    <section id="o-problema" className="py-20 bg-slate-950 border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <Badge variant="outline">O Desafio do Médico Moderno</Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            O problema não é a falta de informação. É saber o que realmente <span className="text-gradient-blue">merece sua atenção</span>.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Estar atualizado exige seleção rigorosa, leitura crítica e interpretação prática. Sem isso, a abundância de publicações gera sobrecarga em vez de segurança.
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {problemPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all hover:bg-slate-900/90 space-y-3 text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-rounds-500/10 text-rounds-400 border border-rounds-500/20 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Synthesis Highlight Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-rounds-950 to-slate-900 border border-rounds-500/20 text-center max-w-4xl mx-auto">
          <p className="text-sm sm:text-base text-slate-200 font-medium">
            💡 <strong className="text-white">O compromisso do Rounds:</strong> Filtrar o excesso de publicações diárias, extrair a essência metodológica e explicar com clareza o porquê de cada evidência importar (ou não) para a sua conduta.
          </p>
        </div>

      </div>
    </section>
  );
};
