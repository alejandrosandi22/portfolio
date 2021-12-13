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
  }
  homeTransition(){
    this.sendClickedAlert.emit('home');
  }
  projectsTransition(){
    this.sendClickedAlert.emit('projects');
  }
  aboutMeTransition(){
    this.sendClickedAlert.emit('aboutMe');
  }
}
