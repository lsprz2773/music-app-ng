import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchView} from './search-view/search-view';
import {SongMainView} from './song-main-view/song-main-view';

const routes: Routes = [
  {
    path: '',
    component: SongMainView
  },
  {
    path: 'search/:query',
    component: SearchView
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
