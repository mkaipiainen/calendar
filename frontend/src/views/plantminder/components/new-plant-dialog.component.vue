<script setup lang="ts">
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import { DialogOptions } from '@/services/dialog.service';
import { useDialog } from '@/components/dialog/use-dialog';
const baseDialog = useDialog();

const props = defineProps<{
  id: string;
  dialogOptions: DialogOptions;
}>();
console.log('Works!');
</script>

<template>
  <div class="dialog-container">
    <div class="dialog-header">
      <span>Create a plant</span>
    </div>
    <div class="dialog-content">Some content here</div>
    <div class="dialog-actions">
      <Button
        type="button"
        label="Cancel"
        severity="secondary"
        @click="baseDialog.cancel()"
      ></Button>
      <Button type="button" label="Save" @click="baseDialog.submit()"></Button>
    </div>
  </div>
</template>

<style scoped></style>
