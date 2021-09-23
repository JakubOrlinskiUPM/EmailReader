import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailReaderBasicComponent } from './email-reader-basic/email-reader-basic.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FocusDirective } from './directives/focus.directive';
import { EmailReaderFormComponent } from './email-reader-form/email-reader-form.component';
import { WithBodyPipe } from './pipes/with-body.pipe';
import {Ng2SearchPipeModule} from "ng2-search-filter";

@NgModule({
  declarations: [
    AppComponent,
    EmailReaderBasicComponent,
    FocusDirective,
    EmailReaderFormComponent,
    WithBodyPipe
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        Ng2SearchPipeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
