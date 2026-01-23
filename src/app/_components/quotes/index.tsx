'use client'

import { useState, useEffect, memo } from 'react'

const TOTAL_QUOTES = 9
const QUOTE_INTERVAL_MS = 5000

const quotes = [
  { text: 'Mobilidade sustentável com estilo!', author: 'Maria Santos' },
  {
    text: 'Desde que comecei a usar as scooters elétricas da Voltaic, minha rotina diária mudou completamente. Não só economizo dinheiro com combustível, como também contribuo para um meio ambiente mais limpo. Recomendo a todos!',
    author: 'João Silva'
  },
  {
    text: 'De Campinas a qualquer lugar, Voltaic leva você com eficiência e zero emissões!',
    author: 'Carlos Oliveira'
  },
  { text: 'Zero poluição, potência total!', author: 'Ana Pereira' },
  { text: 'Confiável e ecológico!', author: 'Fernanda Lima' },
  {
    text: 'Junte-se à revolução elétrica com as scooters Voltaic. Uma escolha inteligente para o seu dia a dia!',
    author: 'Paulo Rodrigues'
  },
  {
    text: 'Experimente o futuro do transporte elétrico com as scooters Voltaic. São confiáveis super confiáveis!',
    author: 'Roberto Costa'
  },
  { text: 'Ande verde com Voltaic!', author: 'Luciana Almeida' },
  {
    text: 'A satisfação do cliente é nossa prioridade na Voltaic. Sempre pronta para ajudar e oferecer o melhor!',
    author: 'Marcos Ferreira'
  }
]

function useRotatingQuotes(totalQuotes: number, intervalMs: number, step: number = 2) {
  const [quoteIndex, setQuoteIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex(prev => (prev + step) % totalQuotes)
    }, intervalMs)

    return () => clearInterval(interval)
  }, [totalQuotes, intervalMs, step])

  return quoteIndex
}

const QuoteText = memo(function Quote({
  index,
  className = ''
}: {
  index: number
  className?: string
}) {
  return (
    <div
      className={`relative w-full h-[400px] flex flex-col items-center justify-center p-6 ${className}`}
      aria-label={`Displaying quote ${index + 1}`}
    >
      <blockquote className="text-center text-3xl md:text-4xl font-semibold text-primary italic leading-relaxed mb-4">
        &ldquo;{quotes[index].text}&rdquo;
      </blockquote>
      <p className="text-xl font-medium text-primary">- {quotes[index].author}</p>
    </div>
  )
})

export default function QuoteSection() {
  const quoteIndex = useRotatingQuotes(TOTAL_QUOTES, QUOTE_INTERVAL_MS)
  const secondQuoteIndex = (quoteIndex + 1) % TOTAL_QUOTES

  return (
    <section
      className="p-5 z-[1] border-t-4 border-primary relative flex items-center justify-center"
      aria-labelledby="quotes-section"
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center h-auto">
          <QuoteText index={quoteIndex} />
          <QuoteText index={secondQuoteIndex} className="hidden lg:flex" />
        </div>
      </div>
    </section>
  )
}
