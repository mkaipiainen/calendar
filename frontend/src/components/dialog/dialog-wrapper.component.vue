<template>
  <component
    :is="dialog.component"
    v-for="dialog in dialogs"
    :key="dialog.inputs.id"
    v-bind="dialog.inputs"
  />
</template>

<script setup lang="ts">
import { DialogService } from '@/services/dialog.service';
import { injectStrict } from '@/util/strict-inject';
const dialogService = injectStrict(DialogService);
const dialogs = dialogService.dialogs;
</script>
