'use client';

import { useState, useEffect } from 'react';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consentGiven = localStorage.getItem('cookie-consent');
    if (!consentGiven) {
      setShowBanner(true);
    }
    // If consent exists, don't show anything - component will return null
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem('cookie-consent', 'true');
    localStorage.setItem('cookie-preferences', JSON.stringify(prefs));
    setShowBanner(false);
    setShowCustomize(false);

    // Trigger analytics if user accepted
    if (prefs.analytics && typeof window !== 'undefined') {
      // Future: Initialize Google Analytics here
      console.log('Analytics enabled');
    }
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
    };
    saveConsent(allAccepted);
  };

  const handleRejectNonEssential = () => {
    const onlyEssential = {
      essential: true,
      analytics: false,
      marketing: false,
    };
    saveConsent(onlyEssential);
  };

  const handleSaveCustom = () => {
    saveConsent(preferences);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <>
      {/* Main Cookie Banner */}
      {showBanner && (
        <div
          className="fixed bottom-6 left-6 z-50 animate-slide-up w-[90%] md:w-auto md:max-w-md max-h-[80vh] overflow-y-auto"
          role="dialog"
          aria-labelledby="cookie-banner-title"
          aria-describedby="cookie-banner-description"
        >
            <div className="bg-light-beige text-smoke-gray px-6 py-6 shadow-2xl rounded-lg border border-smoke-gray/10">
              {!showCustomize ? (
                // Main Banner Content
                <div>
                  <h3
                    id="cookie-banner-title"
                    className="text-sm font-bold mb-3 text-smoke-gray font-body"
                  >
                    Este site usa cookies
                  </h3>
                  <p
                    id="cookie-banner-description"
                    className="text-xs opacity-70 leading-relaxed font-body mb-5"
                  >
                    Utilizamos cookies para garantir o funcionamento do site e melhorar a sua experiência.{' '}
                    <button
                      onClick={() => setShowCustomize(true)}
                      className="underline hover:no-underline font-medium"
                      aria-label="Ver mais informações sobre cookies"
                    >
                      Política de Privacidade
                    </button>
                  </p>

                  <div className="flex gap-3 justify-end">
                    <button
                      onClick={handleRejectNonEssential}
                      className="px-5 py-2.5 text-xs font-body border border-smoke-gray/30 hover:border-smoke-gray transition text-smoke-gray rounded"
                      aria-label="Rejeitar cookies não essenciais"
                    >
                      Rejeitar
                    </button>
                    <button
                      onClick={handleAcceptAll}
                      className="px-5 py-2.5 text-xs font-body bg-smoke-gray text-light-beige font-semibold hover:bg-smoke-gray/90 transition rounded"
                      aria-label="Aceitar todos os cookies"
                    >
                      Aceitar
                    </button>
                  </div>
                </div>
              ) : (
                // Customize View
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-sm md:text-base font-bold text-smoke-gray font-body">
                      Preferências de Cookies
                    </h3>
                    <button
                      onClick={() => setShowCustomize(false)}
                      className="text-smoke-gray/60 hover:text-smoke-gray text-2xl"
                      aria-label="Fechar personalização"
                    >
                      ×
                    </button>
                  </div>

                  <div className="space-y-4 mb-6">
                    {/* Essential Cookies - Always enabled */}
                    <div className="flex items-start gap-4 pb-4 border-b border-smoke-gray/10">
                      <input
                        type="checkbox"
                        checked={true}
                        disabled
                        className="mt-1 w-5 h-5 cursor-not-allowed opacity-50"
                        aria-label="Cookies essenciais (sempre ativos)"
                      />
                      <div className="flex-1">
                        <h4 className="font-bold mb-1 text-sm font-body">Cookies Essenciais</h4>
                        <p className="text-xs opacity-70 font-body">
                          Necessários para o funcionamento básico do site. Não podem ser
                          desativados.
                        </p>
                      </div>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="flex items-start gap-4 pb-4 border-b border-smoke-gray/10">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) =>
                          setPreferences({ ...preferences, analytics: e.target.checked })
                        }
                        className="mt-1 w-5 h-5 cursor-pointer accent-mossy-green"
                        aria-label="Ativar cookies de análise"
                      />
                      <div className="flex-1">
                        <h4 className="font-bold mb-1 text-sm font-body">Cookies de Análise</h4>
                        <p className="text-xs opacity-70 font-body">
                          Ajudam-nos a compreender como os visitantes interagem com o site,
                          permitindo melhorar a experiência.
                        </p>
                      </div>
                    </div>

                    {/* Marketing Cookies */}
                    <div className="flex items-start gap-4">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={(e) =>
                          setPreferences({ ...preferences, marketing: e.target.checked })
                        }
                        className="mt-1 w-5 h-5 cursor-pointer accent-mossy-green"
                        aria-label="Ativar cookies de marketing"
                      />
                      <div className="flex-1">
                        <h4 className="font-bold mb-1 text-sm font-body">Cookies de Marketing</h4>
                        <p className="text-xs opacity-70 font-body">
                          Utilizados para apresentar conteúdo personalizado e relevante.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-end">
                    <button
                      onClick={() => setShowCustomize(false)}
                      className="px-6 py-2 text-xs font-body border border-smoke-gray/30 hover:border-smoke-gray transition text-smoke-gray"
                      aria-label="Cancelar personalização"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={handleSaveCustom}
                      className="px-6 py-2 text-xs font-body bg-mossy-green text-light-beige font-semibold hover:bg-mossy-green/90 transition"
                      aria-label="Guardar preferências de cookies"
                    >
                      Guardar Preferências
                    </button>
                  </div>
                </div>
              )}
            </div>
        </div>
      )}
    </>
  );
}
