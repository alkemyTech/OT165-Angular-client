export interface Member {
  id?: number;
  name: string;
  image: string;
  description?: string;
  facebookUrl?: string;
  linkedinUrl?: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
}

export interface MemberCard extends Member {
  links?: Links[];
}

export interface Links {
  url?: string;
  name?: string;
}
