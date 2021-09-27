import {Component, OnInit} from '@angular/core';
import {Email} from "../interfaces/email";

@Component({
  selector: 'app-email-reader-basic',
  templateUrl: './email-reader-basic.component.html',
  styleUrls: ['./email-reader-basic.component.css']
})
export class EmailReaderBasicComponent implements OnInit {

  email: Email;

  constructor() {
    this.email = this.resetEmail();
  }

  ngOnInit(): void {
  }

  resetEmail(): Email {
    return {id: 0, to: "", from: "jakub.orlinski@alumnos.upm.es", body: "", subject: ""};
  }

  clear() {
    this.email = this.resetEmail();
  }

  send() {
    window.alert(`The email ${this.email.subject} to ${this.email.to} has been sent!`)
  }
}
