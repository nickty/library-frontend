import { Routes } from '@angular/router';
import { AuthorsComponent } from './components/authors/authors.component';
import { BooksComponent } from './components/books/books.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AddAuthorComponent } from './components/add-author/add-author.component';
import { AddBookComponent } from './components/add-book/add-book.component';

export const routes: Routes = [
  { path: 'authors', component: AuthorsComponent },
  { path: 'books', component: BooksComponent },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'add-author', component: AddAuthorComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }, // Wildcard route for 404 pages
];
