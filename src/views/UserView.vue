<script setup lang="ts">
import MyStops from "../components/User/MyStops/MyStops.vue";
import AllStops from "../components/User/AllStops/AllStops.vue";
import {API, fetchAllStops, fetchUserStops, TOKEN_KEY} from "../api/fetcherService";
import type {SingleUserStopResponse} from "../api/types";


import {useQuery} from "vue-query";


const { isLoading: isMyStopsLoading, data: myStops, refetch: refetchUserStops } = useQuery(
    ["stops"],
    fetchUserStops
);


const { isLoading: isAllStopsLoading, data: allStops } = useQuery(
    ["allStops"],
    fetchAllStops
)


</script>

<template>
    <Suspense>
      <div :style="{ display: 'flex', justifyContent: 'space-between', width: '100%' }">
         <div :style="{ width: '100%'}">
          <AllStops :allStops="allStops" :refetchUserStops="refetchUserStops" v-if="!isAllStopsLoading"/>
        </div>
        <div :style="{ width: '100%'}">
          <MyStops :stops="myStops"  :refetchUserStops="refetchUserStops" v-if="!isMyStopsLoading"/>
        </div>
      </div>
    </Suspense>
</template>

<style>

</style>
