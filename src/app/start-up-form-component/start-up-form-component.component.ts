import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TokensService } from '../services/tokens.service';

@Component({
  selector: 'app-start-up-form-component',
  templateUrl: './start-up-form-component.component.html',
  styleUrls: ['./start-up-form-component.component.css']
})
export class StartUpFormComponentComponent implements OnInit {

    email: string;
    roomName: string;
    @Output() TwilioToken = new EventEmitter();

    constructor(private token: TokensService) { }

    ngOnInit(): void {
    }

    onsubmit(){
      this.token.getToken(this.email).subscribe(data => {
        this.TwilioToken.emit(data.token);
      });
    }

  }
