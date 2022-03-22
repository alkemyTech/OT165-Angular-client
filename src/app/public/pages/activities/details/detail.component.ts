import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ActivityService } from 'src/app/services/activity/activity.service';
import { Activity } from 'src/app/shared/models/activity';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();
  activity: Activity = {
    id: 0,
    name: 'Actividad no encontrada'
  }

  constructor(private service: ActivityService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.params.subscribe(params => {
      this.service.getActivity(params.id).subscribe(activity => {
        this.activity = activity;
      })
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
