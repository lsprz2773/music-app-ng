import {Component, OnInit} from '@angular/core';
import {Track} from '../interfaces/track';
import {Album} from '../interfaces/album';
import {Artist} from '../interfaces/artist';
import {ActivatedRoute} from '@angular/router';
import {SpotifySearchService} from '../services/spotify-api/spotify-search-service';

@Component({
  selector: 'app-search-view',
  standalone: false,
  templateUrl: './search-view.html',
  styleUrl: './search-view.css',
})
export class SearchView implements OnInit {
  tracks: Track[] = [];
  albums: Album[] = [];
  artists: Artist[] = [];

  constructor(private route: ActivatedRoute, private _spotifySearch: SpotifySearchService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const query = params.get('query');

      if (query) {
        this._spotifySearch.search(query).subscribe(result => {
          this.tracks = result.tracks;
          this.albums = result.albums;
          this.artists = result.artists;
          console.log(this.tracks)
          console.log(this.albums)
          console.log(this.artists)
        })
      }
    })

  }
}
