import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

export interface ReminderInterface {
  time: string;
  activity: string;
}
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('getAllReminders')
  getAllReminders() {
    return this.appService.getAllReminders();
  }
}
