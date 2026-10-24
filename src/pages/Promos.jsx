// src/pages/Promos.jsx
import React from 'react';

export default function Promos({ banners }) {
  return (
    <div className="py-16 bg-slate-50 min-h-screen animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <span className="bg-amber-100 text-amber-800 font-bold text-[10px] px-3 py-1.5 rounded-full uppercase tracking-wider">Featured Offers</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">LCC Deals & Sales</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {banners.filter(b => b.active).map((item) => (
            <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 flex flex-col group hover:shadow-md transition-shadow">
              <div className="h-72 relative overflow-hidden border-b border-slate-100">
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute top-5 left-5 bg-white/90 backdrop-blur text-slate-900 text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-wider shadow-sm">
                  {item.tag}
                </span>
              </div>
              <div className="p-8 space-y-3 flex-1">
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">{item.category}</span>
                <h3 className="text-2xl font-extrabold text-slate-900 leading-tight tracking-tight">{item.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed text-sm">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}