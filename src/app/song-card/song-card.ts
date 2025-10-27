import {Component, input} from '@angular/core';
import {Track} from '../interfaces/track';
import {Image} from '../interfaces/image';

@Component({
  selector: 'app-song-card',
  standalone: false,
  templateUrl: './song-card.html',
  styleUrl: './song-card.css',
})
export class SongCard {
  song = input.required<Track>();
  cover = input.required<Image | undefined>();
}
