import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Activity } from "src/app/shared/models/Activity";
import { environment } from "src/environments/environment.prod";

@Injectable({
  providedIn: "root",
})
export class ActivityService {
  constructor(private http: HttpClient) {}

  getActivities() {}

  getActivity(id: number): Observable<Activity> {
    return <Observable<Activity>>(
      this.http
        .get(environment.BASE_URL_API + "activities/" + id)
        .pipe(map((res: any) => {
          return res.data;
        }))
    );
  }

  createActivity() {}

  updateActivity() {}

  deleteActivity() {}
}
