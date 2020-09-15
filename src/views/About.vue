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
    <h1>3、actions使用【两种方式】</h1>
    <input type="button" value="actions使用[不带参]" @click="handler3"/>
    <input type="button" value="actions使用[带参]" @click="handler4"/><br>
    <input type="button" value="mapActions使用[不带参]" @click="asyncAdd"/>
    <input type="button" value="mapActions使用[带参]" @click="asynAddN(40)"/><br>
    <h1>4、getters使用【两种方式】</h1>
    <h3>store.count={{$store.getters.formatCount}}</h3>
    <h3>{{formatCount}}</h3>
  </div>
</template>

<script>
  import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
  export default {
    name: 'About',
    data() {
      return {

      }
    },
    computed: {
      ...mapState(['count']),
      ...mapGetters(['formatCount'])
    },
    methods: {
      handler1() {
          this.$store.commit('add')
      },
      handler2() {
        this.$store.commit('addN',10)
      },
      ...mapMutations(['add','addN']),
      handler3() {
        this.$store.dispatch('asyncAdd')
      },
      handler4() {
        this.$store.dispatch('asynAddN',30)
      },
      ...mapActions(['asyncAdd','asynAddN'])
    }
  }
</script>

<style scoped>

</style>
