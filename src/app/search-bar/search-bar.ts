import { Component } from '@angular/core';
import {SpotifySearchService} from '../services/spotify-api/spotify-search-service';

@Component({
  selector: 'app-search-bar',
  standalone: false,
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
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
        this.searchResults = results;
        console.log(this.searchTerm);
        console.log(results);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
