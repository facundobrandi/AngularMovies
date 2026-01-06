import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMovieComponentComponent } from './delete-movie-component.component';

describe('DeleteMovieComponentComponent', () => {
  let component: DeleteMovieComponentComponent;
  let fixture: ComponentFixture<DeleteMovieComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteMovieComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteMovieComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
