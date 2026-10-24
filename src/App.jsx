// src/App.jsx
import React, { useState, useMemo } from 'react';
import { Sparkles } from 'lucide-react';

// Shared Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Directory from './pages/Directory';
import Leasing from './pages/Leasing';
import Events from './pages/Events';
import Rewards from './pages/Rewards';
import Promos from './pages/Promos';
import About from './pages/About';
import Foundation from './pages/Foundation';
import AdminPortal from './pages/AdminPortal';

// Global Data
import { 
  INITIAL_BANNERS, INITIAL_STORES, INITIAL_EVENT_BOOKINGS, INITIAL_LEASING_TICKETS
} from './data/mockData';

// Initial Foundation Articles
const INITIAL_FOUNDATION_EVENTS = [
  { id: 'fnd-1', title: "Brigada Eskwela 2026 Outreach", location: "Masbate Island", date: "June 29, 2026", category: "Community Outreach", images: ["https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800", "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?auto=format&fit=crop&q=80&w=800"], description: "Supporting local schools in Masbate Island by providing essential cleaning materials, school supplies, and volunteer manpower to prepare classrooms for the upcoming academic year. LCC employees dedicated their weekend to ensure students return to a safe and inspiring environment." },
  { id: 'fnd-2', title: "Learning Readiness Program", location: "Tamaoyan Elementary School", date: "June 29, 2026", category: "Education Support", images: ["https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800"], description: "Equipping young learners at Tamaoyan Elementary with reading materials, educational kits, and foundational learning tools to ensure they are ready to tackle the new syllabus. This ongoing initiative aims to bridge the resource gap in rural educational facilities." },
  { id: 'fnd-3', title: "Oplan Balik Eskwela 2026", location: "Gogon National High School", date: "June 29, 2026", category: "Youth Development", images: ["https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800"], description: "A comprehensive initiative providing back-to-school support, hygiene kits, and infrastructure assistance to Gogon National High School students and faculty. The Foundation also sponsored a new reading corner for the library." }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [notification, setNotification] = useState(null);

  // Global App State
  const [banners, setBanners] = useState(INITIAL_BANNERS);
  const [stores, setStores] = useState(INITIAL_STORES);
  const [eventBookings, setEventBookings] = useState(INITIAL_EVENT_BOOKINGS);
  const [leasingTickets, setLeasingTickets] = useState(INITIAL_LEASING_TICKETS);
  const [foundationEvents, setFoundationEvents] = useState(INITIAL_FOUNDATION_EVENTS);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Derived Global Data
  const majorMalls = useMemo(() => stores.filter(s => s.isMajorMall), [stores]);

  // Shared Form States
  const [selectedLeasingStoreId, setSelectedLeasingStoreId] = useState(majorMalls[0]?.id || INITIAL_STORES[0].id);
  const currentLeasingStore = useMemo(() => majorMalls.find(s => s.id === selectedLeasingStoreId) || majorMalls[0], [majorMalls, selectedLeasingStoreId]);

  // Leasing Form State
  const [leasingStep, setLeasingStep] = useState(1);
  const [leasingForm, setLeasingForm] = useState({
    businessName: '', type: 'Food & Beverage', conceptDetail: '', experienceLevel: 'Startup Concept', targetAudience: '', preferredBranch: 'LCC Mall Legazpi', targetUnitCode: 'Or Any Available Space', targetSpaceSqM: '30-50 sq.m', budgetRange: '₱30k - ₱50k', repName: '', email: '', phone: ''
  });
  const [leasingSuccess, setLeasingSuccess] = useState(false);

  // Events Form State
  const [bookingForm, setBookingForm] = useState({ branch: 'LCC Mall Legazpi (Main Center)', eventType: 'Exhibition & Fair', clientName: '', contactPerson: '', email: '', phone: '' });
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Directory Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All Categories');
  const [selectedProvince, setSelectedProvince] = useState('All Provinces');

  // Home Page State
  const [activeBannerIdx, setActiveBannerIdx] = useState(0);

  // Notification Helper
  const showToast = (msg, type = 'success') => {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 3000);
  };

  // Submit Handlers
  const handleLeasingSubmit = (e) => {
    e.preventDefault();
    if (leasingStep < 4) { setLeasingStep(leasingStep + 1); return; }
    const created = { ...leasingForm, id: `ls-${Date.now().toString().slice(-4)}`, status: 'New Inquiry', createdAt: new Date().toISOString().split('T')[0] };
    setLeasingTickets([created, ...leasingTickets]);
    setLeasingSuccess(true);
    showToast('Leasing Profile Submitted Successfully!');
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const created = { ...bookingForm, id: `ev-${Date.now().toString().slice(-4)}`, status: 'Pending', createdAt: new Date().toISOString().split('T')[0] };
    setEventBookings([created, ...eventBookings]);
    setBookingSuccess(true);
    showToast('Venue Reservation Submitted Successfully!');
  };

  const filteredStores = useMemo(() => {
    return stores.filter(store => {
      const matchesSearch = store.name.toLowerCase().includes(searchQuery.toLowerCase()) || store.city.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = selectedType === 'All Categories' || store.type === selectedType;
      const matchesProvince = selectedProvince === 'All Provinces' || store.province === selectedProvince;
      return matchesSearch && matchesType && matchesProvince;
    });
  }, [stores, searchQuery, selectedType, selectedProvince]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-300 selection:text-blue-950">
      
      {notification && (
        <div className={`fixed top-5 right-5 z-50 px-6 py-4 rounded-xl shadow-lg font-bold flex items-center gap-3 transition-all duration-300 ${
          notification.type === 'error' ? 'bg-red-600 text-white' : 'bg-slate-900 text-white'
        }`}>
          <Sparkles className="w-5 h-5 text-amber-400" />
          <span className="text-sm">{notification.msg}</span>
        </div>
      )}

      {activeTab !== 'admin' && (
        <Header activeTab={activeTab} setActiveTab={setActiveTab} isLoggedIn={isLoggedIn} storeCount={stores.length} />
      )}

      <main>
        {activeTab === 'home' && (
          <Home 
            banners={banners} activeBannerIdx={activeBannerIdx} setActiveBannerIdx={setActiveBannerIdx} 
            majorMalls={majorMalls} stores={stores} setActiveTab={setActiveTab} 
            setSelectedLeasingStoreId={setSelectedLeasingStoreId} 
          />
        )}

        {activeTab === 'locator' && (
          <Directory 
            stores={stores} searchQuery={searchQuery} setSearchQuery={setSearchQuery} 
            selectedProvince={selectedProvince} setSelectedProvince={setSelectedProvince} 
            selectedType={selectedType} setSelectedType={setSelectedType} 
            filteredStores={filteredStores} setActiveTab={setActiveTab} 
            setSelectedLeasingStoreId={setSelectedLeasingStoreId} 
          />
        )}

        {activeTab === 'leasing' && (
          <Leasing 
            majorMalls={majorMalls} selectedLeasingStoreId={selectedLeasingStoreId} 
            setSelectedLeasingStoreId={setSelectedLeasingStoreId} currentLeasingStore={currentLeasingStore} 
            leasingForm={leasingForm} setLeasingForm={setLeasingForm} leasingStep={leasingStep} 
            setLeasingStep={setLeasingStep} leasingSuccess={leasingSuccess} 
            setLeasingSuccess={setLeasingSuccess} handleLeasingSubmit={handleLeasingSubmit} 
          />
        )}

        {activeTab === 'events' && (
          <Events 
            bookingForm={bookingForm} setBookingForm={setBookingForm} 
            bookingSuccess={bookingSuccess} setBookingSuccess={setBookingSuccess} 
            handleBookingSubmit={handleBookingSubmit} 
          />
        )}

        {activeTab === 'rewards' && <Rewards setActiveTab={setActiveTab} />}
        {activeTab === 'promos' && <Promos banners={banners} />}
        {activeTab === 'about' && <About storeCount={stores.length} />}
        {activeTab === 'foundation' && <Foundation foundationEvents={foundationEvents} />}

        {activeTab === 'admin' && (
          <AdminPortal 
            isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setActiveTab={setActiveTab} showToast={showToast}
            banners={banners} setBanners={setBanners} stores={stores} setStores={setStores}
            eventBookings={eventBookings} setEventBookings={setEventBookings}
            leasingTickets={leasingTickets} setLeasingTickets={setLeasingTickets}
            foundationEvents={foundationEvents} setFoundationEvents={setFoundationEvents}
          />
        )}
      </main>

      {activeTab !== 'admin' && (
        <Footer storeCount={stores.length} setActiveTab={setActiveTab} />
      )}
    </div>
  );
}