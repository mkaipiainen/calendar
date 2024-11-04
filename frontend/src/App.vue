<script setup lang="ts">
import { RouterView } from 'vue-router';
import { DialogService } from '@/services/dialog.service';
import { injectStrict } from '@/util/strict-inject';

const dialogService = injectStrict(DialogService);
</script>

<template>
  <div class="flex flex-col h-full w-full">
    <RouterView class="flex-grow" />
  </div>
  <div
    :style="{ zIndex: dialogService.dialogs.value.length ? 50 : -1 }"
    class="top-0 left-0 fixed w-full h-full pointer-events-none flex items-center justify-center"
  >
    <dialog-wrapper
      class="w-full h-full flex justify-center items-center pointer-events-none"
    ></dialog-wrapper>
  </div>
</template>

<style scoped></style>
