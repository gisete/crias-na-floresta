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
  const [showPreferencesButton, setShowPreferencesButton] = useState(false);
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
    } else {
      setShowPreferencesButton(true);
      // Load saved preferences
      const savedPrefs = localStorage.getItem('cookie-preferences');
      if (savedPrefs) {
        setPreferences(JSON.parse(savedPrefs));
      }
    }
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem('cookie-consent', 'true');
    localStorage.setItem('cookie-preferences', JSON.stringify(prefs));
    setShowBanner(false);
    setShowCustomize(false);
    setShowPreferencesButton(true);

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

  const handleReopenPreferences = () => {
    setShowPreferencesButton(false);
    setShowBanner(true);
  };

  if (!showBanner && !showPreferencesButton) {
    return null;
  }

  return (
    <>
      {/* Main Cookie Banner */}
      {showBanner && (
        <div
          className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up"
          role="dialog"
          aria-labelledby="cookie-banner-title"
          aria-describedby="cookie-banner-description"
        >
          <div className="bg-light-beige/95 backdrop-blur-sm text-smoke-gray px-6 py-6 md:px-8 md:py-8 shadow-2xl border-t border-smoke-gray/10">
            <div className="max-w-6xl mx-auto">
              {!showCustomize ? (
                // Main Banner Content
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1">
                    <h3
                      id="cookie-banner-title"
                      className="text-sm md:text-base font-bold mb-2 text-smoke-gray font-body"
                    >
                      Este site usa cookies
                    </h3>
                    <p
                      id="cookie-banner-description"
                      className="text-xs md:text-sm opacity-80 leading-relaxed font-body"
                    >
                      Utilizamos cookies essenciais para garantir o funcionamento do site e cookies
                      opcionais para melhorar a sua experiência. Pode aceitar todos os cookies ou
                      personalizar as suas preferências.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 md:flex-shrink-0">
                    <button
                      onClick={() => setShowCustomize(true)}
                      className="px-4 py-2 text-xs font-body border border-smoke-gray/30 hover:border-smoke-gray transition text-smoke-gray whitespace-nowrap"
                      aria-label="Personalizar preferências de cookies"
                    >
                      Personalizar
                    </button>
                    <button
                      onClick={handleRejectNonEssential}
                      className="px-4 py-2 text-xs font-body border border-smoke-gray/30 hover:border-smoke-gray transition text-smoke-gray whitespace-nowrap"
                      aria-label="Rejeitar cookies não essenciais"
                    >
                      Rejeitar Não Essenciais
                    </button>
                    <button
                      onClick={handleAcceptAll}
                      className="px-6 py-2 text-xs font-body bg-mossy-green text-light-beige font-semibold hover:bg-mossy-green/90 transition whitespace-nowrap"
                      aria-label="Aceitar todos os cookies"
                    >
                      Aceitar Todos
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
        </div>
      )}

      {/* Preferences Button (after initial choice) */}
      {showPreferencesButton && (
        <button
          onClick={handleReopenPreferences}
          className="fixed bottom-6 right-6 z-40 bg-light-beige text-smoke-gray p-3 rounded-full shadow-lg border border-smoke-gray/20 hover:bg-white hover:border-smoke-gray/40 transition-all hover:scale-110"
          aria-label="Abrir preferências de cookies"
          title="Preferências de cookies"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      )}
    </>
  );
}
