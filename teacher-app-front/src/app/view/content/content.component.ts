import { Component } from '@angular/core';
import {TeacherAddComponent} from "../teacher-add/teacher-add.component";
import {TeacherListComponent} from "../teacher-list/teacher-list.component";

@Component({
  selector: 'app-content',
  template: `
    <div class=" flex flex-col space-y-6 w-screen px-10">
        <app-teacher-add ></app-teacher-add>
        <app-teacher-list></app-teacher-list>
    </div>
  `,
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
