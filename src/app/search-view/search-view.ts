import {Component, input} from '@angular/core';
import {Track} from '../interfaces/track';
import {Image} from '../interfaces/image';
import {Album} from '../interfaces/album';
import {Artist} from '../interfaces/artist';

@Component({
  selector: 'app-search-view',
  standalone: false,
  templateUrl: './search-view.html',
  styleUrl: './search-view.css',
})
export class SearchView {
  tracks = input.required<Track[]>();
  cover = input.required<Image | undefined>();
  albums = input.required<Album[]>();
  images = input.required<Image[]>();
  artists = input.required<Artist[]>();

}
