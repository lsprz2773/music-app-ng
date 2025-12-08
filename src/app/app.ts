import {Component, OnInit, signal} from '@angular/core';
import {CookiesStorageService} from './core/services/core/cookies-storage-service';
import {SpotifyLoginService} from './core/services/spotify-api/spotify-login-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit {
  constructor(
    private _spotifyLogin: SpotifyLoginService,
    private _cookieStorage: CookiesStorageService
  ) {}

  //ngOnInit() {
    //if(!this._cookieStorage.exists('access_token') || !this._cookieStorage.isCookieValid('access_token'))
      //this._spotifyLogin.getAccessToken().subscribe();
  //}
  ngOnInit() {
    console.log('🔥 Forzando petición de token...');
    this._spotifyLogin.getAccessToken().subscribe({
      next: (res) => console.log('✅ Token recibido:', res),
      error: (err) => console.error('❌ Error token:', err)
    });
  }
}
