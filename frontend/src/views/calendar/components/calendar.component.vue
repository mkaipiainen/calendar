<script setup lang="ts">
import { useCalendarStore } from '@/stores/calendar.store';

const calendarStore = useCalendarStore();
</script>

<template>
  <div class="flex-grow flex flex-col">
    <div class="calendar-container p-4 h-full w-full flex flex-col">
      <div class="flex items-center h-12 w-full grow-0 shrink-0">
        <div
          v-for="day in calendarStore.weekdays"
          :key="day"
          class="flex-grow flex items-center"
        >
          <span class="font-bold">{{ day }}</span>
        </div>
      </div>
      <div
        v-for="week in calendarStore.weeks"
        :key="week.key"
        class="flex p-4 flex-grow border-t-2 border-r-2 w-full"
      >
        <div v-for="day in week.days" :key="day.key" class="flex flex-grow">
          <div class="flex justify-between">
            <span class="font-bold">{{ day.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
