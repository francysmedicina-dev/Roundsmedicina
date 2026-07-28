export interface RoundsConfig {
  brand: {
    name: string;
    tagline: string;
    description: string;
  };
  pricing: {
    founderPrice: number;
    regularPrice: number;
    founderLimit: number;
    founderSpotsUsed: number | null; // null if live integration not available
    founderPriceMaintainedWhileActive: boolean;
    founderOfferActive: boolean;
  };
  checkout: {
    founderCheckoutUrl: string;
    regularCheckoutUrl: string;
  };
  subscription: {
    billingFrequency: string;
    cancellationPolicy: string;
    reactivationUsesCurrentPrice: boolean;
    priceAdjustmentPolicy: string;
  };
  community: {
    platform: string;
    publicationFrequency: string;
    accessInstructions: string;
  };
  contact: {
    email: string;
    whatsapp: string;
    telegram: string;
    instagram: string;
  };
  company: {
    legalName: string;
    cnpj: string;
    responsible: string;
  };
  founders: {
    drGustavo: {
      name: string;
      title: string;
      photo: string;
      credentials: string[];
      roleDescription: string;
    };
    francys: {
      name: string;
      title: string;
      photo: string;
      credentials: string[];
      roleDescription: string;
    };
  };
}
