import {RouterModule, Routes} from '@angular/router';
import {TeacherListComponent} from "./view/teacher-list/teacher-list.component";
import {TeacherAddComponent} from "./view/teacher-add/teacher-add.component";
import {NgModule} from "@angular/core";
import {ContentComponent} from "./view/content/content.component";

export const routes: Routes = [
  { path: 'page', component: ContentComponent },
  { path: '', redirectTo: '/page', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
