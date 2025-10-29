import {Component, input} from '@angular/core';
import {Track} from '../interfaces/track';
import {Image} from '../interfaces/image';

@Component({
  selector: 'app-song-card',
  standalone: false,
  templateUrl: './song-card.html',
  styleUrl: './song-card.css',
})
export class SongCard {
  song = input.required<Track>();

  formatDuration(duration:number | undefined): string {
    // @ts-ignore
    const totalSeconds = Math.floor(duration / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const formattedMinutes = minutes < 10 ? `0${minutes}` :minutes.toString();
    const formattedSeconds = seconds < 10 ? `0${seconds}` :seconds.toString();

    return `${formattedMinutes}:${formattedSeconds}`;
  }
}
