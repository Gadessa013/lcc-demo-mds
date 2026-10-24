// src/pages/Foundation.jsx
import React, { useState } from 'react';
import { Heart, ArrowRight, X, Calendar, MapPin, ChevronRight } from 'lucide-react';

export default function Foundation({ foundationEvents }) {
  const [expandedEvent, setExpandedEvent] = useState(null);

  return (
    <div className="bg-slate-50 min-h-screen animate-fadeIn pb-20">
      <div className="relative bg-emerald-900 pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593113589914-0759901168b5?auto=format&fit=crop&q=80&w=2000')] opacity-20 object-cover mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/80 to-transparent" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 bg-emerald-400 text-emerald-950 font-bold text-[10px] px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
            <Heart className="w-3.5 h-3.5" /> Corporate Social Responsibility
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-md">
            LCC Foundation
          </h1>
          <p className="text-emerald-50 text-lg sm:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
            Giving back to the Bicolano community. We are dedicated to uplifting local neighborhoods through targeted educational support, youth development, and community outreach.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {foundationEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 group flex flex-col">
              <div className="h-56 relative overflow-hidden">
                <img src={event.images?.[0] || ''} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur text-emerald-700 text-[10px] font-bold px-3 py-1.5 rounded shadow-sm flex items-center gap-1.5 uppercase tracking-wider">
                  {event.category}
                </div>
                {event.images?.length > 1 && (
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded">
                    + {event.images.length - 1} Photos
                  </div>
                )}
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <span className="text-xs font-bold text-slate-400 mb-2">{event.date} • {event.location}</span>
                <h3 className="text-xl font-extrabold text-slate-900 leading-tight mb-3 group-hover:text-emerald-600 transition-colors">{event.title}</h3>
                <p className="text-sm font-medium text-slate-500 leading-relaxed flex-1 line-clamp-3">{event.description}</p>
                <button onClick={() => setExpandedEvent(event)} className="mt-6 text-emerald-600 font-bold text-sm flex items-center gap-1.5 hover:text-emerald-700 transition-colors">
                  Read Full Story <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Read More Modal with Carousel */}
      {expandedEvent && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative custom-scrollbar">
            <button onClick={() => setExpandedEvent(null)} className="absolute top-4 right-4 z-20 p-2 bg-slate-900/40 hover:bg-slate-900/60 text-white rounded-full transition-colors backdrop-blur-md">
              <X className="w-5 h-5"/>
            </button>
            
            {/* Image Carousel */}
            <div className="h-80 relative flex overflow-x-auto snap-x snap-mandatory scrollbar-hide custom-scrollbar">
              {expandedEvent.images?.map((img, idx) => (
                <div key={idx} className="w-full shrink-0 h-full snap-center relative">
                  <img src={img} alt={`${expandedEvent.title} - ${idx + 1}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                    <span className="bg-emerald-400 text-emerald-950 font-bold text-[10px] px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                      {expandedEvent.category}
                    </span>
                  </div>
                  {expandedEvent.images.length > 1 && (
                    <div className="absolute top-4 left-4 bg-black/40 backdrop-blur text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                      {idx + 1} / {expandedEvent.images.length}
                    </div>
                  )}
                </div>
              ))}
              {expandedEvent.images?.length > 1 && (
                <div className="absolute bottom-8 right-8 text-white/70 animate-pulse hidden sm:flex items-center gap-1 text-xs font-bold pointer-events-none">
                  Scroll for more <ChevronRight className="w-4 h-4"/>
                </div>
              )}
            </div>

            <div className="p-8 sm:p-10 space-y-6">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">{expandedEvent.title}</h2>
                <div className="flex flex-wrap gap-4 text-sm font-bold text-slate-500">
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-emerald-600"/> {expandedEvent.date}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-emerald-600"/> {expandedEvent.location}</span>
                </div>
              </div>
              <div className="prose prose-slate prose-emerald max-w-none">
                <p className="text-base text-slate-600 leading-relaxed font-medium whitespace-pre-wrap">
                  {expandedEvent.description}
                </p>
              </div>
              <div className="pt-8 border-t border-slate-100 flex justify-end">
                <button onClick={() => setExpandedEvent(null)} className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-6 py-3 rounded-xl transition-colors text-sm">
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}