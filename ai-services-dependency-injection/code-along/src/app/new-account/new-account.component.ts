import {
  Component,
  OnInit,
  ViewChild,
  ElementRef
} from '@angular/core';

import { Account } from '../shared/account';
import { AccountsService } from '../shared/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  @ViewChild('accountName') name: ElementRef;
  @ViewChild('accountStatus') status: ElementRef;

  constructor(private accounter: AccountsService) {}

  ngOnInit() {
    this.clearInputs();
  }

  createAccount() {
    this.accounter.pushAccount(new Account(
      this.name.nativeElement.value,
      this.status.nativeElement.value.toLowerCase(),
      this.accounter.accounts.length
    ));
    this.accounter.newAccountCreated.emit(this.name.nativeElement.value);
    this.clearInputs();
  }

  clearInputs() {
    this.name.nativeElement.value = "";
    this.status.nativeElement.value = "";
  }

}
