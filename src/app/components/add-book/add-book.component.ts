import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
  imports: [FormsModule, CommonModule],
})
export class AddBookComponent implements OnInit {
  book = { title: '', authorId: null }; // Stores title and selected author ID
  authors: any[] = []; // Stores authors fetched from the API

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // Fetch authors when the component initializes
    this.apiService.getAuthors().subscribe(
      (response) => {
        this.authors = response;
      },
      (error) => {
        console.error('Error fetching authors:', error);
      }
    );
  }

  onSubmit() {
    if (this.book.title && this.book.authorId) {
      this.apiService.addBook(this.book).subscribe(
        (response) => {
          console.log('Book added:', response);
          alert('Book added successfully!');
        },
        (error) => {
          console.error('Error adding book:', error);
          alert('Failed to add book.');
        }
      );
    } else {
      alert('Please provide a title and select an author.');
    }
  }
}
