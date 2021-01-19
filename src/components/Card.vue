<template>
  <div class='card'>
    <Checkbox v-bind:checkFor='index'/>
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
      <div class='comment' v-on:click="addMessage()" :class="cityData.comment !== '' ? 'active' : ''">
      </div>
      <div class='like' v-on:click="toggleLike()" :class="cityData.liked ? 'active' : ''">
      </div>
    </div>
  </div>
</template>

<script>
import './styles/card.scss';
import Checkbox from './Checkbox';

export default {
  props: ['cityData', 'index'],
  components: {
    Checkbox
  },
  methods: {
    toggleLike: function(){
      this.$store.commit('toggleCityLike', {
        id: this.cityData.id
      })
    },
    addMessage: function(){
      this.$store.commit('addCityComment', {
        id: this.cityData.id
      })
    }
  }
};
</script>