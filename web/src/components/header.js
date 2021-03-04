import React from 'react';
import { Link, graphql, useStaticQuery } from "gatsby"

import headerStyles from './header.module.scss'


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
    return(
        <header className={headerStyles.header}>
            <div className={headerStyles.headerwrap}>
            <h1>
            <Link className={headerStyles.title} to='/'>
                
        {data.site.siteMetadata.title}
        </Link>
            </h1>
            </div>
            <nav>
                <div className={headerStyles.subnav}>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/recipes'>Recipes</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/about'>About</Link>
                    </li>
                </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header