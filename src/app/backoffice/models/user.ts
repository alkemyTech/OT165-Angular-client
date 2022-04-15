export class User {
  id!: number;
  name!: string;
  email!: string;
  email_verified_at!: string;
  password!: string;
  role_id!: number;
  remember_token!: string;
  created_at!: Date;
  updated_at!: Date;
  deleted_at!: Date;
  group_id!: number;
  latitude!: number;
  longitude!: number;
  address!: string;
  profile_image!: string;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
  profile_image?: string;
  role_id: number;
  address: string;
}