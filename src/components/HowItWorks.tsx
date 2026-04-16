const steps = [
  {
    step: '01',
    title: 'Informe seu endereço',
    description: 'Digite onde você está e veja as lojas disponíveis na sua região em segundos.',
  },
  {
    step: '02',
    title: 'Escolha e monte seu pedido',
    description: 'Navegue pelo cardápio, adicione itens e personalize do seu jeito.',
  },
  {
    step: '03',
    title: 'Acompanhe em tempo real',
    description: 'Veja o status do pedido e o entregador no mapa ao vivo.',
  },
  {
    step: '04',
    title: 'Receba e aproveite',
    description: 'Seu pedido chega fresquinho. Avalie e ganhe benefícios.',
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="border-b border-[#f0f0f0] bg-[#fafafa] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block text-[12px] font-bold uppercase tracking-[0.16em] text-[#ff3600]">
            Simples e rápido
          </span>
          <h2 className="text-[2rem] font-bold tracking-[-0.03em] sm:text-[2.4rem]">
            Como funciona
          </h2>
          <p className="mx-auto mt-4 max-w-[46ch] text-[16px] leading-[1.7] text-[#666]">
            Em poucos passos você recebe o que quiser sem sair de casa
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ step, title, description }) => (
            <div key={step} className="relative">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff1ee]">
                <span className="text-[1.1rem] font-black text-[#ff3600]">{step}</span>
              </div>
              <h3 className="mb-2 text-[18px] font-bold">{title}</h3>
              <p className="text-[15px] leading-[1.7] text-[#666]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
