import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CalendarDateProviderService } from './calendar-date-provider.service';
import { DatePipe } from '@angular/common';
import { CalendarDayComponent } from '@src/app/calendar/day/calendar-day.component';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  standalone: true,
  imports: [DatePipe, CalendarDayComponent],
  providers: [CalendarDateProviderService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent {
  public calendarDateProviderService = inject(CalendarDateProviderService);
}
