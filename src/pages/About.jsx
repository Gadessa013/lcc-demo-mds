// src/pages/About.jsx
import React from 'react';
import { Award, Store, Heart } from 'lucide-react';

export default function About({ storeCount }) {
  return (
    <div className="bg-slate-50 min-h-screen py-20 animate-fadeIn">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="bg-blue-700 text-white font-extrabold px-4 py-2 rounded-xl text-xl italic inline-block shadow-sm">LCC</div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">OUR BEST FOR YOU</h1>
            <h2 className="text-xl font-bold text-blue-600">At Home Kita Digdi</h2>
            <p className="text-slate-500 text-base font-medium leading-relaxed">
              Liberty Commercial Center (LCC) has been serving Bicolano families for over 75 years. What started as a humble establishment has grown into a regional powerhouse operating premier department stores, supermarkets, commercial malls, and express convenience hubs.
            </p>
            <p className="text-slate-500 text-base font-medium leading-relaxed">
              With a robust network of {storeCount} branches across the Bicol region and beyond, we remain deeply committed to uplifting local communities, supporting local farmers, and delivering world-class retail experiences close to home.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-amber-400 rounded-3xl transform rotate-3 scale-105 opacity-20" />
            <img src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=800" alt="LCC Store Front" className="rounded-3xl relative z-10 shadow-lg object-cover h-[500px] w-full border border-slate-200/50" />
          </div>
        </div>

        <div className="bg-blue-900 rounded-3xl p-10 sm:p-14 relative overflow-hidden text-center shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-10 tracking-tight relative z-10">The Pillars of LCC</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
            <div className="p-8 bg-white rounded-2xl shadow-sm hover:-translate-y-1 transition-transform">
              <Award className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-extrabold text-slate-900 text-base">75+ Years Legacy</h3>
              <p className="text-xs font-medium text-slate-500 mt-2 leading-relaxed">Deep roots and unwavering commitment to the local Bicolano community.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm hover:-translate-y-1 transition-transform">
              <Store className="w-8 h-8 text-amber-500 mx-auto mb-4" />
              <h3 className="font-extrabold text-slate-900 text-base">{storeCount} Branches</h3>
              <p className="text-xs font-medium text-slate-500 mt-2 leading-relaxed">A comprehensive network of malls, supermarkets, and express centers.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm hover:-translate-y-1 transition-transform">
              <Heart className="w-8 h-8 text-emerald-500 mx-auto mb-4" />
              <h3 className="font-extrabold text-slate-900 text-base">Customer First</h3>
              <p className="text-xs font-medium text-slate-500 mt-2 leading-relaxed">Dedicated to delivering high-quality products and warm, reliable service.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}