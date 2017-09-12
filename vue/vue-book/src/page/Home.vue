<template>
    <div>
        <MHeader title="首页"></MHeader>
        <div class="scroll">
          <Swiper :data="sliders"></Swiper>
        </div>
    </div>
</template>
<script>
    import MHeader from '../base/MHeader.vue';
    import Swiper from '../base/Swiper.vue';
    import axios from 'axios';
    export default {
        data(){
            return {
                sliders:[]
            }
        },
        created(){
            this.getSliders();
        },
        components:{MHeader,Swiper},
        methods: {
            getSliders(){ //跨域 cors jsonp fetch 支持跨域
              axios.get('/api/sliders').then(res=>{
                  this.sliders = res.data;
              });
            }
        },
        computed: {},
        mounted(){
        }
    }
</script>
<style scoped>
</style>

