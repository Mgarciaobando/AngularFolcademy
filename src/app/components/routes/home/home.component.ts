import { Component } from '@angular/core';
import { VideoType } from 'src/app/interfaces/videoType';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  filter:string = "todos";

  movies_series: VideoType[]=[
    {
      id:1,
      name:'Black Widow',
      description:'',
      image:'../../../../assets/black widow.jpg',
      rating:8,
      category: 'movie'
    }, 
    {
      id:2,
      name:'Loki',
      description:'',
      image:'../../../../assets/loki.jpeg',
      rating:8,
      category: 'serie'
    },
    {
      id:3,
      name:'shrek',
      description:'',
      image:'../../../../assets/shrek.jpeg',
      rating:8,
      category: 'movie'
    },
    {
      id:4,
      name:'shrek',
      description:'',
      image:'../../../../assets/shrek.jpeg',
      rating:8,
      category: 'movie'
    },
    {
      id:5,
      name:'shrek',
      description:'',
      image:'../../../../assets/shrek.jpeg',
      rating:8,
      category: 'movie'
    }
  ];

  setFilter(newFilter:string){
    this.filter = newFilter;
  }



}
