import {SpotifyImageResponse} from './spotify-image-response';

export interface SpotifyTracksResponse {
  id: string,
  name: string,
  artist: {
      id: string,
      name: string,
      href: string
  },
  images: SpotifyImageResponse[]
}
