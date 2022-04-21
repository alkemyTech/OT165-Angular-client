import { ActivityService } from "src/app/services/activity/activity.service";
import { Component, OnInit } from "@angular/core";
import { IActivity } from "src/app/shared/models/Activity";
import { DialogService } from "src/app/shared/components/dialog/dialog.service";
import { Observable } from "rxjs";
import { debounceTime, map } from "rxjs/operators";
import { SpinnerService } from "src/app/shared/components/spinner/spinner.service";

@Component({
  selector: "app-activities-list",
  templateUrl: "./activities-list.component.html",
  styleUrls: ["./activities-list.component.scss"],
})
export class ActivitiesListComponent implements OnInit {
  isLoading!: boolean;
  activities: IActivity[] = [];
  filteredActivities: IActivity[] = [];
  itemCount: number = 0;

  results$!: Observable<any>;

  constructor(
    private activityService: ActivityService,
    private dialogService: DialogService,
    public spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.getActivities();
  }

  public getActivities() {
    this.spinnerService.show()
    this.activityService.getActivities().subscribe({
      next: (activities) => {
        this.spinnerService.hide();
        this.activities = activities;
        this.fillArray();
        this.isLoading = false;
        this.spinnerService.hide()
      },
      error: (error) => {
        this.dialogService.add({
          type: "error",
          title: "Error en el servidor",
          detail: "No pudo conectarse con el servidor",
        });
        this.isLoading = false;
      },
    });
  }

  public fillArray() {
    if (this.itemCount != this.activities.length) this.itemCount += 6;
    this.filteredActivities = this.activities.slice(0, this.itemCount);
  }

  public search(inputSearch: any) {
    if (inputSearch.length > 3) {
      this.spinnerService.show()
      this.results$ = this.activityService
        .getSearchActivities(inputSearch)
        .pipe(
          debounceTime(1500),
        );
      this.results$.subscribe((res) => {
        this.spinnerService.hide();
        this.filteredActivities = res;
      });
    } else {
      this.getActivities();
    }
  }
}
