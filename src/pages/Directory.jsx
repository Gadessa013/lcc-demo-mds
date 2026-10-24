// src/pages/Directory.jsx
import React, { useState } from 'react';
import { Search, MapPin, Phone, Clock, Building2, ExternalLink, Map as MapIcon } from 'lucide-react';

export default function Directory({ 
  stores, searchQuery, setSearchQuery, selectedProvince, setSelectedProvince, 
  selectedType, setSelectedType, filteredStores, setActiveTab, setSelectedLeasingStoreId 
}) {
  // State to track which store the user is hovering over to update the map dynamically
  const [hoveredStore, setHoveredStore] = useState(null);

  // Determine which store to show on the map (Hovered > First Filtered > Default)
  const activeMapStore = hoveredStore || filteredStores[0] || stores[0];
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(activeMapStore?.name + ' ' + activeMapStore?.city + ' Philippines')}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="bg-slate-50 min-h-[calc(100vh-6rem)] animate-fadeIn flex flex-col">
      
      {/* Premium Blue Header Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 pt-12 pb-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=2000')] opacity-10 object-cover mix-blend-overlay" />
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <span className="bg-amber-400 text-blue-950 font-extrabold text-[10px] px-3 py-1.5 rounded-full uppercase tracking-widest inline-block shadow-sm">Store Locator</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight drop-shadow-md">LCC Directory</h1>
          <p className="text-blue-100 font-medium text-lg max-w-2xl mx-auto">Browse all {stores.length} LCC Malls, Supermarkets, and Express marts.</p>
        </div>
      </div>

      {/* Main Split-Screen Layout */}
      <div className="max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-8 -mt-16 pb-12 flex-1 flex flex-col lg:flex-row gap-8 items-start relative z-20">
        
        {/* LEFT COLUMN: Filters & List */}
        <div className="w-full lg:w-1/2 xl:w-5/12 flex flex-col gap-6">
          
          {/* Floating Search Toolbar */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
            <div className="relative sm:col-span-2 lg:col-span-1 xl:col-span-2">
              <Search className="w-5 h-5 absolute left-4 top-3.5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search branch or city..." 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 font-medium text-sm focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all" 
              />
            </div>
            <select value={selectedProvince} onChange={(e) => setSelectedProvince(e.target.value)} className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 font-bold text-sm text-slate-700 focus:bg-white focus:border-blue-500 focus:outline-none transition-all cursor-pointer">
              <option value="All Provinces">All Provinces</option><option value="Albay">Albay</option><option value="Camarines Sur">Camarines Sur</option><option value="Sorsogon">Sorsogon</option><option value="Masbate">Masbate</option><option value="Camarines Norte">Camarines Norte</option><option value="Antique">Antique</option><option value="Catanduanes">Catanduanes</option>
            </select>
            <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 font-bold text-sm text-slate-700 focus:bg-white focus:border-blue-500 focus:outline-none transition-all cursor-pointer">
              <option value="All Categories">All Categories</option><option value="LCC Mall">LCC Mall</option><option value="Supermarket">Supermarket</option><option value="Department Store">Department Store</option><option value="Express">Express Outlet</option>
            </select>
          </div>

          {/* Results Meta */}
          <div className="flex justify-between items-end px-2">
            <h3 className="font-extrabold text-slate-900 text-lg">Results ({filteredStores.length})</h3>
            <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5"><MapIcon className="w-3.5 h-3.5"/> Hover cards to locate</span>
          </div>

          {/* Scrollable Store Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-5 h-[calc(100vh-24rem)] overflow-y-auto pr-2 pb-10 custom-scrollbar">
            {filteredStores.map((store) => (
              <div 
                key={store.id} 
                onMouseEnter={() => setHoveredStore(store)}
                onMouseLeave={() => setHoveredStore(null)}
                className={`bg-white rounded-2xl p-6 border shadow-sm transition-all duration-300 flex flex-col justify-between group cursor-pointer
                  ${hoveredStore?.id === store.id ? 'border-blue-400 shadow-blue-900/10 -translate-y-1' : 'border-slate-200/80 hover:border-blue-300'}
                  ${store.isMajorMall ? 'border-t-4 border-t-amber-400' : 'border-t-4 border-t-blue-600'}
                `}
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider ${store.isMajorMall ? 'bg-amber-50 text-amber-700' : 'bg-blue-50 text-blue-700'}`}>
                      {store.type}
                    </span>
                    <span className="text-emerald-700 font-bold text-[10px] flex items-center gap-1.5 bg-emerald-50 px-2 py-1 rounded-full"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />{store.status}</span>
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2 leading-tight group-hover:text-blue-700 transition-colors">{store.name}</h3>
                  <div className="space-y-2.5 text-sm font-medium text-slate-500 mb-6">
                    <p className="flex items-start gap-2.5"><MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /> <span className="line-clamp-2">{store.address}</span></p>
                    <p className="flex items-center gap-2.5"><Phone className="w-4 h-4 text-slate-400 shrink-0" />{store.contact}</p>
                    <p className="flex items-center gap-2.5"><Clock className="w-4 h-4 text-slate-400 shrink-0" />{store.hours}</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100 flex justify-between items-center gap-3">
                  {store.isMajorMall ? (
                    <button onClick={(e) => { e.stopPropagation(); setSelectedLeasingStoreId(store.id); setActiveTab('leasing'); }} className="bg-amber-400 hover:bg-amber-500 text-blue-950 font-bold text-xs px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 w-full transition-colors shadow-sm">
                      <Building2 className="w-3.5 h-3.5" /> Leasing Info
                    </button>
                  ) : (
                    <span className="text-xs font-semibold text-slate-400 bg-slate-50 px-3 py-2.5 rounded-lg w-full text-center">Retail Branch</span>
                  )}
                  <a href={`https://maps.google.com/?q=${encodeURIComponent(store.name + ' ' + store.address)}`} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="bg-white border border-slate-200 hover:border-blue-300 hover:text-blue-700 text-slate-600 font-bold text-xs px-4 py-2.5 rounded-lg flex items-center justify-center transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
            {filteredStores.length === 0 && (
              <div className="col-span-full py-16 text-center text-slate-500 font-medium">
                <Search className="w-10 h-10 mx-auto text-slate-300 mb-3" />
                No branches found matching your criteria.
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: Sticky Dynamic Map */}
        <div className="hidden lg:block lg:w-1/2 xl:w-7/12 sticky top-28 h-[calc(100vh-8rem)] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200 relative">
          {activeMapStore && (
            <>
              {/* Map Overlay Badge - MOVED TO BOTTOM LEFT */}
              <div className="absolute bottom-8 left-8 z-10 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-xl border border-slate-200 min-w-[280px] max-w-sm transition-all duration-300">
                <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider mb-2 inline-block ${activeMapStore.isMajorMall ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-800'}`}>
                  {activeMapStore.type}
                </span>
                <h4 className="font-extrabold text-lg text-slate-900 leading-tight">{activeMapStore.name}</h4>
                <p className="text-xs font-medium text-slate-500 mt-1 mb-4">{activeMapStore.city}, {activeMapStore.province}</p>
                
                {/* Custom Directions Button */}
                <a href={`https://maps.google.com/?q=${encodeURIComponent(activeMapStore.name + ' ' + activeMapStore.address)}`} target="_blank" rel="noreferrer" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm">
                  <MapPin className="w-3.5 h-3.5" /> Get Directions
                </a>
              </div>
              
              {/* Google Maps Iframe */}
              <iframe 
                title="LCC Store Map"
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={mapUrl}
                className="grayscale-[20%] contrast-[110%] transition-opacity duration-500"
              />
            </>
          )}
        </div>

      </div>
    </div>
  );
}