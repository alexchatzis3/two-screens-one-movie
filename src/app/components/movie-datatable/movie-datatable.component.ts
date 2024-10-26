import { Component, EventEmitter, Output } from '@angular/core';
import { Movie, ManyMovie } from '../../shared/interfaces/movie';
import { sortBy } from 'lodash-es';

@Component({
  selector: 'app-movie-datatable',
  standalone: true,
  imports: [],
  templateUrl: './movie-datatable.component.html',
  styleUrl: './movie-datatable.component.css'
})
export class MovieDatatableComponent {
  @Output() movieClicked = new EventEmitter<Movie>();

  manyMovie = ManyMovie
  
  sortOrder: Movie = {
    movieName: 'none',
    yearOfProduction: 'none',
    director: 'none',
    myRating: 'none'
  }

  sortData(sortKey: keyof Movie): void {

    if (this.sortOrder[sortKey] === 'asc') {
      this.sortOrder[sortKey] = 'desc'
      this.manyMovie = sortBy(this.manyMovie, sortKey).reverse()
    } else {
      console.log("1>>>", this.sortOrder[sortKey]);
      console.log("2>>>", sortKey);
      this.sortOrder[sortKey] = 'asc';
      this.manyMovie = sortBy(this.manyMovie, sortKey);
      console.log("3>>>", this.sortOrder[sortKey]);
    }
  }


  sortSign(sortKey: keyof Movie) {
    if (this.sortOrder[sortKey] === 'asc') 
      return '&uarr;'
    else if (this.sortOrder[sortKey] === 'desc')
      return '&darr;'
    else 
      return ''
  }

  onMovieClick(movie: Movie) {
    console.log(movie);
    this.movieClicked.emit(movie)
  }

}
