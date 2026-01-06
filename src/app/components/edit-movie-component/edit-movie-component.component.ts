import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCard, MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { MovieServiceService } from '../../service/movie-service.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-edit-movie-component',
  standalone: true,
  imports: [MatCard, MatCardModule, MatInputModule,ReactiveFormsModule,NgIf],
  templateUrl: './edit-movie-component.component.html',
  styleUrl: './edit-movie-component.component.css'
})
export class EditMovieComponentComponent {
  movieForm: FormGroup;
  isEditMode = false;
  movieId!: number;

  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private movieService: MovieServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.movieForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("Empezo")
    if (id) {
      this.isEditMode = true;
      this.movieId = +id;
      this.loadMovie(this.movieId);
    }
  }

  loadMovie(id: number) {
    this.movieService
      .getMovieById(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe(movie => {
        this.movieForm.patchValue({
          title: movie.title,
          description: movie.description
        });
      });
  }

  saveMovie() {
    if (this.movieForm.invalid) {
      this.movieForm.markAllAsTouched();
      return;
    }

    const movieData = {
      id: this.movieId,
      ...this.movieForm.value
    };

    const request$ = this.isEditMode
      ? this.movieService.updateMovie(movieData)
      : this.movieService.createMovie(movieData);

    request$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        alert(this.isEditMode ? 'Movie updated' : 'Movie created');
        this.router.navigate(['/']);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
