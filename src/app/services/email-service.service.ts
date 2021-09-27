import { Injectable } from '@angular/core';
import {Email} from "../interfaces/email";

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  private emailList: Email[];

  constructor() {
    this.emailList = [
      {id: 1, to: "jake@upm.es", from: "email@hotmail.net", subject: "Subject 1", body: "Hi  there!"}
    ];
  }

  getAllEmails() : Email[] {
    return this.emailList;
  }

  getEmailById(id: number) : Email | undefined {
    return this.emailList.find(email => email.id === id);
  }

  addEmail(email: Email) {
    this.emailList.push(email);
  }

  deleteEmail(id: number) {
    this.emailList = this.emailList.filter(email => email.id !== id);
  }

  getNewEmailId() {
    let ids: number[] = this.emailList.map(email => email.id)
    console.log(ids, Math.max(...ids), Math.max(...ids) + 1)
    return Math.max(...ids) + 1
  }

}
