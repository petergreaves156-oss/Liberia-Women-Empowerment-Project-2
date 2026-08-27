import { useState } from 'react';
import { Menu, X, PhoneCall, ShieldAlert, FileText, ChevronRight } from 'lucide-react';
import { contactDetails } from '../data/lwepData';

interface HeaderProps {
  onOpenGRM: () => void;
  onOpenGrantCalculator: () => void;
}

export default function Header({ onOpenGRM, onOpenGrantCalculator }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Overview', href: '#about' },
    { name: '5 Components', href: '#components' },
    { name: 'County Footprint', href: '#counties' },
    { name: 'Grants & VSLAs', href: '#grants' },
    { name: 'Success Stories', href: '#stories' },
    { name: 'News & Reports', href: '#news-resources' },
    { name: 'Contact & PMU', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs">
      {/* Top Ministerial & Emergency Hotline Bar */}
      <div className="bg-stone-900 text-stone-200 text-xs py-1.5 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-medium text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Republic of Liberia
            </span>
            <span className="text-stone-400 hidden sm:inline">|</span>
            <span className="text-stone-300 hidden sm:inline">
              Ministry of Gender, Children and Social Protection (MGCSP)
            </span>
            <span className="text-stone-400 hidden md:inline">• Supported by The World Bank</span>
          </div>

          <div className="flex items-center gap-4 text-stone-300">
            <div className="flex items-center gap-1.5 text-emerald-300 hover:text-emerald-200">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>GRM Helpline: <strong className="text-white">2883 (Toll-Free)</strong></span>
            </div>
            <button
              onClick={onOpenGRM}
              className="text-xs bg-emerald-800/80 hover:bg-emerald-700 text-emerald-100 px-2 py-0.5 rounded transition cursor-pointer flex items-center gap-1 font-medium"
            >
              <ShieldAlert className="w-3 h-3" />
              Grievance Portal
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Official Emblem & Project Title */}
          <a href="#" className="flex items-center gap-3 group">
            {/* Seal / Badge Graphic */}
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-800 to-teal-950 text-white flex flex-col items-center justify-center p-1 shadow-md border border-emerald-700/40">
              <span className="text-[9px] font-black tracking-wider text-amber-300">LWEP</span>
              <span className="text-[7px] uppercase font-bold tracking-tighter text-emerald-100 text-center leading-none mt-0.5">MGCSP</span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-extrabold text-stone-900 tracking-tight leading-none font-['Outfit',sans-serif]">
                  Liberia Women Empowerment Project
                </span>
                <span className="hidden lg:inline-flex text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                  LWEP
                </span>
              </div>
              <p className="text-xs text-stone-700 mt-0.5 font-medium">
                Ministry of Gender, Children & Social Protection • World Bank Funded
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-stone-700 hover:text-emerald-800 transition py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Button CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenGrantCalculator}
              className="text-xs font-bold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300/80 px-3.5 py-2 rounded-lg transition shadow-xs flex items-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-700" />
              Check Grant Eligibility
            </button>
            <a
              href="#counties"
              className="text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 px-4 py-2 rounded-lg transition shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              County Footprint
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:text-stone-900 hover:bg-stone-100 transition"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-semibold text-stone-700 hover:bg-emerald-50 hover:text-emerald-800 rounded-lg transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGrantCalculator();
              }}
              className="w-full text-center text-sm font-bold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 py-2.5 rounded-lg transition"
            >
              Check Grant Eligibility
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGRM();
              }}
              className="w-full text-center text-sm font-bold text-white bg-emerald-800 hover:bg-emerald-900 py-2.5 rounded-lg transition flex items-center justify-center gap-2"
            >
              <ShieldAlert className="w-4 h-4" />
              Grievance Redress Portal (GRM)
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
