import { Component } from '@angular/core';
import { ReactiveFormStructureComponent } from './reactive-form-structure/reactive-form-structure.component';
import { ManyMovie, Movie } from '../../shared/interfaces/movie';
import { MovieTableComponent } from "../movie-table/movie-table.component";
import { MovieDatatableComponent } from "../movie-datatable/movie-datatable.component";

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormStructureComponent, MovieTableComponent, MovieDatatableComponent],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {

  currentMovie: Movie | undefined;

  onMovie(movie: Movie) {
    console.log("Parent>>>", movie);
    this.currentMovie = movie;
    ManyMovie.push(movie);
  }



}
