<template>
    <div>
        <MHeader title="首页" :back="true"></MHeader>
        <div class="scroll">
          <Swiper :data="sliders"></Swiper>
        </div>
    </div>
</template>
<script>
    import MHeader from '../base/MHeader.vue';
    import Swiper from '../base/Swiper.vue'
    export default {
        data(){
            return {
                sliders:[]
            }
        },
        created(){
        },
        components:{MHeader,Swiper},
        methods: {},
        computed: {},
        mounted(){
        }
    }
</script>
<style scoped>
</style>

