import { Component, Input } from '@angular/core';
import { Movie } from '../../shared/interfaces/movie';

@Component({
  selector: 'app-movie-table',
  standalone: true,
  imports: [],
  templateUrl: './movie-table.component.html',
  styleUrl: './movie-table.component.css'
})
export class MovieTableComponent {
  @Input() movie: Movie | undefined
}
