<template>
<div>
  <button> 发送</button>
  
  <ul>
    <li v-for="(v,i) in abc" :key="i" >{{v.name}}</li>
  </ul>
</div>
  
</template>

<script>

export default {
  name:'',
  data(){
    return{
      title:'testA',
      flag:false,
      arr:[],
      obj:{id:1,name:2}
    }
  },
  watch:{  //异步请求,数据不能实时渲染
    arr:function(newValue,oldvalue){
      this.arr = newValue;
    }
  },
  mounted(){
    this.send();
  },
  computed:{
    abc:function(){
      if(this.flag){
        return this.arr
      }
      
    }
  },
  methods:{
    send(){
      var self = this;
      // this.$http({
      //   method:'get',
      //   url:'/get_table'
      // }).then(function(res){
      //   console.log(res)
      // }).catch(function(){
      // });
      ///get_table?id=1&name=2
      this.$http.get('/get_table',{params:this.obj}
      ).then(res=>{
        console.log(res)
        this.arr = res.data.result;
        this.flag = true;
      }).catch(function(){

      })

      // this.$http.post('/get_table',this.obj
      // ).then(function(res){
      //   console.log(res)
      // }).catch(function(){

      // })

      //  this.$http({
      //   method:'post',
      //   url:'/get_table',
      //   data:this.obj
      // }).then(function(res){
      //   console.log(res)
      // }).catch(function(){
      // });
    }
  }

}
</script>

<style scoped>

</style>