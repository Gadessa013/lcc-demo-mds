// src/pages/Leasing.jsx
import React from 'react';
import { Building2, Phone, Mail, ArrowRight, FileText, CheckCircle2 } from 'lucide-react';

export default function Leasing({ 
  majorMalls, selectedLeasingStoreId, setSelectedLeasingStoreId, 
  currentLeasingStore, leasingForm, setLeasingForm, 
  leasingStep, setLeasingStep, leasingSuccess, setLeasingSuccess, handleLeasingSubmit 
}) {
  return (
    <div className="py-12 bg-slate-50 min-h-screen animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-10 text-white shadow-lg relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
          <span className="bg-amber-400 text-blue-950 font-bold text-[10px] px-3 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block">Official Leasing Hub</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Commercial Space For Rent</h1>
          <p className="text-blue-100 text-base font-medium max-w-2xl mt-4 leading-relaxed">Units are exclusively available inside our major malls. Inspect floor plans and submit your qualifier profile to secure your spot alongside premium retail brands.</p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden">
          <div className="p-6 bg-slate-50 border-b border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2"><Building2 className="w-5 h-5 text-blue-600"/> Select Major Mall</h2>
            <select value={selectedLeasingStoreId} onChange={(e) => setSelectedLeasingStoreId(e.target.value)} className="bg-white text-slate-900 font-bold text-sm px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 w-full md:w-auto shadow-sm">
              {majorMalls.map(s => <option key={s.id} value={s.id}>{s.name} ({s.leasingUnits?.length || 0} Units)</option>)}
            </select>
          </div>
          
          <div className="p-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4 space-y-6">
              <div>
                <span className="bg-slate-100 text-slate-600 font-bold text-[10px] px-2.5 py-1 rounded uppercase tracking-wider mb-3 inline-block">{currentLeasingStore.province}</span>
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">{currentLeasingStore.name}</h3>
                <p className="text-sm font-medium text-slate-500 mt-2 leading-relaxed">{currentLeasingStore.address}</p>
              </div>
              <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100">
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block mb-2">Direct Leasing Desk</span>
                <p className="font-extrabold text-blue-950 flex items-center gap-2.5 text-sm"><Phone className="w-4 h-4 text-blue-500"/> {currentLeasingStore.leasingPhone}</p>
                <p className="font-semibold text-blue-800 flex items-center gap-2.5 mt-2 text-sm"><Mail className="w-4 h-4 text-blue-500"/> {currentLeasingStore.leasingEmail}</p>
              </div>
            </div>
            
            <div className="lg:col-span-8">
              {currentLeasingStore.leasingUnits && currentLeasingStore.leasingUnits.length > 0 ? (
                <div className="grid sm:grid-cols-2 gap-5">
                  {currentLeasingStore.leasingUnits.map(unit => (
                    <div key={unit.id} className="bg-white rounded-2xl border border-slate-200 p-5 hover:border-blue-300 hover:shadow-md transition-all group">
                      <div className="flex justify-between items-center mb-3">
                        <span className="bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider">Unit {unit.unitCode}</span>
                        <span className="text-[10px] font-bold text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-200">{unit.floor}</span>
                      </div>
                      
                      {/* Interactive Scrollable Image Carousel */}
                      <div className="h-40 rounded-xl overflow-x-auto flex snap-x snap-mandatory scrollbar-hide mb-4 border border-slate-100 relative group/carousel">
                        {unit.images?.length > 0 ? (
                          unit.images.map((img, idx) => (
                            <img key={idx} src={img} alt={`Unit ${unit.unitCode}`} className="w-full h-full object-cover shrink-0 snap-center transition-transform duration-500 group-hover/carousel:scale-105" />
                          ))
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400 text-xs font-bold">No Photos</div>
                        )}
                        <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur text-slate-900 text-xs font-bold px-2 py-1 rounded shadow-sm z-10">{unit.sizeSqM} sq.m</div>
                        {unit.images?.length > 1 && (
                          <div className="absolute top-2 right-2 bg-black/50 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded z-10">{unit.images.length} Photos</div>
                        )}
                      </div>
                      
                      <h5 className="font-extrabold text-base text-slate-900 mb-1">{unit.type}</h5>
                      <p className="text-xs text-slate-500 font-medium truncate mb-4">{unit.locationDetail || 'Prime retail location inside the mall.'}</p>
                      <div className="flex justify-between items-center border-t border-slate-100 pt-4">
                        <span className="font-bold text-slate-900 text-sm">{unit.rateEstimate}</span>
                        <button onClick={() => {
                          setLeasingForm({ ...leasingForm, preferredBranch: currentLeasingStore.name, targetUnitCode: unit.unitCode, targetSpaceSqM: `${unit.sizeSqM} sq.m` });
                          setLeasingStep(1);
                          document.getElementById('leasing-quiz').scrollIntoView({ behavior: 'smooth' });
                        }} className="bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 text-blue-700 font-bold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors">
                          Apply <ArrowRight className="w-3.5 h-3.5"/>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                  <Building2 className="w-8 h-8 text-slate-300 mx-auto mb-3" />
                  <p className="text-sm text-slate-500 font-medium">No prime units currently available. Inquire below for pop-up spaces.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Leasing Qualifier Quiz */}
        <div id="leasing-quiz" className="max-w-3xl mx-auto bg-white rounded-3xl border border-slate-200/80 shadow-md overflow-hidden">
          <div className="bg-slate-900 p-8 text-white relative">
            <h3 className="text-xl font-extrabold flex items-center gap-3"><FileText className="w-5 h-5 text-amber-400" /> Formal Tenant Qualifier</h3>
            <div className="flex gap-2 mt-6">
              {[1,2,3,4].map(step => (
                <div key={step} className={`h-1.5 flex-1 rounded-full ${leasingStep >= step ? 'bg-amber-400' : 'bg-slate-700'}`} />
              ))}
            </div>
          </div>
          <div className="p-8 sm:p-10 bg-white">
            {leasingSuccess ? (
              <div className="text-center py-8 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">Qualifier Profile Logged!</h3>
                <p className="text-slate-500 font-medium max-w-sm mx-auto">Our commercial leasing officers will review your concept and contact you within 2 business days.</p>
                <button onClick={() => { setLeasingSuccess(false); setLeasingStep(1); }} className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold px-6 py-2.5 rounded-xl text-sm transition-colors mt-4">Submit Another Inquiry</button>
              </div>
            ) : (
              <form onSubmit={handleLeasingSubmit}>
                {leasingStep === 1 && (
                  <div className="space-y-5 animate-fadeIn">
                    <h4 className="text-lg font-extrabold text-slate-900 mb-6 border-b border-slate-100 pb-2">Step 1: Brand Concept</h4>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Business Name</label>
                      <input type="text" required value={leasingForm.businessName} onChange={e => setLeasingForm({...leasingForm, businessName: e.target.value})} placeholder="e.g. Mayon Coffee" className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Retail Category</label>
                      <select value={leasingForm.type} onChange={e => setLeasingForm({...leasingForm, type: e.target.value})} className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all">
                        <option>Food & Beverage</option><option>Retail Apparel</option><option>Services / Salon</option><option>Kiosk / Cart</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Concept Description</label>
                      <textarea required value={leasingForm.conceptDetail} onChange={e => setLeasingForm({...leasingForm, conceptDetail: e.target.value})} placeholder="Briefly describe what you sell..." className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all h-24 resize-none" />
                    </div>
                  </div>
                )}
                {leasingStep === 2 && (
                  <div className="space-y-5 animate-fadeIn">
                    <h4 className="text-lg font-extrabold text-slate-900 mb-6 border-b border-slate-100 pb-2">Step 2: Business Profile</h4>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Experience Level</label>
                      <select value={leasingForm.experienceLevel} onChange={e => setLeasingForm({...leasingForm, experienceLevel: e.target.value})} className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all">
                        <option>Startup Concept (First Store)</option><option>Established Local Brand (1-3 stores)</option><option>Regional/National Chain</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Primary Target Audience</label>
                      <input type="text" required value={leasingForm.targetAudience} onChange={e => setLeasingForm({...leasingForm, targetAudience: e.target.value})} placeholder="e.g. Students, Families..." className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all" />
                    </div>
                  </div>
                )}
                {leasingStep === 3 && (
                  <div className="space-y-5 animate-fadeIn">
                    <h4 className="text-lg font-extrabold text-slate-900 mb-6 border-b border-slate-100 pb-2">Step 3: Space Requirements</h4>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Target Mall</label>
                      <select value={leasingForm.preferredBranch} onChange={e => setLeasingForm({...leasingForm, preferredBranch: e.target.value})} className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all">
                        {majorMalls.map(m => <option key={m.id} value={m.name}>{m.name}</option>)}
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Target Unit / Area</label>
                        <input type="text" required value={leasingForm.targetUnitCode} onChange={e => setLeasingForm({...leasingForm, targetUnitCode: e.target.value})} placeholder="e.g. L1-102B" className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Monthly Budget</label>
                        <select value={leasingForm.budgetRange} onChange={e => setLeasingForm({...leasingForm, budgetRange: e.target.value})} className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all">
                          <option>₱10k - ₱30k</option><option>₱30k - ₱50k</option><option>₱50k - ₱100k</option><option>₱100k+</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}
                {leasingStep === 4 && (
                  <div className="space-y-5 animate-fadeIn">
                    <h4 className="text-lg font-extrabold text-slate-900 mb-6 border-b border-slate-100 pb-2">Step 4: Contact Details</h4>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Representative Name</label>
                      <input type="text" required value={leasingForm.repName} onChange={e => setLeasingForm({...leasingForm, repName: e.target.value})} placeholder="Full Name" className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                        <input type="email" required value={leasingForm.email} onChange={e => setLeasingForm({...leasingForm, email: e.target.value})} placeholder="name@company.com" className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Phone Number</label>
                        <input type="tel" required value={leasingForm.phone} onChange={e => setLeasingForm({...leasingForm, phone: e.target.value})} placeholder="0917 XXX XXXX" className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all" />
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex justify-between pt-8 mt-8">
                  {leasingStep > 1 ? (
                    <button type="button" onClick={() => setLeasingStep(leasingStep - 1)} className="px-5 py-2.5 font-bold text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200 text-sm transition-colors">Back</button>
                  ) : <div />}
                  <button type="submit" className="px-6 py-2.5 font-bold text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 flex items-center gap-2 text-sm transition-all">
                    {leasingStep === 4 ? 'Submit Profile' : 'Next Step'} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}