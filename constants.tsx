
import { Client } from './types';

export const CLIENTS: Client[] = [
  {
    id: '1',
    name: 'Luxe Interiors',
    description: 'Comprehensive digital identity management for high-end architecture. We handle their visual storytelling across all major social networks.',
    logoUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
    socialLinks: [
      { platform: 'Facebook', url: 'https://facebook.com' },
      { platform: 'Instagram', url: 'https://instagram.com' },
      { platform: 'TikTok', url: 'https://tiktok.com' },
      { platform: 'X', url: 'https://x.com' },
      { platform: 'LinkedIn', url: 'https://linkedin.com' },
      { platform: 'Website', url: 'https://example.com' },
      { platform: 'Threads', url: 'https://threads.net' }
    ]
  },
  {
    id: '2',
    name: 'TechFlow Solutions',
    description: 'Software innovation hub. Our strategy focuses on professional networking and community building on specialized tech platforms.',
    logoUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
    socialLinks: [
      { platform: 'LinkedIn', url: 'https://linkedin.com' },
      { platform: 'X', url: 'https://x.com' },
      { platform: 'Website', url: 'https://techflow.example' },
      { platform: 'Facebook', url: 'https://facebook.com' }
    ]
  },
  {
    id: '3',
    name: 'EcoBite Cafe',
    description: 'A sustainable dining experience. We manage their local community outreach and viral short-form video content.',
    logoUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800',
    socialLinks: [
      { platform: 'Instagram', url: 'https://instagram.com' },
      { platform: 'Facebook', url: 'https://facebook.com' },
      { platform: 'TikTok', url: 'https://tiktok.com' },
      { platform: 'Threads', url: 'https://threads.net' }
    ]
  },
  {
    id: '4',
    name: 'Urban Fitness Co',
    description: 'Active lifestyle brand. We drive engagement through high-energy visuals and athlete partnerships on lifestyle platforms.',
    logoUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    socialLinks: [
      { platform: 'TikTok', url: 'https://tiktok.com' },
      { platform: 'Instagram', url: 'https://instagram.com' },
      { platform: 'YouTube', url: 'https://youtube.com' },
      { platform: 'Facebook', url: 'https://facebook.com' }
    ]
  }
];
