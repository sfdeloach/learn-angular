export class LoggingService {
  logStatusChange(status: string) {
    console.log(`An account status changed, new status: ${status}`);
  }
}
