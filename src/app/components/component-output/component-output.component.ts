import { Component, Inject } from '@angular/core';
import { MovieDatatableComponent } from '../movie-datatable/movie-datatable.component';
import { Movie } from '../../shared/interfaces/movie';
import { MovieTableComponent } from '../movie-table/movie-table.component';
import {
  Dialog,
  DialogRef,
  DIALOG_DATA,
  DialogModule
} from "@angular/cdk/dialog"

@Component({
  selector: 'app-component-output',
  standalone: true,
  imports: [MovieDatatableComponent, DialogModule],
  templateUrl: './component-output.component.html',
  styleUrl: './component-output.component.css'
})
export class ComponentOutputComponent {

  constructor (public dialog: Dialog) {}

  showMovieClicked(movie: Movie) {
    this.dialog.open(MovieDialogComponent, {
      data: movie
    })
  }

  movieTemplate(movie: Movie) {
    return `
    Movie Details

    Movie Name: ${movie.movieName}
    Year of Production: ${movie.yearOfProduction}
    Director: ${movie.director}
    My Rating: ${movie.myRating}
    `
  }
}

@Component ({
  imports: [MovieTableComponent],
  standalone: true,
  template:`
    <app-movie-table [movie]="movie"></app-movie-table>
    <button class="btn btn-primary btn-sm" (click)="dialogRef.close()">Close</button>
  `,
  styles: [
    `
      :host {
          display: block;
          background: #fff;
          border-radius:8px;
          padding: 16px;
          max-width: 500px;
      }
    `,
  ]
})

export class MovieDialogComponent {
  constructor(
    public dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public movie: Movie
  ){}
}
