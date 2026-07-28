import React from 'react';
import { roundsConfig } from '../../config/roundsConfig';
import { Mail, MessageCircle, Send, Instagram } from 'lucide-react';

interface FooterProps {
  onOpenLegalModal?: (type: 'terms' | 'privacy' | 'cancellation') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegalModal }) => {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 text-xs py-12 px-4 sm:px-6 lg:px-8 text-left">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-200">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <img 
                src="/images/rounds-logo.png" 
                alt="Rounds Logo" 
                className="h-8 w-auto object-contain"
              />
              <span className="font-extrabold text-base text-[#172033]">{roundsConfig.brand.name}</span>
            </div>
            <p className="text-slate-600 max-w-md text-xs leading-relaxed">
              {roundsConfig.brand.description}
            </p>
            <div className="pt-1 flex items-center gap-3 text-slate-500">
              <a href={roundsConfig.contact.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors" title="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={roundsConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors" title="WhatsApp">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href={roundsConfig.contact.telegram} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors" title="Telegram">
                <Send className="w-4 h-4" />
              </a>
              <a href={`mailto:${roundsConfig.contact.email}`} className="hover:text-blue-600 transition-colors" title="E-mail">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#172033] block">Navegação</span>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li><a href="#curadoria" className="hover:text-blue-600 transition-colors">Curadoria & Liderança</a></li>
              <li><a href="#proposta" className="hover:text-blue-600 transition-colors">A Proposta da Comunidade</a></li>
              <li><a href="#roadmap" className="hover:text-blue-600 transition-colors">Roadmap de Futuro</a></li>
              <li><a href="#oferta" className="hover:text-blue-600 transition-colors">Membro Fundador</a></li>
              <li><a href="#faq" className="hover:text-blue-600 transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#172033] block">Informações Legais</span>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li>
                <button 
                  onClick={() => onOpenLegalModal && onOpenLegalModal('terms')} 
                  className="hover:text-blue-600 transition-colors text-left"
                >
                  Termos de Uso
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenLegalModal && onOpenLegalModal('privacy')} 
                  className="hover:text-blue-600 transition-colors text-left"
                >
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenLegalModal && onOpenLegalModal('cancellation')} 
                  className="hover:text-blue-600 transition-colors text-left"
                >
                  Política de Cancelamento
                </button>
              </li>
              <li>
                <a href={`mailto:${roundsConfig.contact.email}`} className="hover:text-blue-600 transition-colors">
                  Contato: {roundsConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mandatory Medical Disclaimer */}
        <div className="p-4 rounded-xl bg-[#F6F9FC] border border-slate-200 space-y-1 text-[11px] leading-relaxed text-slate-600">
          <strong className="text-[#172033] block font-bold uppercase">AVISO ÉTICO E INSTITUCIONAL:</strong>
          <p>
            Os conteúdos disponibilizados pelo Rounds possuem finalidade exclusivamente educacional, científica e informativa, não substituindo a avaliação clínica individual, a leitura integral das fontes originais ou a tomada de decisão por profissional habilitado. As informações apresentadas não constituem consulta médica, prescrição ou recomendação individual de tratamento.
          </p>
        </div>

        {/* Bottom Legal Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-medium">
          <div>
            © {new Date().getFullYear()} {roundsConfig.brand.name}. Todos os direitos reservados.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span>CNPJ: {roundsConfig.company.cnpj}</span>
            <span>{roundsConfig.company.legalName}</span>
            <span>Resp: {roundsConfig.company.responsible}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
