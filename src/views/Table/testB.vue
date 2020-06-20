<template>
<div>
  testB组件：
  <input type="text" v-model="title"/>
  {{$route.query.id}}
</div>
  
</template>

<script>

export default {
  name:'',
  data(){
    return{
      title:'testB111234'
    }
  },
  methods:{

  }
}
</script>

<style scoped>

</style>