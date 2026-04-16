import { ChevronRight, MapPin } from 'lucide-react'

const APP_URL = 'https://app.ohdelivery.com.br'

export function Hero() {
  return (
    <section className="border-b border-[#f0f0f0] bg-[#fafafa] py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        {/* Badge */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ff3600]/20 bg-[#fff1ee] px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-[#ff3600] animate-pulse" />
          <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#ff3600]">
            Entrega rápida na sua cidade
          </span>
        </div>

        <h1 className="mx-auto max-w-[18ch] text-[2.6rem] font-bold leading-[1.08] tracking-[-0.035em] sm:text-[3.6rem]">
          Comida boa,{' '}
          <span className="text-[#ff3600]">entregue rápido</span>{' '}
          na sua porta
        </h1>

        <p className="mx-auto mt-6 max-w-[52ch] text-[17px] leading-[1.75] text-[#666]">
          Restaurantes, mercados, farmácias e muito mais. Peça pelo app e receba em minutos onde você estiver.
        </p>

        {/* Input + CTA */}
        <div className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row">
          <div className="flex flex-1 items-center gap-3 rounded-xl border border-[#e0e0e0] bg-white px-4 py-3">
            <MapPin size={18} className="shrink-0 text-[#ff3600]" />
            <span className="text-[14px] text-[#aaa]">Digite seu endereço...</span>
          </div>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[52px] items-center justify-center gap-2 rounded-xl bg-[#ff3600] px-8 text-[15px] font-bold text-white transition hover:brightness-95 whitespace-nowrap"
          >
            Buscar lojas <ChevronRight size={16} />
          </a>
        </div>


      </div>
    </section>
  )
}
