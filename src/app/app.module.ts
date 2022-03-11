import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './component/first/first.component';
import { SecondComponent } from './component/second/second.component';
import { ColorComponent } from './component/color/color.component';
import {FormsModule} from "@angular/forms";
import { TwoComponent } from './component/two/two.component';
import { CardComponent } from './component/card/card.component';
import { SommeComponent } from './component/somme/somme.component';
import { CvComponent } from './cv/cv/cv.component';
import { ListComponent } from './cv/list/list.component';
import { ItemComponent } from './cv/item/item.component';
import { DetailComponent } from './cv/detail/detail.component';
import { MiniWordComponent } from './component/directives/mini-word/mini-word.component';
import { NgclassComponent } from './component/directives/ngclass/ngclass.component';
import { NgstyleComponent } from './component/directives/ngstyle/ngstyle.component';
import { HighlightDirective } from './component/directives/highlight.directive';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { TodoComponent } from './todo/todo/todo.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HireComponent } from './cv/hire/hire.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { RainbowDirective } from './component/directives/rainbow.directive';
import { RouterSimulatorComponent } from './component/router-simulator/router-simulator.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    CardComponent,
    SommeComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    DetailComponent,
    DefaultImagePipe,
    TodoComponent,
    HireComponent,
    MiniWordComponent,
    NgclassComponent,
    NgstyleComponent,
    HighlightDirective,
    NavBarComponent,
    RainbowDirective,
    RouterSimulatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
