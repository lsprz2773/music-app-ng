import {Component, input} from '@angular/core';
import {Track} from '../../../../core/interfaces/track';
import {Image} from '../../../../core/interfaces/image';


@Component({
  selector: 'app-playlist',
  standalone: false,
  templateUrl: './playlist.html',
  styleUrl: './playlist.css',
})
export class Playlist {
  playlist = input.required<Track[] | undefined>();
  cover = input.required<Image | undefined>();
}
