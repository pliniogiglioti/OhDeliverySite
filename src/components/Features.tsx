import { Zap, Shield, Tag, Headphones, MapPin, Clock } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Entrega ultrarrápida',
    description: 'Parceiros próximos a você garantem entregas em tempo recorde.',
  },
  {
    icon: Shield,
    title: 'Pagamento seguro',
    description: 'Pague com cartão, Pix ou dinheiro. Seus dados sempre protegidos.',
  },
  {
    icon: Tag,
    title: 'Promoções exclusivas',
    description: 'Cupons e ofertas especiais toda semana para você economizar.',
  },
  {
    icon: MapPin,
    title: 'Rastreio em tempo real',
    description: 'Acompanhe seu pedido no mapa do preparo até a sua porta.',
  },
  {
    icon: Clock,
    title: 'Aberto quando você precisar',
    description: 'Lojas disponíveis de manhã cedo até a madrugada.',
  },
  {
    icon: Headphones,
    title: 'Suporte 24h',
    description: 'Algum problema? Nossa equipe está sempre pronta para ajudar.',
  },
]

export function Features() {
  return (
    <section className="border-b border-[#f0f0f0] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block text-[12px] font-bold uppercase tracking-[0.16em] text-[#ff3600]">
            Tudo em um só lugar
          </span>
          <h2 className="text-[2rem] font-bold tracking-[-0.03em] sm:text-[2.4rem]">
            Por que escolher o OhDelivery?
          </h2>
          <p className="mx-auto mt-4 max-w-[46ch] text-[16px] leading-[1.7] text-[#666]">
            Pensamos em cada detalhe para você ter a melhor experiência
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-[#e8e8e8] bg-white p-7 transition hover:border-[#ff3600]/30 hover:shadow-sm"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff1ee] text-[#ff3600]">
                <Icon size={20} />
              </div>
              <h3 className="mb-2 text-[16px] font-bold">{title}</h3>
              <p className="text-[14px] leading-[1.7] text-[#666]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
