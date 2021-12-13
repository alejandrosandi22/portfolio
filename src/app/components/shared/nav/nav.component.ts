import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
 
})

export class NavComponent implements OnInit {

  @Output() sendClickedAlert = new EventEmitter();

  active: boolean;
  
  constructor(public app: AppService) {}

  ngOnInit(): void {
  }

  toggle(){
    if(!this.active){
      this.active = true;
    }else{
      this.active = false;
    }
  }
  scrolling(){
      this.sendClickedAlert.emit('true');
      this.app.emitterIdentification = 0;
  }
  homeTransition(){
    if (this.app.emitterIdentification != 1) {
      this.sendClickedAlert.emit('home');
      this.app.emitterIdentification = 1;
    }
  }
  projectsTransition(){
    if (this.app.emitterIdentification != 2) {
      this.sendClickedAlert.emit('projects');
      this.app.emitterIdentification = 2;
    }
  }
  aboutMeTransition(){
    if (this.app.emitterIdentification!= 3) {
      this.sendClickedAlert.emit('aboutMe');
      this.app.emitterIdentification = 3;
    }
  }
}
