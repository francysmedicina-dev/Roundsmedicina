import React from 'react';
import { roundsConfig } from '../../config/roundsConfig';

export const CuradoriaSection: React.FC = () => {
  const { drGustavo, francys } = roundsConfig.founders;

  const pillars = [
    { title: "SELEÇÃO", desc: "Filtragem das publicações de alto impacto entre milhares de estudos diários." },
    { title: "ANÁLISE CRÍTICA", desc: "Avaliação do rigor metodológico, risco de viés e desfechos estatísticos." },
    { title: "CONTEXTO", desc: "Comparação com diretrizes vigentes e consensos das sociedades médicas." },
    { title: "APLICABILIDADE", desc: "Definição do impacto direto na assistência e tomada de decisão beira-leito." }
  ];

  return (
    <>
      {/* FULL-WIDTH EDGE-TO-EDGE DARK BLUE SECTION BANNER: CURADORIA & DIREÇÃO */}
      <section id="curadoria" className="py-16 lg:py-24 bg-[#0A2540] text-white border-y border-blue-900/60 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
          
          {/* Header & Intro */}
          <div className="max-w-4xl space-y-3">
            <span className="text-xs font-bold text-blue-300 uppercase tracking-wider block">
              CURADORIA & DIREÇÃO
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Experiência acadêmica, comunicação médica e tecnologia reunidas em um mesmo projeto.
            </h2>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal pt-1">
              O Rounds combina curadoria científica, experiência acadêmica, prática clínica, comunicação médica e tecnologia para transformar novas evidências em conteúdo claro e aplicável.
            </p>
          </div>

          {/* Curation Emphasis Block & 4 Pillars */}
          <div className="pt-8 border-t border-blue-900/80 space-y-8">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
                O PAPEL CENTRAL DA CURADORIA
              </span>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                O volume de publicações médicas aumenta continuamente. O trabalho de curadoria está em identificar o que realmente merece atenção, analisar a qualidade da evidência e discutir onde aquele resultado se aplica na prática.
              </p>
            </div>

            {/* 4 Pillars Horizontal Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
              {pillars.map((pil, idx) => (
                <div key={idx} className="space-y-1.5 pb-4 border-b sm:border-b-0 sm:border-r border-blue-900/60 last:border-0 pr-4">
                  <span className="text-xs font-bold tracking-wider text-blue-400 block">
                    {pil.title}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pil.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* LIGHT SECTION: RESPONSÁVEIS PELO PROJETO */}
      <section className="py-16 lg:py-24 border-b border-slate-200/80 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-left">
          
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
            RESPONSÁVEIS PELO PROJETO
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left pt-2">
            
            {/* Dr. Gustavo Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <img 
                  src={drGustavo.photo} 
                  alt={drGustavo.name} 
                  className="w-20 h-20 rounded-xl object-cover border border-slate-200 shadow-sm shrink-0"
                />
                <div>
                  <h3 className="text-xl font-bold text-[#172033]">{drGustavo.name}</h3>
                  <span className="text-xs text-[#0055FF] font-semibold block">{drGustavo.title}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {drGustavo.roleDescription}
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Credenciais selecionadas:</span>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {drGustavo.credentials.map((cred, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#0055FF] font-bold">·</span>
                      <span>{cred}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Francys Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <img 
                  src={francys.photo} 
                  alt={francys.name} 
                  className="w-20 h-20 rounded-xl object-cover border border-slate-200 shadow-sm shrink-0"
                />
                <div>
                  <h3 className="text-xl font-bold text-[#172033]">{francys.name}</h3>
                  <span className="text-xs text-[#0055FF] font-semibold block">{francys.title}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {francys.roleDescription}
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Credenciais selecionadas:</span>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {francys.credentials.map((cred, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#0055FF] font-bold">·</span>
                      <span>{cred}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};
