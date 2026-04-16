import { ChevronRight } from 'lucide-react'

const APP_URL = 'https://app.ohdelivery.com.br'

export function AppBanner() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-3xl bg-[#ff3600] px-10 py-16 text-center text-white">
          <h2 className="mx-auto max-w-[20ch] text-[2rem] font-bold leading-[1.1] tracking-[-0.03em] sm:text-[2.6rem]">
            Pronto para pedir?
          </h2>
          <p className="mx-auto mt-5 max-w-[46ch] text-[16px] leading-[1.75] text-white/80">
            Acesse o app pelo seu navegador e descubra as melhores opções perto de você agora mesmo.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[52px] items-center gap-2 rounded-xl bg-white px-8 text-[15px] font-bold text-[#ff3600] transition hover:brightness-95"
            >
              Acessar o app <ChevronRight size={16} />
            </a>
            <a
              href="https://parceiros.ohdelivery.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[52px] rounded-xl border border-white/40 px-8 text-[15px] font-semibold text-white transition hover:bg-white/10 flex items-center"
            >
              Seja parceiro
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
