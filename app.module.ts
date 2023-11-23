import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorChangerComponent } from './color-changer/color-changer.component';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { FilsComponent } from './fils/fils.component';
import { EditorComponent } from './editor/editor.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { ListeCvComponent } from './cvTech/liste-cv/liste-cv.component';
import { ItemCvComponent } from './cvTech/item-cv/item-cv.component';
import { DetailCvComponent } from './cvTech/detail-cv/detail-cv.component';
import { NgStyleComponent } from './ng-style/ng-style.component';

import { DefaultImageComponent } from './default-image/default-image.component';
import { DefaultImagePipe } from './default-image/default-image.pipe';
import { ArcCielDirective } from './arc-ciel/arc-ciel.directive';
import { ArcCielComponent } from './arc-ciel/arc-ciel.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorChangerComponent,
    CarteVisiteComponent,
    FilsComponent,
    EditorComponent,
    CvComponent,
    ListeCvComponent,
    ItemCvComponent,
    DetailCvComponent,
    NgStyleComponent,

    DefaultImageComponent,
    DefaultImagePipe,
    ArcCielDirective,
    ArcCielComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
