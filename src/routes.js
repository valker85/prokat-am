import Home from './components/home'
import About from './components/about'
import Basket from './components/basket'
import Category from './components/category'
import ConcretCategory from './components/concretCategory'



export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/about',
        component: About,
        exact: false
    },
    {
        path: '/basket',
        component: Basket,
        exact: false
    },
    {
        path: '/category',
        component: Category,
        exact: true
    },
    {
        path: '/category/:url',
        component: ConcretCategory,
        exact: true
    }
]