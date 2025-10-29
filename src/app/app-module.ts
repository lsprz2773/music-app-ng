import {NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Playlist } from './playlist/playlist';
import { SearchBar } from './search-bar/search-bar';
import { AudioController } from './audio-controller/audio-controller';
import { SongInfo } from './song-info/song-info';
import { Player } from './player/player';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {authInterceptor} from './interceptors/auth-interceptor';
import {addAuthHeaderInterceptor} from './interceptors/core/add-auth-header-interceptor';
import { PlaylistControls } from './playlist-controls/playlist-controls';
import {FormsModule} from '@angular/forms';
import { SearchView } from './search-view/search-view';
import { AlbumCard } from './album-card/album-card';
import { ArtistCard } from './artist-card/artist-card';
import { SongCard } from './song-card/song-card';
import { SongMainView } from './song-main-view/song-main-view';

@NgModule({
  declarations: [
    App,
    Playlist,
    SearchBar,
    AudioController,
    SongInfo,
    Player,
    PlaylistControls,
    SearchView,
    AlbumCard,
    ArtistCard,
    SongCard,
    SongMainView
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(
      withInterceptors([
        authInterceptor,
        addAuthHeaderInterceptor
      ])
    ),
  ],
  bootstrap: [App]
})
export class AppModule { }
