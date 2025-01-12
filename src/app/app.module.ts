// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { BooksComponent } from './components/books/books.component';
import { LoginComponent } from './components/login/login.component';
// import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { routes } from './app.routes';

// const routes: Routes = [
//   { path: 'authors', component: AuthorsComponent },
//   { path: 'books', component: BooksComponent },
//   { path: 'login', component: LoginComponent },
//   // { path: 'home', component: HomeComponent },
//   { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home on initial load
//   { path: '**', redirectTo: '/home' }, // Redirect unknown routes to home
// ];

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    BooksComponent,
    LoginComponent,
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes) // No need for HashLocationStrategy unless necessary
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }