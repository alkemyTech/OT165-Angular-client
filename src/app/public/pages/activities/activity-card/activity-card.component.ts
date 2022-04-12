
import { Component, Input} from '@angular/core';
import { IActivity } from 'src/app/shared/models/Activity';

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.scss']
})
export class ActivityCardComponent {

  @Input() activity: IActivity = {} as IActivity;
  constructor() { }

}
