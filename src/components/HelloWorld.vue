<template>
  <div class="ctn">
    <n-input v-model:value="value" @keyup="handleKeyUp" placeholder=""/>
    <n-data-table :columns="columns" :data="data" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { data, columns } from "./data";
const value = ref("");
const handleKeyUp = () => {
  if (value.value.length > 2) value.value = "";
  if (value.value.length == 2) {
    const inputArr = value.value.split("");
    let row: any = inputArr[0];
    if (row == "0") row = 10;
    if (row == "/") row = 11;
    if (row == "*") row = 12;
    if (row == "+") row = 13;
    let column = inputArr[1];
    if (column == "1") column = "plumBlossom";
    if (column == "2") column = "spade";
    if (column == "3") column = "heart";
    if (column == "4") column = "block";
    data.value[row - 1][column] = "";

    value.value = "";
  }
};
</script>

<style scoped>
.ctn :deep(.red) {
  color: red;
}
</style>
