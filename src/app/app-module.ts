import {NgModule, provideBrowserGlobalErrorListeners} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Playlist } from './features/player/components/playlist/playlist';
import { SearchBar } from './features/player/components/search-bar/search-bar';
import { AudioController } from './features/player/components/audio-controller/audio-controller';
import { SongCard } from './features/player/components/search-view/items/song-card/song-card';
import { Player } from './features/player/player';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {authInterceptor} from './core/interceptors/auth-interceptor';
import {addAuthHeaderInterceptor} from './core/interceptors/core/add-auth-header-interceptor';
import { PlaylistControls } from './features/player/components/playlist/playlist-controls/playlist-controls';
import {FormsModule} from '@angular/forms';
import { SearchView } from './features/player/components/search-view/search-view';
import { AlbumCard } from './features/player/components/search-view/items/album-card/album-card';
import { ArtistCard } from './features/player/components/search-view/items/artist-card/artist-card';
import { SongInfo } from './shared/song-info/song-info';
import { SongMainView } from './features/player/components/song-main-view/song-main-view';

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
