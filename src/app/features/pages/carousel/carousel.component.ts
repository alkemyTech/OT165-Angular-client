import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  public items!: any[]

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        title: 'title1',
        description: 'description1',
        img: 'https://i0.wp.com/serranojaimeconsultores.com/wp-content/uploads/2018/03/ong-2.jpg?fit=1024%2C682&ssl=1'
      },
      {
        title: 'title2',
        description: 'description1',
        img: 'https://educowebmedia.blob.core.windows.net/educowebmedia/educospain/media/images/blog/ong-y-ods.jpg'
      },
      {
        title: 'title2',
        description: 'description1',
        img: 'https://media.istockphoto.com/photos/young-happy-volunteers-outdoor-meeting-at-park-picture-id1145183123?k=20&m=1145183123&s=612x612&w=0&h=FcwNNBTy51IIU1TTeNlvjqOovTly5QnZ6T6Y_W88NSw='
      }
    ]
  }

}
