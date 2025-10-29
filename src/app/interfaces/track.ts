import {Image} from './image';

export interface Track {
  id: string,
  name: string,
  duration_ms: number,
  href: string,
  artists: {
    id: string,
    name: string,
  }[],
  album?: {
    id: string,
    name: string,
    images:Image[]
  };
}
