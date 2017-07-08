import { Injectable, EventEmitter } from '@angular/core';

import { Account } from './account';
import { LoggingService } from './logging.service';

@Injectable()
export class AccountsService {
  newAccountCreated: EventEmitter<string> = new EventEmitter<string>();

  accounts: Account[] = [
    new Account('Master Account', 'active', 0),
    new Account('Test Account', 'inactive', 1),
    new Account('Hidden Account', 'unknown', 2)
  ]

  constructor(private logger: LoggingService) {}

  pushAccount(account: Account) {
    this.accounts.push(account);
    this.logger.logStatusChange(account.status);
  }

  changeStatus(account: Account) {
    this.accounts[account.id].status = account.status;
    this.logger.logStatusChange(account.status);
  }
}
