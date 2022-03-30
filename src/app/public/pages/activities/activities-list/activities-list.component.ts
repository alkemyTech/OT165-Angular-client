import { ActivityService } from 'src/app/services/activity/activity.service';
import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/shared/models/Activity';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.scss']
})
export class ActivitiesListComponent implements OnInit {

  activities: Activity[] = [];
  filteredActivities: Activity[] = [];
  itemCount: number = 0;
  

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.getActivities();
  }

  getActivities() {
    this.activityService.getActivities().subscribe({
      next: async (activities) => {        
        this.activities = await activities;               
        this.fillArray();        
      }
    })
  } 

  fillArray() {   
    if(this.itemCount != this.activities.length) this.itemCount += 6;    
    this.filteredActivities = this.activities.slice(0,this.itemCount);        
  }

}
