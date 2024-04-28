import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Course } from '../../models/course';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.scss']
})
export class CourseDialogComponent implements OnInit {
courseData!:Course;
courseForm!:FormGroup
  constructor(
    @Inject(MAT_DIALOG_DATA) private course: Course,
    private _fb:FormBuilder,
    private _course:CourseService,
    private _matDilog:MatDialogRef<CourseDialogComponent>
  ) {
    // console.log(course);
    this.createCourseForm()
    this.courseData = course;
    // console.log(this.courseData);
    this.courseForm.patchValue(course)
   
    
    
   }

  ngOnInit(): void {
  }
  createCourseForm(){
    this.courseForm = this._fb.group({
      description:["",Validators.required],
      category : ["", Validators.required],
      releaseAt:["",Validators.required],
      longDescription:["",Validators.required],
    })
  }
  // get f(){
  //   return this.courseForm.controls
  // }

  savecourse(){
   if(this.courseForm.valid){
    let updatedObj={...this.courseForm.value,id:this.courseData.id}
   this._course.updateCourse(updatedObj)
    .subscribe(res =>{
      console.log(res);
      this._course.chnageCatgory$.next(true)
      this._matDilog.close(updatedObj)
     
      })
    }
  }
}
 


