export interface User {
    name:       string;
    email:      string;
    password?:   string;
    role_id?:    number;
    updated_at?: Date;
    created_at?: Date;
    id?:         number;

    /* user register */
    email_verified_at?: null;
    remember_token?:    null;
    deleted_at?:        null;
    group_id?:          null;
    latitude?:          null;
    longitude?:         null;
    address?:           null;
    profile_image?:     string;
}