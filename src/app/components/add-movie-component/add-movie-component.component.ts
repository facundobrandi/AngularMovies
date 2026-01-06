import { Component  } from '@angular/core';
import { NgIf } from '@angular/common';
import { Movie } from '../../models/movie';
import { MovieServiceService } from '../../service/movie-service.service';
import { Subscription } from 'rxjs';
import { Route } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardContent } from "@angular/material/card";
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-add-movie-component',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule, NgIf, MatCardContent , MatCardModule],
  templateUrl: './add-movie-component.component.html',
  styleUrl: './add-movie-component.component.css'
})
export class AddMovieComponentComponent {

  private subscription: Subscription | undefined;
  movieForm: FormGroup;
  
  constructor(
    private movieService: MovieServiceService,
    private fb: FormBuilder
  ) {
    this.movieForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  


  saveMovie(){
    if (this.movieForm.invalid) {
      this.movieForm.markAllAsTouched();
      return;
    }

    this.subscription = this.movieService.createMovie(this.movieForm.value).subscribe(data =>{
      alert("New movie created");
    })
  }

  
}
