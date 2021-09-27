import {Component, OnInit, ViewChild} from '@angular/core';
import {Email} from "../interfaces/email";
import {EmailServiceService} from "../services/email-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {

  constructor(private emailService: EmailServiceService, private router: Router) {
    this.email = {id: emailService.getNewEmailId(), to: "jake@upm.es", from: "some@email.com", body: "", subject: "Re:"};
  }

  email: Email;
  @ViewChild('emailForm') emailForm: any;

  onSubmit() {
    this.email = Object.assign(this.email, this.emailForm.form.value);
    console.log(this.email, this.emailForm.form.value);
    this.emailService.addEmail(this.email);
    this.router.navigate(["/"])
  }

  clear() {
    if (this.emailForm) {
      this.emailForm.reset();
    }
  }

  ngOnInit(): void {
    this.clear();
  }

}
