import Icon, { IconNames } from '@/components/ui/icon'
import { scooterBenefits } from '@/constants/scooters'
import { memo } from 'react'

const BenefitItem = memo(function Item({
  icon,
  label,
  value
}: {
  icon: IconNames
  label: string
  value: string
}) {
  return (
    <li
      className="flex items-center gap-4 p-5 bg-card rounded-xl border border-primary/20 shadow-md transition-transform duration-300 hover:scale-105 focus-visible:scale-105 text-muted-foreground min-w-0 flex-1 max-w-sm"
      aria-label={`${label}: ${value}`}
    >
      <Icon name={icon} size={10} className="text-primary flex-shrink-0" />
      <div className="flex flex-col min-w-0">
        <span className="text-lg font-semibold text-foreground">{label}</span>
        <span className="text-sm text-muted-foreground leading-tight">{value}</span>
      </div>
    </li>
  )
})

function About() {
  return (
    <section
      id="sobre"
      className="relative px-10 py-16 pb-32 bg-gradient-to-b from-foreground from-50% to-background"
    >
      <div className="max-w-screen-2xl mx-auto flex flex-col items-center">
        <span className="text-black text-center font-light text-3xl mb-4 tracking-wide">
          INOVAÇÃO EM MOBILIDADE
        </span>
        <h1 className="text-6xl lg:text-7xl text-center text-primary font-bold mb-3">
          Voltaic Scooters
        </h1>
        <h2 className="text-xl lg:text-3xl text-black text-center max-w-3xl leading-snug mb-12">
          Tecnologia elétrica para um futuro sustentável.
          <br />
          Potência, eficiência e design em cada curva.
        </h2>
        <div className="flex flex-col gap-4 w-full max-w-6xl md:hidden">
          {scooterBenefits.slice(0, 6).map(benefit => (
            <BenefitItem
              key={benefit.label}
              icon={benefit.icon as IconNames}
              label={benefit.label}
              value={benefit.value}
            />
          ))}
        </div>
        <div className="hidden md:flex flex-col items-center gap-6 w-full max-w-6xl">
          <div className="flex justify-center gap-4 flex-wrap">
            {scooterBenefits.slice(0, 3).map(benefit => (
              <BenefitItem
                key={benefit.label}
                icon={benefit.icon as IconNames}
                label={benefit.label}
                value={benefit.value}
              />
            ))}
          </div>
          <div className="flex justify-center gap-4">
            {scooterBenefits.slice(3, 5).map(benefit => (
              <BenefitItem
                key={benefit.label}
                icon={benefit.icon as IconNames}
                label={benefit.label}
                value={benefit.value}
              />
            ))}
          </div>
          <div className="flex justify-center">
            {scooterBenefits.slice(5, 6).map(benefit => (
              <BenefitItem
                key={benefit.label}
                icon={benefit.icon as IconNames}
                label={benefit.label}
                value={benefit.value}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
