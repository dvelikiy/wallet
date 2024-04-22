<script setup lang="ts">
import { useFetch } from '@vueuse/core';
import { ref } from 'vue';
import { useAppStore } from '@/stores/app';
import { storeToRefs } from 'pinia';

const appStore = useAppStore();

const asks = ref([])
const bids = ref([])

const getOrderBook = async () => {
  const url = `https://api.binance.com/api/v3/depth?symbol=${appStore.currencyPair}&limit=100`
  const { isFetching, error, data } = await useFetch(url).json()
  console.log(data.value);
  asks.value = data.value.asks;
  bids.value = data.value.asks;
}
getOrderBook();

const height = window.innerHeight - 270;

</script>

<template>
  <div class="pa-6">
    <!-- https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#order-book -->
    <!-- https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#diff-depth-stream -->
    <h1 class="mb-4">Order Book {{ appStore.currencyPair }}</h1>
    <div class="d-flex ga-3">
      <v-data-table-virtual 
        :height="height"
        fixed-header
        :items="asks" 
        :headers="[
          { title: 'Price', key: '0' }, 
          { title: 'Quantity', key: '1'}, 
        ]">
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Asks</v-toolbar-title>
          </v-toolbar>
        </template>
      </v-data-table-virtual>
      <v-data-table-virtual 
        :height="height"
        fixed-header
        :items="bids" 
        :headers="[
          { title: 'Price', key: '0' }, 
          { title: 'Quantity', key: '1'}, 
        ]">
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Bids</v-toolbar-title>
          </v-toolbar>
        </template>
      </v-data-table-virtual>
    </div>

  </div>
</template>


<style scoped>

</style>