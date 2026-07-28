import React from 'react';
import { roundsConfig } from '../../config/roundsConfig';

export const FoundersSection: React.FC = () => {
  const { drGustavo, francys } = roundsConfig.founders;

  return (
    <section id="fundadores" className="py-16 lg:py-24 border-b border-slate-800 bg-[#070E17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-3 mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-rounds-400">
            DIREÇÃO & LIDERANÇA
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
            Duas experiências complementares
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Experiência acadêmica, prática clínica, comunicação médica e tecnologia reunidas em um projeto contínuo.
          </p>
        </div>

        {/* Founders Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          
          {/* Dr. Gustavo Profile */}
          <div className="p-6 sm:p-8 rounded-md bg-slate-900/60 border border-slate-800 flex flex-col justify-between space-y-6 text-left">
            <div className="space-y-6">
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-slate-800">
                <img 
                  src={drGustavo.photo} 
                  alt={drGustavo.name} 
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-md object-cover object-center border border-slate-700 shrink-0"
                />
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-rounds-400 uppercase">Curadoria Científica & Leitura Crítica</span>
                  <h3 className="text-xl font-serif font-bold text-white">
                    {drGustavo.name}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {drGustavo.title}
                  </p>
                </div>
              </div>

              {/* Bio & Credentials List */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase text-slate-400 block tracking-wider">
                  TRAJETÓRIA ACADÊMICA & TÍTULOS:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {drGustavo.credentials.map((cred, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-rounds-400 font-mono text-xs">·</span>
                      <span>{cred}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 leading-relaxed italic font-serif">
              "{drGustavo.roleDescription}"
            </div>
          </div>

          {/* Francys de Luca Profile */}
          <div className="p-6 sm:p-8 rounded-md bg-slate-900/60 border border-slate-800 flex flex-col justify-between space-y-6 text-left">
            <div className="space-y-6">
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-slate-800">
                <img 
                  src={francys.photo} 
                  alt={francys.name} 
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-md object-cover object-center border border-slate-700 shrink-0"
                />
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-rounds-400 uppercase">Comunicação, Didática & Tecnologia</span>
                  <h3 className="text-xl font-serif font-bold text-white">
                    {francys.name}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {francys.title}
                  </p>
                </div>
              </div>

              {/* Bio & Credentials List */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase text-slate-400 block tracking-wider">
                  ATUAÇÃO PROFISSIONAL & COMUNICAÇÃO:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {francys.credentials.map((cred, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-rounds-400 font-mono text-xs">·</span>
                      <span>{cred}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 leading-relaxed italic font-serif">
              "{francys.roleDescription}"
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
