import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const APP_URL = 'https://app.ohdelivery.com.br'

export function Navbar() {
  const [open, setOpen] = useState(false)

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#ececec] bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-[64px] max-w-6xl items-center justify-between gap-6 px-6">
        {/* Logo */}
        <a href="/">
          <img src="/logo.png" alt="OhDelivery" className="h-8 w-auto object-contain" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 text-[14px] font-medium text-[#555] md:flex">
          <button type="button" onClick={() => scrollTo('como-funciona')} className="transition hover:text-[#ff3600]">
            Como funciona
          </button>
          <button type="button" onClick={() => scrollTo('categorias')} className="transition hover:text-[#ff3600]">
            Categorias
          </button>
          <a
            href="https://parceiros.ohdelivery.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#ff3600]"
          >
            Seja parceiro
          </a>
        </nav>

        {/* CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="h-[38px] rounded-xl border border-[#d9d9d9] px-5 text-[14px] font-semibold text-[#303030] transition hover:border-[#ff3600] hover:text-[#ff3600] flex items-center"
          >
            Entrar
          </a>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="h-[38px] rounded-xl bg-[#ff3600] px-5 text-[14px] font-bold text-white transition hover:brightness-95 flex items-center"
          >
            Cadastrar
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-[#555] hover:bg-gray-100 transition"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#ececec] bg-white px-6 py-5 flex flex-col gap-4">
          <button type="button" onClick={() => scrollTo('como-funciona')} className="text-[14px] font-medium text-[#555] text-left">
            Como funciona
          </button>
          <button type="button" onClick={() => scrollTo('categorias')} className="text-[14px] font-medium text-[#555] text-left">
            Categorias
          </button>
          <a
            href="https://parceiros.ohdelivery.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] font-medium text-[#555]"
          >
            Seja parceiro
          </a>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="h-[44px] rounded-xl border border-[#d9d9d9] text-[14px] font-semibold text-[#303030] flex items-center justify-center"
          >
            Entrar
          </a>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="h-[44px] rounded-xl bg-[#ff3600] text-[14px] font-bold text-white flex items-center justify-center"
          >
            Cadastrar
          </a>
        </div>
      )}
    </header>
  )
}
