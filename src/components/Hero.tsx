import { ArrowRight, MapPin, Sparkles, Building2, CheckCircle2 } from 'lucide-react';
import { projectImages } from '../data/lwepData';

interface HeroProps {
  onExploreComponents: () => void;
  onOpenGrantCalculator: () => void;
}

export default function Hero({ onExploreComponents, onOpenGrantCalculator }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-900 via-stone-900 to-stone-950 text-white pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Background Subtle Pattern & Lighting */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & Action CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* National Initiative Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>National Flagship Initiative (2022–2027)</span>
              <span className="text-emerald-500/60 hidden sm:inline">•</span>
              <span className="text-stone-300 hidden sm:inline">World Bank IDA Supported ($44.6M)</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12] font-['Outfit',sans-serif] text-white">
              Empowering Liberian Women & Girls for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">Resilient Futures</span>
            </h1>

            <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl font-normal">
              Implemented by the <strong className="text-white font-semibold">Ministry of Gender, Children and Social Protection (MGCSP)</strong>, the Liberia Women Empowerment Project (LWEP) unlocks socioeconomic potential for over <strong className="text-emerald-300 font-semibold">267,200 women and adolescent girls</strong> across 6 targeted counties through enterprise grants, positive social norms, health & education access, and institutional reform.
            </p>

            {/* Pillar highlights bullet pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 bg-stone-800/60 border border-stone-700/60 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-stone-200 font-medium">36,000+ Women Business Grants</span>
              </div>
              <div className="flex items-center gap-2.5 bg-stone-800/60 border border-stone-700/60 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-stone-200 font-medium">SASA! Together Anti-GBV Community Drive</span>
              </div>
              <div className="flex items-center gap-2.5 bg-stone-800/60 border border-stone-700/60 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-stone-200 font-medium">Girls School Retention & Dignity Kits</span>
              </div>
              <div className="flex items-center gap-2.5 bg-stone-800/60 border border-stone-700/60 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-stone-200 font-medium">1,250+ Village Savings & Loan Groups</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onExploreComponents}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl transition shadow-lg shadow-emerald-900/30 flex items-center gap-2 text-sm cursor-pointer"
              >
                <span>Explore the 5 Components</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenGrantCalculator}
                className="bg-stone-800 hover:bg-stone-700 text-stone-100 border border-stone-600 font-bold px-5 py-3.5 rounded-xl transition flex items-center gap-2 text-sm cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Check Grant Criteria</span>
              </button>
            </div>

            {/* Ministry location micro-card */}
            <div className="flex items-center gap-3 pt-2 text-xs text-stone-400">
              <Building2 className="w-4 h-4 text-stone-400 shrink-0" />
              <span>Project Management Unit (PMU): Ministerial Complex, Congo Town, Monrovia, Liberia</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-3xl blur-md opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

              <div className="relative rounded-2xl overflow-hidden border border-stone-700/80 bg-stone-900 shadow-2xl">
                <img
                  src={projectImages.heroBanner}
                  alt="Liberian women entrepreneurs and community leaders empowered by LWEP"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                  referrerPolicy="no-referrer"
                />

                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent flex flex-col justify-end p-6">
                  <div className="space-y-1.5">
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-900/90 text-emerald-200 text-[11px] font-bold tracking-wide uppercase border border-emerald-600/40">
                      Community Transformation
                    </span>
                    <h3 className="text-lg font-bold text-white font-['Outfit',sans-serif]">
                      Grassroots Impact Across 6 Counties
                    </h3>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      Strengthening women-led enterprises in Bomi, Gbarpolu, Grand Cape Mount, Grand Gedeh, River Cess, and Rural Montserrado.
                    </p>
                  </div>

                  {/* Micro stats strip */}
                  <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-stone-800 text-center">
                    <div>
                      <div className="text-base font-extrabold text-emerald-400">6</div>
                      <div className="text-[10px] text-stone-400 uppercase font-semibold">Counties</div>
                    </div>
                    <div>
                      <div className="text-base font-extrabold text-amber-300">267K+</div>
                      <div className="text-[10px] text-stone-400 uppercase font-semibold">Reached</div>
                    </div>
                    <div>
                      <div className="text-base font-extrabold text-emerald-400">36K+</div>
                      <div className="text-[10px] text-stone-400 uppercase font-semibold">Grants</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
