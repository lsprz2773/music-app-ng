import {inject, Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {environment} from '../../../environments/environment.development';
import {CookiesStorageService} from '../general/cookies-storage-service';
import {Artist} from '../../interfaces/artist';
import {Track} from '../../interfaces/track';
import {Album} from '../../interfaces/album';


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
      .set('offset', '0');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this._cookieStorage.getKeyValue('access_token')}`
    });

    return this._http.get(`${environment.API_URL}/search`,{params,headers}).pipe(
      map((response:any) => {
        return{
          tracks: response.tracks.items,
          albums: response.albums.items,
          artists: response.artists.items,
        }
      })
    );
  }


}
