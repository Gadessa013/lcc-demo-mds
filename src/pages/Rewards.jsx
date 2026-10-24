// src/pages/Rewards.jsx
import React, { useState } from 'react';
import { Award, CreditCard, Gift, RefreshCw, Star, Sparkles, Cake, Tag, Search, ArrowRight } from 'lucide-react';

export default function Rewards({ setActiveTab }) {
  const [cardNumber, setCardNumber] = useState('');
  const [balance, setBalance] = useState(null);

  const handleCheckBalance = (e) => {
    e.preventDefault();
    if (cardNumber.length > 5) {
      // Mocking a successful balance check
      setBalance({ points: '12,450', equivalent: '₱1,245.00' });
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen animate-fadeIn pb-20">
      
      {/* Premium Hero Section */}
      <div className="relative bg-blue-950 pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Dynamic Background Effects */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&q=80&w=2000')] opacity-10 object-cover mix-blend-screen" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Copy & Balance Checker */}
          <div className="space-y-8 text-center lg:text-left">
            <div>
              <span className="bg-amber-400 text-blue-950 font-extrabold text-[10px] px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm inline-flex items-center gap-1.5 mb-6">
                <Star className="w-3.5 h-3.5" /> Official Loyalty Program
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight">
                LCC Rewards Plus
              </h1>
              <p className="text-blue-100 text-lg font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Shop, Earn, and Enjoy. Turn your everyday grocery runs and mall shopping into instant cash rebates and exclusive VIP perks.
              </p>
            </div>

            {/* Interactive Points Checker */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl max-w-md mx-auto lg:mx-0 shadow-2xl">
              <h3 className="text-white font-bold text-sm mb-4 flex items-center gap-2"><Search className="w-4 h-4 text-amber-400"/> Quick Balance Check</h3>
              {!balance ? (
                <form onSubmit={handleCheckBalance} className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Enter 16-digit card number..." 
                    required
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="flex-1 bg-blue-950/50 border border-blue-800 text-white placeholder:text-blue-300/50 text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                  />
                  <button type="submit" className="bg-amber-400 hover:bg-amber-500 text-blue-950 font-bold px-5 py-3 rounded-xl transition-colors shadow-sm">
                    Check
                  </button>
                </form>
              ) : (
                <div className="bg-blue-900/50 border border-blue-700 p-4 rounded-xl flex justify-between items-center animate-fadeIn">
                  <div>
                    <p className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1">Available Points</p>
                    <p className="text-2xl font-extrabold text-white">{balance.points} pts</p>
                  </div>
                  <div className="text-right">
                    <p className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1">Cash Value</p>
                    <p className="text-2xl font-extrabold text-amber-400">{balance.equivalent}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Floating Glass Card */}
          <div className="relative flex justify-center lg:justify-end perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/20 to-transparent blur-2xl rounded-full scale-75 animate-pulse" />
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 p-8 rounded-3xl shadow-2xl w-full max-w-md transform lg:-rotate-6 hover:rotate-0 hover:scale-105 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-400/30 rounded-full blur-2xl group-hover:bg-amber-400/40 transition-colors duration-500" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-2xl" />
              
              <div className="flex justify-between items-center text-amber-300 font-extrabold text-xs mb-10 relative z-10 tracking-widest">
                <span>REWARDS PLUS</span>
                <Award className="w-8 h-8" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold tracking-[0.2em] text-white italic relative z-10 mb-8 drop-shadow-md">
                •••• 8829
              </div>
              <div className="flex justify-between text-[10px] font-bold text-blue-100 uppercase tracking-wider relative z-10">
                <span>Valued Member</span>
                <span>Valid 2 Years</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 space-y-24">
        
        {/* Step-by-Step Cards (Replaces the generic 3 boxes) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-lg hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 border border-blue-100 shadow-sm"><CreditCard className="w-5 h-5"/></div>
            <h3 className="text-xl font-extrabold text-slate-900 mb-3">1. Easy Application</h3>
            <p className="text-sm font-medium text-slate-500 leading-relaxed">Visit any LCC Store Customer Service desk. Fill out a quick form, pay the minimal fee, and instantly receive your physical card.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border-2 border-amber-400 shadow-xl relative transform md:-translate-y-6 hover:-translate-y-8 transition-transform duration-300">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-blue-950 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">Core Benefit</div>
            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6 border border-amber-100 shadow-sm"><Gift className="w-5 h-5"/></div>
            <h3 className="text-xl font-extrabold text-slate-900 mb-3">2. Earn & Redeem Cash</h3>
            <p className="text-sm font-medium text-slate-500 leading-relaxed">Present your card to the cashier to earn points. Your points act as real cash and can be directly deducted from your next shopping bill.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-lg hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 border border-emerald-100 shadow-sm"><RefreshCw className="w-5 h-5"/></div>
            <h3 className="text-xl font-extrabold text-slate-900 mb-3">3. Seamless Renewal</h3>
            <p className="text-sm font-medium text-slate-500 leading-relaxed">Cards are valid for 2 years. Renew early and watch all your unused points carry over securely to your new membership card.</p>
          </div>
        </div>

        {/* Exclusive Member Perks Section */}
        <div className="bg-slate-100 rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">More Than Just Points</h2>
            <p className="text-slate-600 font-medium text-lg">Unlock exclusive lifestyle perks and privileges available only to LCC Rewards Plus cardholders.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-300 transition-colors group">
              <Tag className="w-8 h-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-extrabold text-slate-900 mb-2">Member Pricing</h4>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">Enjoy exclusive shelf discounts on participating supermarket and department store items.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-amber-300 transition-colors group">
              <Cake className="w-8 h-8 text-amber-500 mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-extrabold text-slate-900 mb-2">Birthday Multiplier</h4>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">Earn double points on all your purchases during your entire birth month.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-emerald-300 transition-colors group">
              <Sparkles className="w-8 h-8 text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-extrabold text-slate-900 mb-2">VIP Event Access</h4>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">Get first dibs and priority invites to mall-wide midnight sales and product launches.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-purple-300 transition-colors group">
              <Award className="w-8 h-8 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-extrabold text-slate-900 mb-2">Partner Promos</h4>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">Flash your card at select non-LCC partner food stalls and merchants for instant 5% off.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}