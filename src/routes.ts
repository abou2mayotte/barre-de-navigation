import type { RouteRecordRaw }  from 'vue-router';
import Sci from './Sci.vue';
import Sch from './Sch.vue';

export const routes: RouteRecordRaw[] = [
    {
        path:'/',
        component: Sci
    },
    {
        path:'/sci',
        component: Sci
    },
    {
        path:'/sch',
        component: Sch
    },
];