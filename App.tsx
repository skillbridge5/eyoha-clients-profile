
import React, { useState } from 'react';
import { PortfolioCard } from './components/PortfolioCard';
import { CLIENTS } from './constants';
import { Client, Platform } from './types';

const App: React.FC = () => {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const Logo = ({ className = "h-8" }: { className?: string }) => (
    <div className={`flex items-center ${className}`}>
      <svg viewBox="0 0 100 100" className="h-full w-auto mr-3" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7e22ce" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>
        <path d="M70 20C50 15 20 30 15 55C10 80 40 90 60 85C80 80 90 60 85 45" stroke="url(#logoGrad)" strokeWidth="10" strokeLinecap="round" />
        <path d="M60 85L85 65" stroke="url(#logoGrad)" strokeWidth="6" strokeLinecap="round" />
        <circle cx="85" cy="65" r="4" fill="#f97316" />
        <circle cx="90" cy="60" r="3" fill="#f97316" />
        <circle cx="80" cy="55" r="3" fill="#f97316" />
      </svg>
      <div className="flex flex-col">
        <span className="brand-font text-2xl leading-none text-slate-900">EYOHA</span>
        <span className="brand-font text-[11px] leading-none text-purple-700 tracking-[0.25em] -mt-0.5">DIGITALS</span>
      </div>
    </div>
  );

  const getPlatformIcon = (platform: Platform) => {
    switch (platform) {
      case 'Facebook': return '👥';
      case 'Instagram': return '📸';
      case 'TikTok': return '🎵';
      case 'X': return '✖️';
      case 'LinkedIn': return '💼';
      case 'Website': return '🌐';
      case 'Threads': return '🧵';
      case 'YouTube': return '🎬';
      case 'Pinterest': return '📌';
      default: return '🔗';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-purple-100 transition-all duration-300">
      {/* Simple Header */}
      <header className="bg-white border-b border-slate-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <button onClick={() => setSelectedClient(null)} className="hover:opacity-80 transition-opacity">
            <Logo className="h-12" />
          </button>
          <div className="text-center md:text-right">
            <h2 className="text-slate-500 font-medium text-sm tracking-widest uppercase">
              {selectedClient ? 'Project Profiles' : 'Client Portfolio'}
            </h2>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {selectedClient ? (
          // Client Detail View (The requested page where all social links are dropped)
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => setSelectedClient(null)}
              className="group mb-8 flex items-center text-sm font-bold text-slate-500 hover:text-purple-700 transition-colors bg-white px-5 py-2.5 rounded-full border border-slate-200 shadow-sm"
            >
              <svg className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Client List
            </button>

            <div className="bg-white rounded-[2.5rem] p-8 md:p-16 border border-slate-100 shadow-2xl overflow-hidden relative">
              <div className="flex flex-col lg:flex-row gap-16 items-start relative z-10">
                <div className="w-full lg:w-1/3">
                  <div className="aspect-square rounded-[2rem] overflow-hidden bg-white border-8 border-slate-50 shadow-xl group">
                    <img 
                      src={selectedClient.logoUrl} 
                      alt={selectedClient.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Agency Service</h4>
                    <p className="text-slate-700 font-medium">Full Ecosystem Management</p>
                  </div>
                </div>
                
                <div className="w-full lg:w-2/3">
                  <div className="mb-10">
                    <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">{selectedClient.name}</h1>
                    <p className="text-xl text-slate-500 leading-relaxed font-light">
                      {selectedClient.description}
                    </p>
                  </div>

                  <div className="bg-purple-50/50 rounded-3xl p-8 border border-purple-100">
                    <div className="flex items-center gap-4 mb-10">
                      <h3 className="text-xs font-black text-purple-700 uppercase tracking-[0.3em]">Managed Social Platforms</h3>
                      <div className="h-px flex-1 bg-purple-200"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedClient.socialLinks.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-orange-400 hover:shadow-xl hover:-translate-y-1 transition-all group"
                        >
                          <div className="w-14 h-14 flex items-center justify-center bg-slate-50 rounded-2xl mr-5 text-3xl group-hover:bg-orange-50 transition-colors">
                            {getPlatformIcon(link.platform)}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{link.platform}</span>
                            <span className="text-slate-900 font-bold group-hover:text-purple-700">View Live Work</span>
                          </div>
                          <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background Glows */}
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-purple-200 rounded-full blur-[120px] opacity-30 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-orange-200 rounded-full blur-[120px] opacity-30 pointer-events-none"></div>
            </div>
          </div>
        ) : (
          // Portfolio Grid View
          <div className="animate-in fade-in duration-500">
            <div className="mb-20 text-center relative">
              <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-6">Featured Clients</span>
              <h1 className="text-6xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">Previous Work</h1>
              <p className="text-slate-400 text-xl max-w-2xl mx-auto font-light leading-relaxed">
                Click "View Managed Work" on any client below to see the specific <span className="text-purple-600 font-semibold">Facebook, Instagram, TikTok, X, LinkedIn, Website, and Threads</span> profiles we manage.
              </p>
              
              {/* Decorative Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-slate-100 rounded-full -z-10 blur-3xl opacity-50"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
              {CLIENTS.map((client) => (
                <PortfolioCard 
                  key={client.id} 
                  client={client} 
                  onViewDetails={setSelectedClient} 
                />
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Modern Footer */}
      <footer className="bg-white border-t border-slate-100 py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <Logo className="h-12 mb-10" />
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-12">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Facebook
              </span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span> Instagram
              </span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-black rounded-full"></span> TikTok
              </span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> X
              </span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-700 rounded-full"></span> LinkedIn
              </span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Website
              </span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-800 rounded-full"></span> Threads
              </span>
            </div>
            <div className="pt-12 border-t border-slate-50 w-full text-center">
              <p className="text-slate-300 text-[10px] font-black uppercase tracking-[0.5em]">
                &copy; {new Date().getFullYear()} EYOHA DIGITALS &bull; Global Digital Management
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
