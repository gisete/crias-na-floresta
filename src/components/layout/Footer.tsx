import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      className="pt-20 pb-12 px-6 md:px-12 border-t border-white/5"
      style={{ backgroundColor: 'var(--color-mossy-green)' }}
    >
      <div className="max-w-4xl mx-auto text-center text-[var(--color-light-beige)]">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/images/crias-na-floresta-logo.png"
            alt="Crias na Floresta"
            width={200}
            height={64}
            className="h-34 w-auto object-contain"
          />
        </div>

        {/* Email */}
        <div className="mb-2">
          <a
            href="mailto:criasnafloresta@gmail.com"
            className="text-sm font-light border-b border-transparent hover:border-[var(--color-light-beige)] transition"
          >
            criasnafloresta@gmail.com
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 text-lg mb-12">
          <a
            href="https://www.instagram.com/crias_na_floresta/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:scale-110 transition"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100092820843772"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:scale-110 transition"
          >
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </div>

        {/* Footer Links */}
        <div className="text-[10px] text-[var(--color-light-beige)]/50 font-light uppercase tracking-wider border-t border-white/10 pt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/legal/termos-e-condicoes"
            className="hover:text-[var(--color-light-beige)] transition"
          >
            Termos e Condições
          </a>
          <span className="hidden md:inline">|</span>
          <a
            href="/legal/politica-de-privacidade"
            className="hover:text-[var(--color-light-beige)] transition"
          >
            Política de Privacidade
          </a>
          <span className="hidden md:inline">|</span>
          <a
            href="/legal/politica-de-cookies"
            className="hover:text-[var(--color-light-beige)] transition"
          >
            Política de Cookies
          </a>
        </div>
      </div>
    </footer>
  );
}
