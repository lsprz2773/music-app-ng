import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Album} from '../../../../core/interfaces/album';
import {SpotifyAlbumService} from '../../../../core/services/spotify-api/spotify-album-service';


@Component({
  selector: 'app-song-main-view',
  standalone: false,
  templateUrl: './song-main-view.html',
  styleUrl: './song-main-view.css',
})
export class SongMainView implements OnInit {
  album$: Observable<Album>;

  constructor(private _spotifyAlbum: SpotifyAlbumService) {
    this.album$ = this._spotifyAlbum.getAlbum("42URGYboRJEQPwXj7wlsoB");
  }

  ngOnInit() {
  }
}
