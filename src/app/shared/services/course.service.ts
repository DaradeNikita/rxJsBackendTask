import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map, shareReplay, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course, IcourseRes } from '../models/course';
import { IlessonsRes, Lesson } from '../models/lessons';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
courseUrl =`${environment.baseUrl}/courses`;
chnageCatgory$:Subject<boolean> = new Subject<boolean>()
  constructor(private _http: HttpClient) { }


  getAllCourses(): Observable<Course[]> {
    return this._http.get<IcourseRes>(this.courseUrl)
    .pipe(
      tap(res =>console.log(res)),
      map(res =>res['payload']),
      shareReplay()
    )
}

getSingleCourse(courseId:string):Observable<Course>{
  let singleCourseUrl =`${this.courseUrl}/${courseId}`;
 return this._http.get<Course>(singleCourseUrl)
}

getCourseLessons(courseId:string,pageSIze:number = 10,filter=''):Observable<Lesson[]>{
let courseLessionUrl = `${environment.baseUrl}/lessons`;
let params = new HttpParams()
  .set('courseId',courseId)
  .set('pageSize',pageSIze)
  .set('filter',filter)
return this._http.get<IlessonsRes>(courseLessionUrl,{
  params : params
  })
  .pipe(
    map(res =>{
      console.log(res);
      
      return res['payload']
    })
  )
}
updateCourse(updatedCourse:Course):Observable<Course>{
  let updateUrl = `${this.courseUrl}/${updatedCourse.id}`;
  return this._http.put<Course>(updateUrl,updatedCourse)
  
}

}
