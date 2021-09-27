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
import { EmailListComponent } from './email-list/email-list.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { EmailViewerComponent } from './email-viewer/email-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailReaderBasicComponent,
    FocusDirective,
    EmailReaderFormComponent,
    WithBodyPipe,
    EmailListComponent,
    EmailFormComponent,
    EmailViewerComponent
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
