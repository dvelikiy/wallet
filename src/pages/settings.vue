<script setup lang="ts">
import { watch } from 'vue';
import { useAppStore } from '@/stores/app';
import { storeToRefs } from 'pinia';

const currencyPairs = ['BTCUSDT', 'BNBBTC', 'ETHBTC'];

const appStore = useAppStore();

const { currencyPair, log } = storeToRefs(appStore);

watch(currencyPair, (oldValue, newValue) => {
  appStore.addLog({
    message: `Currency pair changed from ${oldValue} to ${newValue}`,
    time: new Date().toLocaleTimeString(),
  })
});
</script>

<template>
  <div class="pa-6">
    <h1 class="mb-4">Settings</h1>
    <v-select
      v-model="currencyPair"
      label="Currency pair"
      :items="currencyPairs"
    ></v-select>
      <h2 class="mb-4">Log</h2>
      <p v-if="log.length === 0">No recent activity</p>
      <v-list v-else lines="two">
        <v-list-item
          v-for="item in log"
          :key="item"
          :title="item.message"
          :subtitle="item.time"
        ></v-list-item>
      </v-list>
  </div>
</template>

<style scoped>

</style>