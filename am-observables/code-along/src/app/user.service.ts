import { Subject } from 'rxjs/Subject';

export class UserService {
  userActivated: Subject<number> = new Subject();

  constructor() { }

}
