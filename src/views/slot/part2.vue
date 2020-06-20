<template>
<div>
  testB组件：
  <!-- 匿名插槽 -->
  <slot></slot>
  <!-- 具名插槽 -->
  <slot name="s2"></slot>
  <!-- 作用域插槽 -->
  <slot :arr="arr">

  </slot>

</div>
  
</template>

<script>

export default {
  name:'',
  data(){
    return{
      title:'testB',
      arr:[1,2,2,2,2,2235]
    }
  },
  methods:{

  }
}
</script>

<style scoped>

</style>