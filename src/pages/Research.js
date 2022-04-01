import React from "react";
import {Helmet} from "react-helmet";
import Config from "../Config.json";

const TITLE = "Research | " + Config.SITE_TITLE;
const DESC = "This is the research page of the VIStA Research Group.";
const CANONICAL = Config.SITE_DOMAIN + "/research";


class Research extends React.Component{
    
    render() {
        return (<main>

            <Helmet>
                <title>{TITLE}</title>
                <link rel="canonical" href={CANONICAL} />
                <meta name="description" content={DESC}/>
                <meta name="theme-color" content={Config.THEME_COLOR} />
            </Helmet>

            <h3>Research</h3>
        </main>);
    }
}

export default Research;