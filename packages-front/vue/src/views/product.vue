<template>
  <a-table :dataSource="tableData" :columns="columns">
    <el-table-column prop="name" label="Name" width="180" />
  </a-table>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import request from '../request'

const tableData = ref([])

onMounted(async () => {
  await request('/v1/product').then((res) => {
    tableData.value = res.data
  })
})

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  }
]
</script>

<script lang="ts">
export default {
  name: 'product-view'
}
</script>
