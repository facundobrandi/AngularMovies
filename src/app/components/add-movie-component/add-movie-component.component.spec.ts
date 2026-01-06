import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMovieComponentComponent } from './add-movie-component.component';

describe('AddMovieComponentComponent', () => {
  let component: AddMovieComponentComponent;
  let fixture: ComponentFixture<AddMovieComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMovieComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMovieComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
