import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './pages';
import Error404 from './pages/404';
import About from './pages/about'
import BlogDestails from './pages/blog-details'
import Blog from './pages/blog-grid'
import Contact from './pages/contact'
import BackToTop from './layout/backToTop'
import ScrollToTop from './routertotop'
import ServicesDetails from './pages/services-details';
import Services2 from './pages/services-2';
import BankAccount from './pages/bank-account';
import License from './pages/License-reneval';
import Visa from './pages/Visas';
import SinglePromotion from './pages/SinglePromotion';
import Promotions from './pages/promotions';
import Offers from './pages/Offers';
import SingleOffer from './pages/SingleOffer';
import Services from './pages/Services';
import ItService from './pages/ItService';
import BusinessCenter from './pages/BusinessCenter';
import Marketing from './pages/Marketing';
import Tax from './pages/Tax';
import VirtualOffice from './pages/VirtualOffice';

class Router extends Component {
    render() {
        return (
            <BrowserRouter basename={'/'}>
                <div className="page-wrapper">
                <ScrollToTop />
                    <Switch>
                        <Route path='/' exact component={Index} />
                        <Route path='/about' component={About}  exact={true}/>
                        <Route path='/services' component={Services}/>
                        <Route path='/services2' component={Services2}/>
                     
                        <Route path='/Offers' component={Offers}/>
                        <Route path='/Promotions' component={Promotions}/>
                        <Route path='/singleoffer/:slug' component={SingleOffer}/>
                        <Route path='/SinglePromotion/:slug' component={SinglePromotion}/>
                        <Route path='/bank-account' component={BankAccount}/>
                        <Route path='/license' component={License}/>
                        <Route path='/visa' component={Visa}/>
                        <Route path='/it-service' component={ItService}/>
                        <Route path='/business-center' component={BusinessCenter}/>
                        <Route path='/marketing' component={Marketing}/>
                        <Route path='/tax' component={Tax}/>
                        <Route path='/virtual-office' component={VirtualOffice}/>
                        <Route path='/services-details/:slug' component={ServicesDetails}/>
                        <Route path='/blog-details/:slug' component={BlogDestails} />
                        <Route path='/blog' component={Blog} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/*' component={Error404} />
                    </Switch>

                    <BackToTop />

                </div>
            </BrowserRouter>

        )
    }
}

export default Router;