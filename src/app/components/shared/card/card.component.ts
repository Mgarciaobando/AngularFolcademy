import { Component, Input } from '@angular/core';
import { VideoType } from 'src/app/interfaces/videoType';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {



@Input() item: VideoType;
}
