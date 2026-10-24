// src/pages/AdminPortal.jsx
import React, { useState } from 'react';
import { 
  Shield, LogOut, Plus, Trash2, Edit3, Eye, 
  Image as ImageIcon, Store, Calendar, FileText, Phone, Mail, X, Heart, Upload
} from 'lucide-react';

export default function AdminPortal({ 
  isLoggedIn, setIsLoggedIn, setActiveTab, showToast, 
  banners, setBanners, stores, setStores, 
  eventBookings, setEventBookings, leasingTickets, setLeasingTickets,
  foundationEvents, setFoundationEvents
}) {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [adminTab, setAdminTab] = useState('banners');

  const [editingBanner, setEditingBanner] = useState(null);
  const [editingStore, setEditingStore] = useState(null);
  const [editingFoundation, setEditingFoundation] = useState(null);
  const [inspectingBooking, setInspectingBooking] = useState(null);
  const [inspectingLeasingTicket, setInspectingLeasingTicket] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginUsername === 'admin' && loginPassword === 'admin') {
      setIsLoggedIn(true);
      showToast('Welcome to LCC Admin Workspace!');
    }
  };

  // Base64 File Converter for Images
  const handleImageUpload = (e, currentImages, onUpdate) => {
    const files = Array.from(e.target.files);
    const promises = files.map(file => {
      return new Promise(resolve => {
        const reader = new FileReader();
        reader.onload = e => resolve(e.target.result);
        reader.readAsDataURL(file);
      });
    });
    Promise.all(promises).then(base64s => {
      onUpdate([...(currentImages || []), ...base64s]);
    });
  };

  const handleSaveBanner = (e) => {
    e.preventDefault();
    if (!editingBanner.title || !editingBanner.imageUrl) return showToast('Title and Image URL required', 'error');
    if (editingBanner.isNew) {
      const created = { ...editingBanner, id: `b-${Date.now()}` };
      delete created.isNew;
      setBanners([created, ...banners]);
      showToast('Banner Published Successfully!');
    } else {
      setBanners(banners.map(b => b.id === editingBanner.id ? editingBanner : b));
      showToast('Banner Updated!');
    }
    setEditingBanner(null);
  };

  const handleSaveStore = (e) => {
    e.preventDefault();
    if (editingStore.isNew) {
      const created = { ...editingStore, id: `s-${Date.now()}`, group: 'Group 1', leasingUnits: editingStore.leasingUnits || [] };
      delete created.isNew;
      setStores([created, ...stores]);
      showToast('New Branch Added!');
    } else {
      setStores(stores.map(s => s.id === editingStore.id ? editingStore : s));
      showToast('Branch Details Updated!');
    }
    setEditingStore(null);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-[calc(100vh-6rem)] bg-slate-50 text-slate-900 font-sans flex items-start pt-20 justify-center">
        <div className="max-w-md w-full bg-white p-10 rounded-3xl border border-slate-200 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-1.5 bg-blue-600" />
          <div className="text-center mb-8 space-y-2 pt-2">
            <div className="inline-flex p-3 bg-blue-50 text-blue-600 rounded-xl mb-3 border border-blue-100"><Shield className="w-6 h-6" /></div>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">Admin Login</h2>
            <p className="text-sm font-medium text-slate-500">Access the LCC Management Portal</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input type="text" placeholder="Username (admin)" value={loginUsername} onChange={e => setLoginUsername(e.target.value)} className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-sm focus:border-blue-500 focus:bg-white focus:outline-none transition-all" />
            <input type="password" placeholder="Password (admin)" value={loginPassword} onChange={e => setLoginPassword(e.target.value)} className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-sm focus:border-blue-500 focus:bg-white focus:outline-none transition-all" />
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-sm transition-colors text-sm">Sign In</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col lg:flex-row">
      <aside className="w-full lg:w-64 bg-white border-r border-slate-200 p-6 flex flex-col justify-between shrink-0">
        <div className="space-y-6">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-extrabold italic text-sm shadow-sm">LCC</div>
            <div>
              <h3 className="font-extrabold text-sm text-slate-900 tracking-tight">Admin Portal</h3>
              <span className="text-[10px] font-bold text-emerald-600 uppercase flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Online</span>
            </div>
          </div>
          <div className="space-y-1.5">
            <span className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2 mt-4">Management</span>
            {[
              { id: 'banners', label: 'Banners & Deals', icon: ImageIcon, badge: banners.length },
              { id: 'stores', label: 'Store Directory', icon: Store, badge: stores.length },
              { id: 'events', label: 'Event Bookings', icon: Calendar, badge: eventBookings.length },
              { id: 'leasing', label: 'Leasing Profiles', icon: FileText, badge: leasingTickets.length },
              { id: 'foundation', label: 'CSR Foundation', icon: Heart, badge: foundationEvents.length },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = adminTab === tab.id;
              return (
                <button key={tab.id} onClick={() => setAdminTab(tab.id)} className={`w-full px-3 py-2.5 rounded-lg text-sm font-bold flex items-center justify-between transition-all ${isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}>
                  <div className="flex items-center gap-3"><Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} /> {tab.label}</div>
                  <span className="bg-white border border-slate-200 text-slate-500 text-[10px] px-2 py-0.5 rounded-md shadow-sm">{tab.badge}</span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="space-y-2 pt-6 border-t border-slate-100">
          <button onClick={() => setActiveTab('home')} className="w-full text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-bold py-2.5 rounded-lg flex items-center gap-2 text-sm transition-colors"><Eye className="w-4 h-4"/> Preview Site</button>
          <button onClick={() => setIsLoggedIn(false)} className="w-full text-red-600 hover:bg-red-50 font-bold py-2.5 rounded-lg flex items-center gap-2 text-sm transition-colors"><LogOut className="w-4 h-4"/> Sign Out</button>
        </div>
      </aside>

      <div className="flex-1 p-8 lg:p-10 overflow-y-auto">
        {/* ADMIN: Banners CMS */}
        {adminTab === 'banners' && (
          <div className="space-y-6 max-w-5xl mx-auto">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Showcase Banners</h2>
              <button onClick={() => setEditingBanner({title: '', category: 'Supermarket', subtitle: '', imageUrl: '', tag: '', isNew: true})} className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-lg text-sm shadow-sm flex items-center gap-2 transition-colors"><Plus className="w-4 h-4"/> New Banner</button>
            </div>

            {editingBanner && (
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm animate-fadeIn">
                <h3 className="text-lg font-extrabold mb-5 flex items-center gap-2 text-slate-900">
                  {editingBanner.isNew ? <Plus className="text-blue-500 w-5 h-5" /> : <Edit3 className="text-amber-500 w-5 h-5" />} 
                  {editingBanner.isNew ? 'Publish New Banner' : 'Edit Banner Details'}
                </h3>
                <form onSubmit={handleSaveBanner} className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Headline</label>
                    <input type="text" required value={editingBanner.title} onChange={e => setEditingBanner({...editingBanner, title: e.target.value})} className="w-full p-3 rounded-lg bg-slate-50 border border-slate-200 font-medium text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Category</label>
                    <select value={editingBanner.category} onChange={e => setEditingBanner({...editingBanner, category: e.target.value})} className="w-full p-3 rounded-lg bg-slate-50 border border-slate-200 font-medium text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-colors">
                      <option>Supermarket</option><option>Department Store</option><option>Events</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Subtitle</label>
                    <input type="text" value={editingBanner.subtitle} onChange={e => setEditingBanner({...editingBanner, subtitle: e.target.value})} className="w-full p-3 rounded-lg bg-slate-50 border border-slate-200 font-medium text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Image URL</label>
                    <input type="url" required value={editingBanner.imageUrl} onChange={e => setEditingBanner({...editingBanner, imageUrl: e.target.value})} className="w-full p-3 rounded-lg bg-slate-50 border border-slate-200 font-medium text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Badge Tag</label>
                    <input type="text" value={editingBanner.tag} onChange={e => setEditingBanner({...editingBanner, tag: e.target.value})} placeholder="e.g. PROMO" className="w-full p-3 rounded-lg bg-slate-50 border border-slate-200 font-medium text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-colors" />
                  </div>
                  <div className="col-span-2 flex justify-end gap-2 mt-2 pt-4 border-t border-slate-100">
                    <button type="button" onClick={() => setEditingBanner(null)} className="px-5 py-2.5 bg-white border border-slate-200 text-slate-600 font-bold rounded-lg text-sm hover:bg-slate-50">Cancel</button>
                    <button type="submit" className="bg-blue-600 text-white font-bold px-6 py-2.5 rounded-lg shadow-sm hover:bg-blue-700 text-sm transition-colors">{editingBanner.isNew ? 'Publish Banner' : 'Save Changes'}</button>
                  </div>
                </form>
              </div>
            )}

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-200 text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                  <tr><th className="p-4 pl-6">Banner Graphic & Title</th><th className="p-4">Status</th><th className="p-4 text-right pr-6">Actions</th></tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {banners.map(b => (
                    <tr key={b.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-4 pl-6">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-12 rounded bg-slate-100 border border-slate-200 overflow-hidden shrink-0">
                            <img src={b.imageUrl} className="w-full h-full object-cover" alt="" />
                          </div>
                          <div>
                            <div className="font-extrabold text-slate-900 line-clamp-1">{b.title}</div>
                            <div className="text-xs text-slate-500 font-medium mt-0.5">{b.category} • {b.tag}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <button onClick={() => setBanners(banners.map(item => item.id === b.id ? {...item, active: !item.active} : item))} className={`px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wide border ${b.active ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-slate-100 text-slate-500 border-slate-200'}`}>
                          {b.active ? 'Live' : 'Hidden'}
                        </button>
                      </td>
                      <td className="p-4 pr-6 text-right">
                        <div className="flex justify-end gap-1.5">
                          <button onClick={() => setEditingBanner(b)} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"><Edit3 className="w-4 h-4"/></button>
                          <button onClick={() => setBanners(banners.filter(item => item.id !== b.id))} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"><Trash2 className="w-4 h-4"/></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ADMIN: Stores & Leasing CMS */}
        {adminTab === 'stores' && (
          <div className="space-y-6 max-w-6xl mx-auto">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Store Directory ({stores.length})</h2>
              <button onClick={() => setEditingStore({name: '', city: '', province: 'Albay', type: 'Supermarket', address: '', contact: '', hours: '8:00 AM - 8:00 PM', isMajorMall: false, leasingUnits: [], isNew: true})} className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-lg text-sm shadow-sm flex items-center gap-2 transition-colors"><Plus className="w-4 h-4"/> Add Branch</button>
            </div>

            {editingStore && (
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm animate-fadeIn space-y-6">
                <h3 className="text-lg font-extrabold flex items-center gap-2 text-slate-900 border-b border-slate-100 pb-3">
                  {editingStore.isNew ? <Plus className="text-blue-500 w-5 h-5" /> : <Edit3 className="text-amber-500 w-5 h-5" />} 
                  {editingStore.isNew ? 'Register New Branch' : 'Edit Branch Details'}
                </h3>
                <form onSubmit={handleSaveStore} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Store Name</label>
                      <input type="text" required value={editingStore.name} onChange={e => setEditingStore({...editingStore, name: e.target.value})} placeholder="e.g. LCC Mall Legazpi" className="w-full p-3 rounded-lg bg-slate-50 border border-slate-200 font-medium text-sm focus:outline-none focus:border-blue-500 focus:bg-white" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Store Type</label>
                      <select value={editingStore.type} onChange={e => setEditingStore({...editingStore, type: e.target.value})} className="w-full p-3 rounded-lg bg-slate-50 border border-slate-200 font-medium text-sm focus:outline-none focus:border-blue-500 focus:bg-white">
                        <option>LCC Mall</option><option>Supermarket</option><option>Department Store</option><option>Express</option><option>Home Center</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Province</label>
                      <select value={editingStore.province} onChange={e => setEditingStore({...editingStore, province: e.target.value})} className="w-full p-3 rounded-lg bg-slate-50 border border-slate-200 font-medium text-sm focus:outline-none focus:border-blue-500 focus:bg-white">
                        <option>Albay</option><option>Camarines Sur</option><option>Sorsogon</option><option>Masbate</option><option>Camarines Norte</option><option>Antique</option><option>Catanduanes</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">City</label>
                      <input type="text" required value={editingStore.city} onChange={e => setEditingStore({...editingStore, city: e.target.value})} className="w-full p-3 rounded-lg bg-slate-50 border border-slate-200 font-medium text-sm focus:outline-none focus:border-blue-500 focus:bg-white" />
                    </div>
                    <div className="lg:col-span-2">
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Address</label>
                      <input type="text" value={editingStore.address} onChange={e => setEditingStore({...editingStore, address: e.target.value})} placeholder="Full Street Address" className="w-full p-3 rounded-lg bg-slate-50 border border-slate-200 font-medium text-sm focus:outline-none focus:border-blue-500 focus:bg-white" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Contact Number</label>
                      <input type="text" value={editingStore.contact} onChange={e => setEditingStore({...editingStore, contact: e.target.value})} className="w-full p-3 rounded-lg bg-slate-50 border border-slate-200 font-medium text-sm focus:outline-none focus:border-blue-500 focus:bg-white" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Operating Hours</label>
                      <input type="text" value={editingStore.hours} onChange={e => setEditingStore({...editingStore, hours: e.target.value})} placeholder="8:00 AM - 8:00 PM" className="w-full p-3 rounded-lg bg-slate-50 border border-slate-200 font-medium text-sm focus:outline-none focus:border-blue-500 focus:bg-white" />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                    <input type="checkbox" id="majorMallToggle" checked={editingStore.isMajorMall} onChange={e => setEditingStore({...editingStore, isMajorMall: e.target.checked})} className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300" />
                    <label htmlFor="majorMallToggle" className="font-bold text-blue-900 cursor-pointer text-sm">Flag as Major Mall (Enables Commercial Leasing Properties Module)</label>
                  </div>

                  {editingStore.isMajorMall && (
                    <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 shadow-inner space-y-4">
                      <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                        <div>
                          <h4 className="text-base font-extrabold text-slate-900">Commercial Leasing Spaces</h4>
                          <p className="text-xs font-medium text-slate-500 mt-0.5">Manage rentable units and upload photos for this specific mall.</p>
                        </div>
                        <button type="button" onClick={() => {
                          const newUnit = { id: `u-${Date.now()}`, unitCode: '', floor: 'Ground Floor', sizeSqM: '', type: 'Retail Space', rateEstimate: '', status: 'Available Now', images: [], description: '', suitableFor: '' };
                          setEditingStore({...editingStore, leasingUnits: [...(editingStore.leasingUnits || []), newUnit]});
                        }} className="bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-lg font-bold text-xs flex items-center gap-1.5 hover:bg-slate-50 shadow-sm">
                          <Plus className="w-3.5 h-3.5"/> Add Unit
                        </button>
                      </div>
                      <div className="space-y-3">
                        {(editingStore.leasingUnits || []).map((unit, idx) => (
                          <div key={unit.id} className="bg-white p-4 rounded-xl border border-slate-200 gap-3 relative pr-10 shadow-sm space-y-4">
                            
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                              <div>
                                <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">Unit Code</label>
                                <input type="text" placeholder="L1-102" value={unit.unitCode} onChange={e => { const updated = [...editingStore.leasingUnits]; updated[idx].unitCode = e.target.value; setEditingStore({...editingStore, leasingUnits: updated}); }} className="w-full p-2 border border-slate-200 rounded-md font-bold text-sm focus:outline-none focus:border-blue-500" />
                              </div>
                              <div>
                                <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">Floor Level</label>
                                <input type="text" placeholder="Ground Floor" value={unit.floor} onChange={e => { const updated = [...editingStore.leasingUnits]; updated[idx].floor = e.target.value; setEditingStore({...editingStore, leasingUnits: updated}); }} className="w-full p-2 border border-slate-200 rounded-md font-bold text-sm focus:outline-none focus:border-blue-500" />
                              </div>
                              <div>
                                <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">Size (sq.m)</label>
                                <input type="number" placeholder="45" value={unit.sizeSqM} onChange={e => { const updated = [...editingStore.leasingUnits]; updated[idx].sizeSqM = e.target.value; setEditingStore({...editingStore, leasingUnits: updated}); }} className="w-full p-2 border border-slate-200 rounded-md font-bold text-sm focus:outline-none focus:border-blue-500" />
                              </div>
                              <div>
                                <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">Type</label>
                                <input type="text" placeholder="Retail Space" value={unit.type} onChange={e => { const updated = [...editingStore.leasingUnits]; updated[idx].type = e.target.value; setEditingStore({...editingStore, leasingUnits: updated}); }} className="w-full p-2 border border-slate-200 rounded-md font-bold text-sm focus:outline-none focus:border-blue-500" />
                              </div>
                              <div>
                                <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">Status</label>
                                <select value={unit.status} onChange={e => { const updated = [...editingStore.leasingUnits]; updated[idx].status = e.target.value; setEditingStore({...editingStore, leasingUnits: updated}); }} className="w-full p-2 border border-slate-200 rounded-md font-bold text-sm focus:outline-none focus:border-blue-500 bg-white">
                                  <option>Available Now</option><option>Occupied</option><option>Under Renovation</option>
                                </select>
                              </div>
                            </div>

                            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 border-dashed">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Unit Photos ({unit.images?.length || 0})</span>
                                <label className="cursor-pointer bg-white border border-slate-200 hover:border-blue-400 text-blue-600 font-bold text-xs px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-colors">
                                  <Upload className="w-3.5 h-3.5" /> Upload Photos
                                  <input type="file" multiple accept="image/*" className="hidden" onChange={(e) => {
                                    handleImageUpload(e, unit.images, (newImages) => {
                                      const updated = [...editingStore.leasingUnits];
                                      updated[idx].images = newImages;
                                      setEditingStore({...editingStore, leasingUnits: updated});
                                    });
                                  }} />
                                </label>
                              </div>
                              {unit.images?.length > 0 && (
                                <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
                                  {unit.images.map((img, imgIdx) => (
                                    <div key={imgIdx} className="w-20 h-20 shrink-0 relative rounded-md overflow-hidden border border-slate-200 group/img">
                                      <img src={img} alt="" className="w-full h-full object-cover" />
                                      <button type="button" onClick={() => {
                                        const updatedUnits = [...editingStore.leasingUnits];
                                        updatedUnits[idx].images = updatedUnits[idx].images.filter((_, i) => i !== imgIdx);
                                        setEditingStore({...editingStore, leasingUnits: updatedUnits});
                                      }} className="absolute inset-0 bg-red-600/80 text-white flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
                                        <Trash2 className="w-4 h-4" />
                                      </button>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>

                            <button type="button" onClick={() => {
                              const updated = editingStore.leasingUnits.filter((_, i) => i !== idx);
                              setEditingStore({...editingStore, leasingUnits: updated});
                            }} className="absolute right-3 top-3 p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors" title="Delete Unit">
                              <Trash2 className="w-4 h-4"/>
                            </button>
                          </div>
                        ))}
                        {(!editingStore.leasingUnits || editingStore.leasingUnits.length === 0) && (
                          <div className="text-center py-6 text-sm font-bold text-slate-400">No leasing units added yet.</div>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex justify-end gap-2 pt-4 border-t border-slate-100">
                    <button type="button" onClick={() => setEditingStore(null)} className="px-5 py-2.5 bg-white border border-slate-200 text-slate-600 font-bold rounded-lg text-sm hover:bg-slate-50">Cancel</button>
                    <button type="submit" className="bg-blue-600 text-white font-bold px-6 py-2.5 rounded-lg shadow-sm hover:bg-blue-700 text-sm transition-colors">{editingStore.isNew ? 'Save Branch' : 'Update Branch'}</button>
                  </div>
                </form>
              </div>
            )}

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-200 text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                  <tr><th className="p-4 pl-6">Store Name & Location</th><th className="p-4">Classification</th><th className="p-4 text-right pr-6">Actions</th></tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {stores.map(s => (
                    <tr key={s.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-4 pl-6">
                        <div className="font-extrabold text-slate-900">{s.name}</div>
                        <div className="text-xs text-slate-500 font-medium mt-0.5">{s.city}, {s.province}</div>
                      </td>
                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wide border ${s.isMajorMall ? 'bg-amber-50 text-amber-700 border-amber-200' : 'bg-slate-50 text-slate-600 border-slate-200'}`}>
                          {s.type}
                        </span>
                      </td>
                      <td className="p-4 pr-6 text-right">
                        <div className="flex justify-end gap-1.5">
                          <button onClick={() => setEditingStore(s)} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"><Edit3 className="w-4 h-4"/></button>
                          <button onClick={() => setStores(stores.filter(store => store.id !== s.id))} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"><Trash2 className="w-4 h-4"/></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ADMIN: Events CMS */}
        {adminTab === 'events' && (
          <div className="space-y-6 max-w-5xl mx-auto">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Venue Reservations</h2>
              <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">{eventBookings.length} Total</span>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-200 text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                  <tr><th className="p-4 pl-6">Event Details</th><th className="p-4">Client Contact</th><th className="p-4 text-right pr-6">Status</th></tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {eventBookings.map(ev => (
                    <tr key={ev.id} onClick={() => setInspectingBooking(ev)} className="hover:bg-slate-50 transition-colors cursor-pointer group">
                      <td className="p-4 pl-6">
                        <div className="font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">{ev.clientName}</div>
                        <div className="text-xs text-slate-500 font-medium mt-0.5">{ev.eventType} • {ev.branch}</div>
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-slate-700">{ev.contactPerson}</div>
                        <div className="text-xs text-slate-500 font-medium mt-0.5">{ev.email}</div>
                      </td>
                      <td className="p-4 pr-6 text-right">
                        <span className={`px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wide border ${
                          ev.status === 'Approved' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 
                          ev.status === 'Pending' ? 'bg-amber-50 text-amber-700 border-amber-200' : 'bg-slate-50 text-slate-600 border-slate-200'
                        }`}>{ev.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {eventBookings.length === 0 && <div className="p-8 text-center text-slate-500 font-medium">No event bookings received yet.</div>}
            </div>
          </div>
        )}

        {/* ADMIN: Leasing CMS */}
        {adminTab === 'leasing' && (
          <div className="space-y-6 max-w-5xl mx-auto">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Leasing Profiles</h2>
              <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">{leasingTickets.length} Inquiries</span>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-200 text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                  <tr><th className="p-4 pl-6">Brand Profile</th><th className="p-4">Target Unit</th><th className="p-4 text-right pr-6">Status</th></tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {leasingTickets.map(ls => (
                    <tr key={ls.id} onClick={() => setInspectingLeasingTicket(ls)} className="hover:bg-slate-50 transition-colors cursor-pointer group">
                      <td className="p-4 pl-6">
                        <div className="font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">{ls.businessName}</div>
                        <div className="text-xs text-slate-500 font-medium mt-0.5">{ls.type} • Rep: {ls.repName}</div>
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-slate-700">{ls.preferredBranch}</div>
                        <div className="text-xs text-slate-500 font-medium mt-0.5">{ls.targetUnitCode}</div>
                      </td>
                      <td className="p-4 pr-6 text-right">
                        <span className={`px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wide border ${
                          ls.status === 'Approved' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 
                          ls.status === 'New Inquiry' ? 'bg-blue-50 text-blue-700 border-blue-200' : 
                          ls.status === 'Under Review' ? 'bg-amber-50 text-amber-700 border-amber-200' : 'bg-slate-50 text-slate-600 border-slate-200'
                        }`}>{ls.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {leasingTickets.length === 0 && <div className="p-8 text-center text-slate-500 font-medium">No leasing inquiries received yet.</div>}
            </div>
          </div>
        )}

        {/* ADMIN: Foundation CSR CMS */}
        {adminTab === 'foundation' && (
          <div className="space-y-6 max-w-5xl mx-auto">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Foundation Outreach</h2>
              <button onClick={() => setEditingFoundation({title: '', location: '', date: '', category: 'Community Outreach', images: [], description: '', isNew: true})} className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-lg text-sm shadow-sm flex items-center gap-2 transition-colors"><Plus className="w-4 h-4"/> Post Article</button>
            </div>

            {editingFoundation && (
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm animate-fadeIn">
                <h3 className="text-lg font-extrabold mb-5 flex items-center gap-2 text-slate-900 border-b border-slate-100 pb-3">
                  {editingFoundation.isNew ? <Plus className="text-emerald-500 w-5 h-5" /> : <Edit3 className="text-amber-500 w-5 h-5" />} 
                  {editingFoundation.isNew ? 'Draft New Outreach Story' : 'Edit Story Details'}
                </h3>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  if (editingFoundation.isNew) {
                    const created = { ...editingFoundation, id: `fnd-${Date.now()}` };
                    delete created.isNew;
                    setFoundationEvents([created, ...foundationEvents]);
                    showToast('Foundation Story Published!');
                  } else {
                    setFoundationEvents(foundationEvents.map(f => f.id === editingFoundation.id ? editingFoundation : f));
                    showToast('Foundation Story Updated!');
                  }
                  setEditingFoundation(null);
                }} className="grid grid-cols-2 gap-5">
                  <div className="col-span-2">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Article Title</label>
                    <input type="text" required value={editingFoundation.title} onChange={e => setEditingFoundation({...editingFoundation, title: e.target.value})} className="w-full p-3 rounded-lg bg-slate-50 border border-slate-200 font-medium text-sm focus:outline-none focus:border-emerald-500" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Category</label>
                    <select value={editingFoundation.category} onChange={e => setEditingFoundation({...editingFoundation, category: e.target.value})} className="w-full p-3 rounded-lg bg-slate-50 border border-slate-200 font-medium text-sm focus:outline-none focus:border-emerald-500">
                      <option>Community Outreach</option><option>Education Support</option><option>Youth Development</option><option>Disaster Relief</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Event Date</label>
                    <input type="text" required value={editingFoundation.date} onChange={e => setEditingFoundation({...editingFoundation, date: e.target.value})} placeholder="e.g. June 29, 2026" className="w-full p-3 rounded-lg bg-slate-50 border border-slate-200 font-medium text-sm focus:outline-none focus:border-emerald-500" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Location</label>
                    <input type="text" required value={editingFoundation.location} onChange={e => setEditingFoundation({...editingFoundation, location: e.target.value})} placeholder="e.g. Masbate Island" className="w-full p-3 rounded-lg bg-slate-50 border border-slate-200 font-medium text-sm focus:outline-none focus:border-emerald-500" />
                  </div>
                  
                  {/* MULTI IMAGE UPLOAD FOR FOUNDATION */}
                  <div className="col-span-2 bg-slate-50 p-4 rounded-xl border border-slate-200 border-dashed">
                    <div className="flex items-center justify-between mb-3">
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">Event Photos ({editingFoundation.images?.length || 0})</label>
                      <label className="cursor-pointer bg-white border border-slate-200 hover:border-emerald-500 text-emerald-600 font-bold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm transition-colors">
                        <Upload className="w-4 h-4" /> Upload Images
                        <input type="file" multiple accept="image/*" className="hidden" onChange={(e) => {
                          handleImageUpload(e, editingFoundation.images, (newImages) => {
                            setEditingFoundation({...editingFoundation, images: newImages});
                          });
                        }} />
                      </label>
                    </div>
                    {editingFoundation.images?.length > 0 ? (
                      <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar">
                        {editingFoundation.images.map((img, idx) => (
                          <div key={idx} className="w-24 h-24 shrink-0 relative rounded-lg overflow-hidden border border-slate-200 shadow-sm group">
                            <img src={img} alt="" className="w-full h-full object-cover" />
                            <button type="button" onClick={() => setEditingFoundation({...editingFoundation, images: editingFoundation.images.filter((_, i) => i !== idx)})} className="absolute inset-0 bg-red-600/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-4 text-xs font-bold text-slate-400">No images uploaded yet.</div>
                    )}
                  </div>

                  <div className="col-span-2">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Full Story Description</label>
                    <textarea required value={editingFoundation.description} onChange={e => setEditingFoundation({...editingFoundation, description: e.target.value})} className="w-full p-3 rounded-lg bg-slate-50 border border-slate-200 font-medium text-sm focus:outline-none focus:border-emerald-500 h-32 resize-none" />
                  </div>
                  <div className="col-span-2 flex justify-end gap-2 pt-4 border-t border-slate-100">
                    <button type="button" onClick={() => setEditingFoundation(null)} className="px-5 py-2.5 bg-white border border-slate-200 text-slate-600 font-bold rounded-lg text-sm hover:bg-slate-50">Cancel</button>
                    <button type="submit" className="bg-emerald-600 text-white font-bold px-6 py-2.5 rounded-lg shadow-sm hover:bg-emerald-700 text-sm transition-colors">{editingFoundation.isNew ? 'Publish Article' : 'Save Changes'}</button>
                  </div>
                </form>
              </div>
            )}

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-200 text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                  <tr><th className="p-4 pl-6">Article Details</th><th className="p-4">Location</th><th className="p-4 text-right pr-6">Actions</th></tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {foundationEvents.map(f => (
                    <tr key={f.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-4 pl-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded bg-slate-100 border border-slate-200 overflow-hidden shrink-0">
                            <img src={f.images?.[0] || ''} className="w-full h-full object-cover" alt="" />
                          </div>
                          <div>
                            <div className="font-extrabold text-slate-900">{f.title}</div>
                            <div className="text-xs text-slate-500 font-medium mt-0.5">{f.category} • {f.images?.length || 0} Photos</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 font-medium text-slate-700">{f.location}</td>
                      <td className="p-4 pr-6 text-right">
                        <div className="flex justify-end gap-1.5">
                          <button onClick={() => setEditingFoundation(f)} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"><Edit3 className="w-4 h-4"/></button>
                          <button onClick={() => setFoundationEvents(foundationEvents.filter(item => item.id !== f.id))} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"><Trash2 className="w-4 h-4"/></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {foundationEvents.length === 0 && <div className="p-8 text-center text-slate-500 font-medium">No CSR events posted yet.</div>}
            </div>
          </div>
        )}

      </div>

      {/* ADMIN INSPECTOR MODALS */}
      {(inspectingBooking || inspectingLeasingTicket) && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl">
            <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-5">
              <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">{inspectingBooking ? 'Venue Booking Request' : 'Tenant Qualifier Profile'}</h3>
              <button onClick={() => { setInspectingBooking(null); setInspectingLeasingTicket(null); }} className="p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors"><X className="w-5 h-5"/></button>
            </div>
            
            <div className="space-y-4 text-sm font-medium text-slate-600">
              {inspectingBooking && (
                <>
                  <div><span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Event Name</span> <span className="text-slate-900 font-extrabold text-base">{inspectingBooking.clientName}</span></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div><span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Category</span> <span className="text-slate-900 font-bold">{inspectingBooking.eventType}</span></div>
                    <div><span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Target Date</span> <span className="text-slate-900 font-bold">{inspectingBooking.eventDate || 'TBD'}</span></div>
                  </div>
                  <div><span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Preferred Venue</span> <span className="text-slate-900 font-bold">{inspectingBooking.branch}</span></div>
                  
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-3 mt-2">
                    <div><span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Primary Contact</span> <span className="text-slate-900 font-bold">{inspectingBooking.contactPerson}</span></div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-blue-500"/> {inspectingBooking.phone}</div>
                      <div className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-blue-500"/> {inspectingBooking.email}</div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Application Status</label>
                    <select value={inspectingBooking.status} onChange={e => {
                      const updated = eventBookings.map(item => item.id === inspectingBooking.id ? { ...item, status: e.target.value } : item);
                      setEventBookings(updated);
                      setInspectingBooking({...inspectingBooking, status: e.target.value});
                      showToast(`Booking status updated to ${e.target.value}`);
                    }} className="w-full p-3 rounded-lg bg-slate-50 border border-slate-200 font-bold text-sm focus:outline-none focus:border-blue-500">
                      <option>Pending</option><option>Under Review</option><option>Approved</option><option>Cancelled</option><option>Rejected</option>
                    </select>
                  </div>
                </>
              )}
              {inspectingLeasingTicket && (
                <>
                  <div><span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Brand / Business</span> <span className="text-slate-900 font-extrabold text-base">{inspectingLeasingTicket.businessName}</span></div>
                  <div><span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Concept</span> <span className="text-slate-700 leading-relaxed">{inspectingLeasingTicket.conceptDetail}</span></div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div><span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Category</span> <span className="text-slate-900 font-bold">{inspectingLeasingTicket.type}</span></div>
                    <div><span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Experience Level</span> <span className="text-slate-900 font-bold">{inspectingLeasingTicket.experienceLevel}</span></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div><span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Target Unit</span> <span className="text-slate-900 font-bold">{inspectingLeasingTicket.preferredBranch} ({inspectingLeasingTicket.targetUnitCode})</span></div>
                    <div><span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Est. Budget</span> <span className="text-slate-900 font-bold">{inspectingLeasingTicket.budgetRange}</span></div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-3 mt-2">
                    <div><span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Brand Representative</span> <span className="text-slate-900 font-bold">{inspectingLeasingTicket.repName}</span></div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-blue-500"/> {inspectingLeasingTicket.phone}</div>
                      <div className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-blue-500"/> {inspectingLeasingTicket.email}</div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Application Status</label>
                    <select value={inspectingLeasingTicket.status} onChange={e => {
                      const updated = leasingTickets.map(item => item.id === inspectingLeasingTicket.id ? { ...item, status: e.target.value } : item);
                      setLeasingTickets(updated);
                      setInspectingLeasingTicket({...inspectingLeasingTicket, status: e.target.value});
                      showToast(`Leasing status updated to ${e.target.value}`);
                    }} className="w-full p-3 rounded-lg bg-slate-50 border border-slate-200 font-bold text-sm focus:outline-none focus:border-blue-500">
                      <option>New Inquiry</option><option>Under Review</option><option>Approved</option><option>Cancelled</option><option>Rejected</option>
                    </select>
                  </div>
                </>
              )}
            </div>
            
            <div className="pt-5 mt-2">
              <button onClick={() => { setInspectingBooking(null); setInspectingLeasingTicket(null); }} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold shadow-sm transition-colors text-sm">Save & Close Inspector</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}