import { Routes } from '@angular/router';
import { MainLayoutComponent } from './components/layout/layout.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { AddMovieComponentComponent } from './components/add-movie-component/add-movie-component.component';
import { EditMovieComponentComponent } from './components/edit-movie-component/edit-movie-component.component';
import { DeleteMovieComponentComponent } from './components/delete-movie-component/delete-movie-component.component';
import { LoginComponentComponent } from './login/login-component/login-component.component';

export const routes: Routes = [    {
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
},{
  path: 'login',
  component: LoginComponentComponent
},
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'home', component: HomeComponentComponent },
      { path: 'add', component: AddMovieComponentComponent },
      { path: 'edit/:id', component: EditMovieComponentComponent } ,
      { path: 'delete/:id', component: DeleteMovieComponentComponent },
    ]
  }
];