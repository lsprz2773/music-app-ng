import {Component, OnInit} from '@angular/core';
import {SpotifySearchService} from '../services/spotify-api/spotify-search-service';
import {Track} from '../interfaces/track';
import {Album} from '../interfaces/album';
import {Artist} from '../interfaces/artist';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-bar',
  standalone: false,
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  searchTerm: string = '';
  searched: boolean = false;

  constructor(private searchService: SpotifySearchService, private router: Router) { }

  onSearch(){
    if (!this.searchTerm.trim()) {
      return
    }

    this.searched = true;
    this.router.navigate(['search', this.searchTerm]);
  }
}
