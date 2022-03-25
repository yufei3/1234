import React from "react";
import {NavLink, Link} from "react-router-dom";

class Header extends React.Component{

    render() {
        return(
            <header class="page-header">
                <img src="https://s2.loli.net/2022/01/23/tD2wWOKp8SjPvdU.jpg" alt="VIStA Logo" />
                <nav class="menu">
                    <ul>
                        <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                        <li><NavLink to="/members" activeClassName="active">Members</NavLink></li>
                        <li><NavLink to="/research" activeClassName="active">Research</NavLink></li>
                        <li><NavLink to="/news" activeClassName="active">News</NavLink></li>
                        <li><NavLink to="/resources" activeClassName="active">Resources</NavLink></li>
                    </ul> 
                </nav>
                {/* <?php include "inc/nav.php"; ?> */}
		    </header>
        );
    }


}

export default Header;