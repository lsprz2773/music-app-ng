import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment.development';
import {SpotifyLoginService} from './spotify-login-service';
import {CookiesStorageService} from '../general/cookies-storage-service';

@Injectable({
  providedIn: 'root'
})
export class SpotifySearchService {
  constructor(private _http: HttpClient) { }
  _cookieStorage: CookiesStorageService = inject(CookiesStorageService);

  search(query:string):Observable<any>{
    const params = new HttpParams()
      .set('q', query)
      .set('type', 'track,album,artist')
      .set('market', 'ES')
      .set('limit', '10')
      .set('offset', '10');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this._cookieStorage.getKeyValue('access_token')}`
    });

    return this._http.get(`${environment.API_URL}/search`,{params,headers})
  }
}
