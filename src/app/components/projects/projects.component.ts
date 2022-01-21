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

  constructor(private renderer2: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
  }

  goLeft(){
    if (window.innerWidth <= 720) {
      if (this.mobileMeasures < 0) {
        this.mobileMeasures = this.mobileMeasures + ((62 * window.innerWidth) / 100);
        this.count--;
      }
      this.moving();
    } else {
      if (this.move < 0) {
        this.move = this.move + 192;
        this.moving();
      }
    }
  }

  goRight(){
    if (window.innerWidth <= 720 && this.count < 1) {
      this.mobileMeasures = this.mobileMeasures - ((62 * window.innerWidth) / 100);
      this.count++;
      this.moving();
    } else {
      if (this.move < 0) {
        this.move = this.move - 400;
        this.moving();
      }
    }
  }

  moving(){
    const cardWrapper = this.cardWrapper.nativeElement;

    this.renderer2.setStyle(cardWrapper, 'transform', `translate(${this.mobileMeasures}px)`);
    this.renderer2.setStyle(cardWrapper, 'transition', '1s');
  }

}
