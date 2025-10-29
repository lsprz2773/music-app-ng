import {Component, input} from '@angular/core';
import {Artist} from '../interfaces/artist';
import {Image} from '../interfaces/image';

@Component({
  selector: 'app-artist-card',
  standalone: false,
  templateUrl: './artist-card.html',
  styleUrl: './artist-card.css',
})
export class ArtistCard {
  artist = input.required<Artist>();
  image = input.required<string>();
}
