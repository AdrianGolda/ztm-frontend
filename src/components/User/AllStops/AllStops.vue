<script setup lang="ts">
// @ts-ignore
import {VueGoodTable} from 'vue-good-table-next';
import type {SingleStop, SingleUserStopResponse} from "../../../api/types";
import {onMounted} from "vue";
import {addStop} from "@/api/fetcherService";

// add to component

const props = defineProps<{
  allStops: SingleStop[]
}>()

const allStops = props.allStops
onMounted(() => {
  console.log('props', props)
})




</script>
<template>
  <h1>All stops</h1>
  <div class="flex" v-for="stop in allStops" v-bind:key="stop.stopName">
    <div>{{ stop.stopName }}</div>
    <button @click="addStop(stop.stopId)">add</button>
  </div>
</template>


<style scoped>
</style>
