// src/pages/Events.jsx
import React from 'react';
import { Maximize2, Store, CheckCircle2, Send } from 'lucide-react';

export default function Events({ 
  bookingForm, setBookingForm, bookingSuccess, setBookingSuccess, handleBookingSubmit 
}) {
  return (
    <div className="bg-slate-50 min-h-screen py-16 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="bg-blue-100 text-blue-800 font-bold text-[10px] px-3 py-1.5 rounded-full uppercase tracking-wider inline-block">LCC Activity Centers</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">Reserve Event Spaces</h1>
          <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">Host corporate conventions, trade expos, product launches, or cultural events inside our major malls.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <div className="bg-slate-900 rounded-3xl overflow-hidden relative shadow-lg border border-slate-200/80">
              <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200" alt="Event Space" className="w-full h-[400px] object-cover opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex items-end p-8">
                <div className="text-white">
                  <span className="bg-amber-400 text-blue-950 text-[10px] font-bold px-2.5 py-1 rounded uppercase mb-3 inline-block tracking-wider">Featured Venue</span>
                  <h3 className="text-2xl font-extrabold tracking-tight">LCC Mall Legazpi (Main Center)</h3>
                  <p className="font-medium text-slate-300 mt-2 text-sm leading-relaxed">Our largest indoor activity center. Perfect for major trade expos, artisan fairs, and concerts.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <Maximize2 className="w-5 h-5 text-blue-500 mb-3" />
                <h4 className="font-extrabold text-slate-900 text-base">Spacious Layouts</h4>
                <p className="text-xs text-slate-500 mt-1.5 font-medium leading-relaxed">Accommodating 100 to 500+ pax depending on configuration.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <Store className="w-5 h-5 text-amber-500 mb-3" />
                <h4 className="font-extrabold text-slate-900 text-base">Prime Visibility</h4>
                <p className="text-xs text-slate-500 mt-1.5 font-medium leading-relaxed">Located in high-foot-traffic areas inside our major malls.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-lg border border-slate-200">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-1">Application Form</h3>
            <p className="text-slate-500 font-medium text-sm mb-8">Fill out the details below for a quick evaluation by our marketing team.</p>
            
            {bookingSuccess ? (
              <div className="text-center py-10 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
                <h4 className="text-2xl font-extrabold text-slate-900 tracking-tight">Reservation Received!</h4>
                <p className="text-slate-500 font-medium text-sm">Our marketing team will contact you within 24 business hours.</p>
                <button onClick={() => setBookingSuccess(false)} className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-6 py-2.5 rounded-xl mt-4 text-sm transition-colors">Submit Another</button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Preferred Venue</label>
                  <select value={bookingForm.branch} onChange={e => setBookingForm({...bookingForm, branch: e.target.value})} className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all">
                    <option>LCC Mall Legazpi (Main Center)</option><option>LCC Naga Event Hall</option><option>LCC Tabaco Central Hall</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Event Category</label>
                  <select value={bookingForm.eventType} onChange={e => setBookingForm({...bookingForm, eventType: e.target.value})} className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all">
                    <option>Exhibition & Fair</option><option>Corporate Expo</option><option>Concert / Show</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Event Title</label>
                  <input type="text" required value={bookingForm.clientName} onChange={e => setBookingForm({...bookingForm, clientName: e.target.value})} placeholder="e.g. Bicol Trade Expo 2026" className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Contact Name</label>
                    <input type="text" required value={bookingForm.contactPerson} onChange={e => setBookingForm({...bookingForm, contactPerson: e.target.value})} placeholder="Full Name" className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email</label>
                    <input type="email" required value={bookingForm.email} onChange={e => setBookingForm({...bookingForm, email: e.target.value})} placeholder="name@company.com" className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Phone Number</label>
                  <input type="tel" required value={bookingForm.phone} onChange={e => setBookingForm({...bookingForm, phone: e.target.value})} placeholder="0917 XXX XXXX" className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all" />
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-sm transition-colors flex justify-center items-center gap-2 mt-2 text-sm">
                  <Send className="w-4 h-4" /> Submit Reservation Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}