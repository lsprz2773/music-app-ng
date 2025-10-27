import { Component } from '@angular/core';
import {SpotifySearchService} from '../services/spotify-api/spotify-search-service';
import {Track} from '../interfaces/track';
import {Album} from '../interfaces/album';
import {Artist} from '../interfaces/artist';

@Component({
  selector: 'app-search-bar',
  standalone: false,
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  tracks: Track[] = [];
  albums: Album[] = [];
  artists: Artist[] = [];
  searchTerm: string = '';
  searchResults: any[] = [];
  searched: boolean = false;

  constructor(private searchService: SpotifySearchService) { }

  onSearch(){
    if (!this.searchTerm.trim()) {
      return
    }
    this.searched = true;

    this.searchService.search(this.searchTerm).subscribe({
      next: (results) => {
        this.tracks = results.tracks?.items || [];
        this.albums = results.albums?.items || [];
        this.artists = results.artists?.items || [];

        console.log(this.tracks);
        console.log(this.albums);
        console.log(this.artists);
      },
      error: (error) => {
        console.log(error);
        this.tracks = [];
        this.albums = [];
        this.artists = [];
      }
    });
  }
}
