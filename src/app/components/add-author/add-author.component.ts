import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css'],
  imports: [FormsModule], // Import FormsModule
})
export class AddAuthorComponent {
  author = { name: '' }; // Bind the input to this object

  constructor(private apiService: ApiService) {}

  onSubmit() {
    if (this.author.name.trim()) {
      this.apiService.addAuthor(this.author).subscribe(
        (response) => {
          console.log('Author added:', response);
          alert('Author added successfully!');
          this.author.name = ''; // Reset the input field
        },
        (error) => {
          console.error('Error adding author:', error);
          alert('Failed to add author.');
        }
      );
    } else {
      alert('Author name is required!');
    }
  }
}
