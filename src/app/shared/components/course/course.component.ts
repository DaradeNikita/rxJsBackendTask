import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { Observable, debounceTime, distinctUntilChanged, pipe, startWith, switchMap, tap } from 'rxjs';
import { Course } from '../../models/course';
import { Lesson } from '../../models/lessons';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  courseId!:string;
  singleCourse$!:Observable<Course>;
  lesson$! :Observable<Lesson[]>;
 lessonForm!:FormGroup;

  constructor(private _route : ActivatedRoute,
    private _course : CourseService
  ) { }

  ngOnInit(): void {
    this.lessonForm = new FormGroup({
      lesson:new FormControl(null,[Validators.required])
    })
    this.courseId = this._route.snapshot.params['courseId']
    console.log(this.courseId);
    this.singleCourse$=this._course.getSingleCourse(this.courseId);

    this.lesson$ = this._course.getCourseLessons(this.courseId);

    this.lesson$ = this.lessonForm.get('lesson') 
    ?.valueChanges
    .pipe(
      startWith(''),
      tap(res =>console.log(res)),
      debounceTime(1000),
       distinctUntilChanged(),
      switchMap(str =>this._course.getCourseLessons(this.courseId,10,str))
    ) as Observable<Lesson[]>
    // .subscribe(res =>{
    //   console.log(res);
      
    // })
    }
    
   
}
