
import React from 'react';
import { Client } from '../types';

interface PortfolioCardProps {
  client: Client;
  onViewDetails: (client: Client) => void;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ client, onViewDetails }) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={client.logoUrl}
          alt={client.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold tracking-wider text-purple-700 uppercase">
            {client.socialLinks.length} Platforms Managed
          </span>
          <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{client.name}</h3>
        <p className="text-slate-600 text-sm mb-6 line-clamp-2">
          {client.description}
        </p>
        <button
          onClick={() => onViewDetails(client)}
          className="inline-flex items-center text-sm font-semibold text-purple-700 hover:text-purple-900 transition-colors"
        >
          View Managed Work
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};
