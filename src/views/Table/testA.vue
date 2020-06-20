<template>
<div>
  {{$route.query.id}}
  <table class="table"> 
    <thead>
      <tr >
        <th>用户姓名</th>
        <th>用户性别</th>
        <th>所在城市</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(v,i) in lists" :key="i">
          <td>{{v.name}}</td>
          <td>{{v.sex}}</td>
          <td>{{v.city}}</td>
          <td><button disabled="true">删除</button></td>
      </tr>
      
    </tbody>
  </table>
  
</div>
  
</template>

<script>

export default {
  name:'',
  data(){
    return{
      lists:[
          {name:'张三1',sex:'男',city:'北京1',check:true},
          {name:'张三2',sex:'女',city:'北京2',check:false},
          {name:'张三3',sex:'男',city:'北京3',check:false}
      ]
    }
  },
  methods:{
     
  }
}
</script>

<style scoped>
ul {
    list-style-type:none;
}
.table{
    width: 70%;
    border-collapse: collapse;
    margin: 0 auto;
    text-align: center;
}
.table td,
.table th{
    border: 1px solid #ddd;
    padding: 10px;
}
.table thead tr {
	background:#1f76b3;
	color:#fff;
} 
</style>