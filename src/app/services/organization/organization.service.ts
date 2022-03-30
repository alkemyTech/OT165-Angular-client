import { BaseService } from "../base.service";
import { HttpClient } from "@angular/common/http";
import { Organization } from "../../backoffice/models/organization";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class OrganizationService extends BaseService<Organization> {
  constructor(http: HttpClient) {
    super(http, "organization");
  }

  getOrganization(): Observable<any> {
    return super.getAll();
  }

  updateWelcomeTextOfOrganization(id: number, organization: any) {
    return super.putById(id, organization);
  }
}
