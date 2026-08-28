import { useState } from 'react';
import { Building, Globe2, ShieldCheck, HeartHandshake, Award, Calendar, Check, Landmark, ExternalLink } from 'lucide-react';
import { projectImages, contactDetails } from '../data/lwepData';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<'overview' | 'governance' | 'timeline'>('overview');

  const partners = [
    {
      name: "Government of Liberia (MGCSP)",
      role: "Lead Implementing Ministry",
      description: "Ministry of Gender, Children and Social Protection executing policy and institutional oversight.",
      badge: "Executing Agency"
    },
    {
      name: "The World Bank (IDA)",
      role: "Financing & Strategic Partner",
      description: "$44.60M total commitment ($17.80M Grant + $26.80M Concessional Credit).",
      badge: "Development Partner"
    },
    {
      name: "Plan International Liberia",
      role: "Lead Service Provider",
      description: "Managing field-level community mobilization, SASA! Together trainings, and grassroots execution.",
      badge: "Implementing Partner"
    },
    {
      name: "Ministry of Agriculture (MOA)",
      role: "Collaborating Ministry",
      description: "Facilitating climate-smart agronomy, cassava & palm processing value chains.",
      badge: "Line Ministry"
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Institutional Framework & Background
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 mt-2 font-['Outfit',sans-serif] tracking-tight">
              About the Liberia Women Empowerment Project
            </h2>
            <p className="text-sm sm:text-base text-stone-600 mt-2">
              Transforming social and economic outcomes for vulnerable women and adolescent girls in Liberia through holistic community-led empowerment.
            </p>
          </div>

          {/* Navigation Sub-Tabs */}
          <div className="flex bg-stone-200/70 p-1 rounded-xl shrink-0 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Project Overview
            </button>
            <button
              onClick={() => setActiveTab('governance')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition cursor-pointer ${
                activeTab === 'governance'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Governance & Partners
            </button>
            <button
              onClick={() => setActiveTab('timeline')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition cursor-pointer ${
                activeTab === 'timeline'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Timeline (2022–2027)
            </button>
          </div>
        </div>

        {/* Tab Content: Overview */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs space-y-4">
                <div className="flex items-center gap-3 text-emerald-800">
                  <Landmark className="w-6 h-6" />
                  <h3 className="text-lg font-bold text-stone-900 font-['Outfit',sans-serif]">
                    National Vision & Objective
                  </h3>
                </div>
                <p className="text-sm text-stone-700 leading-relaxed">
                  The <strong className="font-semibold text-stone-900">Liberia Women Empowerment Project (LWEP)</strong> is a flagship development program financed by the World Bank and executed by the Ministry of Gender, Children and Social Protection (MGCSP). Launched to address structural gender disparities, high rates of gender-based violence, and economic exclusion, LWEP targets <strong>267,200 beneficiaries</strong> in 6 prioritized counties.
                </p>
                <p className="text-sm text-stone-700 leading-relaxed">
                  The project integrates <strong>behavior change communication</strong> with direct <strong>economic livelihood support</strong> and <strong>institutional strengthening</strong>. By creating supportive environments where women can thrive as business owners, community advocates, and leaders, Liberia builds durable human capital for future generations.
                </p>

                <div className="pt-4 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span className="text-xs text-stone-600 font-medium">36,000 Women Enterprise Grants</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span className="text-xs text-stone-600 font-medium">1,250 Village Savings Associations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span className="text-xs text-stone-600 font-medium">SASA! Together Anti-GBV Drives</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span className="text-xs text-stone-600 font-medium">Girls School Retention Stipends</span>
                  </div>
                </div>
              </div>

              {/* Ministerial Complex Card */}
              <div className="bg-emerald-900 text-white p-6 rounded-2xl shadow-md flex items-center gap-4">
                <Building className="w-10 h-10 text-emerald-300 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold font-['Outfit',sans-serif]">
                    MGCSP Project Management Unit (PMU)
                  </h4>
                  <p className="text-xs text-emerald-100 mt-0.5">
                    Ministerial Complex, Congo Town, Monrovia, Liberia, 100010
                  </p>
                  <p className="text-[11px] text-emerald-200/80 mt-1">
                    Central coordination hub for all six county gender secretariats.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-200">
                <img
                  src={projectImages.ministerial}
                  alt="MGCSP Ministerial Complex and LWEP Strategic Implementation Sessions"
                  className="w-full h-96 object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs uppercase font-bold tracking-wider text-amber-300">
                    Collaborative Governance
                  </span>
                  <h4 className="text-base font-bold font-['Outfit',sans-serif] mt-1">
                    Government of Liberia & World Bank Supervisory Oversight
                  </h4>
                  <p className="text-xs text-stone-200 mt-1">
                    Ensuring high fiduciary integrity, environmental & social safeguards, and direct grassroots accountability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: Governance */}
        {activeTab === 'governance' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partners.map((partner, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {partner.badge}
                    </span>
                    <h3 className="text-base font-bold text-stone-900 mt-3 font-['Outfit',sans-serif]">
                      {partner.name}
                    </h3>
                    <div className="text-xs font-semibold text-emerald-700 mt-0.5">
                      {partner.role}
                    </div>
                    <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* PMU and Steering Committee Details */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
              <h3 className="text-lg font-bold text-stone-900 font-['Outfit',sans-serif] mb-4">
                Project Implementation Structure
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-stone-700">
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80">
                  <div className="font-bold text-stone-900 mb-1">National Project Steering Committee (NPSC)</div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Provides policy guidance and overall strategic oversight, chaired by the Minister of Gender, Children and Social Protection, with representatives from MFDP, MOA, MOH, and MOE.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80">
                  <div className="font-bold text-stone-900 mb-1">Project Management Unit (PMU)</div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Stationed at the Ministerial Complex in Congo Town. Houses the Project Coordinator, M&E Specialists, Financial Management, Procurement, Safeguards, and Gender Technical Experts.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80">
                  <div className="font-bold text-stone-900 mb-1">County Gender Secretariats & Lead Service Provider</div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Field operations managed in partnership with Plan International Liberia and County Gender Coordinators across all target districts in the 6 counties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: Timeline */}
        {activeTab === 'timeline' && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
            <h3 className="text-lg font-bold text-stone-900 font-['Outfit',sans-serif] mb-6">
              LWEP Strategic Roadmap (2022–2027)
            </h3>

            <div className="relative border-l-2 border-emerald-500/40 ml-4 pl-6 space-y-8">
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-emerald-600 border-4 border-white shadow-xs"></div>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  June 2022 – May 2023
                </span>
                <h4 className="text-base font-bold text-stone-900 mt-1 font-['Outfit',sans-serif]">
                  Project Approval & Effectiveness
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  World Bank Board approved $44.6M financing. Project declared effective in May 2023. Key PMU staff recruited at the Ministerial Complex in Monrovia.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-emerald-600 border-4 border-white shadow-xs"></div>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  September 2024 – 2025
                </span>
                <h4 className="text-base font-bold text-stone-900 mt-1 font-['Outfit',sans-serif]">
                  Lead Service Provider Contract & Community Rollout
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  Plan International signed as Lead Service Provider. SASA! Together baseline surveys conducted, 1,250+ VSLAs formed, and first tranches of livelihood grants disbursed to women groups.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-amber-500 border-4 border-white shadow-xs"></div>
                <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  2026 (Current Active Phase)
                </span>
                <h4 className="text-base font-bold text-stone-900 mt-1 font-['Outfit',sans-serif]">
                  Scaling Grants, Institutional Digitization & Girls Education Grants
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  Full disbursement of 36,000+ women business grants, launch of the national Gender Management Information System (GMIS), distribution of dignity kits, and mid-term evaluation review.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-stone-400 border-4 border-white shadow-xs"></div>
                <span className="text-xs font-bold text-stone-700 bg-stone-100 px-2 py-0.5 rounded border border-stone-200">
                  June 30, 2027
                </span>
                <h4 className="text-base font-bold text-stone-900 mt-1 font-['Outfit',sans-serif]">
                  Project Completion & Institutional Transition
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  Final impact assessment, national gender scorecard dissemination, and permanent handover of systems to the Ministry of Gender, Children and Social Protection.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
