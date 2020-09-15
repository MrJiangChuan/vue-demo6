<template>
  <div class="about">
    <h1>1、state使用【两种方式】</h1>
    <h2>store.count={{$store.state.count}}</h2>
    <h2>mapstate.count={{count}}</h2>
    <h1>2、mutations使用【两种方式】</h1>
    <input type="button" value="mutations使用[不带参]" @click="handler1"/>
    <input type="button" value="mutations使用[带参]" @click="handler2"/><br>
    <input type="button" value="mapMutations使用[不带参]" @click="add"/>
    <input type="button" value="mapMutations使用[带参]" @click="addN(5)"/>
  </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  export default {
    name: 'About',
    data() {
      return {

      }
    },
    computed: {
      ...mapState(['count'])
    },
    methods: {
      handler1() {
          this.$store.commit('add')
      },
      handler2() {
        this.$store.commit('addN',10)
      },
      ...mapMutations(['add','addN'])
    }
  }
</script>

<style scoped>

</style>
