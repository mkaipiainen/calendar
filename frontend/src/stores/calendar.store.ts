import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import {
  eachDayOfInterval,
  eachWeekOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  startOfMonth,
  startOfWeek,
} from 'date-fns';

export const useCalendarStore = defineStore('counter', () => {
  const weeks = ref(
    eachWeekOfInterval({
      start: startOfWeek(startOfMonth(new Date())),
      end: endOfWeek(endOfMonth(new Date())),
    }).map((date) => {
      return {
        key: date.getTime(),
        days: eachDayOfInterval({
          start: date,
          end: endOfWeek(date),
        }).map((date) => ({
          date,
          key: date.getTime(),
          label: format(date, 'dd'),
        })),
      };
    }),
  );
  const weekdays = ref(
    eachDayOfInterval({
      start: startOfWeek(new Date()),
      end: endOfWeek(new Date()),
    }).map((date) => format(date, 'EEEE')),
  );

  return { weeks, weekdays };
});
