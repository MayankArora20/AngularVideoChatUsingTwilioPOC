import { Component, OnInit, Input, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { connect, createLocalVideoTrack } from 'twilio-video';

@Component({
  selector: 'app-video-component',
  templateUrl: './video-component.component.html',
  styleUrls: ['./video-component.component.css']
})
export class VideoComponentComponent implements OnInit {

  @Input() TwilioToken: string;
  @ViewChild('localVideo') local;
  @ViewChild('remote') remote;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    connect(this.TwilioToken, {video: true, audio: true, name: 'test'} )
    .then(room => {

      createLocalVideoTrack().then(track => {
        this.renderer.appendChild(this.local.nativeElement, track.attach());
      });


      room.on('participantConnected', (participant) => {

        participant.tracks.forEach(publication => {
            if (publication.isSubscribed) {
                const track = publication.track;
                this.renderer.appendChild(this.remote.nativeElement, track.attach());
            }
        });

        participant.on('trackSubscribed',  (track) => {
          this.renderer.appendChild(this.remote.nativeElement, track.attach());
        });
    });

      // room.participants.forEach(participant => {
      //   participant.tracks.forEach(publication => {
      //     if (publication.isSubscribed) {
      //       this.renderer.appendChild(this.remote.nativeElement, publication.track.);
      //     }
      //   });
      // });

    });
  }

}

