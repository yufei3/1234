import React from "react";
import {Helmet} from "react-helmet";
import Config from "../Config.json";

const TITLE = "Members | " + Config.SITE_TITLE;
const DESC = "This is the members page of the VIStA Research Group.";
const CANONICAL = Config.SITE_DOMAIN + "/members";

class Members extends React.Component{
    
    render() {
        return (<main>
            
             <Helmet>
                <title>{TITLE}</title>
                <link rel="canonical" href={CANONICAL} />
                <meta name="description" content={DESC}/>
                <meta name="theme-color" content={Config.THEME_COLOR} />
            </Helmet>

            <h3>Members</h3>
        </main>);
    }
}

export default Members;