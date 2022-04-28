import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { RestService } from 'src/app/services/rest.service';

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

  constructor(private renderer2: Renderer2, public app: AppService, public rest: RestService) {
    this.count = 0;
    this.mobileMeasures = 0;
    this.desktopMeasures = 0;
  }

  ngOnInit(): void {
    this.loadProjects();
  }

  public loadProjects() {
    
    const allProjects = [
       {
        "image": "https://i.ibb.co/wRSGzx9/projects-manager-preview.png",
        "title": "Projects",
        "description": "Projects manager app. Created with Next JS, GraphQL and MongoDB",
        "url": "https://projects-manager.alejandrosandi.com/",
        "github": "https://github.com/AleSandi22/projects"
      },
      {
        "image": "https://i.ibb.co/vwJdFJr/chat-preview.png",
        "title": "Chat",
        "description": "This is a web app where you can chat with other people. Created with Vue js and Firebase",
        "url": "https://chat.alejandrosandi.com",
        "github": "https://github.com/AleSandi22/chat"
      },
      {
        "image": "https://i.ibb.co/V3BTLQG/gym-manage-preview.png",
        "title": "Payment Manager",
        "description": "Client's payment manager of a gym. Created with React, Typescript, Node.js and PostgreSQL.",
        "url": "https://payment-manager.alejandrosandi.com/",
        "github": "https://github.com/AleSandi22/gym-manage-frontend"
      },
      {
        "image": "https://i.ibb.co/27kRrQb/tic-tac-toe.png",
        "title": "Tic Tac Toe",
        "description": "Tic tac toe game is the classic game noughts and crosses, is twith multiplayer or local mode. Created with Vue js and Firebase.",
        "url": "https://tic-tac-toe.alejandrosandi.com",
        "github": "https://github.com/AleSandi22/tic-tac-toe"
      },
      {
        "image": "https://i.ibb.co/K5kJ2WF/pomodoro-preview.png",
        "title": "Pomodoro",
        "description": "The Pomodoro technique is a method to improve the management of the time dedicated to an activity. Created with React js and Typescript",
        "url": "https://pomodoro.alejandrosandi.com",
        "github": "https://github.com/AleSandi22/pomodoro"
      },
      {
        "image": "https://i.ibb.co/VQkS3F4/memory-preview.png",
        "title": "Memory",
        "description": "Memory game, where the score of each player is saved in a global ranking. Created with Angular and Firebase.",
        "url": "https://memory.alejandrosandi.com",
        "github": "https://github.com/AleSandi22/memory"
      }
    ]

      this.app.projects = allProjects;
      this.app.loading = false;
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
