<template>
<div>
  testA组件：{{title}}
  <h1>{{$route.params.id}}</h1>
</div>
  
</template>

<script>

export default {
  name:'',
  data(){
    return{
      title:'testA'
    }
  },
  props:['id'],
  mounted(){
    this.title = this.id
  }
}
</script>

<style scoped>

</style>