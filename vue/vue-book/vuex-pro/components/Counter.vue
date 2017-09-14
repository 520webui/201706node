<template>
    <div>
      <button @click="minus">-</button>
      <span>{{n}}</span>
      <button @click="add">+</button>
    </div>
</template>
<script>
  //辅助函数 是vuex里提供的
    import {mapState} from 'vuex';
    import * as Types from '../vuex/mutation-types'
    //mapState可以传递一个数组，数组中的内容名字要和state中相同，执行后返回一个对象，因为是属性需要放在computed中，并且将内容展开,传入对象可以改名
    export default {
        methods: {
          add(){
             this.$store.commit(Types.INCREMENT)
          },
          minus(){
              this.$store.commit(Types.DECREMENT)
          }
        },
        computed: {
          ...mapState({n:'number'})
        },
    }
</script>
<style scoped>
</style>

