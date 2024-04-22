<template>
  <v-app>
    <v-app-bar>
      <template #prepend>
        👛
      </template>

      <v-app-bar-title>Wallet</v-app-bar-title>
      
      <v-btn to="/settings">Settings</v-btn>
      <v-btn to="/order-book">Order Book</v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  //
</script>
