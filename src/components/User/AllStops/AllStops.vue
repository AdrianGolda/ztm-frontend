<script setup lang="ts">
// @ts-ignore
import {VueGoodTable} from 'vue-good-table-next';
import type {SingleStop, SingleUserStopResponse} from "../../../api/types";
import {computed, onMounted} from "vue";
import {addStop} from "@/api/fetcherService";

// add to component

const props = defineProps<{
  allStops: SingleStop[]
  refetchUserStops: () => void;

}>()

const allStops = computed(() => props.allStops)
onMounted(() => {
  console.log('props', props)
})

import { useMutation } from "vue-query";

function useAddStopMutation() {
  return useMutation(['stops'],(id: number) => addStop(id), {
    onSuccess: () => {
      props.refetchUserStops();

    }
  });
}

const { mutate } = useAddStopMutation();

function add(id: number) {
  mutate(id);
}




</script>
<template>
  <h1>All stops</h1>
  <div class="flex" v-for="stop in allStops" v-bind:key="stop.stopName">
    <div>{{ stop.stopName }}</div>
    <button @click="add(stop.stopId)">add</button>
  </div>
</template>


<style scoped>
</style>
