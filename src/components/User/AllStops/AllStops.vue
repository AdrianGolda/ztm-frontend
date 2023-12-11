<script lang="ts">
// @ts-ignore
import { VueGoodTable } from 'vue-good-table-next';

// add to component
export default {
  name: 'my-component',
  data(){
    return {
      columns: [
        {
          label: 'Autobus',
          field: 'routeId',
          type: 'number',
        },
        {
          label: 'Czas przyjazdu',
          field: 'theoreticalTime',
          type: 'time',
        },
        {
          label: 'Opoznienie',
          field: 'delayInSeconds',
          type: 'number',
        },
      ],
      rows: [
        { id:1, routeId:"7", theoreticalTime: '15:30', delayInSeconds: -135 },
        { id:1, routeId:"8", theoreticalTime: '14:30', delayInSeconds: -122 },
      ],
    };
  },
};
</script>
<template>
  <div>
    <vue-good-table
      :columns="columns"
      :rows="rows"/>
  </div>
</template>

<style scoped>
</style>
