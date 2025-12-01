import { Component} from '@angular/core';
import { PlayerStateService } from '../../../../core/services/core/player-state-service';
@Component({
  selector: 'app-audio-controller',
  standalone: false,
  templateUrl: './audio-controller.html',
  styleUrl: './audio-controller.css',
})
export class AudioController {

  constructor(public playerState: PlayerStateService) { }

  onPrevious() {
    this.playerState.previousTrack();
  }

  onNext() {
    this.playerState.nextTrack();
  }
}
