import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../../models/course';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-courses-card',
  templateUrl: './courses-card.component.html',
  styleUrls: ['./courses-card.component.scss']
})
export class CoursesCardComponent implements OnInit {
@Input() getCoursedata !: Course;

  constructor(private _matDialog:MatDialog,
    private _course:CourseService
  ) { }

  ngOnInit(): void {
  }
  onCourseEdit(){
    console.log('event work!!!');
    
  let dialogConfg = new MatDialogConfig()
  dialogConfg.data = this.getCoursedata;
  dialogConfg.width='500px';
  dialogConfg.disableClose=false;

  const dialogRef = this._matDialog.open(CourseDialogComponent,dialogConfg)
   dialogRef.afterClosed()
   .subscribe(course =>{
    console.log('Updates Course',course);
    this.getCoursedata = course
   

    
   })  

}
}
