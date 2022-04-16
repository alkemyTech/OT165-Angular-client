export interface Member {
  id?: number;
  name: string;
  image: string;
  description?: string;
  facebookUrl?: string;
  linkedinUrl?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export interface MemberCard extends Member {
  links?: Links[];
}

export interface Links {
  url?: string;
  name?: string;
}
