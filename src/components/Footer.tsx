const APP_URL = 'https://app.ohdelivery.com.br'

export function Footer() {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-[#ececec] bg-[#fafafa]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div className="lg:col-span-1">
            <img src="/logo.png" alt="OhDelivery" className="mb-4 h-8 w-auto object-contain" />
            <p className="text-[14px] leading-[1.7] text-[#777]">
              Entrega rápida de comida, mercado e muito mais na sua cidade.
            </p>
          </div>

          {/* Produto */}
          <div>
            <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.1em] text-[#333]">Produto</p>
            <ul className="space-y-3 text-[14px] text-[#666]">
              <li><button type="button" onClick={() => scrollTo('como-funciona')} className="transition hover:text-[#ff3600]">Como funciona</button></li>
              <li><button type="button" onClick={() => scrollTo('categorias')} className="transition hover:text-[#ff3600]">Categorias</button></li>
              <li><a href={APP_URL} target="_blank" rel="noopener noreferrer" className="transition hover:text-[#ff3600]">Acessar o app</a></li>
            </ul>
          </div>

          {/* Parceiros */}
          <div>
            <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.1em] text-[#333]">Parceiros</p>
            <ul className="space-y-3 text-[14px] text-[#666]">
              <li><a href="https://parceiros.ohdelivery.com.br" target="_blank" rel="noopener noreferrer" className="transition hover:text-[#ff3600]">Cadastre sua loja</a></li>
              <li><a href="https://parceiros.ohdelivery.com.br" target="_blank" rel="noopener noreferrer" className="transition hover:text-[#ff3600]">Portal do parceiro</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.1em] text-[#333]">Legal</p>
            <ul className="space-y-3 text-[14px] text-[#666]">
              <li><a href="#" className="transition hover:text-[#ff3600]">Termos de uso</a></li>
              <li><a href="#" className="transition hover:text-[#ff3600]">Política de privacidade</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[#e8e8e8] pt-8 sm:flex-row">
          <p className="text-[13px] text-[#aaa]">© {new Date().getFullYear()} Oh Delivery. Todos os direitos reservados.</p>
          <p className="text-[13px] text-[#ccc]">CNPJ 62.622.102/0001-04</p>
        </div>
      </div>
    </footer>
  )
}
