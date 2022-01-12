<template>
  <button class="funny-button" :style="{color:color}">
    <slot />
  </button>
</template>
<script lang="ts">
import { defineProps, withDefaults } from 'vue';
import { Bean } from './Bean';

export default { name: 'FunnyButton' };
</script>

<script lang="ts" setup>
withDefaults(defineProps<{ color: string; type: string }>(), {
    type: 'primary',
});
const bean = new Bean();
bean.label = 'hehhe';
console.log('bean :>> ', bean.label);
</script>

<style lang="less">
.funny-button {
    min-width: 120px;
    color: #4fc08d;
    font-size: 16px;
    line-height: 36px;
    background-color: #ebfff0;
    border: none;
    border-radius: 30px;
}
</style>
