
import React from 'react';
import './Footer.css';



const Footer = (props) => {
    return(
        <React.Fragment>
        <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                            <h4>COMPANY</h4>
                            <ul>
                                <li><a href="#">Who We Are</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Report Fraud</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Investor Relations</a></li>
                            </ul>
                        </div>
    
                        <div className="footer-col">
                            <h4>FOR FOODIES</h4>
                            <ul>
                                <li><a href="#">Code of Conduct</a></li>
                                <li><a href="#">Community</a></li>
                                <li><a href="#">Blogger Help</a></li>
                                <li><a href="#">Mobile Apps</a></li>
                            </ul>
                        </div>
    
                        <div className="footer-col">
                            <h4>FOR RESTAURANTS</h4>
                            <ul>
                                <li><a href="#">Add Restaurant</a></li>
                            </ul>
                            <div className="footer-col1">
                            <h4>FOR ENTERPRISES</h4>
                            <ul>
                            <li><a href="#">Zomato for Work</a></li>
                            </ul>
                        </div>
                        </div>
    
                        <div className="footer-col">
                            <h4>FOR YOU</h4>
                            <ul>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Security</a></li>
                                <li><a href="#">Sitemap</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            </React.Fragment>
        )
    }

    export default Footer;