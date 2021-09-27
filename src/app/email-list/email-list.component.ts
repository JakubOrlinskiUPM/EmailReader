import { Component, OnInit } from '@angular/core';
import {EmailServiceService} from "../services/email-service.service";
import {Email} from "../interfaces/email";
import {Router} from "@angular/router";

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.css']
})
export class EmailListComponent implements OnInit {
  searchQuery: string;
  withBody: boolean;

  constructor(public emailService: EmailServiceService, private router: Router) {
    this.searchQuery = "";
    this.withBody = false;
  }

  ngOnInit(): void {
  }

  openEmail(email: Email) {
    this.router.navigate([`/viewer/${email.id}`])
  }

  deleteEmail(email: Email) {
    this.emailService.deleteEmail(email.id);
  }

  createEmail() {
    this.router.navigate([`/form`])
  }
}
