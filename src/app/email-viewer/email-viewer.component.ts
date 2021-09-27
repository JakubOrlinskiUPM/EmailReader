import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Email} from "../interfaces/email";
import {EmailServiceService} from "../services/email-service.service";

@Component({
  selector: 'app-email-viewer',
  templateUrl: './email-viewer.component.html',
  styleUrls: ['./email-viewer.component.css']
})
export class EmailViewerComponent implements OnInit {

  email: Email;
  constructor(private emailService: EmailServiceService, private route: ActivatedRoute) {
    this.email = {id: 0, to: "", from: "", body: "", subject: ""};
  }

  ngOnInit(): void {
    let email = this.emailService.getEmailById(Number.parseInt(this.route.snapshot.paramMap.get("id") || ""))
    if (email) {
      this.email = email;
    }
  }

}
