import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NsService {

  constructor() { }

  getMsg(){
    return "Welcome to Dependency Injection!"
  }
}
