import {Component, OnDestroy, OnInit} from '@angular/core';
import {TeacherService} from "../../services/teacher.service";
import {TeacherDto} from "../../dto/teacher-dto";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-teacher-list',
  template: `

    <div class="">
      <header class="p-4 font-bold text-amber-700 text-4xl font-serif ">
        <p>Teachers List</p>
      </header>
      <div class="table-container">
        <table class="min-w-full divide-y divide-gray-200 ">
          <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="table-header id-column">
              Id
            </th>
            <th scope="col" class="table-header ">
              Teacher Name
            </th>
          </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
          <ng-container *ngIf="pagedTeachers.length > 0; else noData">
            <tr *ngFor="let teacher of pagedTeachers; let i = index">
              <td class="px-6 py-4  bg-sky-400 id-column">
                {{ teacher.id }}
              </td>
              <td class="px-6 py-4 ">
                {{ teacher.name }}
              </td>
            </tr>
          </ng-container>
          <ng-template #noData>
            <tr>
              <td colspan="2" class="px-6 py-4 text-center text-gray-500">No data available</td>
            </tr>
          </ng-template>
          </tbody>

        </table>
      </div>


      <div class="mt-4 flex justify-end">
        <nav class="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
          <button
            *ngFor="let page of totalPages"
            (click)="setCurrentPage(page)"
            [class.bg-blue-500]="currentPage === page"
            class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none"
          >
            {{ page }}
          </button>
        </nav>
      </div>
    </div>

  `,
  styleUrl: './teacher-list.component.css'
})
export class TeacherListComponent implements OnInit, OnDestroy{
  teachers: TeacherDto[] = [];
  pagedTeachers: TeacherDto[] = [];
  currentPage: number = 1;
  pageSize: number = 10;
  private teacherAddedSubscription!: Subscription;

  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.loadTeachers();
    this.teacherAddedSubscription = this.teacherService.teacherAdded$.subscribe(() => {
      this.loadTeachers();
    });
  }
  ngOnDestroy(): void {
    this.teacherAddedSubscription.unsubscribe();
  }

  loadTeachers(): void {
    this.teacherService.getTeachers().subscribe(teachers => {
      this.teachers = teachers;
      this.updatePagedTeachers();
    });
  }

  updatePagedTeachers(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.pagedTeachers = this.teachers.slice(startIndex, startIndex + this.pageSize);
  }

  setCurrentPage(page: number): void {
    this.currentPage = page;
    this.updatePagedTeachers();
  }

  get totalPages(): number[] {
    return Array(Math.ceil(this.teachers.length / this.pageSize)).fill(0).map((x, i) => i + 1);
  }
}
