import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user";

@Injectable({
    providedIn: "root",
})
export class UserService {
    private _groupId!: string;
    private _headers!: HttpHeaders;
    api!: string;

    constructor(private http: HttpClient) {
        this._headers = new HttpHeaders({ Group: this._groupId });
        this.api = "https://ongapi.alkemy.org/api";
    }

    public get<T>(url: string, activateHeader: boolean = false): Observable<T> {
        return this.http.get<T>(
            url,
            activateHeader ? { headers: this._headers } : {}
        );
    }

    getUser(id: number): any {
        return this.http.get(`${this.api}/users/${id}`);
    }

    createUser(user: User): any {
        return this.http.post(`${this.api}/users`, user);
    }

    saveUser(id: number, user: User): any {
        return this.http.put(`${this.api}/users/${id}`, user);
    }
}
