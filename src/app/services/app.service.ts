import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  scroll: number = 3;
  emitterIdentification: number = 1;

  constructor() { }

}
