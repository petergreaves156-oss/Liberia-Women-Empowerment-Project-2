import { MapPin, Phone, Mail, Clock, ExternalLink, ShieldCheck, Heart, ArrowUp } from 'lucide-react';
import { contactDetails } from '../data/lwepData';

interface FooterProps {
  onOpenGRM: () => void;
}

export default function Footer({ onOpenGRM }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Col 1: Identity & Official Mandate */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-800 text-white flex flex-col items-center justify-center p-1 font-bold shadow-md">
                <span className="text-[10px] font-black text-amber-300">LWEP</span>
                <span className="text-[7px] uppercase tracking-tighter text-emerald-100">MGCSP</span>
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-['Outfit',sans-serif]">
                  Liberia Women Empowerment Project
                </h3>
                <p className="text-xs text-stone-400">
                  Ministry of Gender, Children & Social Protection
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              A $44.6M Government of Liberia flagship initiative funded by the World Bank (IDA) to enhance social and livelihood services, foster positive social norms, and strengthen gender equality across 6 counties.
            </p>

            {/* Social Media Link based on user's Facebook screenshot */}
            <div className="pt-2">
              <a
                href={contactDetails.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-700 text-xs font-semibold text-white transition"
              >
                <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-xs">
                  f
                </div>
                <span>{contactDetails.facebookPage}</span>
                <span className="text-[10px] text-stone-400">({contactDetails.facebookFollowers})</span>
                <ExternalLink className="w-3 h-3 text-stone-400 ml-1" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Pillars
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#components" className="hover:text-emerald-400 transition">Positive Social Norms</a></li>
              <li><a href="#components" className="hover:text-emerald-400 transition">Basic Health & Education</a></li>
              <li><a href="#components" className="hover:text-emerald-400 transition">Resilient Livelihoods</a></li>
              <li><a href="#components" className="hover:text-emerald-400 transition">Institutional Capacity</a></li>
              <li><a href="#components" className="hover:text-emerald-400 transition">Project Management Unit</a></li>
            </ul>
          </div>

          {/* Col 3: Target Counties */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Target Counties
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#counties" className="hover:text-emerald-400 transition">Rural Montserrado</a></li>
              <li><a href="#counties" className="hover:text-emerald-400 transition">Bomi County</a></li>
              <li><a href="#counties" className="hover:text-emerald-400 transition">Gbarpolu County</a></li>
              <li><a href="#counties" className="hover:text-emerald-400 transition">Grand Cape Mount</a></li>
              <li><a href="#counties" className="hover:text-emerald-400 transition">Grand Gedeh County</a></li>
              <li><a href="#counties" className="hover:text-emerald-400 transition">River Cess County</a></li>
            </ul>
          </div>

          {/* Col 4: Official Headquarters & PMU Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Project Management Unit (PMU)
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{contactDetails.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{contactDetails.pmuEmail} / {contactDetails.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Toll-Free Grievance Hotline: <strong className="text-white">2883</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{contactDetails.officeHours}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenGRM}
                className="w-full bg-emerald-800 hover:bg-emerald-700 text-white font-bold py-2 px-3 rounded-xl text-xs transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-300" />
                File Grievance or Feedback
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Republic of Liberia • Ministry of Gender, Children and Social Protection. Supported by The World Bank IDA.
          </div>

          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-stone-300 transition">Privacy & Safeguards</a>
            <a href="#about" className="hover:text-stone-300 transition">Terms of Implementation</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-stone-400 hover:text-white transition cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
