import { RoundsConfig } from '../types/rounds';

/**
 * =========================================================================
 * 🚀 CONFIGURAÇÃO CENTRAL DE LINKS E DADOS DA LANDING PAGE ROUNDS
 * =========================================================================
 * 
 * PARA ALTERAR OS LINKS DE CHECKOUT E CONTATO:
 * Edite os campos abaixo na seção 'checkout' e 'contact'.
 * Todos os botões e chamadas do site serão atualizados automaticamente!
 */
export const roundsConfig: RoundsConfig = {
  brand: {
    name: "Rounds",
    tagline: "Trazendo Medicina em tempo real.",
    description: "Um grupo de curadoria e atualização médica, entregue onde você já está.",
  },

  pricing: {
    founderPrice: 19.90,
    regularPrice: 29.90,
    founderLimit: 50,
    founderSpotsUsed: null,
    founderPriceMaintainedWhileActive: true,
    founderOfferActive: true,
  },

  // 🔗 LINKS DE CHECKOUT (ALTERE AQUI OS LINKS DE PAGAMENTO HOTMART/KIWIFY/EDUZZ)
  checkout: {
    // Link do Checkout de Membro Fundador (R$ 19,90/mês)
    founderCheckoutUrl: "https://pay.hotmart.com/checkout_membro_fundador_1990_placeholder",
    
    // Link do Checkout Regular (R$ 29,90/mês - pós 50 vagas)
    regularCheckoutUrl: "https://pay.hotmart.com/checkout_regular_2990_placeholder",
  },

  subscription: {
    billingFrequency: "mensal",
    cancellationPolicy: "Assinatura mensal sem fidelidade. O cancelamento pode ser efetuado a qualquer momento direto na plataforma de pagamento ou via suporte por e-mail.",
    reactivationUsesCurrentPrice: true,
    priceAdjustmentPolicy: "O valor de R$ 19,90/mês é mantido continuamente enquanto a assinatura de membro fundador permanecer ativa e com pagamentos em dia.",
  },

  community: {
    platform: "WhatsApp e Telegram",
    publicationFrequency: "com artigos, diretrizes e questões",
    accessInstructions: "O acesso ao grupo privado é liberado imediatamente após a confirmação do pagamento via e-mail e página de obrigado.",
  },

  // 📲 LINKS DE CONTATO E GRUPOS (ALTERE AQUI SEUS LINKS DE WHATSAPP / TELEGRAM / E-MAIL)
  contact: {
    email: "roundsmedicina@gmail.com",
    whatsapp: "https://chat.whatsapp.com/SEU_LINK_DO_GRUPO_WHATSAPP",
    telegram: "https://t.me/SEU_CANAL_TELEGRAM",
    instagram: "https://instagram.com/roundsmedicina",
  },

  company: {
    legalName: "Rounds Educação Médica LTDA",
    cnpj: "00.000.000/0001-00",
    responsible: "Dr. Gustavo Lenci Marques & Francys de Luca",
  },

  founders: {
    drGustavo: {
      name: "Dr. Gustavo Lenci Marques",
      title: "Cardiologista, Prof. Universitário e Pesquisador",
      photo: "/images/dr-gustavo.jpg",
      credentials: [
        "Médico especialista em Cardiologia e Clínica Médica",
        "Mestre e Doutor em Medicina Interna",
        "Pós-Doutor em Ciências da Saúde",
        "Título de Especialista pela Sociedade Brasileira de Cardiologia (SBC)",
        "Primeiro brasileiro a obter o CCK (Certificado de Conhecimento Avançado em Cardiologia)",
        "Fellow do American College of Cardiology (FACC)",
        "Professor da UFPR e da PUCPR"
      ],
      roleDescription: "Atua na curadoria científica e análise crítica dos artigos e evidências, conectando a literatura de alto impacto com a prática clínica."
    },
    francys: {
      name: "Francys de Luca",
      title: "Médico, Residente de Clínica Médica e Comunicador",
      photo: "/images/francys-deluca.jpg",
      credentials: [
        "Médico formado pela PUCPR",
        "Residente de Clínica Médica no Hospital Universitário Cajuru",
        "Instrutor de ACLS (Advanced Cardiovascular Life Support)",
        "Criador de conteúdo médico com +100 mil seguidores",
        "Pesquisador em Inteligência Artificial aplicada à Medicina",
        "Fundador do Prescrevendo.ai"
      ],
      roleDescription: "Atua na didática, tecnologia e interação da comunidade, transformando evidências complexas em atualizações dinâmicas e acessíveis."
    }
  }
};
