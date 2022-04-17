import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IActivity } from "src/app/shared/models/Activity";
import { environment } from "src/environments/environment";
import { BaseService } from "../base.service";

@Injectable({
  providedIn: "root",
})
export class ActivityService extends BaseService<IActivity> {

  constructor(http:HttpClient) {
    super(http, environment.API_URL_ACTIVITIES);
  }

  getActivities(key: string = ''): Observable<IActivity[]> {
    return super.getAll(key);
  }

  getActivity(id: number): Observable<IActivity> {
    return super.getById(id);
  }

  createActivity(activity: IActivity): Observable<IActivity> {
    return super.post(activity);
  }

  updateActivity(id: number, activity: IActivity): Observable<IActivity> {
    return super.patchById(id, activity);
  }

  deleteActivity(id: number): Observable<IActivity> {
    return super.deleteById(id);
  }

}
