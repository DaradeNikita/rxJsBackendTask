import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from'@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './shared/components/home/home.component';
import { AboutComponent } from './shared/components/about/about.component';
import { CourseComponent } from './shared/components/course/course.component';
import { CoursesCardComponent } from './shared/components/courses-card/courses-card.component';
import { CourseDialogComponent } from './shared/components/course-dialog/course-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CourseComponent,
    CoursesCardComponent,
    CourseDialogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
