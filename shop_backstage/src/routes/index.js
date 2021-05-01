//全局路由文件

import Login from "../pages/login";

//把路由分为2类：  404页面不存在为一类，需要权限验证为一类
export const mainRoutes = {
    path: '/login',
    component: Login 
}

