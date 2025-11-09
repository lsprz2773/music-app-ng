import {Component, input} from '@angular/core';
import {Track} from '../../../../../../core/interfaces/track';
import {Image} from '../../../../../../core/interfaces/image';


@Component({
  selector: 'app-song-info',
  standalone: false,
  templateUrl: './song-info.html',
  styleUrl: './song-info.css',
  host:{
    '[class]': 'displayMode()',
  }
})
export class SongInfo {
  display_mode = input.required<string>({alias: 'displayMode'});
  song = input.required<Track | undefined>();
  cover = input.required<Image | undefined>();

  displayMode(){
    return this.display_mode();
  }

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
