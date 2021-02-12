import Home from './components/home'
import About from './components/about'
import Basket from './components/basket'
import Category from './components/category'
import ProductPage from './components/productPage'



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
    // {
    //     path: '/category',
    //     component: Category,
    //     exact: true
    // },
    {
        path: '/:url',
        component: Category,
        exact: true
    },
    {
        path: '/:url/:category',
        component: Category,
        exact: true
    },
    {
        path: '/:url/:category/:type',
        component: Category,
        exact: true
    },
    {
        path: '/:url/:category/:type/:id',
        component: ProductPage,
        exact: true
    }
]