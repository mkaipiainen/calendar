import { computed, Injectable, Signal } from '@angular/core';
import { signalState } from '@ngrx/signals';
import {
  addWeeks,
  eachDayOfInterval,
  eachWeekOfInterval,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
} from 'date-fns';

export type CalendarDateProviderState = {
  mode: 'week' | 'month';
  selectedDate: Date;
};

export type CalendarDateProviderComputedState = {
  dates: Signal<Date[][]>;
  headers: Signal<Date[]>;
};

@Injectable()
export class CalendarDateProviderService {
  public state = signalState({
    mode: 'month',
    selectedDate: new Date(),
  });

  public computedState: CalendarDateProviderComputedState = {
    dates: computed(() => {
      if (this.state.mode() === 'week') {
        const currentWeekStart = startOfWeek(this.state.selectedDate());
        const dates = eachDayOfInterval({
          start: currentWeekStart,
          end: endOfWeek(this.state.selectedDate()),
        });
        return [dates];
      } else {
        const currentMonthStart = startOfMonth(this.state.selectedDate());
        const weeks = eachWeekOfInterval({
          start: currentMonthStart,
          end: endOfMonth(this.state.selectedDate()),
        });
        return weeks.map(week => {
          return eachDayOfInterval({
            start: week,
            end: endOfWeek(week),
          });
        });
      }
    }),
    headers: computed(() => {
      const currentWeekStart = startOfWeek(this.state.selectedDate());
      const dates = eachDayOfInterval({
        start: currentWeekStart,
        end: endOfWeek(this.state.selectedDate()),
      });
      return dates;
    }),
  };

  constructor() {}
}
