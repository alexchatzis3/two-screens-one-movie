import { Component, EventEmitter, Output } from '@angular/core';
import { Movie } from '../../../shared/interfaces/movie';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-reactive-form-structure',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './reactive-form-structure.component.html',
  styleUrl: './reactive-form-structure.component.css'
})
export class ReactiveFormStructureComponent {
  @Output() movie = new EventEmitter<Movie>();

  movieForm = new FormGroup({
    movieName: new FormControl('', Validators.required),
    yearOfProduction: new FormControl('', Validators.required),
    director: new FormControl('', Validators.required),
    myRating: new FormControl('', Validators.required)
  })

  onSubmit(value:any) {
    console.log(value);
    this.movie.emit(value as Movie);
    this.movieForm.reset();
  }
}
