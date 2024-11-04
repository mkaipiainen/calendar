<script setup lang="ts">
import Button from 'primevue/button';
import NewPlantDialogComponent from '@/views/plantminder/components/new-plant-dialog.component.vue';
import { DialogService } from '@/services/dialog.service';
import { injectStrict } from '@/util/strict-inject';

const dialogService = injectStrict(DialogService);
function addNewPlant() {
  dialogService
    .openDialog({
      component: NewPlantDialogComponent,
      inputs: {},
      options: {
        closeOnEscape: true,
        closeOnOutsideClick: true,
      },
    })
    .then((data: any) => {
      console.log(data);
    })
    .then(() => {
      console.log('Dialog closed');
    });
}
</script>

<template>
  <div class="flex-grow flex items-center justify-center">
    <div class="z-1 flex justify-center items-center w-full h-full">
      <Button
        icon="pi pi-plus"
        label="Start by adding a plant"
        @click="addNewPlant()"
      ></Button>
    </div>
  </div>
</template>

<style scoped>
.background {
  background-image: url('/leaf.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
}
</style>
