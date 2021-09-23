import {Component, OnInit, ViewChild} from '@angular/core';
import {Email} from "../interfaces/email";

@Component({
  selector: 'app-email-reader-form',
  templateUrl: './email-reader-form.component.html',
  styleUrls: ['./email-reader-form.component.css']
})
export class EmailReaderFormComponent implements OnInit {

  email: Email;
  emailList: Email[];

  @ViewChild('emailForm') emailForm: any;

  searchQuery: string = "";
  withBody: boolean = false;

  constructor() {
    this.email = {to: "jake@email.com", from: "jake@email.com", body: "hello", subject: "Hi there!"};
    this.emailList = [];
  }

  onSubmit() {
    this.emailList.push(this.emailForm.form.value);
    this.clear();
  }

  clear() {
    this.emailForm.reset();
  }

  ngOnInit(): void {}
}


