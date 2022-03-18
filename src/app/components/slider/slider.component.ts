import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

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

  constructor(private renderer2: Renderer2, public app: AppService) {
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
  }
  public scrollRight() {
    if (window.innerWidth <= 1024) {
      if (this.count < this.app.projects.length - 1) {
        this.mobileMeasures = this.mobileMeasures - ((65 * window.innerWidth) / 100);
        this.count++;
      }
      this.scrolling();
    } else {
      if (this.count < this.app.projects.length - 2) {
        this.desktopMeasures = this.desktopMeasures - 25;
        this.count++;
      }
      this.scrolling();
    }
    this.scrolling();
  }

  scrolling() {
    const scroll = this.scroll.nativeElement;

    this.renderer2.setStyle(scroll, 'transform', `translate(${window.innerWidth < 1024 ? `${this.mobileMeasures}px` : `${this.desktopMeasures}rem`})`);
    this.renderer2.setStyle(scroll, 'transition', '.7s');
  }

}
