import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiniWordComponent } from './component/directives/mini-word/mini-word.component';
import { NgclassComponent } from './component/directives/ngclass/ngclass.component';
import { NgstyleComponent } from './component/directives/ngstyle/ngstyle.component';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/todo/todo.component';

const routes: Routes = [
  { path: '', component: CvComponent},
  { path: 'todo', component: TodoComponent},
  { path: 'word', component: MiniWordComponent},
  { path: 'ngclass', component: NgclassComponent},
  { path: 'ngstyle', component: NgstyleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
