export interface PayloadImage {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface PayloadGlobal {
  id: string;
  [key: string]: any;
}

export interface HomePageGlobal extends PayloadGlobal {
  heroVideoUrl?: string;
  heroVideo?: PayloadImage;
  heroPlaceholder?: PayloadImage;
  heroFallbackImage?: PayloadImage;
  logo?: PayloadImage;
  introTitle?: string;
  introContent?: any;
  introLinkText?: string;
  introLinkUrl?: string;
  quoteText?: string;
  quoteIcon?: PayloadImage;
  juntaTeTitle?: string;
  juntaTeContent?: any;
  juntaTeImage?: PayloadImage;
  juntaTeLinkText?: string;
  juntaTeLinkUrl?: string;
  guardioesTitle?: string;
  guardioesContent?: any;
  guardioesImage?: PayloadImage;
  guardioesLinkText?: string;
  guardioesLinkUrl?: string;
  testimonialTitle?: string;
  testimonialBackgroundImage?: PayloadImage;
  testimonials?: Array<{
    quote: string;
    author: string;
  }>;
}

export interface FlorestaPageGlobal extends PayloadGlobal {
  heroImage?: PayloadImage;
  heroTitle?: string;
  forestSchoolTitle?: string;
  forestSchoolImages?: Array<{
    image: PayloadImage;
    alt: string;
  }>;
  forestSchoolContent?: any;
  sentirTitle?: string;
  features?: Array<{
    icon: PayloadImage;
    title: string;
    items: string[];
  }>;
  sessoesTitle?: string;
  sessoesIntro?: string;
  comoFuncionaStoryTitle?: string;
  comoFuncionaStoryContent?: any;
  comoFuncionaTitle?: string;
  ageInfo?: any;
  scheduleInfo?: any;
  locationInfo?: any;
  pricingInfo?: any;
  monthlyPacksInfo?: any;
  photoPacksInfo?: any;
  disclaimer?: any;
  inscricaoLink?: string;
  videoTitle?: string;
  videoUrl?: string;
}

export interface GuardioesPageGlobal extends PayloadGlobal {
  heroImage?: PayloadImage;
  heroTitle?: string;
  aboutTitle?: string;
  martaImage?: PayloadImage;
  pedroImage?: PayloadImage;
  martaBio?: any;
  pedroBio?: any;
  manifestoTitle?: string;
  manifestoImage?: PayloadImage;
  manifestoContentPart1?: any;
  manifestoQuote?: string;
  manifestoContentPart2?: any;
  differenceTitle?: string;
  differenceContent?: any;
  differenceImage?: PayloadImage;
  communityTitle?: string;
  communityImage?: PayloadImage;
}
