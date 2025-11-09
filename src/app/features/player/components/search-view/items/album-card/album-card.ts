import {Component, input} from '@angular/core';
import {Album} from '../../../../../../core/interfaces/album';


@Component({
  selector: 'app-album-card',
  standalone: false,
  templateUrl: './album-card.html',
  styleUrl: './album-card.css',
})
export class AlbumCard {
  album = input.required<Album>();
}
