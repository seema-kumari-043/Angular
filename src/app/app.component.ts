import { Component } from '@angular/core';
import { NsService } from './ns.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';
  name = "Seema";
  name2 ="";
  disable = false;
  
  goBack(){return "go back"};

  message:String="";
  constructor(private nsService:NsService){}
    ngOnInit():void{
      this.message = this.nsService.getMsg();
    
  }
}


