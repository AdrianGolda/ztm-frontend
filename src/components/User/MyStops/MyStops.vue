<script setup lang="ts">

import type { SingleStopType, SingleUserStopResponse} from "../../../api/types";
import SingleStop from "../SingleStop/SingleStop.vue";
import {onMounted} from "vue";


const props = defineProps<{
  stops: SingleUserStopResponse[]
}>()

const parsedStops = props.stops.map(stop => ({
  title: stop.stopName,
  rows: stop.delay.map(singleDelay => ({
    id: singleDelay.id,
    routeId: singleDelay.routeId,
    estimatedTime: singleDelay.estimatedTime,
    delayInSeconds: singleDelay.delayInSeconds,
  }))
}))
onMounted(() => {
  console.log('props', props)
})


</script>
<template>
  <div v-for="stop in parsedStops"  v-bind:key="stop.title">
    <single-stop :title="stop.title" :rows="stop.rows"/>
  </div>
</template>

<style scoped>
</style>
