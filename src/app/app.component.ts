import { Component, OnInit } from '@angular/core';
import { CourseService } from './shared/services/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'rxjsCourseTask';
  constructor(){}
  ngOnInit(): void {
  
  }

}
