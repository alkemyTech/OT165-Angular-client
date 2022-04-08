export interface Activity {
  id?: number;
  name?: string;
  slug?: string;
  description?: string;
  image?: string;
  user_id?: number;
  category_id?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
  group_id?: number;
}

export interface ActivityState {
  activity: ReadonlyArray<Activity>
  activities: ReadonlyArray<Activity>;
}

