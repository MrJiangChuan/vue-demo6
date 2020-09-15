<template>
  <div class="about">
    <h1>1、state使用【两种方式】</h1>
    <h2>store.count={{$store.state.count}}</h2>
    <h2>mapstate.count={{count}}</h2>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'About',
    data() {
      return {

      }
    },
    computed: {
      ...mapState(['count'])
    }
  }
</script>

<style scoped>

</style>
