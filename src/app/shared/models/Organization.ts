export interface OrganizationResponse {
    success: boolean;
    data:    Organization;
    message: string;
}

export interface Organization {
    id?:                number;
    name:              string;
    logo:              string;
    short_description?: string;
    long_description?:  string;
    welcome_text?:      string;
    address?:           string;
    phone?:             string;
    cellphone?:         string;
    created_at?:        Date;
    updated_at?:        Date;
    deleted_at?:        null;
    group_id?:          null;
    facebook_url?:      string;
    linkedin_url?:      string;
    instagram_url?:     string;
    twitter_url?:       string;
}