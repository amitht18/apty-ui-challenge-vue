<template>
  <div class="checkbox-container">
    <div class="checkbox-round">
      <input type="checkbox" :id='checkFor' :checked='false' />
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
