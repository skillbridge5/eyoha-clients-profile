
export type Platform = 
  | 'Facebook' 
  | 'Instagram' 
  | 'TikTok' 
  | 'X' 
  | 'LinkedIn' 
  | 'Website' 
  | 'Threads'
  | 'YouTube'
  | 'Pinterest';

export interface ClientSocialLink {
  platform: Platform;
  url: string;
}

export interface Client {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  socialLinks: ClientSocialLink[];
}
