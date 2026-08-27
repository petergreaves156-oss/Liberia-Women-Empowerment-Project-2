import { useState, ReactNode } from 'react';
import { CheckCircle, ArrowRight, Activity, BookOpen, Coins, Landmark, Gauge } from 'lucide-react';
import { projectComponents } from '../data/lwepData';
import { ProjectComponent } from '../types';

export default function ComponentsShowcase() {
  const [selectedId, setSelectedId] = useState<string>(projectComponents[0].id);

  const selectedComponent: ProjectComponent =
    projectComponents.find((c) => c.id === selectedId) || projectComponents[0];

  const componentIcons: Record<number, ReactNode> = {
    1: <Activity className="w-5 h-5" />,
    2: <BookOpen className="w-5 h-5" />,
    3: <Coins className="w-5 h-5" />,
    4: <Landmark className="w-5 h-5" />,
    5: <Gauge className="w-5 h-5" />,
  };

  return (
    <section id="components" className="py-16 sm:py-24 bg-white border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Official Project Structure
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 mt-2 font-['Outfit',sans-serif] tracking-tight">
            The 5 Core Pillars of LWEP
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-2">
            A comprehensive, multi-sectoral approach combining community-level social change, basic health and education access, direct economic financing, and national institutional capacity.
          </p>
        </div>

        {/* 5 Component Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-10">
          {projectComponents.map((comp) => {
            const isSelected = comp.id === selectedId;
            return (
              <button
                key={comp.id}
                onClick={() => setSelectedId(comp.id)}
                className={`text-left p-4 rounded-xl transition border cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-emerald-900 text-white border-emerald-900 shadow-md ring-2 ring-emerald-600/30'
                    : 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded ${
                        isSelected
                          ? 'bg-emerald-800 text-emerald-200'
                          : 'bg-stone-200 text-stone-700'
                      }`}
                    >
                      Component {comp.number}
                    </span>
                    <div className={isSelected ? 'text-amber-300' : 'text-emerald-700'}>
                      {componentIcons[comp.number]}
                    </div>
                  </div>
                  <h3 className={`text-xs font-bold leading-snug line-clamp-2 ${isSelected ? 'text-white' : 'text-stone-900'}`}>
                    {comp.title}
                  </h3>
                </div>

                <div className="mt-3 pt-2 border-t border-current/10 flex items-center justify-between text-[11px] font-medium opacity-90">
                  <span>View details</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Component Deep Dive Card */}
        <div className="bg-[#faf8f5] rounded-3xl border border-stone-200 p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white border border-stone-300 text-emerald-800">
                  <span>Component {selectedComponent.number} of 5</span>
                </div>
                <h3 className="text-xl sm:text-3xl font-extrabold text-stone-900 font-['Outfit',sans-serif] tracking-tight">
                  {selectedComponent.title}
                </h3>
                <p className="text-sm font-semibold text-emerald-800 italic">
                  "{selectedComponent.tagline}"
                </p>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed pt-1">
                  {selectedComponent.description}
                </p>
              </div>

              {/* Core Objectives */}
              <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-2xs space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                  Key Strategic Objectives
                </h4>
                <ul className="space-y-2">
                  {selectedComponent.objectives.map((obj, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-700">
                      <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Activities */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                  Ground-Level Activities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedComponent.keyActivities.map((act, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-white rounded-xl border border-stone-200/60 text-xs text-stone-700 flex items-start gap-2 font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Component Metrics */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {selectedComponent.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-xl border border-stone-200 text-center">
                    <div className="text-base sm:text-xl font-black text-stone-900 font-['Outfit',sans-serif]">
                      {metric.value}
                    </div>
                    <div className="text-[10px] text-stone-500 font-bold uppercase tracking-wider mt-0.5">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Photo Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-stone-300">
                <img
                  src={selectedComponent.imageSrc}
                  alt={selectedComponent.title}
                  className="w-full h-80 sm:h-96 object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-300">
                    Field Documentation
                  </span>
                  <div className="text-sm font-bold font-['Outfit',sans-serif] mt-0.5">
                    {selectedComponent.title}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-900 text-xs flex items-center justify-between">
                <div>
                  <span className="font-bold">Need assistance under this component?</span>
                  <p className="text-[11px] text-emerald-700">Contact the MGCSP PMU or your County Coordinator.</p>
                </div>
                <a
                  href="#contact"
                  className="px-3 py-1.5 bg-emerald-800 text-white rounded-lg font-bold text-xs hover:bg-emerald-900 transition shrink-0"
                >
                  Contact Desk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
