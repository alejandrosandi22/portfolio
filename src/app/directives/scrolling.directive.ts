import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { AppService } from '../services/app.service';

@Directive({
  selector: '[appScrolling]',
  exportAs: 'scrollingDirective'
})
export class ScrollingDirective {

  private transitionTime: number = 500;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2, private app: AppService) {
    this.app.views = {current: 'home', next: 'projects'};
  }

  @HostListener('click') onChangeView() {
    const cubeRef = this.app.element;
    
    if (this.elementRef.nativeElement.id === 'scroll') return this.scrolling(cubeRef);
    if (this.elementRef.nativeElement.id === 'home') {
      this.goToHome();
      return this.scrolling(cubeRef);
    }
    if (this.elementRef.nativeElement.id === 'projects') {
      this.goToProjects();
      return this.scrolling(cubeRef);
    }
    else if (this.elementRef.nativeElement.id === 'about-me') {
      this.goToAboutMe();
      return this.scrolling(cubeRef);
    }
  }

  goToHome() {
    this.app.views.next = 'home';
  }
  goToProjects() {
    this.app.views.next = 'projects';
  }
  goToAboutMe() {
    this.app.views.next = 'about-me';
  }

  scrolling(cubeRef: HTMLDivElement) {
    if (this.app.views.current === 'home' && this.app.views.next === 'projects') {
      this.app.views = {current: 'projects', next: 'about-me'};
      return this.prueba(cubeRef, 0, 90);
    }
    if (this.app.views.current === 'home' && this.app.views.next === 'about-me') {
      this.app.views = {current: 'about-me', next: 'home'};
      return this.prueba(cubeRef, 0, 180);
    }
    if (this.app.views.current === 'projects' && this.app.views.next === 'home') {
      this.app.views = {current: 'home', next: 'projects'};
      return this.prueba(cubeRef, 90, 0);
    }
    if (this.app.views.current === 'projects' && this.app.views.next === 'about-me') {
      this.app.views = {current: 'about-me', next: 'home'};
      return this.prueba(cubeRef, 90, 180);
    }
    if (this.app.views.current === 'about-me' && this.app.views.next === 'home') {
      this.app.views = {current: 'home', next: 'projects'};
      return this.prueba(cubeRef, 180, 0);
    }
    if (this.app.views.current === 'about-me' && this.app.views.next === 'projects') {
      this.app.views = {current: 'projects', next: 'about-me'};
      return this.prueba(cubeRef, 180, 90);
    }
  }

  //html div element, current degrees in the current view, next degrees to join in the next view
  prueba(cubeRef: HTMLDivElement, currentDeg: number, nextDeg: number ) {
    setTimeout(() => {
      this.renderer2.setStyle(cubeRef, 'transform', `rotateX(${currentDeg}deg) scale(.9) scaleZ(.9)`);
      this.renderer2.setStyle(cubeRef, 'transition', '.5s')
    }, this.transitionTime);

    setTimeout(() => {
      this.renderer2.setStyle(cubeRef, 'transform', `rotateX(${nextDeg}deg) scale(.9) scaleZ(.9)`);
      this.renderer2.setStyle(cubeRef, 'transition', '.5s');
    }, this.transitionTime * 2);

    setTimeout(() => {
      this.renderer2.setStyle(cubeRef, 'transform', `rotateX(${nextDeg}deg) scale(1) scaleZ(1)`);
      this.renderer2.setStyle(cubeRef, 'transition', '.5s');
    }, this.transitionTime * 3);
  }

}
