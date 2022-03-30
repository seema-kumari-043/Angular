import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RedElementDirective } from './red-element.directive';
import { NsService } from './ns.service';
import { StudentListComponent } from './student-list/student-list.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
@NgModule({
  declarations: [
    AppComponent,
    RedElementDirective,
    StudentListComponent,
    TeacherListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [NsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
