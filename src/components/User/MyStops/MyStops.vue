<script setup lang="ts">

import type { SingleStopType, SingleUserStopResponse} from "../../../api/types";
import SingleStop from "../SingleStop/SingleStop.vue";
import {computed, onMounted} from "vue";


const props = defineProps<{
  stops: SingleUserStopResponse[],
  refetchUserStops: () => void
}>()

const parsedStops = computed(() => props.stops.map(stop => ({
  title: stop.stopName,
  id: stop.stopId,
  rows: stop.delay.map(singleDelay => ({
    id: singleDelay.id,
    routeId: singleDelay.routeId,
    estimatedTime: singleDelay.estimatedTime,
    delayInSeconds: singleDelay.delayInSeconds,
  }))
})))

// const parsedStops = props.stops.map(stop => ({
//   title: stop.stopName,
//   id: stop.stopId,
//   rows: stop.delay.map(singleDelay => ({
//     id: singleDelay.id,
//     routeId: singleDelay.routeId,
//     estimatedTime: singleDelay.estimatedTime,
//     delayInSeconds: singleDelay.delayInSeconds,
//   }))
// }))


onMounted(() => {


  // console.log('props', props)
})



</script>
<template>
  <h1>My Stops</h1>
  <div id="my-stops" v-for="stop in parsedStops"  v-bind:key="stop.title">
    <single-stop :refetch-user-stops="props.refetchUserStops" :title="stop.title" :id="stop.id" :rows="stop.rows"/>
  </div>
</template>

<style scoped>
</style>
