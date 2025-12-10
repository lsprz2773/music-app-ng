import {Component} from '@angular/core';
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

  constructor(private router: Router) { }

  onSearch(){
    if (this.searchTerm === "") {
      return
    }
      this.searched = true;
      this.router.navigate(['search', this.searchTerm]);
  }
}
