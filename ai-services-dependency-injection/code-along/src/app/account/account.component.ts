import {
  Component,
  Input,
  OnInit
} from '@angular/core';

import { Account } from '../shared/account';
import { AccountsService } from '../shared/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() acct: Account;

  constructor(private accounter: AccountsService) {}

  ngOnInit() {
    this.accounter.newAccountCreated.subscribe(
      name => {
        console.log(`${name} was just created!`);
      }
    );
  }

  setStatus(newStatus) {
    this.acct.status = newStatus;
    this.accounter.changeStatus(this.acct);
  }
}
