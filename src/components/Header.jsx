// src/components/Header.jsx
import React, { useState } from 'react';
import { Shield, Menu, X, Building2 } from 'lucide-react';

export default function Header({ activeTab, setActiveTab, isLoggedIn, storeCount }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm transition-all duration-300">
      <div className="w-full px-6 sm:px-10 lg:px-16 flex items-center justify-between h-20 sm:h-24">
        
        <div className="flex items-center gap-3 cursor-pointer group shrink-0" onClick={() => setActiveTab('home')}>
          <div className="bg-blue-700 text-white font-extrabold px-4 py-2 rounded-xl shadow-sm transform group-hover:scale-105 transition-all duration-300">
            <span className="text-2xl italic tracking-tighter">LCC</span>
          </div>
          <div className="flex flex-col">
            <span className="text-slate-900 font-extrabold text-base tracking-tight leading-none group-hover:text-blue-700 transition-colors">LIBERTY COMMERCIAL CENTER</span>
            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase mt-1">At Home Kita Digdi</span>
          </div>
        </div>

        <nav className="hidden xl:flex items-center gap-1.5">
          {[
            { id: 'home', label: 'Home' },
            { id: 'locator', label: `Directory (${storeCount})` },
            { id: 'promos', label: 'Promos' },
            { id: 'rewards', label: 'Rewards' },
            { id: 'leasing', label: 'Leasing' },
            { id: 'events', label: 'Events' },
            { id: 'foundation', label: 'Foundation' },
            { id: 'about', label: 'About' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-3 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === item.id ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button onClick={() => setActiveTab('admin')} className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-5 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-all">
            <Shield className="w-4 h-4 text-blue-600" /> {isLoggedIn ? 'Admin Portal' : 'Admin Login'}
          </button>
        </div>
        
        <button className="xl:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </header>
  );
}