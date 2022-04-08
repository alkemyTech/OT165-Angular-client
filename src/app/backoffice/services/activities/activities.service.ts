import { Activity } from "../../models/activity";
import { BaseService } from "src/app/services/base.service";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ActivitiesService extends BaseService<Activity> {
  constructor(http: HttpClient) {
    super(http, environment.API_URL_ACTIVITIES);
  }

  public getActivities(): Observable<Activity[]> {
    return super.getAll();
  }

  public createActivity(activity: any): Observable<any> {
    return super.post(activity);
  }

  public getActivity(id: number): Observable<any> {
    return super.getById(id);
  }

  public updateActivity(id: number, activity: any): Observable<any> {
    return super.putById(id, activity);
  }

  public deleteActivity(id: number): Observable<any> {
    return super.deleteById(id);
  }
}
