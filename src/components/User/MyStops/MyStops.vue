<script setup lang="ts">

import type { SingleStopType, SingleUserStopResponse} from "../../../api/types";
import SingleStop from "../SingleStop/SingleStop.vue";
import {onMounted} from "vue";


const props = defineProps<{
  stops: SingleUserStopResponse[]
}>()

const parsedStops: SingleStopType[] = props.stops.map(stop => ({
  title: stop.stopName,
  rows: stop.delay.map(singleDelay => ({
    id: '1',
    routeId: "2",
    theoreticalTime: "3",
    delayInSeconds: 4
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
