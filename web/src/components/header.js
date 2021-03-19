import React from 'react';
import { Link, graphql, useStaticQuery } from "gatsby"

import HamburgerIcon from './hamburger'

import {header, headerBackground, headerWrap, title, navbarToggle, subnav, topnav, navItem, icon, activeNavItem} from './header.module.scss'


const Header = () => {
    const data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
          title
        }
      }
    }
    `)


    const controlHamburger = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
    return (
        <header className={header}>
            <div className={headerBackground}>
            <div className={headerWrap}>
                <h1>
                    <Link className={title} to='/'>

                        {data.site.siteMetadata.title}
                    </Link>
                </h1>
            </div>
            </div>
            <nav>
                <span className={navbarToggle} id="js-navbar-toggle">
                    <i className="las la-bars"></i>
                    {/* <HamburgerIcon /> */}
                </span>

                
                <div className={subnav}>
                    <ul className={topnav} id='myTopnav'>
                        <li>
                            <Link className={navItem} activeClassName={activeNavItem} to='/'>Home</Link>
                        </li>
                        <li>
                            <Link className={navItem} activeClassName={activeNavItem} to='/recipes'>Recipes</Link>
                        </li>
                        <li>
                            <Link className={navItem} activeClassName={activeNavItem} to='/about'>About</Link>
                        </li>
                        <li className={icon} onClick={()=>controlHamburger}>
                            <HamburgerIcon />
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header