import { ActivityService } from "src/app/services/activity/activity.service";
import { Component, OnInit } from "@angular/core";
import { Activity } from "src/app/shared/models/Activity";
import { DialogService } from "src/app/shared/components/dialog/dialog.service";

@Component({
  selector: "app-activities-list",
  templateUrl: "./activities-list.component.html",
  styleUrls: ["./activities-list.component.scss"],
})
export class ActivitiesListComponent implements OnInit {
  isLoading!: boolean;
  activities: Activity[] = [];
  filteredActivities: Activity[] = [];
  itemCount: number = 0;

  constructor(
    private activityService: ActivityService,
    private dialogService: DialogService,
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.getActivities();
  }

  getActivities() {
    this.activityService.getActivities().subscribe({
      next: (activities) => {
        this.activities = activities;
        this.fillArray();
        this.isLoading = false;
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

  fillArray() {
    if (this.itemCount != this.activities.length) this.itemCount += 6;
    this.filteredActivities = this.activities.slice(0, this.itemCount);
  }
}
