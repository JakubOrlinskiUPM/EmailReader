import { Pipe, PipeTransform } from '@angular/core';
import {Email} from "../interfaces/email";

@Pipe({
  name: 'withBody'
})
export class WithBodyPipe implements PipeTransform {

  transform(emails: Email[], withBody: boolean): Email[] {
    return withBody ? emails.filter((email) => (email.body && email.body.length > 0)) : emails;
  }

}
