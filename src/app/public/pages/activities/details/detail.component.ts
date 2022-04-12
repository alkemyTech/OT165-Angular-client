import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { ActivityService } from "src/app/services/activity/activity.service";
import { DialogService } from "src/app/shared/components/dialog/dialog.service";
import { IActivity } from "src/app/shared/models/Activity";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"],
})
export class DetailComponent implements OnInit, OnDestroy {
  isLoading!: boolean;
  subscription: Subscription = new Subscription();
  activity: IActivity = {
    id: 0,
    name: "",
  };

  constructor(
    private service: ActivityService,
    private activatedRoute: ActivatedRoute,
    private dialogService: DialogService,
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.subscription = this.activatedRoute.params.subscribe((params) => {
      this.service.getActivity(params.id).subscribe({
        next: (activity) => {
          this.activity = activity;
          this.isLoading = false;
        },
        error: (error) => {
          this.dialogService.add({
            type: "error",
            title: "Actividad no encontrada",
            detail: "No se ha encontrado una actividad para el id",
          });
          this.isLoading = false;
        },
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
