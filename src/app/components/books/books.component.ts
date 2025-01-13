import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-books',
  imports: [CommonModule, FormsModule],
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: any[] = [];
  editMode: { [key: number]: boolean } = {}; // To toggle edit mode for each book
  selectedBook: any = null;
  
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchBooks();
  }
  
  // Fetch all books
  fetchBooks(): void {
    this.apiService.getBooks().subscribe(
      (data) => {
        this.books = data;
      },
      (error) => {
        console.error('Error fetching books:', error);
        alert('Failed to load books.');
      }
    );
  }

  // Delete a book by ID
  deleteBook(bookId: number): void {
    if (confirm('Are you sure you want to delete this book?')) {
      this.apiService.deleteBook(bookId).subscribe(
        () => {
          alert('Book deleted successfully!');
          this.fetchBooks(); // Refresh the book list
        },
        (error) => {
          console.error('Error deleting book:', error);
          alert('Failed to delete the book.');
        }
      );
    }
  }

  // Enable edit mode for a book
  enableEditMode(bookId: number): void {
    this.editMode[bookId] = true;
  }

  // Save updated book details
  updateBook(book: any): void {
    this.apiService.updateBook(book.bookID, book).subscribe(
      () => {
        alert('Book updated successfully!');
        this.editMode[book.bookID] = false; // Exit edit mode
        this.fetchBooks(); // Refresh the book list
      },
      (error) => {
        console.error('Error updating book:', error);
        alert('Failed to update the book.');
      }
    );
  }

  // Cancel edit mode
  cancelEdit(bookId: number): void {
    this.editMode[bookId] = false;
    this.fetchBooks(); // Reset to the original data
  }

  openEditModal(book: any) {
    this.selectedBook = { ...book }; // Create a copy to avoid direct mutation
  }

  saveChanges() {
    if (this.selectedBook) {
      this.apiService.updateBook(this.selectedBook.bookID, this.selectedBook).subscribe(
        (response) => {
          // Update the local books array with the updated data
          const index = this.books.findIndex(b => b.bookID === this.selectedBook.bookID);
          if (index !== -1) {
            this.books[index] = response;
          }
          this.selectedBook = null; // Close the modal
          alert('Book updated successfully!');
        },
        (error) => {
          console.error('Error updating book:', error);
          alert('Failed to update the book.');
        }
      );
    }
  }
  
}
