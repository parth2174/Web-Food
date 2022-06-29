import React from 'react';
import Search from './Search';
import QuickSearch from './QuickSearch';
//import Header from '../../header'
//import Footer from '../../Footer'

const Home = (props) => {
    return(
        <div>
            <Search/>
            <QuickSearch/>
        </div>
    )
}

export default Home;