import { Component, OnInit } from '@angular/core';
import { VideoType } from 'src/app/interfaces/videoType';
import { MovieDBService } from '../../services/movie-db.service';
import {map} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MovieDBService]
})
export class HomeComponent implements OnInit{

  filter:string = "todos";

  movies_series: VideoType[]=[];

  constructor(private movieDBService:MovieDBService){
    
  }

  ngOnInit(): void {
    this.traerInformacion()
  }

  setFilter(newFilter:string){
    this.filter = newFilter;
  }

  traerInformacion(){
    this.movieDBService.getTrending().subscribe({
      next:(valores : any)=>{
        this.movies_series=valores.results
        console.log(valores)
      }
    })
  }



}
