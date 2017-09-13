<template>
    <div class="list">
        <MHeader title="列表页"></MHeader>
        <div class="scroll">
          <Loading v-if="isLoading"></Loading>
          <ul>
            <li v-for="book in books">
              <img v-lazy="book.bookCover" alt="">
              <div>
                <h4>{{book.bookName}}</h4>
                <p>{{book.bookInfo}}</p>
                <strong>{{book.bookPrice | currency}}</strong>
              </div>
            </li>
          </ul>
        </div>
    </div>
</template>
<script>
    import MHeader from '../base/MHeader.vue';
    import Loading from '../base/Loading.vue';
    import axios from 'axios';
    export default {
        data(){
            return {
                books:[],
                isLoading:true
            }
        },
        created(){
            this.getList();
        },
        components:{MHeader,Loading},
        methods: {
            getList(){
              axios.get('/api/book').then(res=>{
                  this.books = res.data; this.isLoading = false;
              });
            }
        },
        computed: {},
        mounted(){
        }
    }
</script>
<style scoped lang="stylus">
  .list
    ul
      padding 1.5%
      li
        display flex
        margin 2% 0
        img
          width 150px
          height 150px
        div
          font-size 18px;
          justify-content center
          display flex
          flex-direction column
</style>

