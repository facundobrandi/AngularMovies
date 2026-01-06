import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterOutlet } from "@angular/router";


@Component({
  selector: 'app-movie-component',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterLink ,RouterOutlet],
  templateUrl: './movie-component.component.html',
  styleUrl: './movie-component.component.css'
})
export class MovieComponentComponent {
  @Input() movie!: Movie;



}
