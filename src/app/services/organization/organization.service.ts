import { BaseService } from "../base.service";
import { HttpClient } from "@angular/common/http";
import { Organization } from "../../backoffice/models/organization";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class OrganizationService extends BaseService<Organization> {
  constructor(http: HttpClient) {
    super(http, environment.API_URL_ORGANIZATION);
  }

  getOrganization(): Observable<any> {
    return super.getAll();
  }

  updateWelcomeTextOfOrganization(id: number, organization: any) {
    return super.putById(id, organization);
  }
}
