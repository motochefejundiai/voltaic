import Link from 'next/link'
import Image from 'next/image'
import { socialMedia } from '@/constants/links'

const FOOTER_LINKS = [
  { label: 'Página Inicial', href: '/' },
  { label: 'Sobre Nós', href: '/#sobre' },
  { label: 'Motos', href: '/#modelos' },
  { label: 'Contato', href: '/#contato' }
]

function Footer() {
  return (
    <footer
      id="contato"
      className="bg-foreground border-t-4 border-primary text-input py-10"
    >
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          <nav
            aria-label="Footer Navigation Links"
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            {FOOTER_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-lg hover:text-primary transition-all focus:outline-none focus:ring-2 focus:ring-primary rounded"
              >
                {label}
              </Link>
            ))}
          </nav>
          <Image
            priority
            src="/logos/logo-white.png"
            alt="Voltaic Logo"
            width={220}
            height={120}
          />
          <div
            aria-label="Follow us on social media"
            className="flex justify-center md:justify-end gap-5"
          >
            {Object.values(socialMedia).map(({ name, icon, link, alt }) => (
              <Link
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${name} page`}
                className="group mt-2"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-primary rounded-full shadow-lg transition-transform transform group-hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary">
                  <Image src={icon} alt={alt} width={24} height={24} loading="lazy" />
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="text-center text-sm mt-6 opacity-70">
          © {new Date().getFullYear()} Voltaic. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer
