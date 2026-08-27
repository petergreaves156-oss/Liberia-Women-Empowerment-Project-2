import { useState } from 'react';
import { Calculator, CheckCircle2, FileCheck2, HelpCircle, ArrowRight, PiggyBank, Sparkles, Building2 } from 'lucide-react';
import { countyDataList } from '../data/lwepData';

export default function GrantCalculator() {
  const [businessType, setBusinessType] = useState<'agriculture' | 'processing' | 'market_trade' | 'artisan' | 'fishery'>('processing');
  const [structure, setStructure] = useState<'individual' | 'group' | 'vsla'>('group');
  const [selectedCounty, setSelectedCounty] = useState<string>('bomi');
  const [membersCount, setMembersCount] = useState<number>(20);
  const [monthlySavingsPerMember, setMonthlySavingsPerMember] = useState<number>(500); // LRD

  // Estimated calculations
  const calculateGrantTier = () => {
    if (structure === 'individual') {
      return {
        amountUsd: '$300 – $600',
        tierName: 'Micro-Enterprise Start-up / Scale Grant',
        trainingModules: ['Basic Bookkeeping', 'Record Keeping', 'Customer Service & Pricing', 'Mobile Money Integration'],
        equipment: 'Small tools, trade inventory & raw materials'
      };
    } else if (structure === 'group') {
      return {
        amountUsd: '$1,500 – $3,500',
        tierName: 'Women Group & Cooperative Scaling Grant',
        trainingModules: ['Cooperative Governance', 'Agro-processing Machine Operation', 'Market Aggregation', 'Quality Control'],
        equipment: 'Mechanized graters, oil expellers, solar dryers, or bulk storage bins'
      };
    } else {
      return {
        amountUsd: '$1,000 – $2,500',
        tierName: 'VSLA Capitalization & Seed Fund Grant',
        trainingModules: ['VSLA Methodology (3-padlock system)', 'Passbook Ledger Auditing', 'Loan Appraisal & Repayment Tracking'],
        equipment: 'Complete VSLA Kit (Metal Cashbox, 3 Master Locks, 30 Passbooks, Stamp, Ink)'
      };
    }
  };

  const grantInfo = calculateGrantTier();
  const estimatedAnnualSavingsLrd = membersCount * monthlySavingsPerMember * 12;
  const estimatedAnnualSavingsUsd = Math.round(estimatedAnnualSavingsLrd / 195); // Approximate LRD/USD conversion

  return (
    <section id="grants" className="py-16 sm:py-24 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Component 3 Economic Engine
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 mt-2 font-['Outfit',sans-serif] tracking-tight">
            LWEP Grant Eligibility & VSLA Readiness Portal
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-2">
            Calculate your enterprise grant tier, projected group savings growth, and get tailored guidance on accessing LWEP financing across Liberia.
          </p>
        </div>

        {/* Interactive Simulator Box */}
        <div className="bg-[#faf8f5] rounded-3xl border border-stone-200 p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Form: Parameters Selection */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-stone-900 font-bold text-base font-['Outfit',sans-serif]">
                <Calculator className="w-5 h-5 text-emerald-700" />
                <span>Step 1: Select Your Enterprise Profile</span>
              </div>

              {/* County Selection */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                  Operating County (Must be among 6 target counties)
                </label>
                <select
                  value={selectedCounty}
                  onChange={(e) => setSelectedCounty(e.target.value)}
                  className="w-full bg-white border border-stone-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold text-stone-900 focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                >
                  {countyDataList.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} (Capital: {c.capital})
                    </option>
                  ))}
                </select>
              </div>

              {/* Structure Selection */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                  Beneficiary Structure
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: 'group', label: 'Women Group', sub: '5–30 members' },
                    { id: 'vsla', label: 'VSLA Club', sub: 'Savings Association' },
                    { id: 'individual', label: 'Individual', sub: 'Sole Enterprise' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setStructure(item.id as any)}
                      className={`p-3 rounded-xl border text-center transition cursor-pointer ${
                        structure === item.id
                          ? 'bg-emerald-900 text-white border-emerald-900 shadow-xs'
                          : 'bg-white text-stone-800 border-stone-300 hover:bg-stone-50'
                      }`}
                    >
                      <div className="text-xs font-bold">{item.label}</div>
                      <div className={`text-[10px] ${structure === item.id ? 'text-emerald-200' : 'text-stone-500'}`}>
                        {item.sub}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Business Sector */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                  Business / Value Chain Sector
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'processing', label: 'Agro-Processing (Cassava/Oil)' },
                    { id: 'agriculture', label: 'Horticulture & Crops' },
                    { id: 'market_trade', label: 'Market & Retail Trade' },
                    { id: 'fishery', label: 'Fish Smoking & Trade' },
                    { id: 'artisan', label: 'Tailoring & Soap Crafts' },
                  ].map((sec) => (
                    <button
                      key={sec.id}
                      type="button"
                      onClick={() => setBusinessType(sec.id as any)}
                      className={`p-2.5 rounded-xl border text-left text-xs font-semibold transition cursor-pointer ${
                        businessType === sec.id
                          ? 'bg-emerald-800 text-white border-emerald-800'
                          : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                      }`}
                    >
                      {sec.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Group / VSLA Sliders */}
              {structure !== 'individual' && (
                <div className="p-4 bg-white rounded-2xl border border-stone-200 space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-bold text-stone-800 mb-1">
                      <span>Group Members Count</span>
                      <span className="text-emerald-800 font-extrabold">{membersCount} Members</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="35"
                      step="1"
                      value={membersCount}
                      onChange={(e) => setMembersCount(Number(e.target.value))}
                      className="w-full accent-emerald-700 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold text-stone-800 mb-1">
                      <span>Monthly Member Savings Share (LRD)</span>
                      <span className="text-emerald-800 font-extrabold">{monthlySavingsPerMember.toLocaleString()} LRD / month</span>
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="2000"
                      step="100"
                      value={monthlySavingsPerMember}
                      onChange={(e) => setMonthlySavingsPerMember(Number(e.target.value))}
                      className="w-full accent-emerald-700 cursor-pointer"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Right Card: Calculation Results & Application Pathway */}
            <div className="lg:col-span-6 space-y-5">
              <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-stone-200">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Estimated Grant Package
                    </span>
                    <h3 className="text-base font-bold text-stone-900 mt-1 font-['Outfit',sans-serif]">
                      {grantInfo.tierName}
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-xl sm:text-2xl font-black text-emerald-800 font-['Outfit',sans-serif]">
                      {grantInfo.amountUsd}
                    </div>
                    <div className="text-[10px] text-stone-500 font-semibold uppercase">
                      Direct Cash / Asset Grant
                    </div>
                  </div>
                </div>

                {/* VSLA Savings projection if group */}
                {structure !== 'individual' && (
                  <div className="bg-emerald-950 text-white p-4 rounded-xl space-y-2">
                    <div className="flex items-center gap-2 text-amber-300 text-xs font-bold">
                      <PiggyBank className="w-4 h-4" />
                      <span>Projected Group 12-Month VSLA Capital</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <div>
                        <div className="text-lg font-extrabold text-white font-['Outfit',sans-serif]">
                          {estimatedAnnualSavingsLrd.toLocaleString()} LRD
                        </div>
                        <div className="text-[10px] text-emerald-300">Local Currency Mobilized</div>
                      </div>
                      <div>
                        <div className="text-lg font-extrabold text-amber-300 font-['Outfit',sans-serif]">
                          ~${estimatedAnnualSavingsUsd.toLocaleString()} USD
                        </div>
                        <div className="text-[10px] text-emerald-300">Self-Sustaining Loan Pool</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Training Modules Provided */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-stone-800 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>Included Capacity Building & Training</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {grantInfo.trainingModules.map((mod, i) => (
                      <div key={i} className="text-xs text-stone-700 bg-stone-50 p-2.5 rounded-lg border border-stone-200 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                        <span>{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Equipment Support */}
                <div className="text-xs text-stone-700 bg-amber-50/70 border border-amber-200 p-3 rounded-xl">
                  <strong className="text-amber-950 font-bold">Equipment & Tools Support: </strong>
                  {grantInfo.equipment}
                </div>

                {/* Steps to apply */}
                <div className="pt-2 border-t border-stone-200 space-y-2">
                  <div className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                    How to Claim & Apply in {countyDataList.find(c => c.id === selectedCounty)?.name}:
                  </div>
                  <ol className="text-xs text-stone-700 space-y-1.5 list-decimal list-inside">
                    <li>Register with your local Community Validation Committee & Town Chief.</li>
                    <li>Visit the <strong>MGCSP County Gender Coordinator</strong> office in {countyDataList.find(c => c.id === selectedCounty)?.capital}.</li>
                    <li>Complete the 3-day basic business plan & VSLA management clinic.</li>
                    <li>Receive verified disbursement via mobile money or bank escrow transfer.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
