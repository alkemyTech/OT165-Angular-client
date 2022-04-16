export interface Category {
    id?: number;
    name: string;
    description?: string;
    image?: string;
    parent_category_id?: number;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date; 
}