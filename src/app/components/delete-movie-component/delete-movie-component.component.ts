import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieServiceService } from '../../service/movie-service.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-delete-movie-component',
  template: '', // no necesita HTML
  styleUrls: ['./delete-movie-component.component.css']
})
export class DeleteMovieComponentComponent implements OnInit, OnDestroy {

  movieId!: number;
  private destroy$ = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private movieService: MovieServiceService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (!id) {
      this.router.navigate(['/']);
      return;
    }

    this.movieId = +id;

    this.movieService
      .deleteMovie(this.movieId)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          alert('Movie deleted');
          this.router.navigate(['/']);
        },
        error: () => {
          alert('Error deleting movie');
          this.router.navigate(['/']);
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
