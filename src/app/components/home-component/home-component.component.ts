import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieComponentComponent } from "../movie-component/movie-component.component";
import { NgForOf } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import { MovieServiceService } from '../../service/movie-service.service';
import { MatSidenavContainer, MatSidenav, MatSidenavContent } from "@angular/material/sidenav";

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [MovieComponentComponent, NgForOf, MatGridListModule],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {
  movieList : Movie[] = [];

  constructor(private movieService : MovieServiceService) 
  {
    this.movieService.getMovies().subscribe((data:Movie[])=>
      this.movieList = data
    );
  }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe({
      next: (data: Movie[]) => {
        console.log('Movies:', data); // 👈 DEBUG
        this.movieList = data;
      },
      error: err => console.error(err)
    });
  }
}
