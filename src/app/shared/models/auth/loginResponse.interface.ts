import { User } from "./User.interface";

export interface LoginResponse {
    success: boolean;
    data?:    Data;
    message: string;
}

export interface Data {
    user?:  User;
    token?: string;
}