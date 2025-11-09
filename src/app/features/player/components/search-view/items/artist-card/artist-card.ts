import {Component, input} from '@angular/core';
import {Artist} from '../../../../../../core/interfaces/artist';


@Component({
  selector: 'app-artist-card',
  standalone: false,
  templateUrl: './artist-card.html',
  styleUrl: './artist-card.css',
})
export class ArtistCard {
  artist = input.required<Artist>();
}
