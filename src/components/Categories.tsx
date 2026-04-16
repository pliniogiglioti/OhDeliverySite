const APP_URL = 'https://app.ohdelivery.com.br'

const categories = [
  { emoji: '🍔', label: 'Lanches' },
  { emoji: '🍕', label: 'Pizza' },
  { emoji: '🍣', label: 'Japonesa' },
  { emoji: '🥗', label: 'Saudável' },
  { emoji: '🍗', label: 'Frango' },
  { emoji: '🌮', label: 'Mexicana' },
  { emoji: '🛒', label: 'Mercado' },
  { emoji: '💊', label: 'Farmácia' },
]

export function Categories() {
  return (
    <section id="categorias" className="border-b border-[#f0f0f0] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-[2rem] font-bold tracking-[-0.03em] sm:text-[2.4rem]">
            O que você quer pedir?
          </h2>
          <p className="mx-auto mt-4 max-w-[46ch] text-[16px] leading-[1.7] text-[#666]">
            Escolha entre dezenas de categorias disponíveis na sua região
          </p>
        </div>

        <div className="grid grid-cols-4 gap-4 sm:grid-cols-8">
          {categories.map((cat) => (
            <a
              key={cat.label}
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 rounded-2xl border border-[#e8e8e8] bg-white p-4 transition hover:border-[#ff3600]/30 hover:shadow-sm"
            >
              <span className="text-3xl transition group-hover:scale-110">{cat.emoji}</span>
              <span className="text-[12px] font-semibold text-[#444] text-center">{cat.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
