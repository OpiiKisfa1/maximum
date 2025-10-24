function App() {
  return (
    <div className="min-h-screen bg-black text-[#3fb3a9] font-mono">
      <div
        className="fixed top-0 left-0 w-full h-screen bg-cover bg-center opacity-30 blur-sm pointer-events-none"
        style={{
          backgroundImage: 'url(/download%20(2).png)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'scroll'
        }}
      ></div>

      <div className="relative z-10">
        <nav className="py-4 px-8 bg-black">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="text-xl font-bold">CTRA$H</div>
            <div className="flex gap-8 text-sm">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
              <a href="#tokenomics" className="hover:text-white transition-colors">Tokenomics</a>
              <a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a>
              <a href="#community" className="hover:text-white transition-colors">Community</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            </div>
          </div>
        </nav>

        <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-5xl mb-12">
          <div className="border border-[#3fb3a9] px-8 py-4 text-center">
            <div className="text-sm">Mint Address: So1aNaTokeNAddR3sS123abcXYZ</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl">
          <img
            src="/image_scaled_4x_pngcrushed.png"
            alt="CashTrash Mascot"
            className="w-96 h-96 pixelated"
          />

          <div className="text-left">
            <h1 className="text-7xl font-bold mb-6 tracking-tight">CashTrash</h1>
            <h2 className="text-3xl mb-8 text-[#3fb3a9]/80">The Memecoin Backed by Actual Trash</h2>
            <div className="space-y-4 text-lg">
              <p className="flex items-start gap-3">
                <span className="text-[#3fb3a9] font-bold">1.</span>
                <span>Collect plastic bottles.</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-[#3fb3a9] font-bold">2.</span>
                <span>Deliver them at our points.</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-[#3fb3a9] font-bold">3.</span>
                <span>Earn CTRA$H.</span>
              </p>
              <p className="mt-6 text-[#3fb3a9]/80">Turn real-world recycling into on-chain degen gains.</p>
            </div>
          </div>
        </div>
        </div>

        <section id="how-it-works" className="min-h-screen bg-black py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-12">How It Works</h2>
          </div>
        </section>

        <footer className="py-6 px-8 bg-black">
          <div className="max-w-7xl mx-auto text-center text-xs text-[#3fb3a9]/60">
            <p>DISCLAIMER: CashTrash is a concept project. This is not financial advice. Cryptocurrency investments carry risk. Do not invest more than you can afford to lose. DYOR.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
