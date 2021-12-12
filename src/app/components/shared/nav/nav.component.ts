import { Component, OnInit} from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
 
})

export class NavComponent implements OnInit {

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
    if(this.app.scroll == 0){
      this.app.scroll = 1;
    }else if(this.app.scroll == 1){
      this.app.scroll = 2;
    }else{
      this.app.scroll = 0;
    }
  }
}
