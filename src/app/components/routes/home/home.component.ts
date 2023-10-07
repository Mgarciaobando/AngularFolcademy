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
      rating:7,
      category: 'serie'
    },
    {
      id:3,
      name:'Avatar',
      description:'',
      image:'../../../../assets/avatar.jpg',
      rating:9,
      category: 'movie'
    },
    {
      id:4,
      name:'Once Upon A Time',
      description:'',
      image:'../../../../assets/onceuponatime.jpg',
      rating:7.5,
      category: 'serie'
    },
    {
      id:5,
      name:'Shrek 5',
      description:'',
      image:'../../../../assets/shrek.jpeg',
      rating:9,
      category: 'movie'
    },
    {
      id:6,
      name:'The Big Bang Theory',
      description:'',
      image:'../../../../assets/thebigbangtheory.jpg',
      rating:9.5,
      category: 'serie'
    },
    {
      id:7,
      name:'El abogado Del Diablo',
      description:'',
      image:'../../../../assets/elabogadodeldiablo.jpg',
      rating:7,
      category: 'movie'
    },
    {
      id:8,
      name:'Breaking Bad',
      description:'',
      image:'../../../../assets/BreakingBad.jpeg',
      rating:9,
      category: 'serie'
    }
  ];

  setFilter(newFilter:string){
    this.filter = newFilter;
  }



}
