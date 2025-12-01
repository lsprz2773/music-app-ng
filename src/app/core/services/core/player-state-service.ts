import { Injectable, signal, Signal } from '@angular/core';
import { Track } from '../../interfaces/track';

@Injectable({
  providedIn: 'root'
})
export class PlayerStateService {
  private tracks = signal<Track[]>([])
  private currentTrackIndex = signal<number>(0)

  getCurrentTrack= () => this.tracks()[this.currentTrackIndex()]
  getCurrentIndex= () => this.currentTrackIndex()
  getTracks= () => this.tracks()

  setTracks(tracks: Track[]){
    this.tracks.set(tracks);
    this.currentTrackIndex.set(0);
  }

  nextTrack(){
    const currentIndex = this.currentTrackIndex();
    const totalTracks = this.tracks().length;
    
    if(currentIndex < totalTracks - 1){
      this.currentTrackIndex.set(currentIndex + 1);
    }
  }

  previousTrack(){
    const currentIndex = this.currentTrackIndex();
    if(currentIndex > 0){
      this.currentTrackIndex.set(currentIndex - 1);
    }
  }

  hasNext(){
    return this.currentTrackIndex() < this.tracks().length - 1;
  }

  hasPrevious(){
    return this.currentTrackIndex() > 0;
  }
}
