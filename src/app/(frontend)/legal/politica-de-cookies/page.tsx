import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crias Na Floresta | Política de Cookies',
  description: 'Política de Cookies da Crias na Floresta',
};

export default function PoliticaDeCookies() {
  return (
    <div>
      {/* Simple Hero with Dark Green Background */}
      <section className="bg-mossy-green text-light-beige py-32 md:py-40">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="!text-light-beige text-5xl md:text-6xl">Política de Cookies</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-32 px-6 bg-light-beige">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-base leading-relaxed text-smoke-gray font-light">
            <p>
              Esta Política de Cookies explica como a Crias na Floresta usa cookies e tecnologias
              similares quando você visita nosso site.
            </p>

            <h2 className="text-3xl md:text-4xl text-fog-gray pt-8 pb-4">O que são cookies?</h2>

            <p>
              Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo quando
              você visita um site. Eles são amplamente utilizados para fazer com que os sites
              funcionem, ou funcionem de forma mais eficiente, bem como fornecer informações aos
              proprietários do site.
            </p>

            <h2 className="text-3xl md:text-4xl text-fog-gray pt-8 pb-4">
              Como usamos cookies?
            </h2>

            <p>Utilizamos cookies por diversos motivos, incluindo:</p>

            <div className="space-y-6 pl-4">
              <div>
                <h3 className="text-xl font-normal text-fog-gray mb-2">Cookies Essenciais:</h3>
                <p>
                  Esses cookies são necessários para que você possa navegar pelo site e usar seus
                  recursos, como aceder áreas seguras do site.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-normal text-fog-gray mb-2">Cookies de Desempenho:</h3>
                <p>
                  Utilizamos esses cookies para analisar como os visitantes usam o site e monitorar
                  a performance do site. Isso nos permite fornecer uma experiência de alta
                  qualidade, identificando e solucionando rapidamente quaisquer problemas que possam
                  surgir. Por exemplo, utilizamos o Google Analytics para nos ajudar a entender como
                  os visitantes interagem com o site.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-normal text-fog-gray mb-2">
                  Cookies de Funcionalidade:
                </h3>
                <p>
                  Esses cookies são usados para lembrar as escolhas que você fez, como suas
                  preferências de idioma, e personalizar sua experiência.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-normal text-fog-gray mb-2">Cookies de Publicidade:</h3>
                <p>
                  Esses cookies são usados para fornecer anúncios mais relevantes para você e seus
                  interesses. Eles também são usados para limitar o número de vezes que você vê um
                  anúncio, bem como para medir a eficácia das campanhas publicitárias.
                </p>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl text-fog-gray pt-8 pb-4">
              Como controlar cookies?
            </h2>

            <p>
              Você pode controlar e/ou excluir cookies conforme desejar. Você pode excluir todos os
              cookies que já estão em seu computador e você pode configurar a maioria dos
              navegadores para evitar que eles sejam colocados. No entanto, se você fizer isso,
              talvez precise ajustar manualmente algumas preferências sempre que visitar um site e
              alguns serviços e funcionalidades podem não funcionar.
            </p>

            <h2 className="text-3xl md:text-4xl text-fog-gray pt-8 pb-4">Contato</h2>

            <p>
              Se você tiver dúvidas sobre nossa Política de Cookies, entre em contato conosco
              através do seguinte endereço de e-mail:{' '}
              <a
                href="mailto:criasnafloresta@gmail.com"
                className="text-mossy-green hover:opacity-70 transition"
              >
                criasnafloresta@gmail.com
              </a>
              .
            </p>

            <h2 className="text-3xl md:text-4xl text-fog-gray pt-8 pb-4">
              Alterações nesta política
            </h2>

            <p>
              Podemos atualizar nossa Política de Cookies de tempos em tempos. Quaisquer alterações
              serão publicadas nesta página e, se as alterações forem significativas, forneceremos
              um aviso mais destacado (incluindo, para alguns serviços, notificação por e-mail das
              alterações na Política de Cookies).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
