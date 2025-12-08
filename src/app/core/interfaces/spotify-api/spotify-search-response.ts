import {Track} from '../track';
import {Album} from '../album';
import {Artist} from '../artist';

export interface SpotifySearchResponse {
  tracks: {items : Track[]};
  albums: {items: Album[]};
  artists: {items: Artist[]};
}
