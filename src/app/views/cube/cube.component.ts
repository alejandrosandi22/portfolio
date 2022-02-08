import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.scss']
})
export class CubeComponent implements OnInit {

  @ViewChild('rotateTransition', { static: true }) rotateEl: ElementRef;

  constructor(
    public app: AppService,
    private renderer2: Renderer2,
    private el: ElementRef) { }

  ngOnInit(): void {
  }

  scrollTransition(startTransition){

    const rotate = this.rotateEl.nativeElement;

    if (startTransition === 'true') {
      startTransition = 'false';
      if(this.app.scroll === 0 || this.app.scroll > 2){
        this.app.scroll = 1;

        setTimeout(() =>{
          this.renderer2.setStyle(rotate, 'transform', 'rotateX(0deg)' + 'scale(.9) scaleZ(.9)');
          this.renderer2.setStyle(rotate, 'transition', '.5s')
        }, 500)
        setTimeout(() =>{
          this.renderer2.setStyle(rotate, 'transform', 'rotateX(90deg)' + 'scale(.9) scaleZ(.9)');
          this.renderer2.setStyle(rotate, 'transition', '.5s')
        }, 1000)
        setTimeout(() =>{
          this.renderer2.setStyle(rotate, 'transform', 'rotateX(90deg)' + 'scale(1) scaleZ(1)');
          this.renderer2.setStyle(rotate, 'transition', '.5s')
        }, 1500)


      } else if (this.app.scroll === 1) {

        this.app.scroll = 2;

        setTimeout(() =>{
          this.renderer2.setStyle(rotate, 'transform', 'rotateX(90deg)' + 'scale(.9) scaleZ(.9)');
          this.renderer2.setStyle(rotate, 'transition', '.5s')
        }, 500)
        setTimeout(() =>{
          this.renderer2.setStyle(rotate, 'transform', 'rotateX(180deg)' + 'scale(.9) scaleZ(.9)');
          this.renderer2.setStyle(rotate, 'transition', '.5s')
        }, 1000)
        setTimeout(() =>{
          this.renderer2.setStyle(rotate, 'transform', 'rotateX(180deg)' + 'scale(1) scaleZ(1)');
          this.renderer2.setStyle(rotate, 'transition', '.5s')
        }, 1500)
      } else {

        this.app.scroll = 0;

        setTimeout(() =>{
          this.renderer2.setStyle(rotate, 'transform', 'rotateX(180deg) scale(.9) scaleZ(.9)');
          this.renderer2.setStyle(rotate, 'transition', '.5s')
        }, 0)
        setTimeout(() =>{
          this.renderer2.setStyle(rotate, 'transform', 'rotateX(90deg)' + 'scale(.9) scaleZ(.9)');
          this.renderer2.setStyle(rotate, 'transition', '.5s')
        }, 500)
        setTimeout(() =>{
          this.renderer2.setStyle(rotate, 'transform', 'rotateX(0deg)' + 'scale(.9) scaleZ(.9)');
          this.renderer2.setStyle(rotate, 'transition', '.5s')
        }, 1000)
        setTimeout(() =>{
          this.renderer2.setStyle(rotate, 'transform', 'rotateX(0deg)' + 'scale(1) scaleZ(1)');
          this.renderer2.setStyle(rotate, 'transition', '.5s')
        }, 1500)
      }

    } else if (startTransition === 'home' && this.app.emitterIdentification != 1) {

      this.app.scroll = 0;

        if (this.app.emitterIdentification === 3) {
          setTimeout(() =>{
            this.renderer2.setStyle(rotate, 'transform', 'rotateX(180deg) scale(.9) scaleZ(.9)');
            this.renderer2.setStyle(rotate, 'transition', '.5s')
          }, 0)
        }
        setTimeout(() =>{
          this.renderer2.setStyle(rotate, 'transform', 'rotateX(90deg) scale(.9) scaleZ(.9)');
          this.renderer2.setStyle(rotate, 'transition', '.5s')
        }, 500)
        setTimeout(() =>{
          this.renderer2.setStyle(rotate, 'transform', 'rotateX(0deg) scale(.9) scaleZ(.9)');
          this.renderer2.setStyle(rotate, 'transition', '.5s')
        }, 1000)
        setTimeout(() =>{
          this.renderer2.setStyle(rotate, 'transform', 'rotateX(0deg) scale(1) scaleZ(1)');
          this.renderer2.setStyle(rotate, 'transition', '.5s')
        }, 1500)
    } else if (startTransition === 'projects' && this.app.emitterIdentification != 2) {

      this.app.scroll = 1;

      if (this.app.emitterIdentification === 1) {
        setTimeout(() =>{
          this.renderer2.setStyle(rotate, 'transform', 'rotateX(0deg)' + 'scale(1) scaleZ(1)');
          this.renderer2.setStyle(rotate, 'transition', '.5s')
        }, 0)
        setTimeout(() =>{
          this.renderer2.setStyle(rotate, 'transform', 'rotateX(0deg)' + 'scale(.9) scaleZ(.9)');
          this.renderer2.setStyle(rotate, 'transition', '.5s')
        }, 500)
      } else if (this.app.emitterIdentification === 3) {
        setTimeout(() =>{
          this.renderer2.setStyle(rotate, 'transform', 'rotateX(180deg)' + 'scale(1) scaleZ(1)');
          this.renderer2.setStyle(rotate, 'transition', '.5s')
        }, 0)
        setTimeout(() =>{
          this.renderer2.setStyle(rotate, 'transform', 'rotateX(180deg)' + 'scale(.9) scaleZ(.9)');
          this.renderer2.setStyle(rotate, 'transition', '.5s')
        }, 500)
      }

      setTimeout(() =>{
        this.renderer2.setStyle(rotate, 'transform', 'rotateX(90deg)' + 'scale(.9) scaleZ(.9)');
        this.renderer2.setStyle(rotate, 'transition', '.5s')
      }, 1000)
      setTimeout(() =>{
        this.renderer2.setStyle(rotate, 'transform', 'rotateX(90deg)' + 'scale(1) scaleZ(1)');
        this.renderer2.setStyle(rotate, 'transition', '.5s')
      }, 1500)
    } else if (startTransition === 'aboutMe') {

      this.app.scroll = 2;

      if (this.app.emitterIdentification === 1) {
        setTimeout(() =>{
          this.renderer2.setStyle(rotate, 'transform', 'rotateX(0deg)' + 'scale(.9) scaleZ(.9)');
          this.renderer2.setStyle(rotate, 'transition', '.5s')
        }, 0)
      }
      setTimeout(() =>{
        this.renderer2.setStyle(rotate, 'transform', 'rotateX(90deg)' + 'scale(.9) scaleZ(.9)');
        this.renderer2.setStyle(rotate, 'transition', '.5s')
      }, 500)
      setTimeout(() =>{
        this.renderer2.setStyle(rotate, 'transform', 'rotateX(180deg)' + 'scale(.9) scaleZ(.9)');
        this.renderer2.setStyle(rotate, 'transition', '.5s')
      }, 1000)
      setTimeout(() =>{
        this.renderer2.setStyle(rotate, 'transform', 'rotateX(180deg)' + 'scale(1) scaleZ(1)');
        this.renderer2.setStyle(rotate, 'transition', '.5s')
      }, 1500)
    }
  } 
}
