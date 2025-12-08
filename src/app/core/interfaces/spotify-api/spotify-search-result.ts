import {Track} from '../track';
import {Album} from '../album';
import {Artist} from '../artist';

export interface SpotifySearchResult {
  tracks : Track[];
  albums : Album[];
  artists : Artist[];
}
