// 引入需要的模块
import { createRouter, createWebHashHistory} from 'vue-router'
import index from '../components/HelloWorld.vue'

// 下面使用了es6的对象增强写法，命名必须是routes
const routes = [
  {
    //默认展示，这是主页面路由必须加斜杠 /
    path: '/',
    component: index,
  },
  // {
  //   path: '/hello',
  //   //路由懒加载
  //   component: () => import('../components/HelloWorld.vue'),
  // },
];
 
// 创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
 
// 导出路由
export default router;