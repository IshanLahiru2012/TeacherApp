import {Component, EventEmitter, Output} from '@angular/core';
import {TeacherService} from "../../services/teacher.service";
import {TeacherReqDto} from "../../dto/teacher-req-dto";

@Component({
  selector: 'app-teacher-add',
  template: `
    <div class="flex flex-col  space-y-4">
        <h2 class="text-2xl font-bold font-serif">Add Teacher Here</h2>
        <div class="w-full  flex space-x-2">
          <input class="px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                 [(ngModel)]="teacherName" placeholder="Enter teacher name">
          <button (click)="addTeacher()"
                  class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none">
            Add Teacher
          </button>
        </div>
    </div>

  `,
  styleUrl: './teacher-add.component.css'
})
export class TeacherAddComponent {
  teacherName: string = '';
  constructor(private teacherService:  TeacherService) { }

  addTeacher() {
    if (this.teacherName) {
      const teacherdata = new TeacherReqDto(this.teacherName);
      this.teacherService.saveTeacher(teacherdata).subscribe(() => {
        this.teacherName = '';
        this.teacherService.notifyTeacherAdded();
      });
    }
  }
}
