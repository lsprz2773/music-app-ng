import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {environment} from '../../../environments/environment.development';
import {CookiesStorageService} from '../general/cookies-storage-service';
import {Artist} from '../../interfaces/artist';


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
          tracks: response.tracks || {items: []},
          albums: response.albums || {items: []},
          artists: {
            items: this.mapArtists(response.artists?.items || [])
          }
        }
      })
    );
  }

  private mapArtists(spotifyResponse: any[]):Artist[]{
    return spotifyResponse.map(artist => ({
      id: artist.id,
      name: artist.name,
      image: artist.images[0]?.url || '',
      followers: artist.followers?.total || 0
    }));
  }
}
