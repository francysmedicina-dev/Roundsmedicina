import React from 'react';
import { roundsConfig } from '../config/roundsConfig';
import { Check, MessageCircle, Send, Mail } from 'lucide-react';

export const ThankYouPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F6F9FC] text-slate-800 flex flex-col justify-between p-4 sm:p-6 lg:p-8 text-left">
      
      {/* Header */}
      <header className="max-w-4xl mx-auto w-full flex items-center justify-between py-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <img 
            src="/images/rounds-logo.png" 
            alt="Rounds Logo" 
            className="h-8 w-auto object-contain"
          />
          <span className="font-extrabold text-[#172033] text-base">{roundsConfig.brand.name}</span>
        </div>
        <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5">
          <Check className="w-3.5 h-3.5" /> Assinatura Confirmada
        </span>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto w-full py-12 space-y-8 my-auto">
        
        {/* Headline */}
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0055FF]">INSCRIÇÃO CONFIRMADA</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight">
            Seja bem-vindo ao Rounds
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Sua inscrição como <strong className="text-[#172033]">Membro Fundador</strong> foi confirmada com sucesso. O seu valor de <strong className="text-[#172033]">R$ 19,90/mês</strong> está garantido de forma contínua enquanto sua assinatura permanecer ativa.
          </p>
        </div>

        {/* Step-by-step Onboarding Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
          
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-700 border-b border-slate-100 pb-3">
            INSTRUÇÕES PARA LIBERAÇÃO DE ACESSO:
          </h2>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700">
            
            {/* Step 1 */}
            <div className="p-4 rounded-xl bg-[#F6F9FC] border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-[#0055FF] block">PASSO 01 · CANAL DE COMUNICAÇÃO</span>
              <h3 className="font-bold text-[#172033] text-sm">
                Entre no grupo fechado de atualizações
              </h3>
              <p className="text-slate-600 text-xs">
                Selecione abaixo o seu aplicativo de preferência para ingressar na transmissão oficial:
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <a 
                  href={roundsConfig.contact.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold tracking-wide transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> Acessar via WhatsApp
                </a>
                <a 
                  href={roundsConfig.contact.telegram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold tracking-wide transition-colors"
                >
                  <Send className="w-4 h-4" /> Acessar via Telegram
                </a>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-xl bg-[#F6F9FC] border border-slate-200 space-y-1">
              <span className="text-xs font-bold text-[#0055FF] block">PASSO 02 · CONFIRMAÇÃO POR E-MAIL</span>
              <h3 className="font-bold text-[#172033] text-sm">
                Verifique seu e-mail cadastrado
              </h3>
              <p className="text-slate-600 text-xs">
                Enviamos os comprovantes de contratação e os links de acesso para o e-mail informado no checkout.
              </p>
            </div>

          </div>

          {/* Support Note */}
          <div className="p-3 rounded-xl bg-[#F6F9FC] text-xs text-slate-600 flex items-center gap-2 border border-slate-200">
            <Mail className="w-4 h-4 text-[#0055FF] shrink-0" />
            <span>Suporte: <strong>{roundsConfig.contact.email}</strong></span>
          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto w-full text-xs text-slate-500 py-4 border-t border-slate-200">
        © {new Date().getFullYear()} {roundsConfig.brand.name}. Todos os direitos reservados.
      </footer>

    </div>
  );
};
