<template>
  <div class='card'>
    <Checkbox v-bind:checkFor='id'/>
    <div class='card-image' :style="{ backgroundImage: 'url(' + require('@/assets/images/' + cityData.imageLink) + ')' }"></div>
    <div class='card-labels'>
      <div
        v-for='label in cityData.labels'
        class='label-pill'
        :key='label'
        v-text='label'
      ></div>
    </div>
    <p class='card-name' v-text='cityData.name'></p>
    <span class='card-description' v-text='cityData.description'></span>
    <div class='card-footer'>
      <div class='comment'>

      </div>
      <div class='like'>

      </div>
    </div>
  </div>
</template>

<script>
import './styles/card.scss';
import Checkbox from './Checkbox';

export default {
  props: ['cityData'],
  components: {
    Checkbox
  }
};
</script>