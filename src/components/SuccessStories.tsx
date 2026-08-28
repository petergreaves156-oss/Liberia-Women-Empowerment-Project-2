import { useState } from 'react';
import { Quote, MapPin, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { successStories } from '../data/lwepData';
import { Story } from '../types';

export default function SuccessStories() {
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const filteredStories = filterCategory === 'all'
    ? successStories
    : successStories.filter((s) => s.category === filterCategory);

  return (
    <section id="stories" className="py-16 sm:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Grassroots Impact & Testimonials
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 mt-2 font-['Outfit',sans-serif] tracking-tight">
              Voices of Change from the Communities
            </h2>
            <p className="text-sm sm:text-base text-stone-600 mt-2">
              Real experiences from women entrepreneurs, students, cooperative leaders, and male champions across Liberia.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 bg-stone-200/70 p-1 rounded-xl self-start md:self-auto">
            {[
              { id: 'all', label: 'All Stories' },
              { id: 'livelihood', label: 'Livelihoods' },
              { id: 'education', label: 'Girls Education' },
              { id: 'social_norms', label: 'Social Norms' },
              { id: 'vsla', label: 'VSLA Savings' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterCategory(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition cursor-pointer ${
                  filterCategory === tab.id
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredStories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-xs flex flex-col justify-between hover:shadow-md transition"
            >
              <div className="p-6 sm:p-8 space-y-4">
                {/* Header with Photo & Meta */}
                <div className="flex items-center gap-4">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-2xl object-cover border border-stone-200 shrink-0"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 font-['Outfit',sans-serif]">
                      {story.name}, <span className="text-stone-500 font-normal text-sm">{story.age} yrs</span>
                    </h3>
                    <div className="text-xs font-semibold text-emerald-800">
                      {story.role}
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-stone-500 mt-0.5">
                      <MapPin className="w-3 h-3 text-stone-400" />
                      <span>{story.county}</span>
                    </div>
                  </div>
                </div>

                {/* Quote Box */}
                <div className="relative pt-2">
                  <Quote className="w-8 h-8 text-emerald-100 absolute -top-1 -left-2 -z-0" />
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic relative z-10 font-serif">
                    "{story.quote}"
                  </p>
                </div>
              </div>

              {/* Impact Footer Banner */}
              <div className="bg-emerald-50/80 border-t border-emerald-100 px-6 py-3.5 flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="text-xs font-bold text-emerald-950">
                  Impact: <span className="font-normal text-emerald-900">{story.impact}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
