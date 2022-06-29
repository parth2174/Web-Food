import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Footer from './Footer';
import Home from './component/Home/Home';
import Listing from './component/listing/listing';
import Details from './component/Details/restdetails';
import PlaceOrder from './component/Booking/placeOrder';
import ViewOrder from './component/Booking/viewOrder';
import Login from './component/login/loginComponent';
import Register from './component/login/registerComponent'
import Header from './header';


const Routing = () => {
    return(
        <BrowserRouter>
        <Header/>
                <Route exact path="/" component={Home}/>
                <Route path="/listing/:id" component={Listing}/>
                <Route path="/details" component={Details}/>
                <Route path="/placeOrder/:restName" component={PlaceOrder}/>
                <Route path="/viewBooking" component={ViewOrder}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing
