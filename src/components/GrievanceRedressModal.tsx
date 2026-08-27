import { useState, FormEvent } from 'react';
import { X, ShieldAlert, PhoneCall, CheckCircle, Send, AlertTriangle, Lock } from 'lucide-react';
import { countyDataList } from '../data/lwepData';

interface GrievanceRedressModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GrievanceRedressModal({ isOpen, onClose }: GrievanceRedressModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    county: 'montserrado',
    community: '',
    category: 'grant_inquiry',
    details: '',
    isAnonymous: false,
  });

  const [submittedCode, setSubmittedCode] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission and generate official tracking code
    setTimeout(() => {
      const generatedCode = `LWEP-GRM-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedCode(generatedCode);
      setIsSubmitting(false);
    }, 800);
  };

  const handleReset = () => {
    setSubmittedCode(null);
    setFormData({
      name: '',
      phone: '',
      county: 'montserrado',
      community: '',
      category: 'grant_inquiry',
      details: '',
      isAnonymous: false,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white rounded-3xl max-w-xl w-full border border-stone-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Modal Header */}
        <div className="bg-stone-900 text-white p-6 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-800 text-emerald-300 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">
                Official Feedback Desk
              </span>
              <h3 className="text-lg font-bold font-['Outfit',sans-serif]">
                Grievance Redress Mechanism (GRM)
              </h3>
              <p className="text-xs text-stone-300">
                Confidential reporting & beneficiary feedback system
              </p>
            </div>
          </div>

          <button
            onClick={handleReset}
            className="text-stone-400 hover:text-white p-1 rounded-lg transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Toll-free banner */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <PhoneCall className="w-5 h-5 text-emerald-800 shrink-0" />
              <div>
                <div className="text-xs font-bold text-emerald-950">
                  National Free Toll-Free Hotline: 2883
                </div>
                <div className="text-[11px] text-emerald-800">
                  Operated by MGCSP Congo Town & County Secretariats (Mon–Fri)
                </div>
              </div>
            </div>
            <a
              href="tel:2883"
              className="px-3 py-1.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-lg transition shrink-0"
            >
              Call 2883
            </a>
          </div>

          {submittedCode ? (
            /* Success confirmation screen */
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-stone-900 font-['Outfit',sans-serif]">
                  Grievance / Feedback Submitted
                </h4>
                <p className="text-xs text-stone-600 mt-1 max-w-sm mx-auto">
                  Your report has been logged with the MGCSP Project Management Unit (PMU) and the Independent Oversight Committee.
                </p>
              </div>

              <div className="bg-stone-50 border border-stone-300 rounded-2xl p-4 max-w-xs mx-auto">
                <div className="text-[10px] uppercase font-bold text-stone-500">Your Case Tracking Code</div>
                <div className="text-xl font-black text-emerald-900 tracking-wider font-mono mt-0.5">
                  {submittedCode}
                </div>
                <div className="text-[10px] text-stone-400 mt-1">Please save this reference code.</div>
              </div>

              <p className="text-[11px] text-stone-500">
                You will be contacted by the PMU Grievance Officer within 5–7 business days.
              </p>

              <button
                onClick={handleReset}
                className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-2.5 rounded-xl text-xs transition cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            /* Submission Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Anonymous Checkbox */}
              <div className="flex items-center gap-2 p-3 bg-stone-50 border border-stone-200 rounded-xl">
                <input
                  type="checkbox"
                  id="anonymousCheck"
                  checked={formData.isAnonymous}
                  onChange={(e) => setFormData({ ...formData, isAnonymous: e.target.checked })}
                  className="rounded text-emerald-700 focus:ring-emerald-600 h-4 w-4"
                />
                <label htmlFor="anonymousCheck" className="text-xs text-stone-700 font-semibold cursor-pointer flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-stone-500" />
                  <span>Submit report anonymously (Personal details kept strictly confidential)</span>
                </label>
              </div>

              {!formData.isAnonymous && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Marie Johnson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl text-xs text-stone-900 focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">Phone / Mobile Number</label>
                    <input
                      type="tel"
                      placeholder="e.g. +231 770 123456"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl text-xs text-stone-900 focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                    />
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">County</label>
                  <select
                    value={formData.county}
                    onChange={(e) => setFormData({ ...formData, county: e.target.value })}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl text-xs text-stone-900 focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                  >
                    {countyDataList.map((c) => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Community / Town</label>
                  <input
                    type="text"
                    placeholder="e.g. Klay Town / Bopolu"
                    value={formData.community}
                    onChange={(e) => setFormData({ ...formData, community: e.target.value })}
                    required
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl text-xs text-stone-900 focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Feedback Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl text-xs text-stone-900 focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                >
                  <option value="grant_inquiry">Grant Beneficiary Selection / Disbursement Inquiry</option>
                  <option value="vsla_support">VSLA Box / Kit / Savings Club Issue</option>
                  <option value="social_norms_gbv">GBV / SASA! Together / Community Protection</option>
                  <option value="school_health">Girls Education Stipend / Health Service Complaint</option>
                  <option value="fiduciary_safeguard">Fiduciary / Environmental & Social Safeguard Concern</option>
                  <option value="general">General Suggestion or Feedback</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Details of Inquiry or Grievance</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Please describe what happened, including dates, locations, and any relevant community references..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl text-xs text-stone-900 focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-bold transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl py-2.5 text-xs font-bold transition shadow-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  {isSubmitting ? 'Logging Grievance...' : 'Submit to MGCSP PMU Desk'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
