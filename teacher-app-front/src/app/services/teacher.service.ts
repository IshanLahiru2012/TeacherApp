import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TeacherReqDto} from "../dto/teacher-req-dto";
import {Observable} from "rxjs";
import {TeacherDto} from "../dto/teacher-dto";
import {List} from "postcss/lib/list";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http:HttpClient) { }

  private readonly API_BASE_URL = 'http://localhost:8080/api/v1/teachers';

  teacherAdded$: EventEmitter<void> = new EventEmitter<void>();

  public saveTeacher(teacherData : TeacherReqDto): Observable<TeacherDto>{
    return this.http.post<TeacherDto>(this.API_BASE_URL, teacherData);
  }

  public getTeachers():Observable<any>{
    return this.http.get(this.API_BASE_URL);
  }

  notifyTeacherAdded() {
    this.teacherAdded$.emit();
  }

}
