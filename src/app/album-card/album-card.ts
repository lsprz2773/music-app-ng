import {Component, input} from '@angular/core';
import {Album} from '../interfaces/album';
import {Image} from '../interfaces/image';

@Component({
  selector: 'app-album-card',
  standalone: false,
  templateUrl: './album-card.html',
  styleUrl: './album-card.css',
})
export class AlbumCard {
  album = input.required<Album>();
  cover = input.required<Image | undefined>();
}
