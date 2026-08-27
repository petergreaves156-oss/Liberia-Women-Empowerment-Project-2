import { ReactNode } from 'react';
import { BadgeDollarSign, Users, MapPin, Store, PiggyBank } from 'lucide-react';
import { projectStats } from '../data/lwepData';

export default function KeyStats() {
  const iconMap: Record<string, ReactNode> = {
    BadgeDollarSign: <BadgeDollarSign className="w-6 h-6 text-emerald-700" />,
    Users: <Users className="w-6 h-6 text-teal-700" />,
    MapPin: <MapPin className="w-6 h-6 text-amber-700" />,
    Store: <Store className="w-6 h-6 text-indigo-700" />,
    PiggyBank: <PiggyBank className="w-6 h-6 text-rose-700" />,
  };

  return (
    <section className="relative -mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl border border-stone-200/80 p-6 sm:p-8">
        <div className="text-center mb-6">
          <span className="text-xs uppercase tracking-wider font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Measurable National Impact
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-2 font-['Outfit',sans-serif]">
            Key Performance Indicators & Project Reach
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {projectStats.map((stat, index) => (
            <div
              key={index}
              className="bg-stone-50/70 hover:bg-stone-50 border border-stone-200/70 hover:border-emerald-300 rounded-xl p-5 transition flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-white shadow-xs border border-stone-200 flex items-center justify-center">
                  {iconMap[stat.icon]}
                </div>
                <span className="text-[10px] font-bold text-stone-600 bg-stone-200/60 px-2 py-0.5 rounded">
                  2022-2027
                </span>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight font-['Outfit',sans-serif]">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-stone-700 mt-0.5">
                  {stat.label}
                </div>
                <p className="text-[11px] text-stone-600 mt-1 leading-snug">
                  {stat.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
