import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Activity } from "src/app/shared/models/Activity";
import { environment } from "src/environments/environment";
import { BaseService } from "../base.service";

@Injectable({
  providedIn: "root",
})
export class ActivityService extends BaseService<Activity> {

  constructor(http:HttpClient) {
    super(http, environment.API_URL_ACTIVITIES);
  }

  getActivities(): Observable<Activity[]> {
    return super.getAll();
  }

  getActivity(id: number): Observable<Activity> {
    return super.getById(id);
  }

  createActivity(activity: Activity): Observable<Activity> {
    return super.post(activity);
  }

  updateActivity(id: number, activity: Activity): Observable<Activity> {
    return super.patchById(id, activity);
  }

  deleteActivity(id: number): Observable<Activity> {
    return super.deleteById(id);
  }

}
