
import { Component, Input, OnInit } from '@angular/core';
import { Activity } from 'src/app/shared/models/Activity';

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.scss']
})
export class ActivityCardComponent {

  @Input() activity: Activity = {} as Activity;
  constructor() { }

}
