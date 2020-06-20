<template>
  <div class="tree">
      <ul>
        <li class="p_item" >
          <router-link :to="{name: 'part1', params: { id: n }}"
              class="p_title">
            <i class="iconfont icon-shenghuo"></i>模块一
          </router-link>
        </li>
        <li class="p_item" >
          <router-link to='/part2?id=999'
              class="p_title">
            <i class="iconfont icon-shenghuo"></i>模块二
          </router-link>
        </li>

        <li class="p_item" v-for="(v,i) in items" :key="i">
          <router-link :to="v.url" 
              class="p_title"
              @click="n=i">
            <i class="iconfont" :class="v.icon"></i>{{v.name}}
          </router-link>
          <ul class="c_item" >
            <li v-for="(sub,j) in v.child" :key="j">
              <router-link :to="sub.url">{{sub.name}}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name:'',
  data(){
    return{
      n:999,
      items:[
          {
              name:'首页',
              icon:'icon-shenghuo',
              url:'/home',
              child:[]
          },
          {
              name:'列表页',
              icon:'icon-biaoqingleiben',
              url:'/list',
              child:[
                {name:'列表详情页',url:'/list/info'},
              ]
          },
          {
              name:'表格',
              icon:'icon-biaoqingleiben',
              url:'/table',
              child:[
                {name:'表格A',url:'/table/testa'},
                {name:'表格B',url:'/table/testb'}
              ]
          },
          {
              name:'插槽',
              icon:'icon-shenghuo',
              url:'/slot',
              child:[]
          },
           {
              name:'axios',
              icon:'icon-shenghuo',
              url:'/axios',
              child:[]
          },
      ]
    }
  }
}
</script>

<style>

</style>
