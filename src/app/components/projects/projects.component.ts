import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  @ViewChild('cardWrapper') cardWrapper: ElementRef;

  count:number = 0;
  move:number = 0;
  mobileMeasures:number = 0;
  desktopMeasures: number = 0;

  constructor(private renderer2: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
  }

  goLeft(){
    if (window.innerWidth < 1024) {
      if (this.mobileMeasures < 0) {
        this.mobileMeasures = this.mobileMeasures + ((56 * window.innerWidth) / 100);
        this.count--;
      }
      this.moving();
    } else {
      if (this.desktopMeasures < 0) {
        this.desktopMeasures = this.desktopMeasures + 25;
        this.count--;
      }
      this.moving();
    }
  }

  goRight(){
    if (window.innerWidth < 1024) {
      if (this.count < 2) {
        this.mobileMeasures = this.mobileMeasures - ((56 * window.innerWidth) / 100);
        this.count++;
        this.moving();
      }
    } else {
      if (this.count < 2) {
        this.desktopMeasures = this.desktopMeasures - 25;
        this.count++;
        this.moving();
      }
    }
  }

  moving(){
    const cardWrapper = this.cardWrapper.nativeElement;

    this.renderer2.setStyle(cardWrapper, 'transform', `translate(${window.innerWidth < 1024 ? `${this.mobileMeasures}px` : `${this.desktopMeasures}rem`})`);
    this.renderer2.setStyle(cardWrapper, 'transition', '.7s');
  }

}
