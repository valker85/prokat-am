import Home from './components/home'
import About from './components/about'
import Category from './components/category'
import ProductPage from './components/productPage'
import Terms from './components/terms'
import ShoppingCart from './components/shopping-cart'


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
        path: '/terms',
        component: Terms,
        exact: false
    },
    {
        path: '/shopping-cart',
        component: ShoppingCart,
        exact: false
    },
    {
        path: '/filter/:url',
        component: Category,
        exact: true
    },
    {
        path: '/filter/:url/:category',
        component: Category,
        exact: true
    },
    {
        path: '/filter/:url/:category/:type',
        component: Category,
        exact: true
    },
    {
        path: '/filter/:url/:category/:type/:id',
        component: ProductPage,
        exact: true
    },
    {
        path: '/filter/services/:category/:id',
        component: ProductPage,
        exact: true
    }
]