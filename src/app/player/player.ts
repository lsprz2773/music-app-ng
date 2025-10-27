import {Component, OnInit} from '@angular/core';
import {SpotifyAlbumService} from '../services/spotify-api/spotify-album-service';
import {Observable} from 'rxjs';
import {Album} from '../interfaces/album';

@Component({
  selector: 'app-player',
  standalone: false,
  templateUrl: './player.html',
  styleUrl: './player.css',
})
export class Player implements OnInit {

  album$: Observable<Album>;

  constructor(private _spotifyAlbum: SpotifyAlbumService) {
    this.album$ = this._spotifyAlbum.getAlbum("4aawyAB9vmqN3uQ7FjRGTy");
  }

  ngOnInit() {
  }

}
