import React from 'react';

function App() {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroHeight = typeof window !== 'undefined' ? window.innerHeight : 1000;
  const maxParallax = heroHeight * 0.8;
  const parallaxOffset = Math.min(scrollY * 0.5, maxParallax);

  return (
    <div className="min-h-screen bg-black text-[#3fb3a9] font-mono">
      <nav className="py-4 px-8 bg-black relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xl font-bold">CTRA$H</div>
          <div className="flex flex-wrap gap-4 md:gap-8 text-sm justify-center">
            <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#tokenomics" className="hover:text-white transition-colors">Tokenomics</a>
            <a href="#community" className="hover:text-white transition-colors">Community</a>
          </div>
        </div>
      </nav>

        <div className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/download2.png)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            filter: 'blur(3px)',
            opacity: 0.3,
            transform: `translateY(${parallaxOffset}px)`,
          }}
        />
        <div className="w-full max-w-5xl mb-12 relative z-10">
          <div className="border border-[#3fb3a9] px-8 py-4 text-center">
            <div className="text-sm">Mint Address: So1aNaTokeNAddR3sS123abcXYZ</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl relative z-10">
          <img
            src="/mascot2.png"
            alt="CashTrash Mascot"
            className="w-96 h-96 pixelated"
          />

          <div className="text-left">
            <h1 className="text-7xl font-bold mb-6 tracking-tight text-white">CashTrash</h1>
            <h2 className="text-3xl mb-8 text-[#3fb3a9]">The Memecoin Backed by Actual Trash</h2>
            <div className="space-y-3 text-lg">
              <div className="flex items-center gap-3 bg-[#3fb3a9]/20 border border-[#3fb3a9] px-4 py-3">
                <span className="text-[#3fb3a9] font-bold text-xl">1.</span>
                <span className="text-white">Collect plastic bottles.</span>
              </div>
              <div className="flex items-center gap-3 bg-[#3fb3a9]/20 border border-[#3fb3a9] px-4 py-3">
                <span className="text-[#3fb3a9] font-bold text-xl">2.</span>
                <span className="text-white">Deliver them at our points.</span>
              </div>
              <div className="flex items-center gap-3 bg-[#3fb3a9]/20 border border-[#3fb3a9] px-4 py-3">
                <span className="text-[#3fb3a9] font-bold text-xl">3.</span>
                <span className="text-white">Earn CTRA$H.</span>
              </div>
              <p className="mt-6 text-[#3fb3a9] text-xl">Turn real-world recycling into on-chain degen gains.</p>
            </div>
          </div>
        </div>
        </div>

        <section id="how-it-works" className="min-h-screen bg-black py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-16">How It Works</h2>

            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Two Ways to Get CTRA$H:</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="border border-[#3fb3a9] p-8">
                <div className="text-4xl mb-4">1. Buy on Pump.fun 🚀</div>
                <p className="text-lg mb-6 text-[#3fb3a9]/80">
                  Ready to join the movement? Head over to Pump.fun and grab your tokens instantly.
                  Connect your wallet, swap your SOL, and you're part of the plastic-fighting revolution.
                </p>
                <button className="w-full bg-[#3fb3a9] text-black font-bold py-4 px-8 hover:bg-white transition-colors text-lg">
                  Buy Now on Pump.fun
                </button>
              </div>

              <div className="border border-[#3fb3a9] p-8">
                <div className="text-4xl mb-4">2. Recycle & Earn ♻️</div>
                <p className="text-lg mb-6 text-[#3fb3a9]/80">
                  Turn your empty bottles into crypto! Here's how easy it is:
                </p>
                <div className="space-y-4 text-left">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl font-bold">Step 1:</span>
                    <div>
                      <div className="font-bold text-lg">Find Bottle</div>
                      <div className="text-[#3fb3a9]/80">Gather your plastic bottles</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl font-bold">Step 2:</span>
                    <div>
                      <div className="font-bold text-lg">Find a Partner Location</div>
                      <div className="text-[#3fb3a9]/80">Locate a verified recycling drop-off point near you using our map</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl font-bold">Step 3:</span>
                    <div>
                      <div className="font-bold text-lg">Scan & Verify</div>
                      <div className="text-[#3fb3a9]/80">Scan your solana account</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl font-bold">Step 4:</span>
                    <div>
                      <div className="font-bold text-lg">Receive Tokens</div>
                      <div className="text-[#3fb3a9]/80">Tokens are instantly sent to your wallet. Each bottle = 100 CTRA$H tokens!</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold mb-8">We are all over the world.</h3>
              <div className="flex justify-center">
                <img
                  src="/locations.gif"
                  alt="Global Locations"
                  className="pixelated max-w-md w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="min-h-screen bg-black py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-16">About</h2>

            <div className="space-y-12">
              <div className="border border-[#3fb3a9] p-8">
                <h3 className="text-3xl font-bold mb-4 text-white">What is CashTrash?</h3>
                <p className="text-lg text-white">
                  CashTrash ($CTRASH) is the memecoin that's actually doing something good. We're turning plastic bottle recycling into crypto rewards. No complicated schemes, no BS—just recycle bottles, earn tokens.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="border border-[#3fb3a9] p-8">
                  <h3 className="text-3xl font-bold mb-4 text-white">The Problem</h3>
                  <p className="text-lg text-white">
                    Billions of plastic bottles end up in landfills and oceans every year. Recycling rates suck because there's no immediate incentive for regular people to bother.
                  </p>
                </div>

                <div className="border border-[#3fb3a9] p-8">
                  <h3 className="text-3xl font-bold mb-4 text-white">Our Solution</h3>
                  <p className="text-lg text-white">
                    We're making recycling profitable. Bring your bottles to our partner drop-off points, get instant $CTRASH tokens. It's that simple.
                  </p>
                </div>
              </div>

              <div className="border border-[#3fb3a9] p-8">
                <h3 className="text-3xl font-bold mb-6 text-white">Why CashTrash?</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-[#3fb3a9]">Real Environmental Impact</h4>
                    <p className="text-white">Every token earned = one less bottle in the ocean</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-[#3fb3a9]">Actual Utility</h4>
                    <p className="text-white">Not just another pump-and-dump. Real recycling = real value</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-[#3fb3a9]">Memecoin Energy</h4>
                    <p className="text-white">We're serious about the planet, but we know how to have fun</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-[#3fb3a9]">Community-Driven</h4>
                    <p className="text-white">Built by people who actually give a damn</p>
                  </div>
                </div>
              </div>

              <div className="border border-[#3fb3a9] p-8 bg-[#3fb3a9]/10">
                <h3 className="text-3xl font-bold mb-4 text-white">The Vision</h3>
                <p className="text-lg text-white">
                  Start with bottles. Expand to all recyclables. Build a global network where your trash literally becomes your treasure.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="tokenomics" className="min-h-screen bg-black py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-16">Tokenomics</h2>

            <div className="border border-[#3fb3a9] p-8 mb-12 bg-[#3fb3a9]/5">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <img src="/piechart.png" alt="Token Details" className="w-32 h-32 pixelated flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-6 text-white">Token Details</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-lg">
                    <div><span className="text-[#3fb3a9]">Token Name:</span> <span className="text-white">CashTrash</span></div>
                    <div><span className="text-[#3fb3a9]">Ticker:</span> <span className="text-white">CTRA$H</span></div>
                    <div><span className="text-[#3fb3a9]">Blockchain:</span> <span className="text-white">Solana</span></div>
                    <div><span className="text-[#3fb3a9]">Total Supply:</span> <span className="text-white">1,000,000,000 CTRA$H</span></div>
                    <div className="md:col-span-2"><span className="text-[#3fb3a9]">Contract Address:</span> <span className="text-white">So1aNaTokeNAddR3sS123abcXYZ</span></div>
                  </div>
                  <p className="text-white mt-4">
                    <span className="font-bold text-[#3fb3a9]">Launch Model:</span> Fair launch on Pump.fun with no presale, no VC allocation, and no team tokens. Pure community-driven from day one.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-[#3fb3a9] p-8 mb-12">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <img src="/bottlebag.png" alt="Recycling Rewards" className="w-32 h-32 pixelated flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4 text-white">Recycling Rewards</h3>
                  <div className="mb-6">
                    <h4 className="text-xl font-bold mb-2 text-[#3fb3a9]">Current Payout Rate:</h4>
                    <ul className="space-y-2 text-white">
                      <li>• 1 plastic bottle = 100 CTRA$H tokens</li>
                      <li>• Instant payout to your wallet</li>
                      <li>• Must be delivered to verified partner drop-off points</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-[#3fb3a9]">Dynamic Pricing Model:</h4>
                    <p className="text-white">
                      As CTRA$H grows in value, we adjust the payout rate to maintain sustainability. If token price increases significantly, you'll earn fewer tokens per bottle, but the dollar value remains reasonable. This ensures recycling stays profitable without creating unsustainable reward inflation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-[#3fb3a9] p-8 mb-12 bg-[#3fb3a9]/5">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <img src="/coinman.png" alt="Economic Engine" className="w-32 h-32 pixelated flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4 text-white">The Economic Engine</h3>
                  <div className="mb-6">
                    <h4 className="text-xl font-bold mb-2 text-[#3fb3a9]">Our 3% Creator Allocation</h4>
                    <p className="text-white mb-4">
                      When we launched on Pump.fun, we received approximately 3% of total supply as the standard creator fee. This bootstraps initial rewards but isn't nearly enough for long-term sustainability. That's where our revenue model kicks in.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-[#3fb3a9]">How We Fund Rewards:</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="font-bold text-[#3fb3a9] mb-1">1. Recycling Center Payments</div>
                        <p className="text-white">Plastic bottles have real market value. Our special partner drop-off locations pay us in SOL/fiat for the bottles you deliver. This isn't charity—recycling centers profit from processing plastic materials.</p>
                      </div>
                      <div>
                        <div className="font-bold text-[#3fb3a9] mb-1">2. Sponsor Contributions</div>
                        <p className="text-white">Eco-conscious brands fund the program as green marketing and carbon offset initiatives. These sponsors cover operational expenses and boost the reward pool, aligning their sustainability goals with measurable environmental impact.</p>
                      </div>
                      <div>
                        <div className="font-bold text-[#3fb3a9] mb-1">3. Market Buy Mechanism</div>
                        <p className="text-white">We take payments from recycling centers and sponsors, convert them to SOL, then purchase CTRA$H directly from the open market (Pump.fun/Raydium). This creates constant buy pressure supporting token value.</p>
                      </div>
                      <div>
                        <div className="font-bold text-[#3fb3a9] mb-1">4. Direct Distribution</div>
                        <p className="text-white">The tokens we bought from the market go straight to your wallet as recycling rewards. No minting, no dumping—only tokens purchased at market price.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-[#3fb3a9] p-8 mb-12">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <img src="/chart.png" alt="Token Flow" className="w-32 h-32 pixelated flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4 text-white">The Complete Token Flow</h3>
                  <div className="bg-[#3fb3a9]/10 border border-[#3fb3a9]/50 p-4 mb-4 text-center">
                    <p className="text-white text-lg font-mono">
                      You → Bottles → Partner Center → SOL Payment → Market Buy → Your Reward
                    </p>
                  </div>
                  <p className="text-white mb-3">This cycle creates:</p>
                  <ul className="space-y-2 text-white">
                    <li>✅ <span className="font-bold text-[#3fb3a9]">Constant buy pressure</span> - Every reward generates a market purchase</li>
                    <li>✅ <span className="font-bold text-[#3fb3a9]">Sustainable economics</span> - Funded by real revenue, not token emissions</li>
                    <li>✅ <span className="font-bold text-[#3fb3a9]">Environmental impact</span> - Actual plastic removed from waste streams</li>
                    <li>✅ <span className="font-bold text-[#3fb3a9]">Holder value</span> - Market buys support price stability and growth</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border border-[#3fb3a9] p-8 mb-12 bg-[#3fb3a9]/5">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <img src="/house.png" alt="Partner Centers" className="w-32 h-32 pixelated flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4 text-white">Why Special Partner Centers?</h3>
                  <p className="text-white mb-4">
                    Standard recycling centers won't participate in our token reward system. Our verified partners have exclusive agreements to:
                  </p>
                  <ul className="space-y-2 text-white mb-4">
                    <li>• Accept bottles from CTRA$H users with instant verification</li>
                    <li>• Pay competitive market rates for collected plastic</li>
                    <li>• Process transactions in real-time</li>
                    <li>• Provide the revenue stream that funds rewards</li>
                  </ul>
                  <p className="text-[#3fb3a9] font-bold">
                    You must use verified drop-off points because they're integrated into our payment infrastructure. Random recycling centers can't trigger token rewards.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="border border-[#3fb3a9] p-8">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <img src="/utility.png" alt="Token Utility" className="w-24 h-24 pixelated flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-white">Token Utility</h3>
                    <div className="mb-4">
                      <h4 className="text-lg font-bold mb-2 text-[#3fb3a9]">Current Use Cases:</h4>
                      <ul className="space-y-2 text-white">
                        <li>• Earn through recycling at partner locations</li>
                        <li>• Trade on Pump.fun and DEXs (Raydium, Jupiter)</li>
                        <li>• Hold as the recycling network expands and buy pressure compounds</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-[#3fb3a9]">Future Expansion:</h4>
                      <p className="text-white">
                        As our partner network grows, so does the revenue stream. More locations = more bottles = more market buys = stronger tokenomics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-[#3fb3a9] p-8">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <img src="/security.png" alt="Security & Transparency" className="w-24 h-24 pixelated flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-white">Security & Transparency</h3>
                    <ul className="space-y-2 text-white">
                      <li>• <span className="font-bold text-[#3fb3a9]">Fair launch</span> - 97% public supply via bonding curve</li>
                      <li>• <span className="font-bold text-[#3fb3a9]">3% creator fee</span> - Industry standard allocation for bootstrapping</li>
                      <li>• <span className="font-bold text-[#3fb3a9]">Automated liquidity</span> - Locked when graduated to Raydium</li>
                      <li>• <span className="font-bold text-[#3fb3a9]">On-chain verification</span> - All transactions visible on Solana</li>
                      <li>• <span className="font-bold text-[#3fb3a9]">Monthly reporting</span> - Bottles collected and tokens distributed published regularly</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-[#3fb3a9] p-8 bg-[#3fb3a9]/10">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <img src="/idea.png" alt="Why CTRA$H Is Different" className="w-32 h-32 pixelated flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4 text-white text-center md:text-left">Why CTRA$H Is Different</h3>
                  <p className="text-2xl font-bold mb-6 text-center md:text-left text-[#3fb3a9]">We don't dump tokens on you.</p>
                  <p className="text-white mb-6">
                    Traditional token projects pay rewards by inflating supply or dumping team allocations. We operate differently:
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <span className="text-[#3fb3a9] font-bold">1.</span>
                      <span className="text-white">Recycling centers and sponsors pay us in SOL (real revenue)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#3fb3a9] font-bold">2.</span>
                      <span className="text-white">We buy CTRA$H from the open market at current prices</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#3fb3a9] font-bold">3.</span>
                      <span className="text-white">Those purchased tokens become your recycling rewards</span>
                    </div>
                  </div>
                  <div className="bg-black border border-[#3fb3a9] p-4 text-center mb-6">
                    <p className="text-xl font-bold text-white">Every reward distributed = A market buy executed</p>
                  </div>
                  <p className="text-white text-center text-lg">
                    This isn't just another memecoin. It's a sustainable business model where environmental action generates revenue, revenue creates buy pressure, and buy pressure rewards both recyclers and holders.
                  </p>
                  <p className="text-[#3fb3a9] text-center text-xl font-bold mt-4">
                    The more bottles recycled, the more tokens purchased, the stronger the ecosystem grows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="community" className="min-h-screen bg-black py-20 px-8 flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8">Join the Community</h2>
            <p className="text-2xl mb-12 text-white">
              Be part of the movement. Connect with fellow trash collectors and stay updated on the latest developments.
            </p>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#3fb3a9] bg-[#3fb3a9]/20 hover:bg-[#3fb3a9]/30 transition-colors text-white font-bold text-xl"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              Follow us on Twitter
            </a>
          </div>
        </section>

      <footer className="py-6 px-8 bg-black">
        <div className="max-w-7xl mx-auto text-center text-xs text-[#3fb3a9]/60">
          <p>DISCLAIMER: CashTrash is a concept project. This is not financial advice. Cryptocurrency investments carry risk. Do not invest more than you can afford to lose. DYOR.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
