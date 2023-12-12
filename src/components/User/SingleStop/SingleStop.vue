<script setup lang="ts">
// @ts-ignore
import {VueGoodTable} from 'vue-good-table-next';
import type { SingleStopType} from "../../../api/types";
import {removeStop} from "@/api/fetcherService";

defineProps<SingleStopType>()


const columns = [
  {
    label: 'Autobus',
    field: 'routeId',
    type: 'number',
  },
  {
    label: 'Czas przyjazdu',
    field: 'estimatedTime',
    type: 'time',
  },
  {
    label: 'Opoznienie',
    field: 'delayInSeconds',
    type: 'number',
  }
]
</script>
<template>
  <div>
    <h1>{{title}}</h1>
    <button @click="removeStop(id)">Remove stop</button>
    <vue-good-table
        :columns="columns"
        :rows="rows"/>
  </div>
</template>

<style scoped>
</style>
