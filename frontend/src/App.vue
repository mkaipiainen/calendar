<script setup lang="ts">
import { RouterView } from 'vue-router';
import { ref } from 'vue';

const items = ref([
  {
    label: 'Calendar',
    icon: 'pi pi-calendar',
    route: '/calendar',
  },
  {
    label: 'Plantminder',
    icon: 'pi pi-heart-fill',
    route: '/plantminder',
  },
]);
</script>

<template>
  <div class="flex flex-col h-full w-full">
    <header class="sticky top-0 left-0 h-16">
      <div class="wrapper"></div>
    </header>

    <RouterView class="flex-grow" />
    <nav class="sticky bottom-0 left-0 h-24">
      <PMenubar :model="items" class="h-full bg-primary w-full">
        <template #item="{ item }">
          <RouterLink
            v-ripple
            active-class="bg-primary-active"
            :to="item.route"
            class="w-24 h-24 p-12 flex items-center justify-center cursor-pointer"
          >
            <i :class="item.icon"></i>
          </RouterLink>
        </template>
      </PMenubar>
    </nav>
  </div>
</template>

<style scoped>
.router-link-active {
  background-color: #f0f0f0;
}
</style>
