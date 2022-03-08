import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'portfolio';

  @ViewChild('rotationScrolling') rotationScrolling: ElementRef;

  constructor(private app: AppService) {}

  ngOnInit(): void{
    setTimeout(() => {
      this.app.element = this.rotationScrolling.nativeElement;
    }, 100)
  }
}
