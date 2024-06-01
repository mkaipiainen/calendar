import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { CalendarDateProviderService } from '@src/app/calendar/calendar-date-provider.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe],
})
export class CalendarDayComponent {
  public calendarDateProviderService = inject(CalendarDateProviderService);

  public date = input.required<Date>();
  constructor() {}
}
