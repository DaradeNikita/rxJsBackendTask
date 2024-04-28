import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course.service';
import { Observable, filter, map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 coursesArr !: Array<Course>;
 begineerCourseArr!:Course[];
 advancedCourseArr!:Course[];
AllCourses$!: Observable<Course[]>
begineersCourses$!:Course[]
advancedCourses$!:Course[]
  constructor(private _course:CourseService) { }

  ngOnInit(): void {
    this.getCourse()
    this._course.chnageCatgory$
      .subscribe(res=>{
        if(res){
          this.getCourse()
        }
      })
  //  this.AllCourses$= this._course.getAllCourses()
  //  this.advancedCourses$ = this.AllCourses$
  //                           .pipe(
  //                             map(res=>{
  //                               console.log(res);
  //                              return res.filter(course =>course.category ==='ADVANCED')
  //                              })
  //                           )
  //  this.begineersCourses$ = this.AllCourses$
  //                           .pipe(
  //                             map(res=>{
  //                               console.log(res);
  //                              return res.filter(course =>course.category ==='BEGINNER')
  //                              })
  //                           )
  //     //.subscribe(course =>{
  //       // this.coursesArr = course['payload'];
  //       // console.log(this.coursesArr);
        
  //    // })
     }
    getCourse(){
      this._course.getAllCourses()
      .subscribe(course =>{
        this.begineerCourseArr = course.filter(course =>course.category === 'BEGINNER');
        this.advancedCourseArr = course.filter(course =>course.category ==='ADVANCED');
      })
    }

}
