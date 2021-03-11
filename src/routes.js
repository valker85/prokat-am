import Home from './components/home'
import About from './components/about'
import Category from './components/category'
import ProductPage from './components/productPage'
import Terms from './components/terms'
import ShoppingCart from './components/shopping-cart'
import Portfolio from './components/portfolio'
import PortfolioPost from './components/portfolio-post'
import Festivals from './components/festivals'
import FestivalPage from './components/festival-page'
import CharityEvents from './components/charity-events'
import CharEvent from './components/char-event'
import ContactUs from './components/contactUs'


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
        path: '/portfolio',
        component: Portfolio,
        exact: true
    },
    {
        path: '/portfolio/:post',
        component: PortfolioPost,
        exact: true
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
        path: '/filter/goods/:category/:type',
        component: Category,
        exact: true
    },
    {
        path: '/filter/goods/:category/:type/:id',
        component: ProductPage,
        exact: true
    },
    {
        path: '/filter/services/:category/:id',
        component: ProductPage,
        exact: true
    },
    {
        path: '/festivals',
        component: Festivals,
        exact: true
    },
    {
        path: '/festivals/:fest',
        component: FestivalPage,
        exact: true
    },
    {
        path: '/charity-events',
        component: CharityEvents,
        exact: true
    },
    {
        path: '/charity-events/:event',
        component: CharEvent,
        exact: false
    },
    {
        path: '/contact-us',
        component: ContactUs,
        exact: false
    }
]