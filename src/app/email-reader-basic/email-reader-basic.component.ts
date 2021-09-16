import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-email-reader-basic',
  templateUrl: './email-reader-basic.component.html',
  styleUrls: ['./email-reader-basic.component.css']
})
export class EmailReaderBasicComponent implements OnInit {

  isSubmitted = false;
  emailForm = this.formBuilder.group({to: 'jake@email.com', from: 'jack@hotmail.net', subject: 'Re: Hello', body: 'Hi there!'});

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.isSubmitted = true
    console.log("submitted", this.emailForm);
  }

}
