<template>
<div>
  <router-link :to="url=='/table'?url:url+'?id=1'">
    <img src="@/assets/img/2.jpg" />
  </router-link>
  <router-link :to="url=='/table'?url:url+'?id=2'">>
    <img src="@/assets/img/1.jpg" />
  </router-link>

  <!-- <img src="@/assets/img/1.jpg" @click="skip()"/> -->
  
    <div>
			<!-- 二级路由出口
			路由匹配到的组件渲染在这里 -->
			<router-view />
		</div>
</div>
  
</template>

<script>
import testA from './testA.vue'
import testB from './testB.vue'

export default {
  name:'',
  data(){
    return{
      url:''
    }
  },
  mounted(){
    this.url = this.$route.path;   //获取当前路由中的path
    //console.log(this.url);
  },
  //监听路由的变化
  watch:{
    $route(to,from){   //to  ==== this.$route  路由对象
      this.url = to.path;
     // console.log(this.url);
    }
  },
  methods:{
    skip(){
      this.$router.push('/home');
      // 字符串
      //router.push('/home')
      // 对象
      //router.push({path:'/home'})
      // 路由通过名称
      //router.push({name: 'homename'})
      //直接路由带查询参数query，地址栏变成 /home?id=10
      //router.push({path: 'home', query: {id: 10 }})
      // 命名路由带查询参数query，地址栏变成/home?id=10
      //router.push({name: 'homename', query: {id: 10 }})
      //直接路由带路由参数params，params 不生效，如果提供了 path，params 会被忽略
      //router.push({path:'homename', params:{ id: 10 }})
      // 命名路由带路由参数params，地址栏是/home/10
      //router.push({name:'homename', params:{ id: 10 }})
    }
  },
  components:{
    testA,
    testB
  }
}
</script>

<style scoped>

</style>