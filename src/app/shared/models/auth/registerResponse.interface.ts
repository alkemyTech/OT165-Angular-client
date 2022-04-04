import { User } from "./User.interface";

export interface RegisterResponse {
    success: boolean;
    data:    Data;
    message: string;
}

interface Data {
    user:  User;
    token: string;
}