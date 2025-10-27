import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Album} from '../../interfaces/album';
import {SpotifyAlbumResponse} from '../../interfaces/spotify-api/spotify-album-response';
import {environment} from '../../../environments/environment.development';
import {Track} from '../../interfaces/track';
import {Image} from '../../interfaces/image';

@Injectable({
  providedIn: 'root'
})
export class SpotifyAlbumService {

  constructor(private _http: HttpClient) {}

  getAlbum(id: string):Observable<Album>{
    return this._http.get<SpotifyAlbumResponse>(`${environment.API_URL}/albums/${id}`).pipe(
      map(
        api_response =>{
          const mappedTracks: Track[] = api_response.tracks.items.map(
            track=> ({
              id: track.id,
              name: track.name,
              duration_ms: track.duration_ms,
              href: track.href,
              artists: track.artists.map(artist => ({
                id: artist.id,
                name: artist.name
              }))
            })
          );

          const mappedImages:Image[] = api_response.images.map(
            image => ({
              width: image.width,
              height: image.height,
              url: image.url
            })
          );

          return {
            id: api_response.id,
            name: api_response.name,
            total_tracks: api_response.total_tracks,
            images: mappedImages,
            href: api_response.href,
            tracks: mappedTracks
          }
        }
      )
    )
  }

}
