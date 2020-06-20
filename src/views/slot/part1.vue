<template>
<div>
  testA组件：{{title}}
  <part2>
    <!-- 匿名插槽 -->
    <ul slot>
      <li>12313</li>
      <li>12313</li>
    </ul>
    <!-- 具名插槽 -->
    <ul slot='s1'>
      <li>s1</li>
      <li>s1</li>
    </ul>
    <ul slot='s2'>
      <li v-for="(v,i) in arr" :key="i">{{v}}</li>
    </ul>
    <!-- 作用域插槽 -->
    <!-- 相当于父组件提供了一套模板，数据是子组件的 -->
    <!-- obj ==== { "title": "testB" } -->
     <!-- <div slot-scope='obj'>  
      {{obj.title}}
    </div> -->
    <ul slot-scope='obj'>  
      <li v-for="(v,i) in obj.arr" :key="i">{{v}}</li>
    </ul>
  </part2>
</div>
  
</template>

<script>
import part2 from './part2.vue'

export default {
  name:'',
  data(){
    return{
      title:'testA',
      arr:[1,2,4,5,2]
    }
  },
  components:{
    part2
  }
}
</script>

<style scoped>

</style>