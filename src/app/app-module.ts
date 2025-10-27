import {NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Playlist } from './playlist/playlist';
import { SearchBar } from './search-bar/search-bar';
import { AudioController } from './audio-controller/audio-controller';
import { SongInfo } from './song-info/song-info';
import { Player } from './player/player';
import {provideHttpClient} from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    Playlist,
    SearchBar,
    AudioController,
    SongInfo,
    Player
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
  ],
  bootstrap: [App]
})
export class AppModule { }
