// src/pages/Home.jsx
import React from 'react';
import { Sparkles, Building2, Calendar, Phone, Mail, MapPin, Clock, ArrowRight, Store, Gift, CreditCard, Award } from 'lucide-react';
import { OFFICIAL_LEASING_CONTACTS } from '../data/mockData';

export default function Home({ banners, activeBannerIdx, setActiveBannerIdx, majorMalls, stores, setActiveTab, setSelectedLeasingStoreId }) {
  return (
    <div className="space-y-16 pb-16 bg-slate-50 animate-fadeIn">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white overflow-hidden min-h-[600px] flex items-center">
        {banners.filter(b => b.active).length > 0 && (
          <>
            <img src={banners[activeBannerIdx]?.imageUrl} alt="LCC Showcase" className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105 transition-all duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/80 to-transparent" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full z-10">
              <div className="max-w-2xl space-y-6">
                <span className="bg-amber-400 text-blue-950 font-extrabold text-xs px-4 py-2 rounded-full uppercase tracking-widest inline-flex items-center gap-2 shadow-sm">
                  <Sparkles className="w-4 h-4" /> {banners[activeBannerIdx]?.tag}
                </span>
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight text-white drop-shadow-sm">
                  {banners[activeBannerIdx]?.title}
                </h1>
                <p className="text-blue-50 text-lg sm:text-xl font-medium max-w-xl leading-relaxed">
                  {banners[activeBannerIdx]?.subtitle}
                </p>
                <div className="pt-6 flex gap-4">
                  <button onClick={() => setActiveTab('leasing')} className="bg-amber-400 hover:bg-amber-500 text-blue-950 font-extrabold px-8 py-4 rounded-xl shadow-md flex items-center gap-3 hover:-translate-y-1 transition-all">
                    <Building2 className="w-5 h-5" /> Leasing Inquiries
                  </button>
                  <button onClick={() => setActiveTab('events')} className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold px-7 py-4 rounded-xl border border-white/20 flex items-center gap-3 transition-all">
                    <Calendar className="w-5 h-5 text-amber-300" /> Book Event Venue
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
              {banners.filter(b => b.active).map((_, idx) => (
                <button key={idx} onClick={() => setActiveBannerIdx(idx)} className={`h-2 rounded-full transition-all duration-500 ${activeBannerIdx === idx ? 'w-8 bg-amber-400 shadow-sm' : 'w-2 bg-white/40 hover:bg-white/60'}`} />
              ))}
            </div>
          </>
        )}
      </section>

      {/* Official Leasing Contacts Spotlight Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-8 sm:p-10 rounded-3xl shadow-lg relative overflow-hidden border border-blue-700/50">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
            <div className="space-y-4 max-w-xl">
              <span className="bg-amber-400 text-blue-950 font-bold text-xs px-3 py-1.5 rounded-full uppercase tracking-wide">Commercial Leasing Hotline</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Commercial Space For Rent</h2>
              <p className="text-blue-100 text-base font-medium leading-relaxed">Expand your brand inside premier LCC Malls across the Bicol region. Get in touch directly with our zone managers.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full lg:w-auto">
              {OFFICIAL_LEASING_CONTACTS.map((group) => (
                <div key={group.id} className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/15 transition-colors">
                  <div className="bg-amber-400 text-blue-950 font-bold text-[10px] px-2.5 py-1 rounded-full inline-block uppercase tracking-wider mb-3">{group.branchesList.slice(0, 3).join(' • ')} +</div>
                  <div className="text-lg font-extrabold text-white flex items-center gap-2 mb-1.5"><Phone className="w-5 h-5 text-amber-300" /> {group.phone}</div>
                  <div className="text-sm font-medium text-blue-200 flex items-center gap-2"><Mail className="w-4 h-4 text-amber-300" /> {group.email}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Directory Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-blue-600 font-bold text-xs tracking-widest uppercase bg-blue-50 px-3 py-1 rounded-full">Interactive Directory</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Find Your Nearest LCC Branch</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {majorMalls.slice(0, 3).map((store) => (
            <div key={store.id} className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:border-blue-400 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex justify-between items-center mb-5">
                <span className="bg-slate-50 text-slate-600 border border-slate-200 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">{store.type}</span>
                <span className="text-emerald-700 font-bold text-[10px] flex items-center gap-1.5 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />{store.status}</span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-3 tracking-tight">{store.name}</h3>
              <div className="space-y-3 text-sm font-medium text-slate-500 mb-8">
                <p className="flex items-start gap-3"><MapPin className="w-5 h-5 text-blue-500 shrink-0" />{store.address}</p>
                <p className="flex items-center gap-3"><Clock className="w-5 h-5 text-slate-400 shrink-0" />{store.hours}</p>
              </div>
              <div className="pt-5 border-t border-slate-100 flex justify-between items-center">
                <span className="font-bold text-slate-600 text-sm">{store.contact}</span>
                <button onClick={() => { setSelectedLeasingStoreId(store.id); setActiveTab('leasing'); }} className="bg-slate-50 hover:bg-blue-50 text-blue-700 text-sm font-bold px-4 py-2 rounded-lg flex items-center gap-2 border border-slate-200 hover:border-blue-200 transition-all">Inspect <ArrowRight className="w-4 h-4 text-blue-500"/></button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button onClick={() => setActiveTab('locator')} className="bg-white border border-slate-200 text-slate-700 font-bold px-6 py-3 rounded-xl hover:bg-slate-50 hover:text-slate-900 transition-all flex items-center gap-2 mx-auto shadow-sm">
            <Store className="w-4 h-4 text-slate-400" /> Explore All {stores.length} Branches
          </button>
        </div>
      </section>

      {/* LCC Rewards Plus Card Teaser Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-3xl p-10 text-white shadow-lg flex flex-col lg:flex-row items-center justify-between gap-10 group overflow-hidden relative">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl pointer-events-none" />
          <div className="space-y-5 max-w-xl relative z-10">
            <div className="inline-flex items-center gap-2 bg-amber-400 text-blue-950 font-bold text-[10px] px-3 py-1.5 rounded-full uppercase tracking-wide"><Gift className="w-3.5 h-3.5"/> Shop, Earn & Enjoy</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Get Rewarded with LCC Rewards Plus Card!</h2>
            <p className="text-blue-100 text-base font-medium leading-relaxed">Earn points on every purchase across all LCC Supermarkets and Department Stores. Redeem your points like cash on your next shopping trip!</p>
            <button onClick={() => setActiveTab('rewards')} className="bg-white text-blue-900 hover:bg-blue-50 font-bold px-6 py-3 rounded-xl flex items-center gap-2 mt-2 transition-all shadow-sm">
              <CreditCard className="w-4 h-4 text-blue-600" /> Membership Guide
            </button>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-2xl shrink-0 w-full max-w-sm group-hover:-translate-y-2 transition-transform duration-500 relative z-10">
            <div className="bg-gradient-to-br from-blue-500 to-blue-800 p-6 rounded-2xl shadow-inner border border-white/10">
              <div className="flex justify-between items-center text-xs font-extrabold text-amber-300 mb-6"><span>LCC REWARDS PLUS</span><Award className="w-6 h-6" /></div>
              <div className="text-3xl font-extrabold tracking-widest text-left italic mb-6 text-white drop-shadow-sm">•••• 8829</div>
              <div className="flex justify-between text-[10px] font-bold text-blue-100 uppercase tracking-wider"><span>Valued Member</span><span>Valid 2 Years</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose LCC Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-blue-600 font-bold text-xs tracking-widest uppercase">The Bicolano Legacy</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Why Choose Liberty Commercial Center?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:border-blue-300 hover:shadow-md transition-all text-center">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-extrabold text-xl mx-auto mb-5">75+</div>
            <h3 className="text-lg font-extrabold text-slate-900 mb-2">Generations of Trust</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">Built on uncompromising dedication to customer service and warm Bicolano hospitality.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:border-amber-300 hover:shadow-md transition-all text-center">
            <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center font-extrabold text-xl mx-auto mb-5">{stores.length}</div>
            <h3 className="text-lg font-extrabold text-slate-900 mb-2">Unmatched Network</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">From major premier shopping malls to neighborhood express marts across the region.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all text-center">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center font-extrabold text-xl mx-auto mb-5">₱</div>
            <h3 className="text-lg font-extrabold text-slate-900 mb-2">Everyday Value</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">Direct partnerships with local farmers ensure farm-fresh produce and wholesale savings.</p>
          </div>
        </div>
      </section>
    </div>
  );
}