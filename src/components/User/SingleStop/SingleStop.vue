<script setup lang="ts">
// @ts-ignore
import {VueGoodTable} from 'vue-good-table-next';
import type {SingleStopType} from "../../../api/types";
import {removeStop} from "@/api/fetcherService";

const props = defineProps<SingleStopType & { refetchUserStops: () => void }>()


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


import {useMutation} from "vue-query";
import {ref} from "vue";

function useRemoveStopMutation() {
  return useMutation(['stops'], (id: number) => removeStop(id), {
    onSuccess: () => {
      console.log('success remove')
      props.refetchUserStops();
    }
  });
}

const {mutate} = useRemoveStopMutation();

function remove(id: number) {
  isActive.value = true;
  mutate(id);
}

const isActive = ref(false)
</script>
<template>
  <div>
    <h1 :class="{ remove: isActive }">{{ title }}</h1>
    <button @click="remove(id)">Remove stop</button>
    <vue-good-table
        :key="title"
        :columns="columns"
        :rows="rows"/>
  </div>
</template>

<style scoped>

.remove {
  color: red
}
</style>
