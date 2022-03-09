import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @ViewChild('scroll') scroll: ElementRef;

  private count: number;
  private mobileMeasures: number;
  private desktopMeasures: number;

  constructor(private renderer2: Renderer2) {
    this.count = 0;
    this.mobileMeasures = 0;
    this.desktopMeasures = 0;
  }

  ngOnInit(): void {
  }

  public scrollLeft() {
    if (window.innerWidth <= 1024) {
      if (this.mobileMeasures < 0) {
        this.mobileMeasures = this.mobileMeasures + ((65 * window.innerWidth) / 100);
        this.count--;
      }
      this.scrolling();
    } else {
      if (this.desktopMeasures < 0) {
        this.desktopMeasures = this.desktopMeasures + 25;
        this.count--;
      }
      this.scrolling();
    }
    console.log('left')
  }
  public scrollRight() {
    if (window.innerWidth <= 1024) {
      if (this.count < 3) {
        this.mobileMeasures = this.mobileMeasures - ((65 * window.innerWidth) / 100);
        this.count++;
      }
      this.scrolling();
    } else {
      if (this.count < 2) {
        this.desktopMeasures = this.desktopMeasures - 25;
        this.count++;
      }
      this.scrolling();
    }
    console.log('right')
    this.scrolling();
  }

  scrolling() {
    const scroll = this.scroll.nativeElement;

    this.renderer2.setStyle(scroll, 'transform', `translate(${window.innerWidth < 1024 ? `${this.mobileMeasures}px` : `${this.desktopMeasures}rem`})`);
    this.renderer2.setStyle(scroll, 'transition', '.7s');
  }

}
