import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { roundsConfig } from '../../config/roundsConfig';

interface LegalModalProps {
  isOpen: boolean;
  type: 'terms' | 'privacy' | 'cancellation' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  const limit = roundsConfig.pricing.founderLimit;

  const contentMap = {
    terms: {
      title: "Termos de Uso",
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            Ao utilizar os serviços e ingressar nos canais de transmissão do <strong>{roundsConfig.brand.name}</strong>, você concorda expressamente com os seguintes termos:
          </p>
          <h4 className="font-bold text-[#172033]">1. Finalidade Exclusivamente Educacional</h4>
          <p>
            Todo o conteúdo (análises de artigos, diretrizes resumidas e questões de residência) possui caráter educacional e informativo. O conteúdo não constitui consulta médica, parecer técnico individualizado ou prescrição.
          </p>
          <h4 className="font-bold text-[#172033]">2. Direitos Autorais e Propriedade Intelectual</h4>
          <p>
            As análises e sínteses disponibilizadas são de propriedade autoral exclusiva dos fundadores. É vedado o compartilhamento não autorizado, reprodução pública ou revenda dos materiais.
          </p>
          <h4 className="font-bold text-[#172033]">3. Assinatura e Membro Fundador</h4>
          <p>
            A condição especial de Membro Fundador no valor de R$ 19,90/mês é válida para os primeiros {limit} assinantes e permanece ativa enquanto a assinatura for mantida sem interrupções.
          </p>
        </div>
      )
    },
    privacy: {
      title: "Política de Privacidade (LGPD)",
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            O <strong>{roundsConfig.brand.name}</strong> preza pela total proteção dos dados pessoais de seus membros, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
          </p>
          <h4 className="font-bold text-[#172033]">1. Coleta de Dados</h4>
          <p>
            Coletamos apenas as informações estritamente necessárias para liberar seu acesso e emitir os comprovantes: nome completo, endereço de e-mail e número de telefone/WhatsApp.
          </p>
          <h4 className="font-bold text-[#172033]">2. Uso das Informações</h4>
          <p>
            Seus dados são utilizados exclusivamente para operacionalizar o envio dos conteúdos, comunicações de suporte via <code>{roundsConfig.contact.email}</code> e liberação de canais de transmissão.
          </p>
          <h4 className="font-bold text-[#172033]">3. Não Compartilhamento</h4>
          <p>
            Não vendemos nem compartilhamos seus dados com terceiros para fins publicitários.
          </p>
        </div>
      )
    },
    cancellation: {
      title: "Política de Cancelamento",
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            Acreditamos na transparência e na liberdade do profissional da saúde.
          </p>
          <h4 className="font-bold text-[#172033]">1. Cancelamento a Qualquer Momento</h4>
          <p>
            A assinatura do Rounds é mensal e recorrente, <strong>sem taxa de fidelidade, carência ou multa</strong>. Você pode efetuar o cancelamento a qualquer momento diretamente na plataforma de pagamento ou solicitando suporte pelo e-mail <code>{roundsConfig.contact.email}</code>.
          </p>
          <h4 className="font-bold text-[#172033]">2. Regra de Reativação</h4>
          <p>
            Em caso de cancelamento da assinatura de Membro Fundador, o benefício da mensalidade especial de R$ 19,90 será encerrado. Caso deseje retornar futuramente, a contratação será realizada pelo valor vigente na ocasião.
          </p>
        </div>
      )
    }
  };

  const currentModal = contentMap[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200 relative text-left">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#0055FF]" />
            <h3 className="text-lg font-bold text-[#172033]">
              {currentModal.title}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="max-h-[60vh] overflow-y-auto pr-2">
          {currentModal.body}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#0055FF] hover:bg-blue-700 text-white text-xs font-semibold tracking-wide transition-colors"
          >
            Entendido
          </button>
        </div>

      </div>
    </div>
  );
};
