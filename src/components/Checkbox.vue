<template>
  <div class="checkbox-container">
    <div class="checkbox-round">
      <input type="checkbox" id="checkbox" :checked='true' />
      <label :for='checkFor'></label>
    </div>
  </div>
</template>

<script>
import './styles/checkbox.scss'
export default {
  props: ['checkFor'],
};
</script>
