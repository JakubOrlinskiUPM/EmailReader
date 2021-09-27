import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmailListComponent} from "./email-list/email-list.component";
import {EmailViewerComponent} from "./email-viewer/email-viewer.component";
import {EmailFormComponent} from "./email-form/email-form.component";

const routes: Routes = [
  {path: "", redirectTo: "/list", pathMatch: "full"},
  {path: "list", component: EmailListComponent},
  {path: "viewer/:id", component: EmailViewerComponent},
  {path: "form", component: EmailFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
