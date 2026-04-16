import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Como funciona o OhDelivery?',
    a: 'Informe seu endereço, escolha entre centenas de restaurantes e lojas parceiras, monte seu pedido e acompanhe a entrega em tempo real. O entregador leva até a sua porta em minutos.',
  },
  {
    q: 'Quais formas de pagamento são aceitas?',
    a: 'Você pode pagar com cartão de crédito, débito ou Pix diretamente pelo app. Tudo seguro e sem complicação.',
  },
  {
    q: 'Qual é o tempo médio de entrega?',
    a: 'O tempo médio de entrega é de aproximadamente 30 minutos, variando conforme a distância e o restaurante escolhido.',
  },
  {
    q: 'O OhDelivery atende minha cidade?',
    a: 'Estamos expandindo pelo Brasil. Acesse app.ohdelivery.com.br, informe seu endereço e veja as lojas disponíveis na sua região.',
  },
  {
    q: 'Como me cadastrar no OhDelivery?',
    a: 'Acesse app.ohdelivery.com.br e clique em Cadastrar. O processo é rápido e totalmente gratuito para clientes.',
  },
  {
    q: 'Quero cadastrar meu restaurante. Como faço?',
    a: 'Acesse parceiros.ohdelivery.com.br e cadastre sua loja. A taxa é de apenas 5% por pedido pago pelo app — sem mensalidade ou taxa de adesão.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="border-b border-[#f0f0f0] bg-[#fafafa] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block text-[12px] font-bold uppercase tracking-[0.16em] text-[#ff3600]">
            Dúvidas frequentes
          </span>
          <h2 className="text-[2rem] font-bold tracking-[-0.03em] sm:text-[2.4rem]">
            Perguntas frequentes
          </h2>
        </div>

        <div className="mx-auto max-w-3xl divide-y divide-[#ececec]">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                aria-expanded={open === i}
              >
                <span className="text-[16px] font-semibold text-[#1d1d1d]">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-[#ff3600] transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              {open === i && (
                <p className="pb-5 text-[15px] leading-[1.75] text-[#666]">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
