<script setup lang="ts">
import MyStops from "../components/User/MyStops/MyStops.vue";
import {API, TOKEN_KEY} from "../api/fetcherService";
import type {SingleUserStopResponse} from "../api/types";


import { useQuery } from "vue-query";

const fetchUserStops = async (): Promise<SingleUserStopResponse[]> => {
  return await fetch(`${API}/user-stops`, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
      'authorization': `bearer ${localStorage.getItem(TOKEN_KEY)}`

    }
  }).then(async response => {
    return await response.json();
  })
}
const { isLoading, data: stops } = useQuery(
  ["stops"],
  fetchUserStops
);


</script>

<template>
  <div>
    <Suspense>
        <MyStops :stops="stops" v-if="!isLoading"/>
      </Suspense>
  </div>
</template>

<style>

</style>
