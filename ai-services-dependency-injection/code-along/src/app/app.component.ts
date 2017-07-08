import { Component, OnInit } from '@angular/core';

import { Account } from './shared/account';
import { AccountsService } from './shared/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  accounts: Account[] = [];

  constructor(private accounter: AccountsService) {}

  ngOnInit() {
    this.accounts = this.accounter.accounts;
  }
}
