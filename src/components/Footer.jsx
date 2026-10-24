// src/components/Footer.jsx
import React from 'react';
import { Mail, Phone, MapPin, Globe, ArrowRight } from 'lucide-react';

export default function Footer({ storeCount, setActiveTab }) {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t-4 border-amber-400 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="space-y-6">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
              <div className="bg-blue-700 text-white font-extrabold px-3.5 py-1.5 rounded-lg shadow-sm transform -rotate-2">
                <span className="text-xl italic tracking-tighter">LCC</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-extrabold text-sm tracking-tight leading-none">LIBERTY COMMERCIAL</span>
                <span className="text-amber-400 text-[10px] font-bold tracking-widest uppercase mt-1">At Home Kita Digdi</span>
              </div>
            </div>
            <p className="text-sm font-medium leading-relaxed max-w-xs">
              Delivering retail excellence and quality products to Bicolano families for over 75 years across our network of {storeCount} premier branches.
            </p>
            
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Official Channels</h4>
              
              <div className="flex items-center justify-between max-w-[220px]">
                <span className="text-sm font-medium text-slate-300">LCC Malls</span>
                <div className="flex gap-3">
                  <a href="https://www.facebook.com/lccmalls" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-500 transition-colors" title="LCC Malls Page"><Globe className="w-4 h-4" /></a>
                </div>
              </div>
              
              <div className="flex items-center justify-between max-w-[220px]">
                <span className="text-sm font-medium text-slate-300">LCC Markets</span>
                <div className="flex gap-3">
                  <a href="https://www.facebook.com/LCCMarkets" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-500 transition-colors" title="LCC Markets Page"><Globe className="w-4 h-4" /></a>
                  <a href="https://www.instagram.com/lccmarkets/?hl=en" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-pink-500 transition-colors" title="LCC Markets Gallery"><Globe className="w-4 h-4" /></a>
                </div>
              </div>
              
              <div className="flex items-center justify-between max-w-[220px]">
                <span className="text-sm font-medium text-slate-300">LCC Dept Store</span>
                <div className="flex gap-3">
                  <a href="https://www.facebook.com/LCCDepartmentStore" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-500 transition-colors" title="LCC Department Store Page"><Globe className="w-4 h-4" /></a>
                  <a href="https://www.instagram.com/lccdepartmentstore/?hl=en" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-pink-500 transition-colors" title="LCC Department Store Gallery"><Globe className="w-4 h-4" /></a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-extrabold tracking-wide mb-6">Explore LCC</h4>
            <ul className="space-y-4 text-sm font-medium">
              {['Home', 'Locator', 'Rewards', 'Promos', 'Events'].map((tab) => (
                <li key={tab}>
                  <button onClick={() => setActiveTab(tab.toLowerCase())} className="hover:text-amber-400 hover:translate-x-1 transition-all flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-amber-400" />
                    {tab === 'Locator' ? `Store Directory` : tab === 'Rewards' ? 'Rewards Plus Card' : tab}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-extrabold tracking-wide mb-6">Business & Corporate</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <button onClick={() => setActiveTab('about')} className="hover:text-amber-400 hover:translate-x-1 transition-all flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-amber-400" />
                  About Us (Our Story)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('foundation')} className="hover:text-amber-400 hover:translate-x-1 transition-all flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-amber-400" />
                  LCC Foundation (CSR)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('leasing')} className="hover:text-amber-400 hover:translate-x-1 transition-all flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-amber-400" />
                  Commercial Leasing
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 hover:translate-x-1 transition-all flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-amber-400" />
                  Careers & Hiring
                </a>
              </li>
              <li>
                <button onClick={() => setActiveTab('admin')} className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-2 group mt-4 pt-4 border-t border-slate-800">
                  <span className="bg-slate-800 text-slate-300 text-xs px-2.5 py-1 rounded font-bold group-hover:bg-blue-600 transition-colors">Admin Portal Access</span>
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-extrabold tracking-wide mb-6">Contact Headquarters</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>Liberty Commercial Center Inc.<br/>Quezon Avenue, Legazpi City,<br/>Albay, Philippines 4500</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                <span>(052) 480-1234</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                <span>customercare@lccgroup.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
          <p>© 2026 Liberty Commercial Center Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}