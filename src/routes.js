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
        path: '/:lang',
        component: Home,
        exact: true
    },
    {  
        path: '/:lang/about',
        component: About,
        exact: false
    },
    {
        path: '/:lang/terms',
        component: Terms,
        exact: false
    },
    {
        path: '/:lang/shopping-cart',
        component: ShoppingCart,
        exact: false
    },
    {
        path: '/:lang/portfolio',
        component: Portfolio,
        exact: true
    },
    {
        path: '/:lang/portfolio/:post',
        component: PortfolioPost,
        exact: true
    },
    {
        path: '/:lang/filter/:url',
        component: Category,
        exact: true
    },
    {
        path: '/:lang/filter/:url/:category',
        component: Category,
        exact: true
    },
    {
        path: '/:lang/filter/goods/:category/:type',
        component: Category,
        exact: true
    },
    {
        path: '/:lang/filter/goods/:category/:type/:id',
        component: ProductPage,
        exact: true
    },
    {
        path: '/:lang/filter/services/:category/:id',
        component: ProductPage,
        exact: true
    },
    {
        path: '/:lang/festivals',
        component: Festivals,
        exact: true
    },
    {
        path: '/:lang/festivals/:fest',
        component: FestivalPage,
        exact: true
    },
    {
        path: '/:lang/charity-events',
        component: CharityEvents,
        exact: true
    },
    {
        path: '/:lang/charity-events/:event',
        component: CharEvent,
        exact: false
    },
    {
        path: '/:lang/contact-us',
        component: ContactUs,
        exact: false
    }
]