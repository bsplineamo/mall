import VueRouter from "vue-router"
import HomeView from "../components/home.vue"
import LogIn from "../components/login.vue"
import SituationMonitoring from "../components/situationMonitoring"
import DataQuery from "../components/dataQuery"
import ExclusiveData from "../components/exclusiveData"

const router = new VueRouter({
    routes:[
        {
            path: '/',
            redirect:'/LogIn',//重定义首页项,
        },
        {
            name:"LogIn",
            path: '/LogIn',
            component:LogIn
        },
        {
            name:"HomeView",
            path:'/home',
            component:HomeView,
            children:[
                {
                    name:"SituationMonitoring",
                    path:'/situationmonitoring',
                    component:SituationMonitoring
                },
                {
                    name:"DataQuery",
                    path:'/dataquery',
                    component:DataQuery
                },
                {
                    name:"ExclusiveData",
                    path:'/exclusivedata',
                    component:ExclusiveData
                },
            ]
        },
        
        
    ] 
})
export default router