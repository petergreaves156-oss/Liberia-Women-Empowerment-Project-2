import { useState } from 'react';
import { Newspaper, FileText, Download, Calendar, ArrowUpRight, BookOpen, Clock, CheckCircle } from 'lucide-react';
import { newsArticles, resourceDocuments } from '../data/lwepData';

export default function NewsAndResources() {
  const [downloadSuccessDoc, setDownloadSuccessDoc] = useState<string | null>(null);

  const handleDownload = (docTitle: string) => {
    setDownloadSuccessDoc(docTitle);
    setTimeout(() => {
      setDownloadSuccessDoc(null);
    }, 4000);
  };

  return (
    <section id="news-resources" className="py-16 sm:py-24 bg-white border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Official News & Press Updates */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Official Updates
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-2 font-['Outfit',sans-serif] tracking-tight">
                News & Field Bulletins
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Supervisory missions, grant tranche releases, and milestone achievements from the Ministry of Gender.
              </p>
            </div>

            <div className="space-y-4">
              {newsArticles.map((item) => (
                <article
                  key={item.id}
                  className="bg-[#faf8f5] hover:bg-stone-100/80 p-5 rounded-2xl border border-stone-200 transition space-y-2.5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="font-bold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded text-[11px]">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-3 text-stone-400 text-[11px]">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {item.readTime}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-stone-900 font-['Outfit',sans-serif] leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {item.summary}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-[11px] font-semibold text-stone-500 border-t border-stone-200/60">
                    <span>Source: {item.author}</span>
                    <span className="text-emerald-800 hover:text-emerald-900 inline-flex items-center gap-1 cursor-pointer">
                      Official Release <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right Column: Downloadable Project Manuals & Policies */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Transparency & Publications
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-2 font-['Outfit',sans-serif] tracking-tight">
                Project Documents & Guidelines
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Official Project Appraisal Documents (PAD), manuals, and procurement notices.
              </p>
            </div>

            {/* Notification alert on download */}
            {downloadSuccessDoc && (
              <div className="p-3 bg-emerald-800 text-white text-xs rounded-xl flex items-center gap-2 animate-fade-in shadow-md">
                <CheckCircle className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>Downloading document package: <strong>{downloadSuccessDoc}</strong></span>
              </div>
            )}

            <div className="space-y-3">
              {resourceDocuments.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-[#faf8f5] p-4 rounded-2xl border border-stone-200 flex items-center justify-between gap-3 hover:border-emerald-300 transition"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-stone-900 leading-snug line-clamp-2">
                        {doc.title}
                      </h4>
                      <div className="text-[11px] text-stone-500 mt-0.5">
                        {doc.date} • <span className="font-semibold">{doc.fileSize}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDownload(doc.title)}
                    className="p-2 rounded-xl bg-white border border-stone-300 hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-300 text-stone-700 transition cursor-pointer shrink-0"
                    title="Download document"
                    aria-label={`Download ${doc.title}`}
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Transparency Note Box */}
            <div className="p-4 bg-stone-900 text-stone-200 rounded-2xl text-xs space-y-2">
              <div className="font-bold text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span>Open Government & Fiduciary Disclosure</span>
              </div>
              <p className="text-[11px] text-stone-300 leading-relaxed">
                All procurement contracts, environmental safeguards (ESMF), and financial audits for the Liberia Women Empowerment Project are subject to World Bank disclosure standards and the Republic of Liberia Freedom of Information Act.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
