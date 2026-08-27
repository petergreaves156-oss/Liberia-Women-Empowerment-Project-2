import { useState } from 'react';
import { MapPin, Users, Store, PiggyBank, GraduationCap, Phone, Building, Search, ArrowUpRight } from 'lucide-react';
import { countyDataList } from '../data/lwepData';
import { CountyData } from '../types';

export default function CountyExplorer() {
  const [selectedCountyId, setSelectedCountyId] = useState<string>(countyDataList[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCounties = countyDataList.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.capital.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.districtFocus.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const selectedCounty: CountyData =
    countyDataList.find((c) => c.id === selectedCountyId) || countyDataList[0];

  return (
    <section id="counties" className="py-16 sm:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Geographic Coverage
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 mt-2 font-['Outfit',sans-serif] tracking-tight">
            Target Counties & Regional Footprint
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-2">
            LWEP operations are focused across 6 strategic counties covering agrarian, coastal, forest, and peri-urban communities in Liberia.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="max-w-md mx-auto mb-8 relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by county, district or town..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition shadow-2xs"
          />
        </div>

        {/* Main Grid: Map / County List + County Detail View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive County Cards List */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-bold text-stone-500 uppercase tracking-wider px-1">
              Select County ({filteredCounties.length} of 6)
            </div>

            <div className="space-y-2.5">
              {filteredCounties.map((county) => {
                const isSelected = county.id === selectedCountyId;
                return (
                  <button
                    key={county.id}
                    onClick={() => setSelectedCountyId(county.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-emerald-900 text-white border-emerald-900 shadow-md'
                        : 'bg-white hover:bg-stone-50 text-stone-800 border-stone-200 shadow-2xs'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs ${
                          isSelected
                            ? 'bg-emerald-800 text-emerald-200 border border-emerald-700'
                            : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        }`}
                      >
                        <MapPin className="w-5 h-5" />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className={`text-sm font-bold font-['Outfit',sans-serif] ${isSelected ? 'text-white' : 'text-stone-900'}`}>
                            {county.name}
                          </h3>
                        </div>
                        <div className={`text-xs ${isSelected ? 'text-emerald-200' : 'text-stone-500'}`}>
                          Capital: {county.capital} • {county.districtFocus.length} Districts
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className={`text-xs font-bold ${isSelected ? 'text-amber-300' : 'text-emerald-800'}`}>
                        {county.beneficiariesCount.toLocaleString()}+
                      </div>
                      <div className={`text-[10px] ${isSelected ? 'text-emerald-200' : 'text-stone-400'}`}>
                        Beneficiaries
                      </div>
                    </div>
                  </button>
                );
              })}

              {filteredCounties.length === 0 && (
                <div className="p-8 text-center bg-white rounded-2xl border border-stone-200 text-stone-500 text-xs">
                  No counties found matching "{searchQuery}".
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Selected County Deep-Dive Profile */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-6">
              {/* County Header Banner */}
              <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-stone-200">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    LWEP Targeted County
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-2 font-['Outfit',sans-serif]">
                    {selectedCounty.name}
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Administrative Seat: <strong className="text-stone-800">{selectedCounty.capital}</strong>
                  </p>
                </div>

                <div className="bg-stone-50 border border-stone-200 px-4 py-2 rounded-xl text-right">
                  <div className="text-xl font-black text-emerald-800 font-['Outfit',sans-serif]">
                    {selectedCounty.beneficiariesCount.toLocaleString()}
                  </div>
                  <div className="text-[10px] uppercase font-bold text-stone-500">
                    Projected Reach
                  </div>
                </div>
              </div>

              {/* County Metric Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/80">
                  <div className="flex items-center gap-1.5 text-stone-500 text-[11px] font-bold mb-1">
                    <Store className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Business Grants</span>
                  </div>
                  <div className="text-lg font-extrabold text-stone-900 font-['Outfit',sans-serif]">
                    {selectedCounty.grantsDisbursed.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-stone-500">Women Enterprises</div>
                </div>

                <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/80">
                  <div className="flex items-center gap-1.5 text-stone-500 text-[11px] font-bold mb-1">
                    <PiggyBank className="w-3.5 h-3.5 text-amber-700" />
                    <span>VSLA Groups</span>
                  </div>
                  <div className="text-lg font-extrabold text-stone-900 font-['Outfit',sans-serif]">
                    {selectedCounty.activeVSLAs}
                  </div>
                  <div className="text-[10px] text-stone-500">Active Savings Clubs</div>
                </div>

                <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/80">
                  <div className="flex items-center gap-1.5 text-stone-500 text-[11px] font-bold mb-1">
                    <GraduationCap className="w-3.5 h-3.5 text-indigo-700" />
                    <span>Health & Schools</span>
                  </div>
                  <div className="text-lg font-extrabold text-stone-900 font-['Outfit',sans-serif]">
                    {selectedCounty.schoolsAndClinicsSupported}
                  </div>
                  <div className="text-[10px] text-stone-500">Supported Hubs</div>
                </div>

                <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/80">
                  <div className="flex items-center gap-1.5 text-stone-500 text-[11px] font-bold mb-1">
                    <Users className="w-3.5 h-3.5 text-teal-700" />
                    <span>Districts</span>
                  </div>
                  <div className="text-lg font-extrabold text-stone-900 font-['Outfit',sans-serif]">
                    {selectedCounty.districtFocus.length}
                  </div>
                  <div className="text-[10px] text-stone-500">Priority Zones</div>
                </div>
              </div>

              {/* Priority Districts */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700">
                  Priority Operational Districts
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCounty.districtFocus.map((district, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-stone-100 text-stone-800 text-xs font-semibold rounded-lg border border-stone-200 flex items-center gap-1"
                    >
                      <MapPin className="w-3 h-3 text-emerald-700" />
                      {district}
                    </span>
                  ))}
                </div>
              </div>

              {/* Regional Highlight */}
              <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-2xl space-y-1">
                <div className="text-xs font-bold text-emerald-900">
                  Regional Focus & Value Chains
                </div>
                <p className="text-xs text-emerald-950 leading-relaxed">
                  {selectedCounty.highlight}
                </p>
              </div>

              {/* Local Gender Secretariat Contact */}
              <div className="bg-stone-900 text-white p-5 rounded-2xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">
                    County Secretariat Information
                  </span>
                  <span className="text-[10px] text-stone-400">Under MGCSP Liberia</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <div className="text-stone-400 text-[11px]">County Gender Coordinator</div>
                    <div className="font-bold text-white mt-0.5">{selectedCounty.leadCoordinator}</div>
                  </div>
                  <div>
                    <div className="text-stone-400 text-[11px]">Field Station Office</div>
                    <div className="font-medium text-stone-200 mt-0.5">{selectedCounty.contactOffice}</div>
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-800 flex items-center justify-between text-xs">
                  <span className="text-stone-300">Monrovia Liaison Desk: Congo Town Ministerial Complex</span>
                  <a
                    href="#contact"
                    className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1"
                  >
                    Contact Coordinator <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
