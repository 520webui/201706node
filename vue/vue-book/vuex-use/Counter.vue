<template>
    <div>
      <button @click="max">+</button>
      <span>
        {{number}}
      </span>
      <button @click="min">-</button>
    </div>
</template>
<script>
    export default {
        data(){
            return {}
        },
        created(){
        },
        methods: {
            // payload 载荷
            max(){
              this.$store.commit('add',2);
            },
            min(){
              this.$store.commit('minus',1)
            }
        },
        computed: {
            number(){
                return this.$store.state.number
            }
        },
        mounted(){
        }
    }
</script>
<style scoped>
</style>

